$(document).ajaxStart(function() {
    $("#refresh-spinner").addClass("fa-spin");
    $('#twitter-button').addClass("disabled");
});

$(document).ajaxStop(function() {
    // TODO: add smooth transition
    $("#refresh-spinner").removeClass("fa-spin");
    $('#twitter-button').removeClass("disabled");
});

$(document).ready(function() {
    new_quote();

    $("#quote-refresh-button").click(function() {
        new_quote();
    });
});

function new_quote() {
    $.getJSON("https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(result) {
        // The API provides content (the quote) as HTML enclosed in <p></p> tags.
        // So use the jQuery(html).text() function to strip it out.
        var quote = {};
        quote.text = jQuery(result[0].content).text();
        quote.authour = result[0].title;

        display_new_quote(quote);
    });
}

function display_new_quote(quote) {
    // Set the quote body
    $('#quote-text').text(quote.text);
    $('#quote-authour').text(quote.authour);

    // And then the twitter text
    var share_link="https://twitter.com/intent/tweet?text="
    share_link += '"' + quote.text + " - " + quote.authour;
    // encodeURI to convert spaces and other formatting (e.g. spc --> %20)
    $('#twitter-button').prop('href', encodeURI(share_link));
}
