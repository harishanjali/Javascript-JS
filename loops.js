//while,do while,for, for of, for in

//normal loop
/*let num,d,flag;
num=10;
d = 2;
flag=true;
while(d<=num/2){
    if(num%d==0){
        console.log('NOt prime');
        flag=false
        break;
    }
    d+=1
}
if(flag && num>1){
    console.log('prime number')
}*/

//nested loops
/*
let i;
i=1
while(i<=3){
    console.log('harish')
    let j=1;
    while(j<=3){
        console.log('test')
        j++
    }
    i++
}*/

//do while loop
//do while loop will work atleat once even though the condition false
/*let i;
i=1
do{
    console.log('harish');
    i++
}while(i<=3);*/


//for loop
//for iteration purpose we use this loop
/*
for(let i=1;i<=3;i++){
   console.log('test')
}*/


//for of loop
//helps to iterate over arrays to get values
//if you use for in for arrs it will give indexes, for vlaues we use of
/*let arr;
arr = [10,20,'vcube','python',true]

for(let i of arr){
    console.log(i)
}*/

//for in loop
//helps to read the object data

/*let x;
x = {
    name:'raju',
    age:25,
    course:'python',
    gender:'male'
}

for(let i in x){
    console.log(i,x[i])
}
let res;
res = Object.keys(x);
console.log(res)//[ 'name', 'age', 'course', 'gender' ]

res = Object.values(x);
console.log(res)//[ 'raju', 25, 'python', 'male' ]

res = Object.entries(x);
// console.log(res);[
// [ 'name', 'raju' ],
// [ 'age', 25 ],
// [ 'course', 'python' ],
// [ 'gender', 'male' ]
// ]*/



