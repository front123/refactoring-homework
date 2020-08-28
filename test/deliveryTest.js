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