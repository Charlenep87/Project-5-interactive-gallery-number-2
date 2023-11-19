baguetteBox.run('.gallery', {
    // Custom options
});



$("#search").on("keyup", function() {
    const value = $(this)
        .val().toLowerCase();
    $(".grid a").filter(function() {
        $(this).toggle($(this).attr("data-caption").toLowerCase().indexOf(value) > -1
        );
    });
});