$(function() {

    alert("Welcome to your To-Do list. Let's get started");

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');
  
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      let text = $('input[type="text"]').val();
      $list.append(`<li>${text}</li>`);
      $('input[type="text"]').val('');
    });
  
    $list.on('click', 'li', function() {
      let $this = $(this);
      $this.remove();
    });

    $("#clear").click(function(){
      $("ul").empty();
  });

  
  });