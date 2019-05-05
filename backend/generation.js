const moment = require('moment');
const Dragon = require('./dragon');
const { REFRESH_RATE, SECOND } = require('./config');

const refreshRate = REFRESH_RATE * SECOND;

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

    const msUntilExpiration = Math.random() < 0.5 ?
      refreshRate - expirationPeriod : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
    //return new Date(moment().add(msUntilExpiration, 'seconds').format());
  }

  newDragon() {
    if(Date.now()>this.expiration) {
    //if (moment.format() > this.expiration) {
      throw new Error(`This genration expired on ${this.expiration}`);
    }

    return new Dragon();
  }
}

module.exports = Generation;