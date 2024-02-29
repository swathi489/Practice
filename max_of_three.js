function max_of_three(a,b,c)
{
    var max_value = 0;
    if(a>b)
    {
        max_value = a;
    }
    else
    {
        max_value = b;
    }
    if(c > max_value)
{
    max_value = c;
}
return max_value;
}
console.log(max_of_three(34,89,65));