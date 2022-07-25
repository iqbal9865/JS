const persons = [{name:'Iqbal',id:173462142},{name:'Abir',id:173462101},{name:'Kabir',id:173462199}];
// const names = persons.map(person => person.name);
// const AllId = persons.map(person => person.id);
// console.log(names);
// console.log(AllId);

const shortName = persons.filter(sh => sh.name.length <=4 )
console.log(shortName);