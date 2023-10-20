const palindromes = function (a) {
    a=a.toLowerCase();
    a=a.replace(/[.,\/#!$%? \^&\*;:{}=\-_`~()]/g,"")
    for(let i=0;i<a.length-1;i++){
        if(a[i]!==a[a.length-i-1])
        return false;
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
