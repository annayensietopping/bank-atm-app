$(function () {

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

// testing
console.log(checkingAccount)
checkingAccount.deposit(100)
console.log(checkingAccount)
checkingAccount.withdrawl(75)
checkingAccount.withdrawl(50)
console.log(checkingAccount)

console.log(checkingAccount.showBalance())
console.log(checkingAccount)
})
