/*Fibonacci Sequence is difined by:
F(0) = 0
F(1) = 1
...
F(n) = F(n-1) + F(n-2)*/

function fibonacci(n) {
  if(n === 0) {
    return 0;
  } else if (n ===1) {
    return 1;
  } else {
    return (fibonacci(n-1) + fibonacci(n-2));
  }
}

//main
for(let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
