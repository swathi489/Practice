function multiplicationtable(number)
{
    for(var i = 1;i<=number;i++)
    {
    var row = '';
    for (var j= 1;j<=number;j++)
    {
    row += ( i * j) + '\t';
    console.log(`${i} * ${j}  = \t ${row}`);
        
    }

    }
}

multiplicationtable(10)