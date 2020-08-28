const deliveryTest = require('ava')
const { deliveryDate } = require('../src/delivery')

deliveryTest('should return 4 when delivery date given anOrder with state is ME', t => {
  let anOrder = {
    deliveryState: 'ME',
    placedOn: {
      plusDays: function(time){
        return time;
      }
    }
  }

  let result = deliveryDate(anOrder, true);

  t.is(result, 4);
})

deliveryTest('should return 2 when delivery date given anOrder with state is MA', t => {
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: function(time){
        return time;
      }
    }
  }

  let result = deliveryDate(anOrder, true);

  t.is(result, 2);
})

deliveryTest('should return 3 when delivery date given anOrder with state is NY', t => {
  let anOrder = {
    deliveryState: 'NY',
    placedOn: {
      plusDays: function(time){
        return time;
      }
    }
  }

  let result = deliveryDate(anOrder, true);

  t.is(result, 3);
})

deliveryTest('should return 4 when delivery date given anOrder with state is MA and isPush is false', t => {
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays: function(time){
        return time;
      }
    }
  }

  let result = deliveryDate(anOrder, false);

  t.is(result, 4);
})

deliveryTest('should return 6 when delivery date given anOrder with state is CN and isPush is false', t => {
  let anOrder = {
    deliveryState: 'CN',
    placedOn: {
      plusDays: function(time){
        return time;
      }
    }
  }

  let result = deliveryDate(anOrder, false);

  t.is(result, 6);
})

deliveryTest('should return 5 when delivery date given anOrder with state is NH and isPush is false', t => {
  let anOrder = {
    deliveryState: 'NH',
    placedOn: {
      plusDays: function(time){
        return time;
      }
    }
  }

  let result = deliveryDate(anOrder, false);

  t.is(result, 5);
})