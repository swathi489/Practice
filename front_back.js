function front_back(str)
{
    if(str.length>=3)
    {
        str.length = 3;
        var back = str.substring(str.length-3)
        return back + str + back;
    }
    return false;
}
console.log(front_back("ronold"))
console.log(front_back("ro"))
console.log(front_back("mangofruit"))