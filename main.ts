// object
const obj:object ={};
const obj1:{} ={};

const data:{
   id: number;
   price: number;
   permission: string[],
   details: {
     title: string;
     description?: string;
   }
} = {  id: 1,
   price: 10.99,
   permission: ['read', 'write'],
   details: {
     title: 'New product',
     description: 'This is awesome product!'
   }}