// Переход к следующей итерации: continue

// При  выполнении директивы continue цикл не прерывается,
// а переходит к следующей итерации

// % - остаток от деления, всегда при четных числах выдаст 0

for (let i = 0; i < 10; i++) {
    console.log(i)
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 === 0) continue; // reverse !==

    alert(i); // 1, затем 3, 5, 7, 9
}

// Нельзя использовать break справа от
// тернарного оператора (? - знак вопроса)