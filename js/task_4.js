function User(name, balance) {
    this.name = name;
    this.balance = balance;
}


User.prototype.addMoney = function(amount) {
    this.balance += amount;
};


User.prototype.balanceInfo = function() {
    console.log(`Баланс користувача ${this.name}: ${this.balance}`);
};


const users = [
    new User('Alice', 500),
    new User('Bob', 200),
    new User('Charlie', 1000)
];


users.forEach(user => {
    user.addMoney(100); 
});


const richUsers = users.filter(user => user.balance > 500);


const balances = users.map(user => user.balance);


console.log(balances);


const specificUser = users[0];
specificUser.balanceInfo.call(specificUser); 
