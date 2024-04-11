class QuadraticEquation {
    public solve(a: number, b: number, c: number): number[] {
        //a*x^2 + b*x + c = 0, a != 0

        let x1: number = 0
        let x2: number = 0
        const D = b * b - 4 * a * c

        //Корней нет
        if (D < 0) {
            return [] as number[]
        }

        //Два корня 
        if (D > 0) {
            x1 = (- b + Math.sqrt(D))/ 2 * a
            x2 = (-b - Math.sqrt(D))/ 2 * a
        }

        //Один корень
        if (D == 0) {
            x1 = -b / 2 * a
            x2 = x1
        }

        return [x1, x2]
    }
}

module.exports.equation = new QuadraticEquation()