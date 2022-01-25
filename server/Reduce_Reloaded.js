const Items = [1,2,3,4,5,6];

const Respueta = Items.reduce((obj,a) => {
    if (!obj[a]) {
        obj[a] = 1;
    }
    else{
        obj[a] = obj[a] + 1; 
    }
    return obj;
}, {} );
console.log(Respueta);