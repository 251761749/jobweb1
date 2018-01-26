
$(function lx() {
    $(".contactusdiyou").hover(function() {
        $(".hoverimg").attr("src","images/hoverbtnbg1.gif");
        $('.diyoumask').fadeIn();
        $('.contactusdiyou').animate({right:'0'},300);
    }, function() {
        $(".hoverimg").attr("src","images/hoverbtnbg.gif");
        $('.contactusdiyou').animate({right:'-230px'},300,function(){});
        $('.diyoumask').fadeOut();
    });
});