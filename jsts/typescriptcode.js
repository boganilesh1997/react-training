var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    console.log("typescrip file connected");
    // make varible in typescript 
    //let mutablebalance : number 
    //console.log(mutablebalance);
    var Mybalance = 1;
    var myname = "name";
    var statusMY = true;
    console.log(Mybalance, myname, statusMY);
    console.log(typeof myname, typeof myname, typeof statusMY);
    var transaction1 = {
        description: "deposit",
        amount: 2000,
        date: new Date()
    };
    var transaction2 = {
        description: "withdrawal",
        amount: -500,
        date: new Date()
    };
    console.log("transaction is ", transaction1, transaction2);
    var obj = {
        name: 'Nilesh',
        food: 'pasta'
    };
    var transactions_1 = [transaction1, transaction2];
    console.log(transactions_1);
    var user1_1 = {
        name: "Nilesh",
        age: 25,
        login: false
    };
    var user2 = {
        name: "jay",
        age: 24,
        login: false
    };
    console.log(user1_1, user2);
    console.log(user2.age);
    var UserArray = [user1_1, user2];
    console.log(UserArray);
    console.log(UserArray[0]);
    console.log(UserArray[1].name);
    // spread operation 
    var user3 = __assign(__assign({}, user1_1), { age: 25 });
    console.log(user3.age);
    //Destructuring 
    var age = user2.age, name_1 = user2.name;
    var transactionElements_1 = document.getElementById("transactions");
    var ei1 = "<li> ".concat(transaction1.date, " ").concat(transaction1.description, " ").concat(transaction1.amount, " </li>");
    if (user1_1.login) {
        transactionElements_1.innerHTML = "<ul> ".concat(ei1, " </ul>");
    }
    var headerElements_1 = document.getElementById("heading");
    if (user1_1.login) {
        headerElements_1.innerHTML = "Hello ".concat(user1_1.name);
    }
    else {
        headerElements_1.innerHTML = " user not logged in ";
    }
    function sayhello() {
        console.log("Hello from a function declearation");
    }
    var sayhelloarrow = function () {
        console.log("hello from a arrow function");
    };
    function userlogin() {
        user1_1.login = true;
        console.log("user Nilesh Loggedin");
        headerElements_1.innerHTML = "Hello ".concat(user1_1.name);
    }
    var newTransaction = function () {
        var description = document.getElementById('description');
        var amount = document.getElementById('amount');
        var newTransaction = {
            description: description.value,
            amount: +amount.value,
            date: new Date()
        };
        transactions_1.push(newTransaction);
        console.log(transactions_1);
        transactions_1.forEach(function (transaction) {
            console.log("description is ".concat(transaction.description, " amount is ").concat(transaction.amount));
        });
        var elist = transactions_1.map(function (trans) { return "<li> ".concat(trans.date, " ").concat(trans.description, " ").concat(trans.amount, " </li>"); });
        transactionElements_1.innerHTML = "<ul>" + elist.join("") + "</ul>";
        var balanceElements = document.getElementById("balance");
        balanceElements.innerHTML = transactions_1.reduce(function (total, transaction) { return total + transaction.amount; }, 0).toString();
        description.value = "";
        amount.value = "";
    };
}
