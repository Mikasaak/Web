window.addEventListener('load', function () {

    
    let timer = null;
    let ul = document.querySelector('.focus ul');
    let points = document.querySelector('.focus ol');
    let width = document.querySelector('.focus').offsetWidth;
    let index = 0;
    timer = setInterval(function () {
        index++;
        var translatex = -index * width;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);

    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            this.style.transition = 'none';
            let transformx = -index * width;
            this.style.transform = 'translateX(' + transformx + 'px)';
        }
        else if (index < 0) {
            index = 2;
            this.style.transition = 'none';
            let transformx = -index * width;
            this.style.transform = 'translateX(' + transformx + 'px)';
        }
        points.querySelector('.current').classList.remove('current');
        points.children[index].classList.add('current');
    });

    let startX = 0;
    let moveX = 0;
    ul.addEventListener('touchstart',function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer)
        // console.log(startX);
    })
    let flage = false;
    ul.addEventListener('touchmove', function (e) { 
        e.preventDefault();
        moveX = e.targetTouches[0].pageX - startX;
        // console.log(startX);
        // console.log(moveX);
        this.style.transition = 'none';
        let transformX = -index * width + moveX;
        this.style.transform = 'translateX(' + transformX + 'px)';
        flage = true;
    })
    ul.addEventListener('touchend', function (e) {
        if (flage === true) {
            if (Math.abs(moveX) >= 50) {
                if (moveX > 0) {
                    index--;
                }
                else {
                    index++;
                }
                let translatex = -index * width;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
            else {
                let translatex = -index * width;
                ul.style.transition = 'all .15s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        clearInterval(timer);
        timer = setInterval(function () {
        index++;
        var translatex = -index * width;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    })
    let goback = document.querySelector('.goBack');
    let nav = document.querySelector('nav');
    let Top = nav.offsetTop;
    window.addEventListener('scroll', function (e) {
       
        if (window.scrollY >= Top) {
            goback.style.display = 'block';
            console.log(1111);
        }
        else {
            goback.style.display = 'none';
        }
    })
    goback.addEventListener('click', function (e) {
        window.scrollTo(0, 0);  
    })

})