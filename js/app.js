/*
Author: Faiz Ichsan Jaya
Last updated: 8/2/2023

*/

var app = {
    init: function () {
        app.tinySlider();
        app.accordion();
        app.modal();
        app.copyToClipboard();
    },
    tinySlider: () => {
        var container = '.slideshow';
        if(typeof(container) != 'undefined' && container != null) {
            document.querySelectorAll(container).forEach(slider => {
                console.log(slider);
                var slider1 = slider;
                var sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
                var sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
                var sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
                var sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

                var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
                var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
                var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
                var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
                var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
                var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

                var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
                var sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
                var sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
                var sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

                var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
                var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
                var sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
                var sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
                var sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
                var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
                var sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
                var sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
                var sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
                // Check if document DIR is RTL
                var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
                var sliderDirection;
                if (ifRtl === 'rtl') {
                    sliderDirection = 'rtl';
                }
                var tnsSlider = tns({
                    container: slider,
                    mode: sliderMode,
                    axis: sliderAxis,
                    gutter: sliderSpace,
                    edgePadding: sliderEdge,
                    speed: sliderSpeed,
                    autoWidth: sliderautoWidth,
                    controls: sliderArrow,
                    nav: sliderDots,
                    autoplay: sliderAutoPlay,
                    autoplayTimeout: sliderAutoPlayTime,
                    autoplayHoverPause: sliderHoverPause,
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    controlsPosition: top,
                    navPosition: top,
                    autoplayPosition: top,
                    controlsText: [
                        '<i class="las la-angle-left"></i>',
                        '<i class="las la-angle-right"></i>'
                    ],
                    loop: sliderLoop,
                    rewind: sliderRewind,
                    autoHeight: sliderAutoHeight,
                    fixedWidth: sliderfixedWidth,
                    touch: sliderTouch,
                    mouseDrag: sliderDrag,
                    arrowKeys: true,
                    items: sliderItems,
                    textDirection: sliderDirection,
                    responsive: {
                        0: {
                            items: Number(sliderItemsXs)
                        },
                        576: {
                            items: Number(sliderItemsSm)
                        },
                        768: {
                            items: Number(sliderItemsMd)
                        },
                        992: {
                            items: Number(sliderItemsLg)
                        },
                        1200: {
                            items: Number(sliderItemsXl)
                        }
                    }
                });
            });
        }
    },
    accordion: () => {
        const items = document.querySelectorAll(".accordion > .accordion-item > div");

        function toggleAccordion() {
            // const itemToggle = this.getAttribute("aria-expanded");
            const itemToggle = this.classList.contains("expanded");

            for (i = 0; i < items.length; i++) {
                items[i].classList.remove("expanded");
            }

            if (!itemToggle) {
                this.classList.add("expanded");
            }
        }

        items.forEach((item) => item.addEventListener("click", toggleAccordion));
    },
    modal:() => {
        MicroModal.init();
    },
    copyToClipboard:() => {
        let copyText = document.querySelector("[class*='copy-text']");
        copyText.querySelector("button").addEventListener("click", function () {
            let input = copyText.querySelector("input.text");
            input.select();
            document.execCommand("copy");
            copyText.classList.add("active");
            window.getSelection().removeAllRanges();
            setTimeout(function () {
                copyText.classList.remove("active");
            }, 1500);
        });

    }
};
  
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
  