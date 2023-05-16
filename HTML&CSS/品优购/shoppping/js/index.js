window.addEventListener('DOMContentLoaded',function () {

// 用不到的轮播图动画
    // let focus = document.querySelector('.focus');
    // let lists = document.querySelectorAll('.focus ul li');
    // let ul = document.querySelector('.focus ul')
    // console.log(lists);
    // let next = document.querySelector('.focus .next');
    // let prev = document.querySelector('.focus .pre');
    // console.log(next);
    // console.log(prev);
    // let index = 0;
    // let num = 0;
    // console.log(ul.children[1])
    // let copy = ul.children[0].cloneNode(true);
    // console.log(copy)
    // ul.insertBefore(copy, null);
    // let  pages = 4;
    // let points = document.querySelector('.focus .point');
    // console.log(lists.length)
    // for(let i = 0;i<lists.length ;i++) {
    //     let span = document.createElement('span');
    //     if(i ===0) {
    //         span.classList.add('current')
    //     }
    //     span.setAttribute('index',''+(i))
    //     points.append(span);
    // }
    // for(let i = 0;i<points.children.length;i++) {
    //     // console.log(points.children[i]);
    //     points.children[i].addEventListener('click',function (){
    //         index = Number(this.getAttribute('index'));
    //         animate(ul,-index*focus.offsetWidth);
    //         let points = document.querySelectorAll('.focus .point span');
    //         console.log(points)
    //         for (let point of points) {
    //             point.classList.remove('current')
    //         }
    //         this.classList.add('current')
    //         circle = index = Number(this.getAttribute('index'));
    //     })
    // }
    // let circle = 0;
    // next.addEventListener('click',function (){
    //     if (index===ul.children.length-1) {
    //         ul.style.left = 0+'px';
    //         index = 0;
    //     }
    //     index++;
    //     circle++;
    //     circle = circle%4;
    //     for(let point of points.children) {
    //         point.classList.remove('current')
    //     }
    //     points.children[circle].classList.add('current')
    //     animate(ul,-(index)*focus.offsetWidth)
    //
    // })
    //
    // prev.addEventListener('click',function (){
    //     if (index===0) {
    //         index = ul.children.length - 1;
    //         ul.style.left = -index * focus.offsetWidth+'px';
    //     }
    //     index--;
    //     circle--;
    //     if (circle<0) {
    //         circle = points.children.length-1;
    //     }
    //     circle = circle%4;
    //     for(let point of points.children) {
    //         point.classList.remove('current')
    //     }
    //     points.children[circle].classList.add('current')
    //     animate(ul,-(index)*focus.offsetWidth)
    // })
    // let timer = setInterval(function () {
    //     next.click();
    // },3000)
    // focus.addEventListener('mouseenter',function (){
    //     clearInterval(timer);
    //     timer =null;
    // })
    // focus.addEventListener('mouseleave',function (){
    //     timer = setInterval(function () {
    //         next.click();
    //     },3000)
    // })

})