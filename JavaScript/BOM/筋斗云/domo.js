
window.addEventListener('load',function (){
    let lists = document.querySelectorAll('ul li');
    let cloud = document.querySelector('.cloud');
    let pos = 0;
    for (let list of lists) {
        console.log(list)
        list.addEventListener('mouseenter',function (){
            animate(cloud,this.offsetLeft)
            console.log(12121)
        })
        list.addEventListener('mouseleave',function (){
            animate(cloud,pos);
            // this.children[0].style.color = '#333';
        })
        list.addEventListener('click',function () {
            for (let a of document.querySelectorAll('ul a')) {
                a.style.color = '#333';
            }
            this.children[0].style.color = 'red';
            pos = this.offsetLeft;
        })
    }

})