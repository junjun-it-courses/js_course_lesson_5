// while cycle syntax

// while (condition) {
//     код
//     также называемый "телом цикла"
// }



// while cycle example

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     alert( i );
//     i++ //i = i + 1;
// }



// example 2

// let i = 3;
// while (i) {  // когда i будет равно 0, условие станет ложным, и цикл остановится
//     alert( i );
//     i--;
// }

// example 3

const arr = ['Vlad', 'Dima', 'Helen', 'Alex'];
let i = 0;

while ( i <= arr.length - 1 ) {
    console.log(arr[i], typeof arr[i]);
    i++;
}