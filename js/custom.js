$(document).ready(function () {

    if ($("#jstest").length != 0) {
        $("#jstest").val("1");
    }

    // Hack pro rozfungovani kotvy ve Firefoxu
    if (location.href.indexOf('#') > -1) { location.href += ''; }

    // Pokud nema pridelenou verzi aktualniho AB testu, prideli se a oznaci se jako zapocitany
    if (!$.cookie('ab41check') && $.cookie('ab41') && $.cookie('ab41') != 0)
	  {
	   var aaa = document.domain.replace("www.","");
	   $.ajax({
            type: "GET",
            url: "/addaboption/?option=" + $.cookie('ab41'),
            async: true,
            success: function (msg) {
                if (msg == "ok") {
                    $.cookie('ab41check', 1, { expires: 365, domain: aaa ,path: '/' });
                }
            }
        });
    }

    // Prepnuti do klasickeho zobrazeni na mobilu
    $('.responsive-switch').bind('click', function (e) {
        if ($.cookie('noresp') && $.cookie('noresp') == 1) {
            $.cookie('noresp', 0, { expires: 365, path: '/' });
        }
        else {
            $.cookie('noresp', 1, { expires: 365, path: '/' });
        }
        location.reload();
    });

    $('#q').off("focus");
    $('#q').focus(function () {
        if ($.trim($('#search-box .suggest-box').html())) {
            $('#search-box .suggest-box').addClass('show');
        }
    });

    // Zavolani naseptavace
    var keyCount = 0;
    $('#q').keyup(function (e) {
        var exps;
        if ($(this).val().length > 2) {
            exps = $(this).val();

            switch (e.keyCode) {
                case 40: // Down
                case 38: // Up
                case 33: // PageUp 
                case 34: // PageDown
                case 35: // End
                case 36: // Home
                case 37: // Left
                case 39: // Right
                case 27: // Escape
                    break;

                default: // Ostatni
                    {
                        keyCount = keyCount + 1;
                        var actualCount = keyCount;

                        setTimeout(function () {
                            if (actualCount == keyCount) {
                                $.ajax({
                                    type: "GET",
                                    url: "/searchsuggest/?exps=" + encodeURIComponent(exps),
                                    success: function (msg) {
                                        $('#q').removeClass('loading');
                                        if (msg != "[object XMLDocument]") {
                                            $('.suggest-box').html(msg);
                                            if (!$('#search-box .suggest-box').hasClass('show')) {
                                                $('#search-box .suggest-box').addClass('show');
                                            }
                                            if (msg == '') {
                                                $('#search-box .suggest-box').removeClass('show');
                                            }
                                        }
                                    }
                                });
                            }
                        }, 200);

                    }
            }
        }
    });

    // cart4a volba billing address
    var $billingAddressMethods = $('.billing-address-methods').find('> .method');
    var $billingAddressRadios = $billingAddressMethods.find('> .title :radio');

    $('.billing-address-methods').each(function () {
        var $billingAddressMethods = $(this).find('> .method');
        var $billingAddressRadios = $billingAddressMethods.find('> .title :radio');
        $billingAddressRadios.change(function () {
            var $oldMethod = $billingAddressMethods.filter('.active').removeClass('active');
            var $method = $billingAddressMethods.has(this).addClass('active');

            // slideUp / slideDown
            $oldMethod.find('> .method-expand').slideUp();
            $method.find('> .method-expand').slideDown();

        });
        $billingAddressRadios.filter(':checked').triggerHandler('change');
    });

    // star rating    
    $('span.star-rating a:not(.current)').on({
        mouseenter: onRatingMouseEnter,
        mouseleave: onRatingMouseLeave
    });
    
    $('span.star-rating').on('click', 'a:not(.current)', saveStarRatingVote);
    
    // doporucit znamemu
    $(document).on('click', '#send-recommend-form button', processSendRecommend);

    // popup banner
    $('#popup-banner-ok').addClass('slideOutDown').removeClass('slideInUp');
    $('#popup-banner-ko').addClass('slideOutDown').removeClass('slideInUp');

    $('#popup-banner-form').submit(function (e) {

        var urlAddr = $('#urlAddress').attr('url');
        var emailAddr = $('#txtPopupEmail').val();
        var sex = $("#sex").length != 0 ? $('#sex').val() : 0;

        if (isValidEmail(emailAddr)) {

            $.ajax({
                type: "POST",
                url: urlAddr,
                data: "txtPopupEmail=" + emailAddr + "&sex=" + sex,
                async: false,
                success: function (msg) {
                    if (msg == "not_valid") {
                    }
                    else if (msg == "already_used") {
                        $('#popup-banner').addClass('slideOutDown').removeClass('slideInUp');
                        $('#popup-banner-ko').addClass('slideInUp').removeClass('slideOutDown');
                    }
                    else if (msg == "send_error") {
                    }
                    else {
                        $('#popup-banner').addClass('slideOutDown').removeClass('slideInUp');
                        $('#popup-banner-ok').addClass('slideInUp').removeClass('slideOutDown');
                    }
                },
                error: function (jqXHR, exception) {
                    if (jqXHR.status === 0) {
                        alert('Not connect.\n Verify Network.');
                    } else if (jqXHR.status == 404) {
                        alert('Requested page not found. [404]');
                    } else if (jqXHR.status == 500) {
                        alert('Internal Server Error [500].');
                    } else if (exception === 'parsererror') {
                        alert('Requested JSON parse failed.');
                    } else if (exception === 'timeout') {
                        alert('Time out error.');
                    } else if (exception === 'abort') {
                        alert('Ajax request aborted.');
                    } else {
                        alert('Uncaught Error.\n' + jqXHR.responseText);
                    }
                }
            });

            return false;
        }
        else {
            $('#popup-banner-text').addClass('error');
            $('span.error-message').show();

            return false;
        }

    });

    // UK zipcode lookup condition
    if ($("#delivery-zip").val() == "" && $("#address-select").length != 0) {
        $("#delivery-street-number-field").hide(10);
        $("#delivery-street-field").hide(10);
        $("#delivery-address2-field").hide(10);
        $("#delivery-city-field").hide(10);
        $("#manual-switch-field").show(10);
        $("#lookup-switch-field").hide(10);
    }
    else {
        $("#manual-switch-field").hide(10);
        $("#lookup-switch-field").show(10);
        $("#zipcode-lookup").hide(10);
    }

    // UK zipcode manual
    $('#manual-switch').on('click', function (e) {

        $("#delivery-street-number-field").show(10);
        $("#delivery-street-field").show(10);
        $("#delivery-address2-field").show(10);
        $("#delivery-city-field").show(10);
        $("#delivery-zip-code-field").show(10);

        $("#zipcode-lookup").hide(10);
        $("#delivery-zip-code-lookup").hide(10);

        $("#manual-switch-field").hide(10);
        $("#lookup-switch-field").show(10);        
    });

    // UK zipcode lookup
    $('#lookup-switch').on('click', function (e) {

        $("#delivery-street-number-field").hide(10);
        $("#delivery-street-field").hide(10);
        $("#delivery-address2-field").hide(10);
        $("#delivery-city-field").hide(10);

        $("#zipcode-lookup").show(10);

        $("#manual-switch-field").show(10);
        $("#lookup-switch-field").hide(10);

        $("#delivery-addressnr").val('');
        $("#delivery-address").val('');
        $("#delivery-city").val('');
        $("#delivery-zip").val('');

        $("#delivery-zip-code-field").removeClass('valid');
    });

    // UK zipcode lookup onclick
    $('#zipcode-lookup').on('click', function (e) {

        if ($("#zipcode-lookup").hasClass('disabled'))
            return false;

        if ($("#delivery-zip").val() == "") {
            $("#delivery-zip").parent().addClass('error');
            $("#delivery-zip").parent().children(".error-message").show(10);
            $("#delivery-zip").parent().children(".error-message").text("Please enter a postcode / zip code");
        }
        else {
            $("#delivery-zip").parent().removeClass('error');
            $("#delivery-zip").parent().children(".error-message").hide(10);            

            $.ajax({
                type: "GET",
                url: "/zipcodelookup/?ZipCode=" + $("#delivery-zip").val(),
                async: true,
                success: function (msg) {
                    if (msg == "ERROR") {
                        $("#delivery-zip").parent().addClass('error');
                        $("#delivery-zip").parent().children(".error-message").show(10);
                        $("#delivery-zip").parent().children(".error-message").text("Incorrect postcode / zip code");
                    }
                    else {
                        $("#delivery-zip-code-lookup").show(10);
                        $("#delivery-zip-code-field").hide(10);

                        $("#address-select").empty();
                        $("#address-select").append(msg);

                        $("#address-found-label").addClass('address-found');
                        $("#address-found-span").addClass('address-found');
                        $("#address-found-text-span").show(10);
                        $("#address-select").addClass('address-found');
                        $("#address-select").removeClass('address-select');

                        $("#delivery-zip-code-lookup").removeClass('valid');
                    }
                }
            });
        }
    });

    // UK zipcode lookup onselect
    $('#address-select').on('change', function () {

        var arr = $(this).val().split(',');

        $("#delivery-addressnr").val(arr[0]);
        $("#delivery-address").val(arr[1]);
        $("#delivery-city").val(arr[2]);

        $("#address-found-label").removeClass('address-found');
        $("#address-found-span").removeClass('address-found');
        $("#address-found-text-span").hide(10);
        $("#address-select").removeClass('address-found');
        $("#address-select").addClass('address-select');

        $("#delivery-zip-code-lookup").addClass('valid');

        $("#address-select").parent().removeClass('error');
        $("#address-select").parent().children(".error-message").hide(10);

        $("#delivery-addressnr").parent().removeClass('error');
        $("#delivery-addressnr").parent().children(".error-message").hide(10);

        $("#delivery-address").parent().removeClass('error');
        $("#delivery-address").parent().children(".error-message").hide(10);

        $("#delivery-city").parent().removeClass('error');
        $("#delivery-city").parent().children(".error-message").hide(10);
    });

    $('#login-3step-preform').submit(function (e) {

        var hasError = false;

        var validate1 = $("#validate1").val();
        var validate2 = $("#validate2").val();

        $("#email1").parent().removeClass('error');
        $("#email1").parent().children(".message").hide();

        if ($("#email1").val() == '') {
            $("#email1").parent().addClass('error');
            $("#email1").parent().children(".message").show().text(validate1);
            hasError = true;
        }
        else if (!isValidEmail($("#email1").val())) {
            $("#email1").parent().addClass('error');
            $("#email1").parent().children(".message").show().text(validate2);
            hasError = true;
        }

        if (hasError == true) { return false; }
        else return true;
    });

    $('#login-3step-form').submit(function (e) {

        var hasError = false;

        var validate1 = $("#validate1").val();
        var validate2 = $("#validate2").val();

        $("#email").parent().removeClass('error');
        $("#password1").parent().removeClass('error');

        $("#email").parent().children(".message").hide();
        $("#password1").parent().children(".message").hide();

        if ($("#email").val() == '') {
            $("#email").parent().addClass('error');
            $("#email").parent().children(".message").show().text(validate1);
            hasError = true;
        }
        else if (!isValidEmail($("#email").val())) {
            $("#email").parent().addClass('error');
            $("#email").parent().children(".message").show().text(validate2);
            hasError = true;
        }

        if ($("#password1").val() == '') {
            $("#password1").parent().addClass('error');
            $("#password1").parent().children(".message").show().text(validate1);
            hasError = true;
        }

        if (hasError == true) { return false; }
        else return true;
    });

    // masked input pro telefonni cislo myaccount
    if ($("#contact-phone").length != 0) {
        if ($("#customer_phone_mask").length != 0) {
            var mask = $("#customer_phone_mask").val();
            if (mask == '1') {
                $("#contact-phone").mask("999 999 999");
            } else if (mask == '4') {
                $("#contact-phone").mask("999 999 999");
            }
        }
    }

    // masked input pro telefonni cislo registrace
    if ($("#register-phone").length != 0) {
        if ($(document.body).hasClass('bodyLang1')) {
            $("#register-phone").mask("999 999 999");
        } else if ($(document.body).hasClass('bodyLang4')) {
            $("#register-phone").mask("999 999 999");
        }
    }

    // masked input pro telefonni cislo cart5
    if ($("#delivery-phone").length != 0) {
        if ($("#customer_phone_mask").length != 0) {
            var mask = $("#customer_phone_mask").val();
            if (mask == '1') {
                $("#delivery-phone").mask("999 999 999");
            } else if (mask == '4') {
                $("#delivery-phone").mask("999 999 999");
            }
        }
    }

    // masked input pro telefonni cislo cart5 da
    if ($("#delivery-da-phone").length != 0) {
        if ($("#customer_phone_mask").length != 0) {
            var mask = $("#customer_phone_mask").val();
            if (mask == '1') {
                $("#delivery-da-phone").mask("999 999 999");
            } else if (mask == '4') {
                $("#delivery-da-phone").mask("999 999 999");
            }
        }
    }

    // masked input pro PSC myaccount
    if ($("#contact-zip").length != 0 && $("#delivery-zip").length != 0 || // myaccount
        $("#register-zip").length != 0 || // registrace
        $("#delivery-zip").length != 0 && $("#delivery-da-zip").length != 0 || // cart5.aspx
        $("#contact-zip").length == 0 && $("#delivery-zip").length != 0) { // cart5a.aspx, cart4a.aspx
        if ($(document.body).hasClass('bodyLang15') && $("#contact-zip").length != 0 && $("#delivery-zip").length != 0) {
            $("#contact-zip").mask("9999-999");
            $("#delivery-zip").mask("9999-999");
        } else if ($(document.body).hasClass('bodyLang15') && $("#register-zip").length != 0) {
            $("#register-zip").mask("9999-999");
        } else if ($(document.body).hasClass('bodyLang15') && $("#delivery-zip").length != 0 && $("#delivery-da-zip").length != 0) {
            $("#delivery-zip").mask("9999-999");
            $("#delivery-da-zip").mask("9999-999");
        } else if ($(document.body).hasClass('bodyLang15') && $("#delivery-zip").length != 0 && $("#delivery-da-zip").length != 0) {
            $("#delivery-zip").mask("9999-999");
            $("#delivery-da-zip").mask("9999-999");
        } else if ($(document.body).hasClass('bodyLang15') && $("#contact-zip").length == 0 && $("#delivery-zip").length != 0) {            
            $("#delivery-zip").mask("9999-999");
        }
    }

    // masked input pro cislo karty
    //if ($("#card_number").length != 0) {
    //    if ($("#card_number").length != 0) {
    //        $("#card_number").mask("9999 9999 9999 9999");
    //    }
    //}

    // zmena hesla
    $('#newpassword-form').submit(function (e) {

        var hasError = false;

        $("#password1").parent().removeClass('error');
        $("#password2").parent().removeClass('error');

        $("#password1").parent().children(".message").hide();
        $("#password1").parent().children(".message2").hide();
        $("#password2").parent().children(".message").hide();

        var password1 = $("#password1").val();
        var password2 = $("#password2").val();

        if (password1 == '') {
            $("#password1").parent().addClass('error');
            $("#password1").parent().children(".message").show();

            hasError = true;
        }

        if (password2 == '') {
            $("#password2").parent().addClass('error');
            $("#password2").parent().children(".message").show();

            hasError = true;
        }

        if (hasError == false) {
            if (password1 != password2) {
                $("#password1").parent().addClass('error');
                $("#password1").parent().children(".message2").show();

                hasError = true;
            }
        }

        if (hasError == true) { return false; }
        else return true;
    });

    // RO platba kartou
    if ($('#romania_payment_form').length) {
        $('#romania_payment_form input[name="payment_type"]').on('click', function () {
            var radio = $(this),
                id_radio = radio.attr('id') ? radio.attr('id') : false,
                f_message = radio.attr('data-f-message') ? radio.attr('data-f-message') : '',
                f_crypt_message = radio.attr('data-f-crypt-message') ? radio.attr('data-f-crypt-message') : '',
                f_action = radio.attr('data-f-action') ? radio.attr('data-f-action') : '',
                submit_label = radio.attr('data-submit-label') ? radio.attr('data-submit-label') : false;
            // first radio selected
            if (id_radio) {
                if (id_radio == 'payment_1') {
                    $('#romania_payment_form select[name="F_Rate"]').val('0');
                }
                else {
                    $('#romania_payment_form select[name="F_Rate"]').val('3');
                }

                $('input#F_MESSAGE').val(f_message);
                $('input#F_CRYPT_MESSAGE').val(f_crypt_message);
                $('input#F_Action').val(f_action);
            }
            
            if (submit_label)
                $('#romania_payment_form button span').html(submit_label);
        });

        // vybirani v selectu
        $('#romania_payment_form select[name="F_Rate"]').change(function () {
            if ($(this).val() == 0) {
                var radio = $('#romania_payment_form input[id="payment_1"]'),
                    id_radio = radio.attr('id') ? radio.attr('id') : false,
                    f_message = radio.attr('data-f-message') ? radio.attr('data-f-message') : '',
                    f_crypt_message = radio.attr('data-f-crypt-message') ? radio.attr('data-f-crypt-message') : '',
                    f_action = radio.attr('data-f-action') ? radio.attr('data-f-action') : '';

                if (id_radio) {
                    $('input#F_MESSAGE').val(f_message);
                    $('input#F_CRYPT_MESSAGE').val(f_crypt_message);
                    $('input#F_Action').val(f_action);
                }
            }
            else {
                var radio = $('#romania_payment_form input[id="payment_2"]'),
                    id_radio = radio.attr('id') ? radio.attr('id') : false,
                    f_message = radio.attr('data-f-message') ? radio.attr('data-f-message') : '',
                    f_crypt_message = radio.attr('data-f-crypt-message') ? radio.attr('data-f-crypt-message') : '',
                    f_action = radio.attr('data-f-action') ? radio.attr('data-f-action') : '';

                if (id_radio) {
                    $('input#F_MESSAGE').val(f_message);
                    $('input#F_CRYPT_MESSAGE').val(f_crypt_message);
                    $('input#F_Action').val(f_action);
                }
            }
        });
    }       
});

