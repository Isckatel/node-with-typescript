const assert = require("assert")
const operations = require("./operations")

//a*x^2 + b*x + c = 0, a != 0

//тест, который проверяет, что для уравнения x^2+1 = 0 корней нет (возвращается пустой массив)
it('x^2+1 = 0 корней нет', () => {
    const a = 1, b = 0, c = 1
    const expected = 0
    const result = operations.equation.solve(a, b, c)

    if(result.length !== 0){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})

//для уравнения x^2-1 = 0 есть два корня кратности 1 (x1=1, x2=-1)
it('x^2-1 = 0 есть два корня', () => {
    const a = 1, b = 0, c = -1
    const expected = 0
    const result = operations.equation.solve(a, b, c)

    if(result[0] != -1 && result[1] != -1){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})
