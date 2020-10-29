// storeBtn_01.html button - start
const storeBtn_01 = document.getElementById('storeBtn_01');
const storeBtn_02 = document.getElementById('storeBtn_02');
const storeBtn_03 = document.getElementById('storeBtn_03');
const storeBtn_04 = document.getElementById('storeBtn_04');

const meal_01 = document.getElementById('meal-01');
const meal_02 = document.getElementById('meal-02');
const meal_03 = document.getElementById('meal-03');
const meal_04 = document.getElementById('meal-04');

storeBtn_01.onclick = () => {
    storeBtn_01.classList.remove('store__button--nonPrimary');
    storeBtn_01.classList.remove('btn-light');
    storeBtn_01.classList.add('store__button--primary');
    storeBtn_01.classList.add('btn-warning');
    storeBtn_02.classList.remove('store__button--primary');
    storeBtn_02.classList.remove('btn-warning');
    storeBtn_03.classList.remove('store__button--primary');
    storeBtn_03.classList.remove('btn-warning');
    storeBtn_04.classList.remove('store__button--primary');
    storeBtn_04.classList.remove('btn-warning');
    
    meal_01.classList.remove('d-none');
    meal_02.classList.add('d-none');
    meal_03.classList.add('d-none');
    meal_04.classList.add('d-none');
};
storeBtn_02.onclick = () => {
    storeBtn_02.classList.remove('store__button--nonPrimary');
    storeBtn_02.classList.remove('btn-light');
    storeBtn_02.classList.add('store__button--nonPrimary');
    storeBtn_02.classList.add('btn-warning');
    storeBtn_01.classList.remove('store__button--primary');
    storeBtn_01.classList.remove('btn-warning');
    storeBtn_03.classList.remove('store__button--primary');
    storeBtn_03.classList.remove('btn-warning');
    storeBtn_04.classList.remove('store__button--primary');
    storeBtn_04.classList.remove('btn-warning');
    storeBtn_01.classList.add('store__button--nonPrimary');
    storeBtn_01.classList.add('btn-light');
    
    meal_01.classList.add('d-none');
    meal_02.classList.remove('d-none');
    meal_03.classList.add('d-none');
    meal_04.classList.add('d-none');
};
storeBtn_03.onclick = () => {
    console.log('btn0202');
    storeBtn_03.classList.remove('store__button--nonPrimary');
    storeBtn_03.classList.remove('btn-light');
    storeBtn_03.classList.add('store__button--nonPrimary');
    storeBtn_03.classList.add('btn-warning');
    storeBtn_01.classList.remove('store__button--primary');
    storeBtn_01.classList.remove('btn-warning');
    storeBtn_02.classList.remove('store__button--primary');
    storeBtn_02.classList.remove('btn-warning');
    storeBtn_04.classList.remove('store__button--primary');
    storeBtn_04.classList.remove('btn-warning');
    storeBtn_01.classList.add('store__button--nonPrimary');
    storeBtn_01.classList.add('btn-light');
    
    meal_01.classList.add('d-none');
    meal_02.classList.add('d-none');
    meal_03.classList.remove('d-none');
    meal_04.classList.add('d-none');
};
storeBtn_04.onclick = () => {
    console.log('btn0202');
    storeBtn_04.classList.remove('store__button--nonPrimary');
    storeBtn_04.classList.remove('btn-light');
    storeBtn_04.classList.add('store__button--nonPrimary');
    storeBtn_04.classList.add('btn-warning');
    storeBtn_01.classList.remove('store__button--primary');
    storeBtn_01.classList.remove('btn-warning');
    storeBtn_01.classList.add('store__button--nonPrimary');
    storeBtn_01.classList.add('btn-light');
    storeBtn_02.classList.remove('store__button--primary');
    storeBtn_02.classList.remove('btn-warning');
    storeBtn_03.classList.remove('store__button--primary');
    storeBtn_03.classList.remove('btn-warning');
    
    meal_01.classList.add('d-none');
    meal_02.classList.add('d-none');
    meal_03.classList.add('d-none');
    meal_04.classList.remove('d-none');
};
// storeBtn_01.html button - start