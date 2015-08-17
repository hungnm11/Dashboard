(function() {
    
    $(".myBtn").click(function(e) {
        e.preventDefault();
        $("#myModal").modal();
    });
    
    $('ul#nav > li > a').on('click', function(e) {
        //if submenu is hidden and does not active class
        if(!$(this).hasClass('active')) {
            
            // hide any open menus and remove active classes
            $('ul#nav li ul').slideUp(350);
            $('ul#nav li a').removeClass('active');
            
            // open submenu and add the active class
            $(this).next('ul').slideDown(350);
            $(this).addClass('active');
        
        //if submenu visible
        } else if($(this).hasClass('active')) {
            
            // hide submenu and remove active class
            $(this).removeClass('active');
            $(this).next('ul').slideUp(350);
        }
    });
    
})();