/*
unary operator -  single opertor
binary operator -  operator on bytes
ternary operator - two opertors true or false checks
*/

// ternary operator
let x,y;
x = 11;
// res = (x%2==0)?'Even':'Odd';
// console.log(res);

//nullish colease operator
//uses for default value
//null and undefined case also take the default value
x = null
y = x??'Guest'//example for amazon new user
// console.log(y)


// optional chaining
x = {
    name:'raju',
    age:25,
    address:{
        flatno:311,
        street:'vcube'
    }
}

// street = x.address.street//this will give error to overcome this we use optional chain if it there then only it will come no error will come

street = x?.addres?.street//accessing the key that is not present will give undefined here
console.log(street)

//logical operators
// &&  || !

//bite wise operator
// | , & , ^ , <<,>>

x = 10 & 15
x = 10 | 15
x = 10 ^ 15
x = 10>>1
x = 10<<-1
console.log(x);