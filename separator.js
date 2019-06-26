var LIMIT = 25;
$(document).ready(function () {
    $('input[data-type="cart-no"]').on('keyup keypress blur', function (e) {
        let VAL = $(this).val();
        let LEN = $(this).val().length;
        $(this).attr('maxlength', LIMIT);
        for (let i = 1; i <= LEN; i += 7) {
            if (LEN - 3 === i) {
                $(this).val(VAL + " - ");
            }
        }
        if (LEN - 3 === 22) {
            let removeLastDash = VAL.substr(0, LEN);
            $(this).val(removeLastDash);
        }
        $(this).val($(this).val().replace(/[!@#$%^&*()_+|AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzاآبپتثجچ‌حخدذرز‌ژس‌شصضطظعغفقکگلمنوهی].+/g, ""));
        if ((e.which < 48 || e.which > 57)) {
            e.preventDefault();
        }
    });
});