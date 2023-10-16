const reverseString = function(a) {
    revStr='';
    for(let i=a.length-1;i>=0;i--)
    revStr=revStr+a[i];
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
