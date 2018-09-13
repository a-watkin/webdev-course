$(document).ready(function() {
    $("#location-button").click(function(){
        // i'm getting the value from the input box now i want a function
        // that returns the post code to the DOM
        var address = $("#location-input").val();

        var first = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        var middle = address;
        var end = "&key=AIzaSyA-FncmSkjZaFwPMVda4ptVaP3D1Fl5mdI"

        var total = first + middle + end
        // notre dame paris

        console.log(total);

        $.ajax({
            url: total,
            type: "GET",
            success: function(data) {
                // alert(data);
                $.each(data["results"][0]["address_components"], function(key, value) {
                  console.log(key, value);

                  if (value.long_name) {
                    // javascript {} is an associative array
                    console.log(value['types']);

                    // if you find the vlaues in the sub associative array
                    if (value['types'][0] == 'postal_code') {
                        // get the outer array of that element
                        // alert(value['long_name']);
                        $("#postcode-result").text(
                            "The geolocation service returned a postcode/zip code of: " + value['long_name']);

                    } else {

                        $("#postcode-result-failure").text("You need to enter a more specific address/place and try again.");
                    }
                  }
                });
            },
            complete: function(xhr, textStatus) {
                console.log(xhr.status);
                if (xhr.status !== 200) {
                    $("#failure").css("visibility", "visible");
                } else {
                    $("#success").css("visibility", "visible");
                }
            }
        });
    });
});