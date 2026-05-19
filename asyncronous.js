// function order(){
//     setTimeout(()=>{
//         console.log('Order successful');
//     },4000);
   
// }

// function preparation(){
//     setTimeout(()=>{
//         console.log('preparation done');
//     },3000);
    
// }

// function delivery(){
//     setTimeout(()=>{
//         console.log('delivered');
//     },2000);
    
// }

// function eating(){
//     setTimeout(()=>{
//         console.log('eating done');
//     },1000);
    
// }

// order();
// preparation();
// delivery();
// eating();

//output will come like this, but we want order,prepare,delivery.eating this order.
// eating done
// delivered
// preparation done
// Order successful


//using the call back
function order(callback){
    setTimeout(()=>{
        console.log('Order successful');
        callback();
    },4000);
   
}

function preparation(callback){
    setTimeout(()=>{
        console.log('preparation done');
        callback()
    },3000);
    
}

function delivery(callback){
    setTimeout(()=>{
        console.log('delivered');
        callback();
    },2000);
    
}

function eating(){
    setTimeout(()=>{
        console.log('eating done');
    },1000);
    
}

//callback hell
order(()=>{
    preparation(()=>{
        delivery(()=>{
            eating();
        })
    })
});

