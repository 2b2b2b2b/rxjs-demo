import './style.less'
import Rx from 'rxjs/Rx';

const video = document.getElementById('video');
const anchor = document.getElementById('anchor');

const scroll = Rx.Observable.fromEvent(document,'scroll')
const mouseDown = Rx.Observable.fromEvent(video, 'mousedown')
const mouseUp = Rx.Observable.fromEvent(document, 'mouseup')
const mouseMove = Rx.Observable.fromEvent(document, 'mousemove')

scroll
    .map(e => anchor.getBoundingClientRect().bottom < 0)
    .subscribe(bool => {
        if(bool) {
            video.classList.add('video-fixed');
        } else {
            video.classList.remove('video-fixed');
        }
    })

mouseDown
    .filter(e => video.classList.contains('video-fixed'))
    .map(event => mouseMove.takeUntil(mouseUp))
    .concatAll()
    .withLatestFrom(mouseDown, (move, down) => {
       return {
           x: move.clientX - down.offsetX,
           y: move.clientY - down.offsetY
       }
    })
    .subscribe(pos => {
      video.style.left = pos.x + 'px';
      video.style.top = pos.y + 'px';
    })
