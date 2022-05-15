/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
    
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  // your code
  let temp=""
  for(let i=0;i<s.length;i++){
    for(let j=0;j<=i;j++){
      temp+= j==0? s[i].toUpperCase(): s[i].toLowerCase()
    }
    if(i<s.length-1){
      temp+="-"
      }
  }
  return temp
}
