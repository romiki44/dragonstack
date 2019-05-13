const uuid=require('uuid/v4');
const {hash}=require('./helper');

const SEPARATOR='|';

class Session {
  constructor({username}) {
    this.username=username;
    this.id=uuid();
  }

  toString() {
    const {username, id}=this;
    return Session.sessionString({username, id});
  }

  static parse(sessionString) {
    const sessionData=sessionString.split(SEPARATOR);

    return {
      username: sessionData[0],
      id: sessionData[1],
      sessionHash: sessionData[2]
    };
  }

  static verify(sessionString) {
    const {username, id, sessionHash}=Session.parse(sessionString);

    const accountData=Session.accountData({username, id});

    return hash(accountData)===sessionHash;
  }

  static accountData({username, id}) {
    return `${username}${SEPARATOR}${id}`;
  }

  static sessionString({username, id}) {
    const accountData=Session.accountData({username, id});

    return `${accountData}${SEPARATOR}${hash(accountData)}`;
  }
}

/*
const foo=new Session({username: 'foo'});
console.log('foo:', foo);
const fooString=foo.toString();
console.log('fooString:', fooString);
console.log('Session.parse(fooString):',Session.parse(fooString));
console.log('Session.verify(fooString):',Session.verify(fooString));
const fakeadmin=fooString.replace('foo', 'admin');
console.log('Fake admin:', fakeadmin);
console.log('Verify fake admnin:',Session.verify(fakeadmin));
*/

module.exports=Session;