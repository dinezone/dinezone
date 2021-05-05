
axios.get('https://zoneapi.minezone.hu/getPlayerCount')
.then(response => {
    if(response.data.success)
        document.getElementById("oc").innerHTML = response.data.count;
    else
        console.log(response.data);
}).catch(error => console.log(error));

(function($) {
    'use strict';

    $(window).on( 'load', function(){
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        
        $('#preloader').delay(700).fadeOut('slow',function(){
          $(this).remove();
        });

        $('a.smooth_scroll').on("click", function (e) {
          e.preventDefault();
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top - 0
          }, 1);
      });

    });

    document.addEventListener('drag', event => event.preventDefault());

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

})(jQuery);