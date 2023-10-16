const sumAll = function(a,b) {
let sum=0;
if(a<0 || b<0 )
return "ERROR"
else
if(typeof(a)!=='number' || typeof(b)!=='number')
return "ERROR"
else
if(a<b)
    for(i=a;i<=b;i++)
        sumall=sumall+i;
else
    for(i=b;i<=a;i++)
    sumall=sumall+i;

    return(sum)
};

// Do not edit below this line
module.exports = sumAll;
