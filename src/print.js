function calculateOutstanding(borderSpacing){
  let totalAmount = 0;
  for (const o of borderSpacing) {
    totalAmount += o.amount;
  }
  return totalAmount;
}
function printOwing(invoice) {
  let outstanding = calculateOutstanding(invoice.borderSpacing);

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  if (require.main === module) {
    console.log(`***********************\n**** Customer Owes ****\n***********************`)
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
  } else {
    return `***********************\n**** Customer Owes ****\n***********************\n` +
      `name: ${invoice.customer}\namount: ${outstanding}`;
  }
}

module.exports = {
  printOwing
}