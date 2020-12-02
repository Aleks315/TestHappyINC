$(document).ready(function() {
  let progressbar = $('.indicators__progress_diff'),
    min = progressbar.attr('min'),
    value = progressbar.val(),
    time = (1000/min)*2;

    function loading() {
      value += 1;

      let addValue = progressbar.val(value);

      if (value == min) {
        clearInterval(animate);
      }
    };

  let animate = setInterval(function() {
    loading();
  }, time);
});
