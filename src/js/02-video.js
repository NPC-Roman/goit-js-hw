import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  console.log(evt);
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (currentTime) {
  player
    .setCurrentTime(currentTime)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'Error':
          console.log('error');
          break;

        default:
          console.log('some other error occurred');
          break;
      }
    });
}
