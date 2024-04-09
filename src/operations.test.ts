const assert = require("assert")
const operations = require("./operations")

it('the number should be returned', () => {
    const a = 1, b = 2, c = 3
    const expected = 0
    const result = operations.equation.solve(a, b, c)

    if(result!==expected){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})