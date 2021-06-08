function reverseWord (sentence) {
    return sentence.split(' ').map(function(word) {
      return word.split('').reverse().join('');
    }).join(' ');
  }
  
  console.log(reverseWord("I am A Great human"));
//   "I am A Great human"
// into
// "I ma A Taerg namuh