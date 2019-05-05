const GenerationEngine=require('./engine');
const moment=require('moment');

const engine=new GenerationEngine();

//console.log(moment().format());
//return;

engine.start();

setTimeout(()=>{
  engine.stop();
}, 20000);