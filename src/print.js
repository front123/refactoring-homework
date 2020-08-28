function calculateOutstanding(borderSpacing) {
  let totalAmount = 0;
  for (const o of borderSpacing) {
    totalAmount += o.amount;
  }
  return totalAmount;
}

function getDueDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function generateDetail(invoice, outstanding) {
  return `***********************\n**** Customer Owes ****\n***********************\n` +
    `name: ${invoice.customer}\namount: ${outstanding}\namount: ${invoice.dueDate.toLocaleDateString()}`;
}

function printOwing(invoice) {
  let outstanding = calculateOutstanding(invoice.borderSpacing);
  invoice.dueDate = getDueDate();
  const detail = generateDetail(invoice, outstanding);
  if (require.main === module) {
    console.log(detail);
  } else {
    return detail;
  }
}

module.exports = {
  printOwing
}