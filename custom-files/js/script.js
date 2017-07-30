/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

function showQR(img) {
 var image = document.getElementById("coupon");
 if(img.src.match("qr")) {
  img.src = "custom-files/beer-coupon.svg";
 } else {
  img.src = "custom-files/qr-coupon.svg";
 }
}
