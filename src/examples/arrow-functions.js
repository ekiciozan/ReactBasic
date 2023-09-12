//////////////////////////////////////////////////////ES5

/* var helloES5 = function(){
    console.log('hello from es5');
}
helloES5(); */
//////////////////////////////////////////////////////ES6
/* let helloES6 = () => {
 console.log('hello from es6');
}
helloES6(); */
//////////////////////////////////////////////////////
/* 
 let multiplyES6 = (x,y) => {
   return  x*y
 }

 console.log(multiplyES6(5,4)); */

 /* let multiplyES6 = (x,y) => {
   console.log( "s1:",x , "s2:" , y, "Sonuc: " , x*y);
  }
 
multiplyES6(5,4); */
//////////////////////////////////////////////////////
/* let getProductES5 = function(pid,pname){
    return {
            id: pid,
            name: pname
    }
}
console.log(getProductES5(1,'IPhoneX'));

let getProductES6 =(pid,pname) => ({ 
        id: pid,
        name : pname
})
console.log(getProductES6(2,'Iphone14')); */
//////////////////////////////////////////////////////
// map ile listeden geriye listedöndürmek için. 
const phones = [
    {name:'Iphone 8', price :4000},
    {name:'Iphone 11', price :7000},
    {name:'Iphone 13', price :9000},
    {name:'Iphone 14', price :10000}
];

let priceES6 =  phones.map(phone => {
    return phone.price;
})
console.log(priceES6);
//////////////////////////////////////////////////////
let filterES5 = phones.filter(function(phone){

    return phone.price >= 5000;
})
console.log(filterES5);

let filterES6 = phones.filter(phone => phone.price >= 5000);
console.log(filterES6);
//////////////////////////////////////////////////////