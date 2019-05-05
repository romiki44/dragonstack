const moment=require('moment');
const TRAITS = require('./traits.json');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get birthdate() {
    //return moment().format();
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(trait => {
      const traitType = trait.type;
      const traitValues = trait.values;

      const traitValue = traitValues[
        Math.floor(Math.random() * traitValues.length)
      ];

      traits.push({traitType, traitValue});
    });

    return traits;
  }
};

class Dragon {
  constructor({ birthdate, nickname, traits } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;