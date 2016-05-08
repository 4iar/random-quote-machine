$(document).ready(function() {
    $("#quote-text").text("quote text placeholder");

    $("#quote-refresh-button").click(function() {

        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
          $("#quote-text").text(json.content);
        });

    });

});
