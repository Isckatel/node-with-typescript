class QuadraticEquation {
    public solve(a: number, b: number, c: number, e: number): number[] {
        //a*x^2 + b*x + c = 0, a != 0

        let x1: number = 0
        let x2: number = 0

        if (a >= -e && a <= e ) {
            throw new Error('a не может быть равен 0')
        }

        const D = b * b - 4 * a * c

        //Корней нет
        if (D < -e) {
            return [] as number[]
        }

        //Два корня 
        if (D > e) {
            x1 = (- b + Math.sqrt(D))/ 2 * a
            x2 = (-b - Math.sqrt(D))/ 2 * a
        }

        //Один корень
        if (D >= -e && D <= e) {
            x1 = -b / 2 * a
            x2 = x1
        }

        return [x1, x2]
    }
}

module.exports.equation = new QuadraticEquation()