/*****************

Kevin G Lam Portfolio
Kevin G Lam
js Script for website

******************/
"use strict";

$(document).ready(setup);



function setup() {


    $("#about").hover(function(){
  $(this).css("color", "#14d774");
  }, function(){
  $(this).css("color", "white");
});

$("#work").hover(function(){
$(this).css("color", "#14d774");
}, function(){
$(this).css("color", "white");
});

$("#cv").hover(function(){
$(this).css("color", "#14d774");
}, function(){
$(this).css("color", "white");
});

$("#about2").hover(function(){
$(this).css("color", "#14d774");
}, function(){
$(this).css("color", "black");
});

$("#work2").hover(function(){
$(this).css("color", "#14d774");
}, function(){
$(this).css("color", "black");
});

$("#cv2").hover(function(){
$(this).css("color", "#14d774");
}, function(){
$(this).css("color", "black");
});

$("#kalifront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/kalifront.jpg");
});

$("#kalifront2").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/ryubag.jpg");
});

$("#helenfront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/jomofront.jpg");
});

$("#mountfront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/audiblefront.jpg");
});

$("#christyfront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/chimerafront.jpg");
});

$("#hubfront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/ryusumfront.jpg");
});

$("#riotfront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/riotfront.jpg");
});

$("#hubfront2").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/ryucolfront.jpg");
});

$("#dcartfront").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/marvelfront.jpg");
});

$("#dcartfront2").hover(function(){
$(this).attr("src", "assets/images/front/jadeclick2.jpg");
}, function(){
$(this).attr("src", "assets/images/front/ryuvaporfront.jpg");
});

$("#downloadcv").hover(function(){
$(this).attr("src", "assets/images/jadedownloadcv2.svg");
}, function(){
$(this).attr("src", "assets/images/jadedownloadcv.svg");
});

$("#seemoreani").hover(function(){
$(this).attr("src", "assets/images/jadeseemore2.svg");
}, function(){
$(this).attr("src", "assets/images/jadeseemore.svg");
});

$("#behan").hover(function(){
$(this).attr("src", "assets/images/jadebehance2.svg");
}, function(){
$(this).attr("src", "assets/images/jadebehance.svg");
});


}
