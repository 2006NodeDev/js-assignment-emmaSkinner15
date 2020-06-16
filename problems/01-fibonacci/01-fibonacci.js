/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
if(n==0 || n==1){
    return n;
}
else
{
    return(fib(n-2)+fib(n-1))
}
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(10))