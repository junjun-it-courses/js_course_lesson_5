// Прерывание цикла: «break»

//  example

// Мы можем выйти из цикла в любой момент с помощью специальной директивы break.

let sum = 0;

while (true) {

    let value = +prompt("Введите число", '');

    if (!value)  break

    sum = sum + value; // sum += value

}

alert( 'Сумма: ' + sum );


// Директива break в строке 13 полностью прекращает выполнение цикла и передаёт
// управление на строку за его телом, то есть на alert.


// Нельзя использовать break справа от тернарного оператора (? - знак вопроса)