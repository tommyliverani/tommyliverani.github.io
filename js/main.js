jQuery(document).ready(function($) {

    'use strict';


        $(".Modern-Slider").slick({
            autoplay:true,
            speed:1000,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            fade: true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
          });

        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });


        $('.tabgroup > div').hide();
            $('.tabgroup > div:first-of-type').show();
            $('.tabs a').click(function(e){
              e.preventDefault();
                var $this = $(this),
                tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
                others = $this.closest('li').siblings().children('a'),
                target = $this.attr('href');
            others.removeClass('active');
            $this.addClass('active');
            $(tabgroup).children('div').hide();
            $(target).show();
          
        })



        $(".box-video").click(function(){
          $('iframe',this)[0].src += "&amp;autoplay=1";
          $(this).addClass('open');
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:30,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }
        })



        var contentSection = $('.content-section, .main-banner');
        var navigation = $('nav');
        
        //when a nav link is clicked, smooth scroll to the section
        navigation.on('click', 'a', function(event){
            event.preventDefault(); //prevents previous event
            smoothScroll($(this.hash));
        });
        
        //update navigation on scroll...
        $(window).on('scroll', function(){
            updateNavigation();
        })
        //...and when the page starts
        updateNavigation();
        
        /////FUNCTIONS
        function updateNavigation(){
            contentSection.each(function(){
                var sectionName = $(this).attr('id');
                var navigationMatch = $('nav a[href="#' + sectionName + '"]');
                if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
                      ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
                    {
                        navigationMatch.addClass('active-section');
                    }
                else {
                    navigationMatch.removeClass('active-section');
                }
            });
        }
        function smoothScroll(target){
            $('body,html').animate({
                scrollTop: target.offset().top
            }, 800);
        }


        $('.button a[href*=#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top -0 }, 500, 'linear');
        });


        ///// Language Switching (2 languages: English and Chinese). /////
        
        // Initially disable language switching button.
        /* $('#switch-lang').css({'pointer-events':'none',
            'cursor':'default'}).attr('disabled','disabled');
        
        function langButtonListen() {
            $('#switch-lang').click(function (event) {
                event.preventDefault();
                $('[lang="zh"]').toggle();
                $('[lang="en"]').toggle();
                // Switch cookie stored language.
                if ($.cookie('lang') === 'en') {
                    $.cookie('lang', 'zh', { expires: 7 });
                } else {
                    $.cookie('lang', 'en', { expires: 7 });
                }
            });
            // Enable lang switching button.
            $('#switch-lang').css({'pointer-events':'auto', 'cursor':'pointer'}).removeAttr('disabled');
        }
        
        // Check if language cookie already exists.
        if ($.cookie('lang')) {
            var lang = $.cookie('lang');
            if (lang === 'it') {
                $('[lang="en"]').hide();
                langButtonListen();
            } else {
                $('[lang="it"]').hide();
                langButtonListen();
            }
        } else {
            // no cookie set, so detect language based on location.
            if ("geolocation" in navigator) {
                // geolocation is available
                navigator.geolocation.getCurrentPosition(function (position) {
                    // accepted geolocation so figure out which country
                    var lat = position.coords.latitude, lng = position.coords.longitude;
                    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&sensor=true', null, function (response) {
                        var country = response.results[response.results.length-1].formatted_address;
                        if (country ===  'Italy') {
                            $('[lang="en"]').hide();
                            $.cookie('lang', 'it', { expires: 7 });
                            langButtonListen();
                        } else {
                            $('[lang="it]').hide();
                            $.cookie('lang', 'en', { expires: 7 });
                            langButtonListen();
                        }
                    }).fail(function (err) {
                        console.log('error: '+err);
                        $('[lang="en"]').hide();
                        $.cookie('lang', 'it', { expires: 7 });
                        langButtonListen();
                    });
                },
                function (error) {
                    if (error.code == error.PERMISSION_DENIED) {
                    // denied geolocation
                        $('[lang="en"]').hide();
                        $.cookie('lang', 'it', { expires: 7 });
                        langButtonListen();
                    } else {
                        console.log('Unknown error. Defaulting to Italian!');
                        $('[lang="en"]').hide();
                        $.cookie('lang', 'it', { expires: 7 });
                        langButtonListen();
                    }
                });
            } else {
                // geolocation IS NOT available
                $('[lang="en"]').hide();
                $.cookie('lang', 'it', { expires: 7 });
                langButtonListen();
            }
        }*/

        $(function() {
            $('#toggle-event').change(function() {
              document.body.className = $(this).data($(this).prop("checked").toString());
            });   
          });

});