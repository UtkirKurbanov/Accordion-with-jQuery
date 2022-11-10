$(function () {
    class tabs {
        constructor(argument) {
            $(argument).find('.tab-content').not('.active').hide();
            $(argument).find('.tab-item').click(function() {
                $(argument).find('.tab-item').removeClass('active').eq($(this).index()).addClass('active');
                $(argument).find('.tab-content').hide().eq($(this).index()).slideDown(1000);
            })
        }    
    }

    let wrap = $('.wrapp');

    for(let i of wrap) {
        i = new tabs(i);
    }


    class tab {
        constructor(arg1) {
            $(arg1).find('.text').not('.active').hide();
            $(arg1).find('.logo').click(function() {
                $(arg1).find(this).next().slideToggle(500);
                $(arg1).find('.text').not($(this).next()).slideUp(500);
            })
        }
    }

    let wrapper = $('.wrapper');
    for(let i of wrapper) {
        i = new tab(i);
    }
})