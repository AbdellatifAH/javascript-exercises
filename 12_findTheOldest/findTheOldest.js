const findTheOldest = function(people) {
    let oi=0;
    function getAge(index){
        if(people[index].yearOfDeath)
        return people[index].yearOfDeath-people[index].yearOfBirth
        else
        return (new Date().getFullYear())-people[index].yearOfBirth
    }
    for(let i=0;i<people.length;i++)
    if(getAge(oi)<getAge(i))
    oi=i;
    return people[oi].name;
};

// Do not edit below this line
module.exports = findTheOldest;


