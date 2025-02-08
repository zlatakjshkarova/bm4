let elem1 = document.getElementById('elem1');

let elem2 = document.getElementById('elem2');

let elem3 = document.getElementById('elem3');

elem1.addEventListener('click', () => {
    console.log('зеленый-погружение')
}, true)

elem1.addEventListener('click', () => {
    console.log('зеленый-всплытие')
}, false)

elem2.addEventListener('click', () => {
    console.log('голубой-погружение');

}, true)
elem2.addEventListener('click', () => {
    console.log('голубой-всплытие');

}, false)
elem2.addEventListener('click', () => {
    console.log('голубой-погружение');

}, true)
elem3.addEventListener('click', () => {
    console.log('красный-всплытие')

}, false)
elem3.addEventListener('click', () => {
    console.log('красный-погружение')

}, true)

//стадие погружения или true=всплытие

//event.stopImmediatePropagation()-полностью остонавлевает
//Метод event.stopPropagation()-остановка всплытия












