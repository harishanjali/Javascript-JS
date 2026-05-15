x = [10,20,12,15,1,34,-10,25]

first = -Infinity;
second = -Infinity;

for(num of x){
    if(num>first){
        second = first;
        first = num;
    }
    if(num<first && num>second){
        second = num
    }
}

console.log(second);