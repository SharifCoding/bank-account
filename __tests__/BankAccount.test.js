const { BankAccount } = require('../src/BankAccount');
/* globals describe it expect */

describe('BankAccount', () => {
  // Testing BankAccount constructor returns as an object.
  it('can be instantiated', () => {
    expect(new BankAccount()).toBeInstanceOf(Object);
  });
});

describe('BankAccount.deposit', () => {
  // Testing BankAccount.deposit returns total balance.
  it('deposit money into a current account', () => {
    const myAccount = new BankAccount(100);

    expect(myAccount.deposit(myAccount.balance)).toEqual(`Your balance is now ${myAccount.balance}`);
  });
  // Testing BankAccount.deposit returns zero balance.
  it('zero deposit money into an account', () => {
    const myAccount = new BankAccount(0);

    expect(myAccount.deposit(myAccount.balance)).toEqual('You have insufficient funds!');
  });
});

describe('BankAccount.withdraw', () => {
  // Testing BankAccount.deposit returns total balance.
  it('money withdraw with new balance', () => {
    const myAccount = new BankAccount(100);

    expect(myAccount.withdraw(myAccount.balance)).toEqual(`Your balance is now ${myAccount.balance}`);
  });
  // Testing BankAccount.deposit returns zero balance.
  it('zero money withdraw from account', () => {
    const myAccount = new BankAccount();
    myAccount.balance = 0;

    expect(myAccount.withdraw(myAccount.balance)).toEqual('You have insufficient funds!');
  });
});

describe('BankAccount.checkBalance', () => {
  // Testing BankAccount.checkBalance returns correct balance.
  it('money deposit/withdraw with correct balance', () => {
    const myAccount = new BankAccount(100);
    myAccount.balance += 100;
    myAccount.balance -= 50;

    expect(myAccount.checkBalance()).toEqual(`Your current balance is £${myAccount.balance}`);
  });
});
