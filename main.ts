function getChannel(name:string):{name:string}{
return {name}
}

getChannel("Bob")

//arrow function
const getChannelName=(name:string):{name:string}=>{
   return {name}
};
getChannelName("Bill")

 //with type
 type TypeChannelReturn = {name:string}
 type TypeChannelName = (name: string) => TypeChannelReturn;
 const getChannelName2:TypeChannelName=(name)=>{
   return {name}
};
 
//функциональные перегрузки
function getCar(name:string):string;
function getCar(name:string, price:number):string;
function getCar(name:string, price?: number):string{
   return price ? `Name ${name}` : `name ${name}`
}

const car1 = getCar("bmw");
const car2 = getCar("bmw", 100000);