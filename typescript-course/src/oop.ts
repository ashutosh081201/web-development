class Chai {
    flavour: string;
    price: number

    constructor(flavour:string, price: number){
        this.flavour=flavour;
        this.price= price
    }
}
const masalaChai = new Chai("ginger", 20);

class Chai2 {
    public flavour: string = "Masala"
    private ingredients: string = "cardamom"
    //method to access pvt values
    reveal(){
        return this.ingredients
    }
    
}
const c = new Chai2()
c.flavour
c.reveal();

class Shop {
  protected shopName = "chai corner";
}
class Branch extends Shop{
    getName(){
        return this.shopName
    }
}
new Branch().getName

//getter and setter
class Chai3{
    private _sugar = 2;
    get sugar(){
        return this._sugar;
    }
    set sugar(value: number){
        this._sugar= value;
    }
}

//static
class EkChai {
    static shopName = "Chai cafe"
    constructor(public flavour:string){}
}
EkChai.shopName // capital tells that it is static

//abstract class

abstract class Drink{
    abstract make(): void
}

class MyDrink extends Drink {
    make(){
        console.log("Brewing ")
    }
}