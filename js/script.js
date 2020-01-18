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
$(this).attr("src", "assets/images/front/kalifront_ys.jpg");
}, function(){
$(this).attr("src", "assets/images/front/kalifront.jpg");
});

$("#helenfront").hover(function(){
$(this).attr("src", "assets/images/front/heritagefront2_ys.jpg");
}, function(){
$(this).attr("src", "assets/images/front/heritagefront2.jpg");
});

$("#mountfront").hover(function(){
$(this).attr("src", "assets/images/front/mountfront_ys.jpg");
}, function(){
$(this).attr("src", "assets/images/front/mountfront.jpg");
});

$("#christyfront").hover(function(){
$(this).attr("src", "assets/images/front/heritagefront_ys.jpg");
}, function(){
$(this).attr("src", "assets/images/front/heritagefront.jpg");
});

$("#hubfront").hover(function(){
$(this).attr("src", "assets/images/front/hubfront_ys.jpg");
}, function(){
$(this).attr("src", "assets/images/front/hubfront.jpg");
});

$("#dcartfront").hover(function(){
$(this).attr("src", "assets/images/front/dcartfront_ys.jpg");
}, function(){
$(this).attr("src", "assets/images/front/dcartfront.jpg");
});
}
