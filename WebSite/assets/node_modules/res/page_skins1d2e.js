$(function () {
    var base_single = {
        min: 0,
        max: 100,
        from: 50,
        type: "single",
        grid: true,
        prefix: "$"
    };

    var base_double = {
        min: 0,
        max: 100,
        from: 25,
        to: 75,
        to_min: 60,
        to_max: 90,
        to_shadow: true,
        type: "double",
        grid: true,
        prefix: "$"
    };



    // Flat skin
    var flat_0 = Object.create(base_single);
    flat_0.skin = "flat";

    var flat_1 = Object.create(base_double);
    flat_1.skin = "flat";

    $("#flat_0").ionRangeSlider(flat_0);
    $("#flat_1").ionRangeSlider(flat_1);




    // Big skin
    var big_0 = Object.create(base_single);
    big_0.skin = "big";

    var big_1 = Object.create(base_double);
    big_1.skin = "big";

    $("#big_0").ionRangeSlider(big_0);
    $("#big_1").ionRangeSlider(big_1);
    
    
    
    
    // Modern skin
    var modern_0 = Object.create(base_single);
    modern_0.skin = "modern";

    var modern_1 = Object.create(base_double);
    modern_1.skin = "modern";

    $("#modern_0").ionRangeSlider(modern_0);
    $("#modern_1").ionRangeSlider(modern_1);



    // Sharp skin
    var sharp_0 = Object.create(base_single);
    sharp_0.skin = "sharp";

    var sharp_1 = Object.create(base_double);
    sharp_1.skin = "sharp";

    $("#sharp_0").ionRangeSlider(sharp_0);
    $("#sharp_1").ionRangeSlider(sharp_1);



    // Round skin
    var round_0 = Object.create(base_single);
    round_0.skin = "round";

    var round_1 = Object.create(base_double);
    round_1.skin = "round";

    $("#round_0").ionRangeSlider(round_0);
    $("#round_1").ionRangeSlider(round_1);



    // Square skin
    var square_0 = Object.create(base_single);
    square_0.skin = "square";

    var square_1 = Object.create(base_double);
    square_1.skin = "square";

    $("#square_0").ionRangeSlider(square_0);
    $("#square_1").ionRangeSlider(square_1);
});
