const results = document.querySelectorAll('.result');
const button = document.querySelector('.btn');
let array = [];


// генерирует 10 случайных чисел в диапазоне от -10 до 10
for (let i = 0; i < 10; i++) {
    let createArray = () => {
        // получение случайного числа в диапазоне от min до max
        function getRandom(min, max) {
            return Math.round(Math.random() * (max - min)) + min;
        }
        let number = getRandom(-10, 10);
        //добавление числа в массив
        array.push(number);
        return array;
    }
    createArray();
}

const arrayString = array.join(' ');
const max = Math.max(...array);
const min = Math.min(...array);
const average = array.reduce((a,b)=>(a+b))/array.length;
const sum = array.reduce((a,b)=>(a+b));
const multiplication = array.reduce((a,b)=>(a*b));


results[0].innerHTML = `Cгенерировали: ${arrayString}`;
results[1].innerHTML = `Минимальное: ${min}`;
results[2].innerHTML = `Максимальное: ${max}`;
results[3].innerHTML = `Среднее арифметическое: ${average}`;
results[4].innerHTML = `Сумма чисел: ${sum}`;
results[5].innerHTML = `Произведение чисел: ${multiplication}`;