// var myslide = 0;
// slideShow();
// function slideShow(){
//     var x = document.querySelectorAll('.slider__img');
//     for(var i=0; i<x.length; i++){
//         x[i].style.display = "none";
//     }
//     myslide++;
//     if(myslide > x.length){
//         myslide = 1;
//     }
//     x[myslide - 1].style.display = "block";
//     setTimeout(slideShow, 3000);
// }



$(document).ready(function(){
    $('.slider').slick({
      prevArrow: '',
      nextArrow: '',
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    });
});

$(document).ready(function(){
    $('.slide-des').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><i class="fas fa-arrow-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(document).ready(function(){
    $('.slide-sug').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick__sug-btn slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick__sug-btn slick-next"><i class="fas fa-arrow-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

document.querySelector('.reserve__item-customer').onclick = function(){
    document.querySelector('.reserve__item-guest').style.display = 'block';
    document.querySelector('.box-language').style.display = 'none';
}

document.querySelector('.reserve__item-time').onclick = function(){
    document.querySelector('.reserve__item-guest').style.display = 'none';
    document.querySelector('.box-language').style.display = 'none';
}

document.querySelector('.navbar-language').onclick = function(){
    document.querySelector('.box-language').style.display = 'flex';
    document.querySelector('.reserve__item-guest').style.display = 'none';
}



var BtnAdds = document.querySelectorAll('.reserve__guest-quantity-increase');
BtnAdds.forEach(function(btn){
    btn.onclick = function(){
        var curQuantity = Number(btn.previousElementSibling.innerText);
        btn.previousElementSibling.innerText = curQuantity + 1;
        btn.previousElementSibling.previousElementSibling.classList.remove('reserve__guest-quantity-current--no-click');
    }
})

var btnSubs = document.querySelectorAll('.reserve__guest-quantity-decrease');
btnSubs.forEach(function(btn){
    btn.onclick = function(){
        if(Number(btn.nextElementSibling.innerText) > 0){
            var curQuantity = Number(btn.nextElementSibling.innerText);
            btn.nextElementSibling.innerText = curQuantity - 1;
            if(curQuantity - 1 == 0){
                btn.classList.add('reserve__guest-quantity-current--no-click');
            }
        }
    }
})

document.querySelector('.reserve__item-clear').onclick = function(){
    console.log('cc');
    document.querySelectorAll('.reserve__guest-quantity-current').forEach(function(item){
        item.innerText = '0';
        item.previousElementSibling.classList.add('reserve__guest-quantity-current--no-click');
    })
}