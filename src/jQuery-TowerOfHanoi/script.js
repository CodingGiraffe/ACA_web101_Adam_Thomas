$(document).ready(function() {

    alert("Let's play Tower of Hanoi");

    let $block = null;
    
    $('[data-row]').click(function() {
      if ($block) {
        $(this).append($block);
        $block = null;
      } else {
        $block = $(this).children().last().detach();
      }
    })
  })