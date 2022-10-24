$(document).ready(function () {

  var tt = 600;
  /*   $(".box1").animate({ opacity: 1 }, tt, function () {
      $(".box2").animate({ opacity: 1 }, tt, function () {
        $(".box3").animate({ opacity: 1 }, tt);
      });
    }); */

  /*   $(".box1").animate({ opacity: 1 }, tt, function () {
      $(".box2").animate({ opacity: 1 }, tt, function () {
        $(".box3").animate({ opacity: 1 }, tt)
      })
    })
   */

  $(".box1").animate({ opacity: 1 }, tt, function () {
    $(".box2").animate({ opacity: 1 }, tt, function () {
      $(".box3").animate({ opacity: 1 }, tt)
    })
  })

});