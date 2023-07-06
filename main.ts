class Car {
name: string;
price: number;
constructor (name: string, price: number){
   this.name = name;
   this.price = price;
}
public getInfo():string{
   return `name: ${this.name} - price: ${this.price}`
}
private getName():string{
   return `name: ${this.name} `
}
protected getPrice():string{
   return `price: ${this.price}`
}
}

new Car("BMW", 100000).getInfo()
// new Car("BMW", 100000).getName() не раборает так как приватный
// new Car("BMW", 100000).getPrice() не раборает может только в наследовании

class Bus extends Car {
   constructor(name: string, price: number){
      super(name, price);
   }
   test(){
      return this.getInfo()
   }
}