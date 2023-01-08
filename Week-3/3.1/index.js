//memoization

function memoize(fn) {
    let cache = new Map();
    return function (...args) {
        let key = args.toString();
        if (cache.has(key)) {
            console.log('from cache');
            return cache.get(key);
        } else {
            console.log('calculating');
            let result = fn(...args);
            cache.set(key, result);
            return result;
        }
    }
}

function add(a, b) {
    return a + b;
}

let memoizedAdd = memoize(add);
let timeFunction = (fn, ...args) => {
    console.time('time');
    let result = fn(...args);
    console.timeEnd('time');
    // console.log("\n")
}

timeFunction(memoizedAdd, 1, 2);
timeFunction(memoizedAdd, 1, 2);
timeFunction(memoizedAdd, 100, 100);
timeFunction(memoizedAdd, 100, 100);