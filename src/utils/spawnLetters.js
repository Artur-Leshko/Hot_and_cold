import LetterCreator from '../modules/LetterCreator';
import { letters_and_words } from './words-and-letters';

function recreateFieldOfRightLetters() {
    document.querySelector('.right_letters_field').remove();

    const fieldOfRightLetters = document.createElement('div');

    fieldOfRightLetters.className = 'right_letters_field';
    fieldOfRightLetters.style.display = 'flex';

    document.body.appendChild(fieldOfRightLetters);
}

export function spawnLetters() {
    let letters = [];
    let rightLetters = [];
    let randomLetters = letters_and_words.randomLetters();
    let parsedWord = letters_and_words.parseOnLetters(Math.floor(Math.random() * letters_and_words.arrayOfWords.length));

    document.querySelector('.main_menu').style.display = 'none';

    for(let letter of document.querySelectorAll('.letter')) {
        letter.remove();
    }

    for(let i = 0; i < 40; i++) {
        let letter = new LetterCreator(randomLetters[i], false);
        letter.addLetter(letters);
        letters.push(letter);
    }

    recreateFieldOfRightLetters();

    for(let element of parsedWord) {
        let letter = new LetterCreator(element, true);
        letter.addLetter(letters);
        letters.push(letter);
        rightLetters.push(letter);
    }

    return rightLetters;
}