function processSendRecommend() {    
    var isValid = true;
    var form = $(this).closest("form");
    var emailTo = $("#recommend-email-to", form);
    var nameFrom = $("#recommend-name-from", form);

    if (emailTo.val().trim() == "" || nameFrom.val().trim() == "") {
        $(".error-message.requiredFields", form).show();
        isValid = false;
    }
    else {
        $(".error-message.requiredFields", form).hide();
    }

    if (emailTo.val().trim() != "" && !isValidEmail(emailTo.val().trim())) {
        $(".error-message.invalidEmail", form).show();
        isValid = false;
    }
    else {
        $(".error-message.invalidEmail", form).hide();
    }

    if (isValid) {
        form.append("<div class=\"ajax-overlay\"></div><div class=\"ajax-loader\"></div>");
        $.ajax({
            url: '/sendrecommend.asp',
            type: 'POST',
            data: form.serialize(),
            dataType: 'html',
            success: function (res) {
                $(".ajax-overlay, .ajax-loader", form).remove();
                box500.openHtml(res);                
            },
            error: function (status) {
                alert(status);
            }
        });
    }
}

function onRatingMouseEnter() {
    var rating = $(this).closest("span.star-rating").find("span.rating");
    ratingWidth = rating.css("width");
    rating.css("width", parseInt($(this).text()) * 20 + "%");
}

