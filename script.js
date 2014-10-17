var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

var search = function (lastName){
    var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		if(contacts[i].lastName===lastName){
		    printPerson(contacts[i]);
		}
	}
}
var add= function(firstName,lastName,email,phoneNumber){
    contacts[contacts.length]={
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    
    };
    
} 
add("Rickeshia","Pasmore","rick@gmail.com","1234567");
list();
//search("Jones")
var cashRegister = {
total:0,
lastTransactionAmount:0,
//Dont forget to add your property
add: function(itemCost) {
this.total += itemCost;
lastTransactionAmount=itemCost;
},
scan: function(item,quantity) {
switch (item) {
case "eggs": this.add(0.98 * quantity); break;
case "milk": this.add(1.23 * quantity); break;
case "magazine": this.add(4.99 * quantity); break;
case "chocolate": this.add(0.45 * quantity); break;
}
return true;
},
//Add the voidLastTransaction Method here
voidLastTransaction: function(){
this.total-=this.lastTransactionAmount;
}

};

cashRegister.scan("eggs", 5);
cashRegister.scan("milk", 1);
cashRegister.scan("magazine", 2);
cashRegister.scan("chocolate", 4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction;
cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);