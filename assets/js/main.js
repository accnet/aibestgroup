jQuery(document).ready(function () {
    "use strict";
    $.scrollIt({upKey: 38, downKey: 40, easing: "linear", scrollTime: 1300, activeClass: "active", onPageChange: null, topOffset: -70}), $(window).on("scroll", function () {
        $(this).scrollTop() > 400 ? $(".sticky-header").addClass("sticky animated fadeInDown") : $(".sticky-header").removeClass("sticky animated fadeInDown")
    }), $("#myTab li:last-child a").on("click", function (e) {
        e.preventDefault(), $(this).tab("show")
    }), $(".main-menu").slicknav({prependTo: "#mobile-menu", label: ""}), $(".active-service-carousl").owlCarousel({items: 3, loop: !0, margin: 30, dots: !0, autoplay: !1, autoplayTimeout: 4e3, responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 2}}}), $(".active-team-carousl").owlCarousel({items: 3, loop: !1, margin: 30, dots: !0, autoplay: !0, autoplayTimeout: 4e3, responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 3}}}), $(".testimonial-active").owlCarousel({items: 1, loop: !0, margin: 30, nav: !0, dots: !1, navText: ["<i class='flaticon-back'></i>", "<i class=flaticon-next></i"], autoplay: !1, animateOut: "slideOutUp", animateIn: "slideInUp", lazyLoad: !0, autoplayTimeout: 4e3, autoplaySpeed: 3e3, tagePadding: 30, smartSpeed: 450}), $(".grid").isotope({itemSelector: ".grid-item", layoutMode: "fitRows"}), $(".filter-button-group ul li").click(function () {
        $(".filter-button-group ul li").removeClass("active"), $(this).addClass("active");
        var e = $(this).attr("data-filter");
        return $(".grid").isotope({filter: e}), !1
    })

    $(document).ready(function() {

        $("#owl-demo").owlCarousel({
            items : 4
        });

    });

}), $(window).on("load", function () {
    setTimeout(function () {
        $(".main-site").addClass("loaded")
    }, 800)
}), $(window).on("scroll", function () {
    $(this).scrollTop() > 300 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
}), $(".scrollup").on("click", function () {
    return $("html, body").animate({scrollTop: 0}, 1500), !1
});
