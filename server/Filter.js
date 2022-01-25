const Paises = ['Peru', 'Chile', 'Brazil', 'Argentina'];

const New_Array = [];

for (let index = 0; index < Paises.length; index++) {
    const Items = Paises[index];
    if (Items.length >= 6) {
        New_Array.push(Items);
    };
};

console.log('Nuevo Array', New_Array);
console.log('Orginal', Paises);




const Rta = Paises.filter(a => a.length >= 6)
console.log('Nuevo Array', New_Array);
console.log('Orginal', Paises);