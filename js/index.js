alert('hi hi hi');

// const greetings = 'Nice to see you!';
// alert(greetings);

// let name = 'John';
// alert(name);

// name = 'Isabel';
// alert(name);

// const userName = prompt('Enter user name:');
// const userGreetings = 'Nice to see you,' + userName
// alert(userGreetings);

const age = parseInt(prompt('Enter your age'));
const nextAge = add(userAge,1);
const ageMessage = 'Next year you will be ' + nextAge;
alert(ageMessage);

if(userAge >= 18) { //===, >=, <=, <, >, ||, &&
   alert('You are adult!')   

} else {
   alert("You are minor!")
}

function add(a,b) {
    const result = realAdd(a,b);
    return result;
}

function realAdd(a,b) {
    return a + b;
}



