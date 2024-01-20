let poems = [
    {
        poemText: `
        <p>
            С Новым годом! Волшебства,<br>
            Смеха, счастья и тепла,<br>
            Мира, радостей, достатка<br>
            И во всех делах порядка! <br>
        </p>
        <p>
            Пусть все серое, плохое <br>
            Старый год возьмет с собою. <br>
            Впредь лишь светлые мгновенья <br>
             Создают пусть настроенье! <br>
        </p>`,
        bg: `URL(img / xmas_pin.jpg)`
    },
    {
        poemText: `
        <p>
            Желаю мира и добра,<br>
            Любви, душевного тепла! <br>
            Пускай вам этот Новый год<br>
            Успех и радость принесет! <br>
        </p>
        <p>
            Пусть Новый год откроет двери <br>
            мир волшебства, заботы, веры. <br>
            И всё хорошее начнется! <br>
            Удача пусть вам улыбнется! <br>
        </p>`,
        bg: `URL(img / xmas_pin.jpg)`
    }
]

let wrapper = document.querySelector('.wrapper')
let btn = document.getElementById('btn')
let poem = document.querySelector('.content__poem')

//Math - это объект, хранящий в себе различные математические константы 
//и функции типа вычисления квадратного корня.
//Обычно используется для генерации случайных чисел или округления  

// Math.floor() - округление до целого числа в меньшую сторону
// Math.random() - генерация псевдослучайных чисел от 0 до 1 не включая 1
btn.addEventListener('click', function () {
    let randomIndex;
    let randomBg;

    randomIndex = Math.floor(Math.random() * poems.length);
    console.log(randomIndex)
    poem.innerHTML = '';
    poem.innerHTML = poems[randomIndex].poemText;
})