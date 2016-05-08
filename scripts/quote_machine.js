$(document).ready(function() {
    $("#quote-text").text("quote text placeholder");

    $("#quote-refresh-button").click(function() {
        // Make the refresh fa-icon spin
        $("#refresh-spinner").addClass("fa-spin");

        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
          $("#quote-text").text(json.content);
        });

        $("#refresh-spinner").removeClass("fa-spin");
    });

});
