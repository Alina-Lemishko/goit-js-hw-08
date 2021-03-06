// Imports
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


// Variables
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStorageKey = "videoplayer-current-time";

// Functions
const playerKeyTime = function ({seconds}) {
    localStorage.setItem(localStorageKey, seconds);
};

player.on('timeupdate', throttle(playerKeyTime, 1000))

player.setCurrentTime(localStorage.getItem(localStorageKey)).then(function(seconds) {
  seconds = localStorage.getItem(localStorageKey);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        alert("the time was less than 0 or greater than the video’s duration");
            break;
    }
});