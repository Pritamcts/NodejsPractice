// Async and await tutorial

// Async and await are new features in ES8 that allow us to work with promises in a more readable way.

// Async functions always return a promise. If the return value of an async function is not a promise, JavaScript automatically wraps it in a promise.

// The await keyword can only be used inside an async function. It pauses the execution of the async function and waits for the promise to be resolved.


const p1= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 10000);
});

const p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 40000);
});




async function asyncFunction() {
    console.log('Start');
    const result1 = await p1;
    console.log("Hello1");
    console.log(result1);
    const result2 = await p2;
    console.log("Hello 2");
    console.log(result2);
    console.log('End');
}


asyncFunction();