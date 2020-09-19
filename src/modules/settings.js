import { spawnLetters } from '../utils/spawnLetters';

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

restart.addEventListener('click', spawnLetters);

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

