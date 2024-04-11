const assert = require("assert")
const operations = require("./operations")

//a*x^2 + b*x + c = 0, a != 0

const e = 1e-7;//Number.EPSILON

//тест, который проверяет, что для уравнения x^2+1 = 0 корней нет (возвращается пустой массив)
it('x^2+1 = 0 корней нет', () => {
    const a = 1, b = 0, c = 1
    const expected = 0
    const result = operations.equation.solve(a, b, c, e)

    if(result.length !== 0){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})

//для уравнения x^2-1 = 0 есть два корня кратности 1 (x1=1, x2=-1)
it('x^2-1 = 0 есть два корня', () => {
    const a = 1, b = 0, c = -1
    const expected = 0
    const result = operations.equation.solve(a, b, c, e)

    if(result[0] != 1 || result[1] != -1){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})

//для уравнения x^2+2x+1 = 0 есть один корень кратности 2 (x1= x2 = -1)
it('x^2+2x+1 = 0 есть один корень', () => {
    const a = 1, b = 2, c = 1
    const expected = 0
    const result = operations.equation.solve(a, b, c, e)

    if(result[0] != -1 || result[1] != -1){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})

//коэффициент a не может быть равен 0
it('коэффициент a не может быть равен 0', () => {
    const a = 0, b = 2, c = 1
    const expected = 0
    let result = [] as number[]
    try {
        result = operations.equation.solve(a, b, c, e)
    } catch (err) {
        console.log(err);
    }
    if(result.length != 0){
        throw new Error(`Expected ${expected}, but got ${result}`)
    }
})