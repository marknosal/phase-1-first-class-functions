function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return function named(parameter) {
        console.log(parameter);
    }
}

function returnsAnAnonymousFunction() {
    return () => 1 ** 1;
}