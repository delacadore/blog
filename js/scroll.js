(function() {
    // fallback if requestAnimationFrame unavailable
    var lastTime = 0;
    requestAnimationFrame = requestAnimationFrame || function(callback) {
        var curTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (curTime - lastTime));
        window.setTimeout(callback, timeToCall);
        lastTime = curTime + timeToCall;
    };

    // setup for scroll button
    var scrollAmount = 0;
    var scrollDuration = 0.5;
    var scrollStart, scrollLast;

    // work out what our scrollable element is
    var header = document.querySelector('.main-header');
    header.style.height = '2000px';
    var startingY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    window.scrollTo(0, startingY + 1);
    var scrollTopElement = document.documentElement.scrollTop === (startingY + 1) ? document.documentElement : document.body;
    window.scrollTo(0, startingY);
    header.style.height = '';

    var lastTime = 0;

    function startScroll(e) {
        e.preventDefault();
        scrollStart = scrollTopElement.scrollTop;
        scrollEnd = document.querySelector('.main-header').clientHeight;
        scrollStartTime = Date.now() / 1000;
        requestAnimationFrame(doScroll);
    }

    function doScroll() {
        var delta = ((Date.now() / 1000) - scrollStartTime) / scrollDuration;

        if(delta >= 1) {
            scrollTopElement.scrollTop = scrollEnd;
        } else {
            var eased = delta * delta * (3 - 2 * delta);
            var newScroll = scrollStart + (eased * (scrollEnd - scrollStart));
            scrollTopElement.scrollTop = newScroll;

            requestAnimationFrame(doScroll);
        }
    }

    document.querySelector('.scroll-arrow').addEventListener('click', startScroll);
})();
