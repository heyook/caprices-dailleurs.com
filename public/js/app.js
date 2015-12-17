(function() {
  $(document).ready(function() {
    var h, m, n, s, w;
    w = $(window).width();
    h = $(window).height();
    n = $("form.secret").height();
    m = (h - n) / 2;
    $(".content.full").css({
      "height": "" + h + "px",
      "width": "" + w + "px"
    }).removeClass("loading").addClass("animated fadeIn");
    s = w * 768 / 1024;
    $(".content.section section").css({
      "height": "" + s + "px",
      "width": "" + w + "px"
    });
    $("form.secret").css({
      "margin-top": "" + m + "px"
    });
    $("form.secret").keypress(function(e) {
      if (e.keyCode === 13) {
        $("form.secret input[type=button]").click();
        return false;
      }
    });
  });

}).call(this);
