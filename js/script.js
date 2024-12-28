// Основна копка
const main__btn = document.querySelector('.main__btn');
// Текст основниї кнопки
const store__btn = document.querySelector('.store__btn');
// Кнопка покращення сили натиснення
const btn__PointUp = document.querySelector('#btn__PointUp');
// текст сили натиснення
const show__PointUp = document.querySelector('#show__PointUp');
// ціна купівлі сили натиснення
const price__PointUp = document.querySelector('#price__PointUp');



// Глобальна кількість балів
let globalPoint = 0;
// сила натиснення
let powerPressing = 1;
// ціна для сили натиснення
let price__powerPressing = 10;


// додавання балів 
function addPoint(){
  globalPoint += powerPressing;
}
// виведення балів на кнопку
function showPointInMain(){
  store__btn.textContent = globalPoint;
}

main__btn.addEventListener('click', addPoint);
main__btn.addEventListener('click', showPointInMain);


// збільшення сили натиснення
function addPowerPressing(){
  powerPressing++;
}
// виведення сили натиснення
function showPointUp(){
  show__PointUp.textContent = powerPressing;
}
// перерахунок ціни для сили натиснення
function recalculationPrice__powerPressing(){
  price__powerPressing = price__powerPressing*2 + powerPressing;
}
// виведення ціни для сили натиснення
function showPricePointUp(){
  price__PointUp.textContent = price__powerPressing;
}
// купівля сили натиснення
function purchasePowerPressing(){
  if (globalPoint>=price__powerPressing){
    globalPoint -= price__powerPressing;
    recalculationPrice__powerPressing();
    addPowerPressing();
    showPointInMain();
    showPointUp();
    showPricePointUp();
  }
  
}

btn__PointUp.addEventListener('click',purchasePowerPressing);
