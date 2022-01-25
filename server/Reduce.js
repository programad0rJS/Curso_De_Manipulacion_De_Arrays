const Totals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i < Totals.length; i++) {
    const element = Totals[i];
    sum = sum + element;

};

console.log(sum);


const Rta = Totals.reduce((sums, i) => sums + i, 0);
console.log(Rta);