function onRatingMouseLeave() {    
    if (ratingWidth != null) {
        $(this).closest("span.star-rating").find("span.rating").css("width", ratingWidth);        
    }
}

function saveStarRatingVote() {
    ratingWidth = null;
    $(this).blur();    
    var url_parts = $(this).attr('href').split('?');

    storeVote({
        url: url_parts[0],
        params: url_parts[1],
        target: this
    },
    $(this).parent());

    return false;
}

function storeVote(config, rating) {
    $.ajax({
        url: config.url,
        type: 'GET',
        data: '' + config.params + '&ajax=1',
        dataType: 'json',
        success: function (res) {
            if (res.success) {
                rating.closest(".js-star-rating")
                      .removeClass("error");

                $("a.current", rating).toggleClass("current");
                $(config.target).toggleClass("current");

                if ($(".js-star-rating.error").length == 0) {
                    $(".star-rating-wrap .message.error-message").hide();
                }
            }
            else {
                alert(res.msg);
            }
        },
        error: function (status) {
            alert(status);
        }
    });
    res = null;
}

function sendwatchdog() {

    $.ajax({
        type: "POST",
        url: "/addwatchdogrequest/",
        data: "email=" + $('#watchdog_email').val() + "&commodity=" + $('#commodity').val(),
        async: true,
        success: function (msg) {
            if (msg == "ok") {
                $('form#watchdog_form').hide(10);
                $('form#watchdog_form_result').show(10);
            }
            else {
                if (msg == "nok") {
                    $('form#watchdog_form').hide(10);
                    $('form#watchdog_form_result_fail').show(10);
                }
                else {
                    $('form#watchdog_form').hide(10);
                    $('form#watchdog_form_result_fail').show(10);
                }
            }
        },
        error: function () {
            $('form#watchdog_form').hide(10);
            $('form#watchdog_form_result_fail').show(10);
        }
    });
    return false;
}

