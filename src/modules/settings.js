import LetterCreator from './LetterCreator';
import { letters_and_words } from './words-and-letters';

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
    let letters = [];
    let randomLetters = letters_and_words.randomLetters();
    let parsedWord = letters_and_words.parseOnLetters(Math.floor(Math.random() * letters_and_words.arrayOfWords.length));

    document.querySelector('.main_menu').style.display = 'none';

    for(let letter of document.querySelectorAll('.letter')) {
        letter.remove();
    }

    for(let i = 0; i < 30; i++) {
        let letter = new LetterCreator(randomLetters[i], false);
        letter.addLetter(letters);
        letters.push(letter);
    }

    for(let element of parsedWord) {
        let letter = new LetterCreator(element, true);
        letter.addLetter(letters);
        letters.push(letter);
    }

    console.log(letters);
});

volumeOn.addEventListener('click', function(event) {
    document.querySelector('audio').remove();

    volumeOn.style.display = 'none';
    volumeOff.style.display = 'inline-block';
});

volumeOff.addEventListener('click', function(event) {
    let audio = document.createElement('audio');

    audio.setAttribute('src', 'music.mp3');
    audio.setAttribute('autoplay', 'autoplay');
    audio.setAttribute('loop', 'loop');

    document.body.appendChild(audio);

    volumeOff.style.display = 'none';
    volumeOn.style.display = 'inline-block';
});

