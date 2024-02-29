function selectionsort(arr)

{
    var n = arr.length;
    for (i = 0;i < n - 1;i++)
        {
    var minindex = i;
    for ( var j = i+1;j < n ; j++)
    {
        if (arr [j] < arr[minindex])
        {
            minindex = j;
        }
    }
     var temp = arr[minindex];
     arr[minindex]= arr[i];
     arr[i] = temp;
}
return arr;

}
var numbers =  [5, 3, 8, 1, 4];
console.log("Original array",numbers);
console.log("Sorted array",selectionsort(numbers));

