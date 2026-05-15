
//saves the memeory and gives values one byb one,and send back to calling area eveyr time yeild.
function* even(s,e){
    for(let i=s;i<=e;i++){
        if(i%2==0){
            yield i;
        }
    }
}

res = even(1,10);
for(num of res){
    console.log(num);
}