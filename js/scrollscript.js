/*****************

Kevin G Lam Portfolio
Kevin G Lam
js Script for website

******************/
"use strict";

$(document).ready(setup);



function setup() {

  $("a").on('click', function(event) {

     if (this.hash !== "") {
       event.preventDefault();


       var hash = this.hash;

       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 550, function(){

         window.location.hash = hash;
       });
     }
   });

}
