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

rankTest('should return A \
when voyageRisk \
given voyage length is 10 and zone is china \
and history length is 18 and history has china zone', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 10,
  };

  const history = [
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
    {
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies2',
      profit: 15,
    },{
      zone: 'china3',
      profit: -2,
    },
    {
      zone: 'west-africa4',
      profit: 7,
    },
    {
      zone: 'east-indies5',
      profit: 5,
    },{
      zone: 'west-indies6',
      profit: 15,
    },{
      zone: 'china7',
      profit: -2,
    },
    {
      zone: 'west-africa8',
      profit: 7,
    },
    {
      zone: 'east-indies9',
      profit: 5,
    },{
      zone: 'west-indies10',
      profit: 15,
    },{
      zone: 'china11',
      profit: -2,
    },
    {
      zone: 'west-africa12',
      profit: 7,
    },{
      zone: 'china13',
      profit: -2,
    },
    {
      zone: 'west-africa14',
      profit: 7,
    },
  ];
  // vpf=7 vr=9 chr=3
  //when
  let myRating = rating(voyage, history);

  t.is(myRating, 'A');
});

rankTest('should return B \
when voyageRisk \
given voyage length is 10 and zone is east-indies \
and history length is 14', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 10,
  };

  const history = [
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
    {
      zone: 'east-indies1',
      profit: 5,
    },{
      zone: 'west-indies2',
      profit: 15,
    },{
      zone: 'china3',
      profit: -2,
    },
    {
      zone: 'west-africa4',
      profit: 7,
    },
    {
      zone: 'east-indies5',
      profit: 5,
    },{
      zone: 'west-indies6',
      profit: 15,
    },{
      zone: 'china7',
      profit: -2,
    },
    {
      zone: 'west-africa8',
      profit: 7,
    },{
      zone: 'china9',
      profit: -2,
    },
    {
      zone: 'west-africa10',
      profit: 7,
    }
  ];
  // vpf=7 vr=9 chr=3
  //when
  let myRating = rating(voyage, history);

  t.is(myRating, 'B');
});