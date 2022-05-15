/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples:
    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

public class FindOdd {
  public static int findIt(int[] a) {
    int odd=0;
    for(int i=0;i<a.length;i++){
      int count=0;
      for(int j=0;j<a.length;j++){
        if(a[i]==a[j]){
          count++;
        }  
      }
        if(count%2==1){
         odd=a[i];
        } 
    }
 return odd;
  }
}
