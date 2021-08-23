
  /***navbar fixed **/
$(window).scroll(function(){
    if($(window).scrollTop() > 10) {
        $(".navbar").addClass("fixed");
        document.getElementById("imageid").src="../template/save.png";
    } else {
      $(".navbar").removeClass("fixed");
    }
  });
  
  /** fin navar fixed ****/