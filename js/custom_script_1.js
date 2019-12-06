$(function(){
    var sideslider = $('[data-toggle=collapse-side]');
    var get_sidebar = sideslider.attr('data-target-sidebar');
    var get_content = sideslider.attr('data-target-content');
    sideslider.click(function(event){
    $(get_sidebar).toggleClass('in');
    $(get_content).toggleClass('out');
    });
    });