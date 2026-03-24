interface Chai {
    flavor: string
    price: number
    milk?:boolean
}

interface A {a:string};
interface B {b: string};
interface C extends A, B {};