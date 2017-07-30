define(['facebook'], function(){
  FB.init({
    appId      : '{126894261260728}',
    version    : 'v2.10'
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});