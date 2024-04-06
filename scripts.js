const dino = document.getElementById('dino');

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.code === 'Space') {
        let bottomPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
        if (bottomPosition < 100) {
            return;
        }
        let timerId = setInterval(() => {
            if (bottomPosition >= 150) {
                clearInterval(timerId);
                let downTimerId = setInterval(() => {
                    if (bottomPosition <= 0) {
                        clearInterval(downTimerId);
                    }
                    bottomPosition -= 5;
                    dino.style.bottom = bottomPosition + 'px';
                }, 20);
            }
            bottomPosition += 30;
            dino.style.bottom = bottomPosition + 'px';
        }, 20);
    }
}
