function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
function Myanimate(element, distance, duration,pages) {
    element.animate = false;//设置一个属性来看是否有动画
    if (element.animate === false) {//若没有进行
        element.animate = true;//设置标识符为true
        let start = null;
        if (!element.style.left) {
            element.style.left = '0px'
        }
        console.log(element.style.left)

        let originLeft = element.style.left;
        let reg = /(.*)px/
        let oL = Number(originLeft.match(reg)[1]);
        console.log(oL)
        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }

            let progress = timestamp - start;
            let percent = Math.min(progress / duration, 1);
            // console.log('o:' + (oL + percent * distance))
            // console.log('ss:' + pages*distance)
            if(distance<0){
                if (oL + percent * distance <= pages*distance){
                    element.style.left = 0 + "px";
                    // console.log(true)
                }
                else{
                    element.style.left =  oL + percent * distance + "px";
                }
            }
            else {
                if (oL >= 0){
                    element.style.left = -pages*distance + "px";
                    oL = Number(element.style.left.match(reg)[1])
                    console.log(-pages*distance + "px")
                    console.log(`下一张true1231`)
                }
                if (oL < 0)  {
                    element.style.left =  oL + percent * distance + "px";
                }

            }

            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }
    element.animate = false;

}