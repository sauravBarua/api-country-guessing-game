$(document).ready(function() {
    var countryName = countryRamdomName;
    $.ajax({
        url: `https://restcountries.eu/rest/v2/name/${countryName}`,

        success: function(data, statuts, response) {
            $("#img").html(`<img src=" ${data[0].flag}  " alt="  ${data[0].name} + " width="200px"/>`)
        }
    });
    $("#inputButton").click(function() {
        var inputName = $("input").val();
        if (inputName === countryName) {
            $("#result").html("Brovo")

        } else {
            $("#result").html("Try angin")
        }
    });
});