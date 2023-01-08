//3 function where bind, call and apply are used

//3.1 bind
let person = {
    name: 'John',
    age: 25,
    greet: function (prefix, method) {
        console.log(prefix + ' ' + this.name + ', this call is made with ' + method);
    }
}

let greet = person.greet.bind(person, 'Hello', 'bind');
greet();


//3.2 call
person.greet.call(person, 'Hello', 'call');


//3.3 apply
person.greet.apply(person, ['Hello', 'apply']);


//bind returns a function, call and apply are called directly on the function