function EmailControl2(sEmail) {
    var regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9})$/;

    regEx.ignoreCase = true;

    if (regEx.test(sEmail) == false) {
        return false;
    }
    return true;
}

function isValidEmail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

var Br = new BrCheck()

function BrCheck() {
    this.VER = navigator.appVersion;
    this.AGENT = navigator.userAgent.replace(/[\/]/g, ' ');
    this.DOM = document.getElementById ? true : false;

    this.OP5 = this.AGENT.indexOf("Opera 5") > -1 ? true : false;
    this.OP6 = this.AGENT.indexOf("Opera 6") > -1 ? true : false;
    this.OP7 = this.AGENT.indexOf("Opera 7") > -1 ? true : false;
    this.OP8 = this.AGENT.indexOf("Opera 8") > -1 ? true : false;
    this.OP = (this.OP5 || this.OP6 || this.OP7 || this.OP8);

    this.IE4 = (document.all && !this.DOM && !this.OP) ? true : false;
    this.IE5 = (this.VER.indexOf("MSIE 5") > -1 && this.DOM && !this.OP) ? true : false;
    this.IE6 = (this.VER.indexOf("MSIE 6") > -1 && this.DOM && !this.OP) ? true : false;
    this.IE7 = (this.VER.indexOf("MSIE 7") > -1 && this.DOM && !this.OP) ? true : false;
    this.IE8 = (this.VER.indexOf("MSIE 8") > -1 && this.DOM && !this.OP) ? true : false;
    this.IE = (this.IE4 || this.IE5 || this.IE6 || this.IE7 || this.IE8);

    this.NS4 = (document.layers && !this.DOM) ? true : false;
    this.NS7 = (this.DOM && parseInt(this.VER) >= 5 && this.AGENT.lastIndexOf('Netscape') < this.AGENT.lastIndexOf('7')) ? true : false;
    this.NS6 = (this.DOM && parseInt(this.VER) >= 5 && !this.NS7) ? true : false;
    this.NS = (this.NS4 || this.NS6 || this.NS7);

    return this;
}

