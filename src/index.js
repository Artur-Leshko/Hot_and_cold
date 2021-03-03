import { scale } from './modules/scale';
import Menu from './modules/Menu';
import './styles/style';

let myMenu = new Menu();

myMenu.startBtn.addEventListener('click', (event) => myMenu.onStartBtnClick.call(myMenu)); // event on StartBtn, spawns letters
myMenu.exutBtn.addEventListener('click', (event) => myMenu.onExitBtnClick.call(myMenu)); // event on ExitBtn, closes the window
myMenu.menuBtn.addEventListener('click', (event) => myMenu.onMenuBtnClick.call(myMenu)); // event on MenuBtn, shows or closes main menu
myMenu.restartBtn.addEventListener('click', (event) => myMenu.onRestartBtnClick.call(myMenu)); // event on RestartBtn, restarts the game
myMenu.volumeOnBtn.addEventListener('click', (event) => myMenu.onVolumeOnBtnClick.call(myMenu)); // event on VolumOnBtn, turns on the music
myMenu.volumeOffBtn.addEventListener('click', (event) => myMenu.onVolumeOffBtnClick.call(myMenu)); // event on VolumeOffBtn, turns off the music

document.body.addEventListener('mousemove', function(event) {
    let closestRightLetter = myMenu.arrOfLatters[0];
    let distance = Math.sqrt(Math.pow((closestRightLetter.coords.x - event.clientX), 2) + Math.pow((closestRightLetter.coords.y - event.clientY), 2))
    let newDistance = 0;

    myMenu.arrOfLatters.map(item => {
        newDistance = Math.sqrt(Math.pow((item.coords.x - event.clientX), 2) + Math.pow((item.coords.y - event.clientY), 2))
        if(distance > newDistance) {
            distance = newDistance;
            closestRightLetter = item;
        }
    })

    scale(closestRightLetter, distance);
});
