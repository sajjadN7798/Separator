var limit = 25;
var input = $('input[data-type="card-no"]');
$(document).ready(function () {
  input.on("keyup keypress blur", function (e) {
    var value = $(this).val();
    var length = $(this).val().length;
    $(this).attr("maxlength", limit);
    for (var i = 1; i <= length; i += 7) {
      length - 3 === i && $(this).val(value + " - ");
    }
    if (length - 3 === 22) {
      var removeLastDash = value.substr(0, length);
      $(this).val(removeLastDash);
    }
    $(this).val(
      $(this)
        .val()
        .replace(
          /[!@#$%^&*()_+|AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzاآبپتثجچ‌حخدذرز‌ژس‌شصضطظعغفقکگلمنوهی].+/g,
          ""
        )
    );
    e.which < 48 || (e.which > 57 && e.preventDefault());
  });
});

function getInputValue() {
  alert(input.val());
}
