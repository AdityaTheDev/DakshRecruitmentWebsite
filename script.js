// Your JavaScript goes here


function onSubmit() {

    var name = document.getElementById("fname").value;
    if (name != "") {
        alert("Dear" + " " + name + "!, Your details has been successfully submitted. We'll get back to you soon")
    }
    else {
        alert("Please enter your details!")
    }
}