$(document).ajaxStart(function() {
    $("#refresh-spinner").addClass("fa-spin");
});

$(document).ajaxStop(function() {
    // TODO: add smooth transition
    $("#refresh-spinner").removeClass("fa-spin");
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

}
