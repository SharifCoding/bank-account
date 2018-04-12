
// CONSTRUCTOR FUNCTION
function BankAccount(balance) {
  this.balance = balance;
}

// OBJECTS PROTOTYPE
BankAccount.prototype.deposit = function deposit(depositAmount) {
  this.balance += depositAmount;
  if (depositAmount <= 0) {
    return ('You have insufficient funds!');
  } return (`Your balance is now ${this.balance}`);
};

BankAccount.prototype.withdraw = function withdraw(withdrawAmount) {
  this.balance -= withdrawAmount;
  if (withdrawAmount === 0) {
    return ('You have insufficient funds!');
  } return (`Your balance is now ${this.balance}`);
};

BankAccount.prototype.checkBalance = function checkBalance() {
  return (`Your current balance is £${this.balance}`);
};

BankAccount.prototype.viewStatement = function viewStatement() {
};

// EXPORTS FUNCTION
module.exports = {
  BankAccount,
};
