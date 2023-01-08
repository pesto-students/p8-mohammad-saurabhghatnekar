function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }



    function log() {
        console.log(message);
    }

    return [increment, log];
}
//
// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();// What is logged?

//the count is 0 because the message is evaluated once when the function is created and not when the function is called

//fix

function createIncrementFixed() {
    let count = 0;

    function increment() {
        count++;
    }

    function log() {
        let message = `Count is ${count}`;
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrementFixed();

increment();
increment();
increment();
log();// What is logged?
