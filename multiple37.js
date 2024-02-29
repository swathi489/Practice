function multiple37(n){
    if (n % 3 == 0 || n % 7 == 0)
    {
        return '"yes"';
    }
    else
    {
        return '"no"';
    }
}

console.log(multiple37(31));
