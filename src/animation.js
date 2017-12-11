import {TweenMax} from 'gsap';


const duration = 2;

export default {
    show(target, cb) {
        return TweenMax
        .from(target, duration, {
            height: 0,
            width:0,
            onComplete() {
                cb()
            }
        })
    }
}