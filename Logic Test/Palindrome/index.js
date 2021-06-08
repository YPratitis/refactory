const a = 'Radar';
const b = 'Malam';
const c = 'Kasur ini rusak';
const d = 'Ibu Ratna antar ubi';
const e = 'Malas';
const f = 'Makan nasi goreng';
const g = 'Balonku ada lima';

// Radar                 # --> palindrome
// Malam                 # --> palindrome
// Kasur ini rusak       # --> palindrome
// Ibu Ratna antar ubi   # --> palindrome
// Malas                 # --> not palindrome
// Makan nasi goreng     # --> not palindrome
// Balonku ada lima      # --> not palindrome

const isPalindrome = (inStr) =>{
    inStr = inStr.replace(/\W/g, '');
    inStr = inStr.toLowerCase();
    console.log(inStr);
    for (let i=0; i<inStr.length; i+=1) {
        if (inStr[i] !== inStr[inStr.length - 1 - i]) {
            return `Not Palindrome`;    
        } 
    }
    return `Palindrome`;
}

console.log(isPalindrome(a));
console.log('#############');
console.log(isPalindrome(b));
console.log('#############');
console.log(isPalindrome(c));
console.log('#############');
console.log(isPalindrome(d));
console.log('#############');
console.log(isPalindrome(e));
console.log('#############');
console.log(isPalindrome(f));
console.log('#############');
console.log(isPalindrome(g));
console.log('#############');