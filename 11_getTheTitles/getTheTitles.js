const getTheTitles = function(books) {
    const booksTitles=[];
    for(i=0;i<books.length;i++)
    booksTitles.push(books[i].title)
return booksTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
