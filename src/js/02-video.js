/*
+Ознайомся з документацією бібліотеки Vimeo плеєра.
+Додай бібліотеку як залежність проекту через npm.
+Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
+Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
+Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
+Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
+Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
*/

const ownerDoc = document.querySelector('#vimeo-player');
const KEY = "videoplayer-current-time";
const player = new Vimeo.Player(ownerDoc);
const funcThrottle = require('lodash/throttle');
/*
player.on('timeupdate', e =>
{
    funcThrottle(e => {console.log(e.seconds);}, 1000); //doesnt work
    console.log(e.seconds); // work
});
*/

player.on('timeupdate',
    funcThrottle(e => {
        // lodash/throttle - has time inaccuracy
        // console.log(`${e.seconds} - ${new Date().getUTCMilliseconds()}`);
        localStorage.setItem(KEY, e.seconds);
    }, 1000));
player.setCurrentTime(Number(localStorage.getItem(KEY)));