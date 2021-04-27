function* sayHi() {
    yield 'something'
    return 'something else'
}

const result = sayHi();

console.log(result.next());
console.log(result.next());