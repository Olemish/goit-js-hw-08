import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
  
const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", `${data.seconds}`)
    console.log(localStorage)
};

player.on('timeupdate',throttle(onPlay, 1000));

const videoPlayerTime = localStorage.getItem("videoplayer-current-time"); 
player.setCurrentTime(videoPlayerTime)
