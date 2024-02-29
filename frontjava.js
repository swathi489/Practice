function frontjava(str)
{
if (str.length<4)
{
    return false;
}
var front = str.substring(0,4)
if (front == "java")
{
    return true;
}
else
{
    return false;
}
}
console.log(frontjava("javascript"))