/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $("form").each(function () {
        $(this).validate({
            rules:  {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    rangelength: [8, 16]
                },
                confirm_password: {
                    equalTo: '#password'
                },
                c1: "requried"
            }, // Koniec obiektu rules.
            messages: {
                email: {
                    required: "  Enter email adress.",
                    email: "  Email is incorrect."
                },
                password: {
                    required: "  Enter password.",
                    rangelength: "  Password must be 8-16 characters."
                },
                confirm_password: {
                    equalTo: "  Passwords do not match. "
                },
                c1: "Please accept our terms"
            }, // koniec obiektu messages.
            errorPlacement: function (error, element) {
                if (element.is(':radio') || element.is(':checkbox')) {
                    error.appendTo("#p");  //appendTo(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }  // Koniec obiektu errorPlacement 
        }); // Koniec funkcji validate.
    }); // Koniec funkcji each.
}); // Koniec funkcji ready.