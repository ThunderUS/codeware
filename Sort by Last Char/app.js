function last(x){
 return x.split(" ").sort((first,second)=>{
   if(first[first.length-1]!==second[second.length-1]){
     if (first[first.length-1] > second[second.length-1]) {
       return 1;
     } else if (first[first.length-1] < second[second.length-1]){
         return -1;
       }
     }

   }
 );
}



console.log(last('man i need a taxi up to ubud'));