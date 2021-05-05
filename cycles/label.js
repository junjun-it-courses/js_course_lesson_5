// Метки для break и continue

// outer: for (let i = 0; i < 3; i++) {
//
//     for (let j = 0; j < 3; j++) {
//
//         let input = prompt(`Значение на координатах (${i},${j})`, '');
//
//         // если пустая строка или Отмена, то выйти из обоих циклов
//         if (!input) break outer; // (*)
//
//         // сделать что-нибудь со значениями...
//     }
//
// }
//
// alert('Готово!');

// Метки не дают возможности передавать управление в произвольное место кода.
// Вызов break/continue возможен только внутри цикла,
// и метка должна находиться где-то выше этой директивы.


const buildings = [
    [
        [
            1, 2, 3
        ],
        [
            1, 2, 3, 4, 5, 6
        ],
        [
            1,
        ],
    ],
    [
        [
            1, 2, 3
        ],
        [
            1, 2, 3
        ],
        [
            1, 2, 3
        ],
        [
            1, 2, 3
        ],
        [
            1, 2, 3
        ],
    ],
    [
        [
            1
        ],
    ],
]

buil: for(let b = 0; b <= buildings.length - 1; b++) {
    //b - single building: отдельное здание
    let current_building = buildings[b];
    console.log('Здание: ', b + 1);

    for (let f = 0; f <= current_building.length - 1; f++) {
        //f - single floor: Отдельный этаж
        let current_floor = current_building[f];
        console.log('Этаж: ', f + 1);

        for(let a = 0; a <= current_floor.length - 1; a++) {

            console.log('Квартира ', a)
            if(b === 0 && f === 1 && a === 2) {
                break buil;
            }



        }

    }

}