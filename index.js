var valueCurrent = "0";
var growth = null;
var spin = null;

function animateGrow (valueInitial, valueNew) {
  $('#flower').removeClass(growth);
  $('#flower').removeClass(spin);
  growth = "grow-" + valueInitial + "-" + valueNew;
  spin = "spin-flower-" + valueInitial + "-" + valueNew;
  $('#flower').addClass(spin)
    .addClass(growth)
    .css({
    height: valueNew * 10,
    width: valueNew * 10,
    transform: 'rotate(' + valueNew * 5 + 'deg)',
  });
}

function delayGrow (value) {
  if (value == valueCurrent) { return; }
  var valueInitial = valueCurrent;
  valueCurrent = value;

  setTimeout(function () {
    var currentSliderValue = $('input').val();
      animateGrow(valueInitial, value);
      $('#inputValue').html(value);
    }, 150)
}
