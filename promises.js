/*const myPromise = new Promise((resolve,reject)=>{
    const success = false;
    if(success){
        resolve('Operation Successfull');
    }else{
        reject('Operation Failed');
    }
});

myPromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('transaction complete');
})*/

//example of promises

/*const checkItem = (item)=>{
    return myPromise = new Promise((resolve,reject)=>{
        const inventory = ['apple','orange','banana'];
        if(inventory.includes(item)){
            resolve(`${item} found in the List`);
        }
        else{
            reject(`${item} not found in the List`);
        }
    });
}

checkItem('watermelon')
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log('transaction completed');
})*/

//example with api calling....
//fetch function also gives us the promise object
const fetchData = ()=>{
    const data = fetch(`https://jsonplaceholder.typicode.com/users/4`);
    data.then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err.message);
    })
}

fetchData();