const removeFromArray = function(a,...b) {
    for(let i=0;i<a.length;i++)
        for(let j=0;j<b.length;j++)
            if(a[i]===b[j]){
                a.splice(i,1);
                i--;
            }
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
