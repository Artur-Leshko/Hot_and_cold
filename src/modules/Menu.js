import { spawnLetters } from '../utils/spawnLetters';

export default class Menu {
    constructor() {
        this.startBtn = document.querySelector('.start_button');
        this.exutBtn = document.querySelector('.exit_button');
        this.menuBtn = document.querySelector('.settings__menu');
        this.restartBtn = document.querySelector('.settings__restart');
        this.volumeOnBtn = document.querySelector('.settings__volume-on');
        this.volumeOffBtn = document.querySelector('.settings__volume-off');
        this.main_menu = document.querySelector('.main_menu');
        this.arrOfLatters = [];
    }

    onStartBtnClick() {
        let toDelete;
        this.arrOfLatters = spawnLetters();

        this.arrOfLatters.map((item, index) => {
            toDelete = document.getElementById(`${item.letterId}`);
            toDelete.addEventListener('click', (event) => {
                toDelete.remove();
                this.arrOfLatters.splice(index, 1);
            });
        });
    }

    onExitBtnClick() {
        window.close();
    }

    onMenuBtnClick() {
        if(this.main_menu.style.display !== 'none') {
            this.main_menu.style.display = 'none';
        } else {
            this.main_menu.style.display = 'flex';
        }
    }

    onRestartBtnClick() {
        this.arrOfLatters = spawnLetters();
    }

    onVolumeOnBtnClick() {
        document.querySelector('audio').remove();

        this.volumeOnBtn.style.display = 'none';
        this.volumeOffBtn.style.display = 'inline-block';
    }

    onVolumeOffBtnClick() {
        let audio = document.createElement('audio');

        audio.setAttribute('src', 'music.mp3');
        audio.setAttribute('autoplay', 'autoplay');
        audio.setAttribute('loop', 'loop');

        document.body.appendChild(audio);

        this.volumeOffBtn.style.display = 'none';
        this.volumeOnBtn.style.display = 'inline-block';
    }
}
