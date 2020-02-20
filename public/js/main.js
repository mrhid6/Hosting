$(document).ready(function () {


    if ($(".features-display") != null) {
        featureDisplay();
    }


    function featureDisplay() {
        $(".features-display .feature-row:eq(0)").css("display", "flex");

        setInterval(function () {
            const currentBtn = $(".feature-buttons .active");
            const currentVal = parseInt(currentBtn.attr("data-for-id"));

            let nextVal = currentVal + 1;

            if (nextVal > 4) nextVal = 1;
            $(".feature-buttons .active").removeClass("active");
            $(".features-display .feature-row").hide();

            $(".feature-buttons .feature-button[data-for-id='" + nextVal + "']").addClass("active");
            $(".features-display #feature-" + currentVal).hide();
            $(".features-display #feature-" + nextVal).css("display", "flex");
        }, 15000);

        $(".feature-buttons .feature-button").click(function () {
            const currentBtn = $(this);
            const currentVal = parseInt(currentBtn.attr("data-for-id"));

            $(".feature-buttons .active").removeClass("active");
            $(".features-display .feature-row").hide();
            currentBtn.addClass("active");
            $(".features-display #feature-" + currentVal).css("display", "flex");
        });
    }
});