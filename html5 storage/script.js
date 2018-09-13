$( document ).ready(function() {


    // tests the script is being loaded
    // alert('test');

    // $.noConflict();
    // jQuery(document).ready(function($){
    //    alert('jQuery is working');
    // }); 


    if (typeof(Storage) !== "undefined") {
        console.log("local storage is go");
    } else {
        console.log("no local storage");
    }

    var names = [];
    names[0] = prompt("New member name?");
    localStorage.setItem("names", JSON.stringify(names));

    var storedNames = JSON.parse(localStorage.getItem("names"));

    $("#result").html(storedNames[0]);




});