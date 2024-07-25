$(document).ready(function () {
  /* get all imgs and push it in arr */
  let imgArr = [];
  $(".parent img").each(function () {
    imgArr.push($(this).attr("src"));
  });
  /* click on img */
  $(".parent img").click(function (e) {
    /* create the slider */
    let temp = `<div class="slider">
    <img src="${$(e.target).attr("src")}" class="w-100 h-100">
    <button class="btn btn-close"></button>
    <i class="fa-solid fa-2xl fa-arrow-left left-arr"></i>
    <i class="fa-solid fa-2xl fa-arrow-right right-arr"></i>
    </div>`;
    /* append the slider */
    $("body").append(temp);
    /* func to close the slider */
    sliderOptions();
    /* next */
    function next() {
      let index;
      for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i] == $(".slider img").attr("src")) {
          index = i;
        }
      }
      if (index >= imgArr.length - 1) {
        index = -1;
      }
      $(".slider img").attr("src", imgArr[index + 1]);
    }
    /* next btn */
    $(".right-arr").click(next);
    /* right keyboard arrow */
    $(document).on("keydown", function (e) {
      if (e.keyCode == 39) {
        next();
      }
    });
    /* prev*/
    function prev() {
      let index;
      for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i] == $(".slider img").attr("src")) {
          index = i;
        }
      }
      if (index == 0) {
        index = imgArr.length;
      }
      $(".slider img").attr("src", imgArr[index - 1]);
    }
    /* prev btn */
    $(".left-arr").click(prev);
    /* left keyboard arrow */
    $(document).on("keydown", function (e) {
      if (e.keyCode == 37) {
        prev();
      }
    });
  });
});
/* close the slider */
function sliderOptions() {
  /* to close the slider by X icon */
  $(".btn-close").click(function () {
    $(".slider").remove();
  });
  /* to close the slider by Esc */
  $(document).on("keydown", function (e) {
    if (e.key == "Escape") {
      $(".slider").remove();
    }
  });
}
