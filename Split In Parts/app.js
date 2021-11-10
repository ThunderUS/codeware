/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
Example:
Split the below string into other strings of size #3
'supercalifragilisticexpialidocious'
Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:
String length is always greater than 0
String has no spaces
Size is always positive
 */
let splitInParts = function(s, partLength){
    let temp=s.split("")
      .reduce((res,value,i)=>{
      if(i%partLength===0){
        return [...res," ",value];
      }else{
        return [...res,value];
      }
    });
    return temp.join("");
};
console.log(splitInParts("supercalifragilisticexpialidocious", 3));
console.log(splitInParts("HelloKata", 1));
console.log(splitInParts("HelloKata", 9));