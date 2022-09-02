/*****************

Kevin G Lam Portfolio
Kevin G Lam
js Script for website

******************/
"use strict";

$(document).ready(setup);



function setup() {


    $("#about").hover(function(){
  $(this).css("color", "#810FF5");
  }, function(){
  $(this).css("color", "white");
});

$("#work").hover(function(){
$(this).css("color", "#810FF5");
}, function(){
$(this).css("color", "white");
});

$("#cv").hover(function(){
$(this).css("color", "#810FF5");
}, function(){
$(this).css("color", "white");
});

$("#about2").hover(function(){
$(this).css("color", "#810FF5");
}, function(){
$(this).css("color", "black");
});

$("#work2").hover(function(){
$(this).css("color", "#810FF5");
}, function(){
$(this).css("color", "black");
});

$("#cv2").hover(function(){
$(this).css("color", "#810FF5");
}, function(){
$(this).css("color", "black");
});

$("#kalifront").hover(function(){
$(this).attr("src", "assets/images/clickme_y.jpg");
}, function(){
$(this).attr("src", "assets/images/front/kalifront.jpg");
});

$("#helenfront").hover(function(){
$(this).attr("src", "assets/images/clickme_y.jpg");
}, function(){
$(this).attr("src", "assets/images/frontjomo.jpg");
});

$("#mountfront").hover(function(){
$(this).attr("src", "assets/images/clickme_y.jpg");
}, function(){
$(this).attr("src", "assets/images/front/interludefront.jpg");
});

$("#christyfront").hover(function(){
$(this).attr("src", "assets/images/clickme_y.jpg");
}, function(){
$(this).attr("src", "assets/images/front/chimerafront.jpg");
});

$("#hubfront").hover(function(){
$(this).attr("src", "assets/images/clickme_y.jpg");
}, function(){
$(this).attr("src", "assets/images/front/ryusumfront.jpg");
});

$("#dcartfront").hover(function(){
$(this).attr("src", "assets/images/clickme_y.jpg");
}, function(){
$(this).attr("src", "assets/images/grayfront.jpg");
});

$("#downloadcv").hover(function(){
$(this).attr("src", "assets/images/downloadcv2.svg");
}, function(){
$(this).attr("src", "assets/images/downloadcv.svg");
});

$("#seemoreani").hover(function(){
$(this).attr("src", "assets/images/seemore2.svg");
}, function(){
$(this).attr("src", "assets/images/seemore.svg");
});

$("#behan").hover(function(){
$(this).attr("src", "assets/images/behance2.svg");
}, function(){
$(this).attr("src", "assets/images/behance.svg");
});


}
