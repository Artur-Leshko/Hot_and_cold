import { spawnLetters } from '../utils/spawnLetters';

let startButton = document.querySelector('.start_button');
let exitButton = document.querySelector('.exit_button');


startButton.addEventListener('click', spawnLetters);

exitButton.addEventListener('click', function(event) {
    window.close();
});
