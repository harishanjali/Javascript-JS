
//array is used to store the heterogenous values
let x = [10,20,'vcube','javascript',12.3,10];
// x.push(34);//[ 10, 20, 'vcube', 'javascript', 12.3, 10, 34 ]
// x.unshift(34);//[ 34,10, 20, 'vcube', 'javascript', 12.3, 10]
//let res = x.pop();//10

//let res = x.shift();//removes first element
// let res = x.indexOf(10);//gives fisrt occurence of element
// let res = x.lastIndexOf(10)//gives last occurence of elelment
// let res = x.slice(1,3);//[ 20, 'vcube' ]indexing
x.splice(1,0,100,200,150)//splice(start_idx,no.of_el_remove,elements we can add);
console.log(res);
console.log(x);
