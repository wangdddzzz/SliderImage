var imgContent = $('.imgContent'),
    navDot = $('.nav-dot ul li'),
    navLeft = $('.nav-left'),
    navRight = $('.nav-right'),
    img = $('.imgContent img'),
    wrapper = $('.wrapper'),
    timer = 0,
    imgIndex = 1;

timer = setInterval(function(){
    sliderImage();
}, 2000);

navDot.on('click', function () {
    var $this = $(this);
    imgIndex = $this.index() + 1;
    imgContent.animate({
        'left': -imgIndex * 500 + 'px',
    }, 500);
});

navLeft.on('click', function () {
    imgIndex--;
    if(imgIndex == 0){
        navDot.eq(3).addClass('active').siblings().removeClass('active');
        imgContent.animate({
            'left' : -imgIndex * 500 + 'px',
        },200, function () {
            imgContent.css({
                'left' : -2000 + 'px',
            });
            imgIndex = 4;
        });
    }else {
        navDot.eq(imgIndex-1).addClass('active').siblings().removeClass('active');
        imgContent.animate({
            'left': -imgIndex * 500 + 'px',
        }, 200);
    }
});

navRight.on('click', function () {
    imgIndex++;
    if(imgIndex == 5){
        navDot.eq(0).addClass('active').siblings().removeClass('active');
        imgContent.animate({
            'left' : -imgIndex * 500 + 'px',
        },200, function () {
            imgContent.css({
                'left' : -500 + 'px',
            });
            imgIndex = 1;
        });
    }else{
        navDot.eq(imgIndex-1).addClass('active').siblings().removeClass('active');
        imgContent.animate({
            'left': -imgIndex * 500 + 'px',
        }, 200);
    }
});

//鼠标划入
wrapper.on('mouseenter', function () {
    clearInterval(timer);
    navLeft.removeClass('hide');
    navRight.removeClass('hide');
}).on('mouseleave', function () {
    timer = setInterval(function(){
        sliderImage();
    },2000);
    navLeft.addClass('hide');
    navRight.addClass('hide'); 
})

function sliderImage() {
    imgIndex++;
    //图像轮转
    if (imgIndex == 5) {
        imgContent.animate({
            'left': -imgIndex * 500 + 'px',
        }, 500, function () {
            imgContent.css({
                'left': '-500px',
            });
            imgIndex = 1;
        });
    } else {
        imgContent.animate({
            'left': -imgIndex * 500 + 'px',
        }, 500);
    }
    //图像索引点轮转
    navDot.eq(imgIndex-1).addClass('active').siblings().removeClass('active');
}
