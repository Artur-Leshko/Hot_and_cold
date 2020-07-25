import LetterCreator from './LetterCreator';

let menu = document.querySelector('.settings__menu');
let restart = document.querySelector('.settings__restart');
let volumeOn = document.querySelector('.settings__volume-on');
let volumeOff = document.querySelector('.settings__volume-off');

let main_menu = document.querySelector('.main_menu');

menu.addEventListener('click', function(event) {
    if(main_menu.style.display !== 'none') {
        main_menu.style.display = 'none';
    } else {
        main_menu.style.display = 'flex';
    }
});

restart.addEventListener('click', function(event) {
    for(let letter of document.querySelectorAll('.letter')) {
        letter.remove();
    }

    for(let i = 0; i < 10; i++) {
        let letter = new LetterCreator('a', false);
        letter.addLetter();
    }
});

volumeOn.addEventListener('click', function(event) {
    volumeOn.style.display = 'none';
    volumeOff.style.display = 'inline-block';
});

volumeOff.addEventListener('click', function(event) {
    volumeOff.style.display = 'none';
    volumeOn.style.display = 'inline-block';
});
