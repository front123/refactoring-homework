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