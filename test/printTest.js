const printTest = require('ava')
const { printOwing } = require('../src/print')

printTest('should return correct owes when printOwing given a invoice', t => {
    let invoice = {
        customer: 'front',
        borderSpacing: [{ amount: 1 }, { amount: 2 }]
    }

    let result = printOwing(invoice);
    t.is(result, `***********************
**** Customer Owes ****
***********************
name: front
amount: 3
amount: 9/27/2020`);
})