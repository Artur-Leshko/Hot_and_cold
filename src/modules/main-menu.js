import LetterCreator from './LetterCreator';

let startButton = document.querySelector('.start_button');
let exitButton = document.querySelector('.exit_button');

startButton.addEventListener('click', function(event) {
    document.querySelector('.main_menu').style.display = 'none';

    for(let letter of document.querySelectorAll('.letter')) {
        letter.remove();
    }

    for(let i = 0; i < 10; i++) {
        let letter = new LetterCreator('a', false);
        letter.addLetter();
    }
});

exitButton.addEventListener('click', function(event) {
    window.close();
});
