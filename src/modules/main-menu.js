import LetterCreator from './LetterCreator';
import { letters_and_words } from './words-and-letters';

let startButton = document.querySelector('.start_button');
let exitButton = document.querySelector('.exit_button');

startButton.addEventListener('click', function(event) {
    let randomLetters = letters_and_words.randomLetters();
    let parsedWord = letters_and_words.parseOnLetters(Math.floor(Math.random() * letters_and_words.arrayOfWords.length));

    document.querySelector('.main_menu').style.display = 'none';

    for(let letter of document.querySelectorAll('.letter')) {
        letter.remove();
    }

    for(let i = 0; i < 20; i++) {
        let letter = new LetterCreator(randomLetters[i], false);
        letter.addLetter();
    }

    for(let element of parsedWord) {
        let letter = new LetterCreator(element, true);
        letter.addLetter();
    }
});

exitButton.addEventListener('click', function(event) {
    window.close();
});
