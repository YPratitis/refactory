function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log(fibonacci(1));
//  [15,1,3]
 