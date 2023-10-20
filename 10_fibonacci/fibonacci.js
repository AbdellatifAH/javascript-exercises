const fibonacci = function(a) {
    if (a < 0) return "OOPS";
    if (a === 0) return 0;

    let b = 1;
    let c = 0;
    
    for (let i = 2; i <= a; i++) {
        let d = b + c;
        c = b;
        b = d;
    }

    return b;
};
// Do not edit below this line
module.exports = fibonacci;
