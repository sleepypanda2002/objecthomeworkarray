var objectone = {
  Nom: "oject1",
  taille: "Big",
  created: "First",
  end: "last",
};
var objecttwo = {
  Nom: "object1",
  taille: "hh",
  created: "First",
  end: "last",
};

/*const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }*/
function compare_objects(object1, object2) {
var compare;
if (object1===object2){
  compare=true;
}else{
    compare=false
}
//comparing if both objects have same constructor 
if (object1.constructor == object2.constructor){
    compare=true;
    const key1=Object.keys(object1);
    const key2=Object.keys(object2);
    if (key1.length == key2.length) {
         compare=true;
    }
    for (let key of key1) {
        if (object1[key] == object2[key]) {
         compare=true;
        }
    }
    
  
}else{
    compare=false;
}
return compare;
}
//printing the result 
console.log("the two objects are same  yes==>true no ==> false ");
console.log(compare_objects(objectone,objecttwo));


//exercice 2 :
//function that returns  common  numbers of two arrays 
function deleteduplicates(arr){
      for (let i=0;i<arr.length ;i++){
            for (let index=i+1 ;index<arr.length;index++){
                if(arr[i]==arr[index]){
                 for(k=index; k < arr.length- 1; k++)
                {
                    arr[k] = arr[k + 1];
                }
               arr.length--;
                index--;
                }
            }
      }
     
      return arr;
}
function commonarrays(array1,array2){
array1=deleteduplicates(array1);
array2=deleteduplicates(array2);

    var k=1;
    for (let i=0;i<array1.length;i++){
        for (let j=0 ;j<array2.length;j++){
            if (array1[i]==array2[j]){
            console.log("common element"+k+"=  "+array1[i]);
            }
        }
    }

}
console.log(commonarrays([1,2,3,4,5,8,4,5,6,7,8],[1,5,4,5,8,8]));
