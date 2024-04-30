
{console.log("typescrip file connected");

// make varible in typescript 

//let mutablebalance : number 
//console.log(mutablebalance);



let Mybalance:number = 1;
let myname:string  ="name";
let statusMY:boolean = true;

console.log(Mybalance,myname,statusMY)
console.log(typeof myname,typeof myname, typeof statusMY)

// bal = prompt("enter a number");
// myname = prompt("enter a name ");
// statusMY = prompt("enter a status ");
// console.log(Mybalance);
// console.log(myname);
// console.log(statusMY);

type TransactionType = {
    description : string,
    amount : number ,
    date : Date
}

const transaction1 : TransactionType = {
    description : "deposit",
    amount : 2000,
    date : new Date()
}


const transaction2 : TransactionType = {
    description : "withdrawal",
    amount : -500,
    date : new Date()
}



console.log("transaction is ",transaction1, transaction2);
const obj = {
    name : 'Nilesh',
    food : 'pasta'
}

const transactions  : TransactionType[] = [transaction1 , transaction2]
console.log(transactions)

// Challenge 

type userType = {
        name : string,
        age : number,
        login : boolean
}

const user1 : userType ={
    name : "Nilesh",
    age : 25,
    login : false
}

const user2 : userType ={
    name : "jay",
    age : 24,
    login : false
}
console.log(user1,user2)
console.log(user2.age)

const UserArray : userType[] = [user1,user2];

console.log(UserArray)
console.log(UserArray[0])
console.log(UserArray[1].name)

// spread operation 
const user3:userType = {...user1,age:25}

console.log(user3.age)
//Destructuring 
const {age,name} = user2 ;



const transactionElements = document.getElementById("transactions") as HTMLDivElement;

const ei1  = `<li> ${transaction1.date} ${transaction1.description} ${transaction1.amount} </li>`;



    if (user1.login) {

        transactionElements.innerHTML = `<ul> ${ei1} </ul>`;
    }
 
const headerElements = document.getElementById("heading") as HTMLHeadElement;
    
    if (user1.login) {

        headerElements.innerHTML = `Hello ${user1.name}`;
    }
    else{
        headerElements.innerHTML = ` user not logged in `;
    }

    function sayhello () : void 
    {
        console.log("Hello from a function declearation")
    }

    const sayhelloarrow = () : void => {
        console.log("hello from a arrow function")
    }


function userlogin():void {
    user1.login = true;
    console.log("user Nilesh Loggedin")
    headerElements.innerHTML = `Hello ${user1.name}`;
 
}

const newTransaction = ():void  => {
    const description = document.getElementById('description') as HTMLInputElement
    const amount = document.getElementById('amount') as HTMLInputElement
        const newTransaction : TransactionType ={
            description :description.value,
            amount:+amount.value,
            date : new Date()
        }
        transactions.push(newTransaction)
        console.log(transactions)
        
    transactions.forEach(transaction => 
    {
        console.log(`description is ${transaction.description} amount is ${transaction.amount}`)
    }) 

    const elist  = transactions.map((trans) => {return `<li> ${trans.date} ${trans.description} ${trans.amount} </li>`});
    transactionElements.innerHTML = "<ul>" + elist.join("") + "</ul>" ;


    const balanceElements = document.getElementById("balance") as HTMLElement;

    balanceElements.innerHTML  = transactions.reduce((total, transaction) => total + transaction.amount, 0).toString()


    description.value = "";
    amount.value = "";

}




}