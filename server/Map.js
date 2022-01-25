const Letters = ['Saludando','A' ,'Mi', 'Novia'];






const NewArray = Letters.map(e => e + '++');
/*
const NewArray = [];
for (let i = 0; i < Letters.length; i++) {
    const element = Letters[i];
    NewArray.push(element+ '++');
    
};
*/
console.log('Original', Letters);
console.log('New', NewArray);