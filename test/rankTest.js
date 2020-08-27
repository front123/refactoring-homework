const rankTest = require('ava');
const {rating} = require('../src/rank')

rankTest('should return B when rating given voyage and history', t => {
  let voyage = {
    zone: 'west-indies',
    length: 10,
  };
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  let myRating = rating(voyage, history);
  t.is(myRating, 'B');
});