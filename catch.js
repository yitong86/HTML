function reverseString(s) {
    try {
           s = s.split("").reverse().join("");  
       }
       catch(err) {
               console.log(err.message); 
       }
       finally{
           console.log(s);
       }
}
function isPositive(a) {
    if (a == 0){
        throw new Error('Zero Error');
    }
    else if (a < 0){
        throw new Error('Negative Error');
    }
    else {
        return 'YES'
    }
}
function getLetter(s) {
    let letter;
    switch(true){
        case 'aeiou'.includes(s[0]):
            letter = 'A';break;
        case 'bcdfg'.includes(s[0]): 
            letter = 'B';break;
        case 'hjklm'.includes(s[0]): 
            letter = 'C';break;
        default: 
            letter = 'D';break;
    }
    return letter;
}
function getSecondLargest(nums) {
    let largest = 0
     let secondLargest = 0
     for(let i=0; i < nums.length; i++){
         if(nums[i] > largest) {
             secondLargest = largest
             largest = nums[i]
         }
         else if (nums[i] != largest && nums[i]>secondLargest) {
             secondLargest = nums[i]
         }
     }
     return secondLargest
 }