$(document).ready(function() {
  // Get references to the inventory elements
  var $peepCount = $("#peep-count");

  var changeBy5 = function(operand) {
    var currentCount = $peepCount.text();
    if (operand === '+') {
      $peepCount.text(parseInt($peepCount.text(), 10) + 5);
      console.log('added 5');
    } else if (operand === '-') {

      if (parseInt($peepCount.text(), 10) < 5) {
        alert('Not enough Peeps!');
      } else {
        console.log('peep count sub: ', parseInt($peepCount.text(), 10));
        $peepCount.text(parseInt($peepCount.text(), 10) - 5);
        console.log('subtracted 5');
      }

    }

    $('.peep-img').remove();
    console.log('removed all peeps');
    console.log('peepCount: ', parseInt($peepCount.text(), 10));
    for (var i = 0; i < (parseInt($peepCount.text(), 10)); i += 1) {
      $('<img src="./assets/peeps.png" class="peep-img">').appendTo('#inventory');
      console.log('pic appended');
    }


  };

  // Add event listeners to the buttons
  $("#consume-button").on("click", function() {
    changeBy5('-');
  });
  $('#add-button').on('click', function() {
    changeBy5('+');
  });

});
