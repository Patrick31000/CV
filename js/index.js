$(".accordion-body").on("shown.bs.collapse", function() {
    var selected = $(this);
    var collapseh = $(".collapse.in").height();
    $.scrollTo(selected, 500, {
        offset: -(collapseh)
    });
});