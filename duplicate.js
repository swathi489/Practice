function removeduplicate(arr)
// var n = arr.length;
{
     var uniqueElement = {}
    for(var i=0;i < arr.length ;i++ )
     {
         uniqueElement[arr[i]] = true;

     }
     var uniqueArray = Object.keys(uniqueElement);
     uniqueArray = uniqueArray.map(Number);
     return uniqueArray;
}
var duplicateelement = [1,2,3,4,3,2,1,2,3,5];
console.log("duplicate array",duplicateelement);
var withoutdupliacte = removeduplicate(duplicateelement);
console.log("Array without Duplicate:",withoutdupliacte);