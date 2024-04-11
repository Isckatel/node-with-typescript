class QuadraticEquation {
    public solve(a: number, b: number, c: number): number[] {
        //a*x^2 + b*x + c = 0, a != 0

        const D = b * b - 4 * a * c

        //Корней нет
        if (D < 0) {
            return [] as number[]
        }

        //Два корня 
        if (D > 0) {
            const x1 = (- b + Math.sqrt(D))/ 2 * a
            const x2 = (-b - Math.sqrt(D))/ 2 * a
            return [x1, x2]
        }

        return [0]
    }
}

module.exports.equation = new QuadraticEquation()