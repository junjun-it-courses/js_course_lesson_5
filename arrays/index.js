const array = [
    'vlad', 10, true, null, 'cow', false, 'value', 'value2', 'value3',
    ['Ann', 'Ahs', 'John', 'An2', 'Ah2', 'Joh2'],
    {
        userName: 'Alex',
        age: 19
    }
];

let arr_length = array.length;
let last_element_index = arr_length - 1;

let example = array[array.length - 2];
example = example[example.length - 1];


// console.log(example);


const arr2 = [];

console.log('Before update', arr2)

arr2.push('Dima');

console.log('After Update', arr2)
