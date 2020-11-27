// slides and program
    $('#myslides').bind('slide.bs.carousel', function (e) {
        $("#college_programs .programs .active").removeClass("active");
        $('*[data-slide-to="'+e.to+'"]').addClass('active');
    });
