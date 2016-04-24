$('#fullpage').fullpage({anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
        menu: "#mainMenu"});

$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#mainMenu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
        afterResize: function () {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });

    $('#slider').bxSlider({
        responsive: true,
        mode: 'fade',
        pager: false,
        auto: true,
        speed: 1800,
        adaptiveHeightSpeed: 1100,
        controls: true,
        minSlides: 3,
        maxSlides: 3
    });

    $('#slider2').bxSlider({
        responsive: true,
        mode: 'fade',
        pager: false,
        auto: true,
        speed: 1800,
        adaptiveHeightSpeed: 1100,
        controls: true,
        minSlides: 3,
        maxSlides: 3
    });

});


