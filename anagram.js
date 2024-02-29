function anagram(str1,str2){
var cleanstr1 = str1.replace(/[^a-zA-Z0-9]/g,'');
var cleanstr2 = str2.replace(/[^a-zA-Z0-9]/g,'');
if (cleanstr1.length !== cleanstr2.length)
  {
    return false
  }
  var sortstr1 = str1.split('').sort().join('')
  var sortstr2 = str2.split('').sort().join('')
 return sortstr1 === sortstr2;
}
var string1 = "n2@asdn";
var string2 = "ksadj";

if (anagram(string1,string2))
{
    console.log(`${string1} and ${string2} are anagrams`)
}
else
{
        console.log(`${string1} and ${string2} are not anagrams`)

}