// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function simpleGet() {
    $.ajax({
        url: 'Home/SimpleGet/123',
        type: 'GET',
        success: function (result) {
            console.log(result);
        }
    });
}

function simplePost() {
    let postData = {
        Value1: document.getElementById("value1").value,
        Value2: document.getElementById("value2").value
    };

    $.ajax({
        url: 'Home/SimplePost/1',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(postData),
        //data: postData,
        success: function (result) {
            alert(result);
        }
    });
}

