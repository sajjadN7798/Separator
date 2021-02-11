var limit = 25;
var input = $('input[data-type="card-no"]');
$(document).ready(function () {
  input.on("keyup keypress blur", function (e) {
    let value = $(this).val();
    let length = $(this).val().length;
    $(this).attr("maxlength", limit);
    for (let i = 1; i <= length; i += 7) {
      if (length - 3 === i) {
        $(this).val(value + " - ");
      }
    }
    if (length - 3 === 22) {
      let removeLastDash = value.substr(0, length);
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
    if (e.which < 48 || e.which > 57) e.preventDefault();
  });
});

function getInputValue() {
  alert(input.val());
}
