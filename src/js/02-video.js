import  throttle  from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStorageKey = "videoplayer-current-time";


const newArr = function ({seconds}) {
    localStorage.setItem(localStorageKey, seconds);
};
player.on('timeupdate', throttle(newArr, 1000))

player.setCurrentTime(localStorage.getItem(localStorageKey));

// localStorage.clear();