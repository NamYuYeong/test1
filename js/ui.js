$(document).ready(function () {


    $(".iTop").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    $(".mCheck1 a").on("click", function () {
        $(this).parent().children().removeClass("selected");
        $(this).addClass("selected");
    });

    /* for mobile aside */
    $(".iAside").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0);
        $(".mAside .asideBg").css("min-height", $("#wrap").height());
        $(".mAside, .modalBgAside").show();
        $(".modalBgAside").css("min-height", $(".mAside").height());
        $(".mAside").animate({ 'left': '0' }, function () { });
        $(".modalBgAside").animate({ 'opacity': '0.5' });
        return false;
    });
    $(".mAside .title .close, .modalBgAside").click(function () {
        $(".modalBgAside").animate({ 'opacity': '0' });
        $(".mAside").animate({ 'left': '-100%' }, function () {
            $(".modalBgAside").hide();
            $(".mAside .asideBg").css("min-height", "auto");
            $(".mAside, .modalBgAside").hide();
            $(".modalBgAside").css("min-height", "auto");
        });
    });
});

