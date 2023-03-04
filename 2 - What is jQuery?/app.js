$('document').ready(function() {
  var $title = $('h1');
  var $list = $('ol');
  var $newListElement = $('<li>This is a brand new list item</li>');
  $list.append($newListElement);

  var changeTitle = function(newTitle) {
    $title.text(newTitle);
  }

});