function getE(objectID) { return document.getElementById(objectID); }

function InsertCookies(strName, strData) {
    var vyprs = new Date();
    vyprs.setDate(vyprs.getDate() - 365);
    document.cookie = strName + "=" + strData + "; expires=" + vyprs.toGMTString() + "; path=\/;";
    vyprs.setDate(365 + 365 + vyprs.getDate());
    document.cookie = strName + "=" + strData + "; expires=" + vyprs.toGMTString() + "; path=\/;";
}

function FormatCurrency(nNumber, nDecimal) {
    var sCurrency, iInsertSpace;
    sCurrency = FormatFloat(nNumber, nDecimal).replace('.', ',');
    iInsertSpace = sCurrency.indexOf(',') - 3;
    while (iInsertSpace > 0) {
        sCurrency = sCurrency.substring(0, iInsertSpace) + ' ' + sCurrency.substring(iInsertSpace, sCurrency.length);
        iInsertSpace -= 3;
    }
    if (nDecimal == 0) sCurrency = sCurrency.substring(0, sCurrency.indexOf(","));
    return sCurrency;
}

function FormatFloat(nNumber, nDecimal) {
    var sNumber = BarterComma(nNumber);
    sNumber = '' + Math.round(parseFloat(sNumber) * Math.pow(10, nDecimal));
    var sDedimal = sNumber.substring(sNumber.length - nDecimal, sNumber.length);
    var nInt = sNumber.substring(0, sNumber.length - nDecimal);
    if (parseFloat(sNumber) < 1) {
        var sNumber = "0." + sDedimal;
    } else {
        var sNumber = nInt + "." + sDedimal;
    }
    return sNumber;
}

function BarterComma(text) {
    var mezi = '' + text;
    if (mezi.indexOf(',') != -1) {
        mezi = mezi.split(",");
        mezi = mezi[0] + "." + mezi[1];
    } else {
        mezi = text;
    }
    return parseFloat(mezi);
}

function SetComplianceCookie() {
    $.cookie('cookPL', 1, { expires: 365, path: '/' });
}

