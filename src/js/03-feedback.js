/*
+Відстежуй на формі подію input,
+і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких +зберігай поточні значення полів форми.
+Нехай ключем для сховища буде рядок "feedback-form-state".
+Під час завантаження сторінки перевіряй стан сховища,
+і якщо там є збережені дані, заповнюй ними поля форми.
+В іншому випадку поля повинні бути порожніми.
+Під час сабміту форми очищуй сховище і поля форми,
+а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
+Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
+Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
*/
//#region Import-helpers
import
{
    printFormToConsole,
    clearForm,
    initLocalStorage
} from './helpers.js';
//#endregion #

//#region Setup
const feedbackForm = document.querySelector('.feedback-form');
const KEY_STORAGE = 'feedback-form-state';
let valueStorage = initLocalStorage(KEY_STORAGE);
const funcThrottle = require('lodash/throttle');
//#endregion #

//#region Submit-form
feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    
    //clear localStorage
    localStorage.removeItem(KEY_STORAGE);
    
    //print to concole
    printFormToConsole(feedbackForm);
    
    //clear form
    clearForm(feedbackForm);
});
//#endregion #

//#region Change-form
feedbackForm.addEventListener('change', funcThrottle( e => {
    
    //prepare storage-obj by name with value
    valueStorage[e.target.name] = e.target.value;
    
    //set data to localStorage
    localStorage.setItem(KEY_STORAGE, JSON.stringify(valueStorage))
}, 500));
//#endregion #

//#region Start-page
document.addEventListener("DOMContentLoaded", () => {
    
    //add data to form from localStorage
    if (valueStorage)
    {
        Object
            .entries(valueStorage)
            .forEach(([name, value]) =>
                (feedbackForm.elements[name].value = value), );
    }
});
//#endregion #