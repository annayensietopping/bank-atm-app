$(function () {


$('#transaction-form').submit((event) => {
  event.preventDefault()

  const amount = parseFloat($('#transaction-amount').val())
  const transactionType = $('#transaction-type').val()

console.log(amount)
console.log(transactionType)

processTransaction(transactionType, amount)
clearField()
})


function processTransaction(transactionType, amount) {
  if (transactionType === 'deposit') {
    checkingAccount.deposit(amount)
  } else {
    checkingAccount.withdrawl(amount)
  }
updateUi()
displayTransactions()
  console.log(checkingAccount.transactionHistory)
}

function displayTransactions() {
  const t = checkingAccount.transactionHistory
  const transactionsHtml = t.map((transaction) => {
    return buildTransactionHtml(
      transaction.transactionType,
      transaction.transactionAmount,
      transaction.newBalance
    )
  })

  console.log(transactionsHtml)
  $('#transaction-list').html(transactionsHtml)
}

function updateUi() {
  // display current bank bank-balance
  // call class and then call function that gets current balance
  $('.bank-balance').text(checkingAccount.showBalance())
}

function clearField() {
  $('#transaction-amount').val(" ")
}

function buildTransactionHtml (txType, txAmount, newBalance) {
   const transactionHtml = (`
     <li>
       <span class='new-transaction-type'>${txType}</span>
       <span>for</span>
       <span class='new-transaction-amount'>$${txAmount}<span> |
       <span>New Balance:</span> <span class='new-bank-balance'>$${newBalance}<span>
     </li>
   `)
   return transactionHtml
 }

// create a new class
class BankAccount {
  constructor(accountType, amount) {
    this._accountType = accountType
    this._amount = 0
    this._transactionHistory = []
  }


// add the methods
  withdrawl(withdrawlAmount) {
    // store balance before change
    const oldBalance = this._amount

    this._amount = this._amount - withdrawlAmount

    this._transactionHistory.push({
      oldBalance: oldBalance,
      transactionType: 'withdrawl' ,
      transactionAmount: withdrawlAmount,
      newBalance: this._amount,
    })
  }

  deposit(depositAmount) {
const oldBalance = this._amount

    this._amount = this._amount + depositAmount

    this._transactionHistory.push({
      oldBalance: oldBalance,
      transactionType: 'deposit' ,
      transactionAmount: depositAmount,
      newBalance: this._amount,
    })
  }

  showBalance() {
    return this._amount
  }

  get transactionHistory() {
    return this._transactionHistory
  }
// end methods
}
// end new class

const checkingAccount = new BankAccount('checking')
updateUi()

// testing
// console.log(checkingAccount)
// checkingAccount.deposit(100)
// console.log(checkingAccount)
// checkingAccount.withdrawl(75)
// checkingAccount.withdrawl(50)
// console.log(checkingAccount)
//
// console.log(checkingAccount.showBalance())
// console.log(checkingAccount)
})
