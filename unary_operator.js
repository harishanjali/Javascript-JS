let x,y;

// post increment
x = 10
y = x++/* first x value will be assigned to y then it will participate in evaluation*/
console.log('x=',x,'y=',y)
// preincrement
x = 10
y = ++x
console.log('x=',x,'y=',y)

//pre decrement
x = 10
y = --x
console.log('x=',x,'y=',y)

// post decrement
x = 10
y = x--
console.log('x=',x,'y=',y)

// in addition will check
x = 10
// y = ++x + x++
// y = x++ + x++
// y = --x + x--
// y = --x + x++
// y = ++x + x--
y = x++ + --x
console.log('x=',x,'y=',y)


