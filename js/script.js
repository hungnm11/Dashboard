(function(){

    var $images = ['tech1_1000x300.jpg','tech2_1000x300.jpg','tech3_1000x300.jpg'];
    
    $('#nav').affix({
        offset: {
            top: $('#nav').offset().top
        }
    });
    
    $(window).resize(function(e) {
        var div = $('#banner');
        var size = div.height()/3;
        $('#bannerthumb li img').css({
            height: size
        });
    });
    
    var size = $('#banner').height()/3;
    $('#bannerthumb li img').css({
            height: size
    });
    
    $('#bannerthumb li').click(function(e) {
        e.preventDefault();
        var img = 'img/' + $images[$(this).index()];
        console.log(img);
        $('.main-photo').hide().fadeIn('slow').attr('src',img);
        
        
    });
    
    var count = 1;
    function autoplay() {
        var img = 'img/' + $images[count];
        if ($images.length > count) {
            $('.main-photo').hide().fadeIn('slow').attr('src',img);
            count++;
        }  else {
            count = 0;
        }
        setTimeout(autoplay, 5000);
    }
    setTimeout(autoplay, 5000);
})();