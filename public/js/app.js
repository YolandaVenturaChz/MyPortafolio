$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
        $("#intro-text").removeClass("none");
        $("#info").addClass("none");
        $("#info1").addClass("none");
    }
    else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");
        $("#intro-text").addClass("none");
        $("#info").removeClass("none");
        $("#info1").removeClass("none");
    }
});
(function($){
    $(function(){
  
      $('.button-collapse').sideNav();
      $('.parallax').parallax();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space