// var fizzBuzz = function(n) {
//     let results = [];
//     for(let i=1; i <= n; i++) {
//       let fizz = i % 3 === 0;
//       let buzz = i % 5 === 0;
//       if (!fizz && !buzz) {
//       	results.push(`${i}`);
//         continue;
//       }
//       if (fizz && buzz) {
//       	results.push("FizzBuzz");
//         continue;
//       }
//       if (fizz) {
//       	results.push("Fizz");
//         continue;
//       }
//       if (buzz) {
//       	results.push("Buzz");
//         continue;
//       }
//     }
//     return results;
// };

const fizzBuzz = (num) => {
  for (var i=1; i <= num; i++){
  if (num %3 ==0 && num %5 == 0){
  return "FizzBuzz";
  }else if (num %5 == 0){
  return "Fizz";
  }else if(num %3 == 0){
  return "Buzz";
  }else {
  return num;
  }
  }
  }
  
  console.log(fizzBuzz(15))