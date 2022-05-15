/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTriangle(a,b,c){
  if(a<=0||b<=0||c<=0){
      return false;
  }else if (a+b>c&&b+c>a&&a+c>b){
      return true;
  }else{
    return false;
  } 
}
