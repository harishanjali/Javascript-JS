//instead of consuming promises, we can use the asynn and await

function order(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Order successful');
        },4000);
    });
   
}

function preparation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('preparation done');
        },3000);
    })
    
}

function delivery(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve('delivered');
        },2000);
    });
    
}

function eating(){
    setTimeout(()=>{
        console.log('eating done');
    },1000);
    
}

//without function
// let res = await order();
// console.log(res);
// res = await preparation();
// console.log(res);
// res = await delivery();
// console.log(res);
// eating();

//with function

async function callfunctions(){
    let res = await order();
    console.log(res);
    res = await preparation();
    console.log(res);
    res = await delivery();
    console.log(res);
    eating();
}

callfunctions();