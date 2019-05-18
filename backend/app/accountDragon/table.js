const pool=require('../../databasePool');

class AccountDragonTable {
  static storeAccountDragon({accountId, dragonId}) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO accountDragon("accountId", "dragonId") VALUES($1, $2)`,
        [accountId, dragonId],
        (error, response) => {
          if(error) return reject(error);

          resolve();
        }
      )
    })
  }

  static getAccountDragons({accountId}) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT "dragonId" FROM accountDragon WHERE "accountId"=$1',
        [accountId],
        (error, response) => {
          if(error) return reject(error);

          resolve({accountDragons: response.rows});
        }
      )
    })
  }
}

/*
AccountDragonTable.storeAccountDragon({
  accountId: 5, dragonId: 116
}).then(()=>console.log('stored account dragon'))
  .catch(error=>console.error('error', error));
*/

/*
AccountDragonTable.getAccountDragons({accountId: 3})
  .then(({accountDragons})=>console.log('accountDragons', accountDragons))
  .catch(error=>console.error('error', error));
*/

module.exports=AccountDragonTable;