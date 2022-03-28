window.onload = function() {
  $('.accordion .title').click(function () {
            $('.accordion .title').not($(this).parent()).removeClass('active');
            $('.accordion .panel').not($(this).next()).slideUp(300);



            $(this).next().slideToggle(300);
        });
}
$(function(){
  $('.number').each(function () {
    var start = 0;
    var stop = $(this).text();
    //Animate
    //hàm prop = attr nhưng khác ở chỗ là prop ko hiển thị trong trang web, thêm thuộc tính ngầm
    //Set counter = start (bằng 0)
    $(this).prop('counter', start).animate({
      //chạy đến count bằng stop (bằng giá trị của text)
      counter: stop
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        // now là giá trị của counter được tăng theo thời gian
        $(this).text(Math.ceil(now));//ceil: làm tròn lên
      }
    });
    //End animate

  });
});
