"use strict";
angular.module("slickCarousel", []).constant("slickCarouselConfig", {
    method: {},
    event: {}
}).directive("slick", ["$timeout", "slickCarouselConfig", function(e, n) {
    var i, t;
    return i = ["slickGoTo", "slickNext", "slickPrev", "slickPause", "slickPlay", "slickAdd", "slickRemove", "slickFilter", "slickUnfilter", "unslick"], t = ["afterChange", "beforeChange", "breakpoint", "destroy", "edge", "init", "reInit", "setPosition", "swipe", "lazyLoaded", "lazyLoadError"], {
        scope: {
            settings: "=",
            enabled: "@",
            accessibility: "@",
            adaptiveHeight: "@",
            autoplay: "@",
            autoplaySpeed: "@",
            arrows: "@",
            asNavFor: "@",
            appendArrows: "@",
            prevArrow: "@",
            nextArrow: "@",
            centerMode: "@",
            centerPadding: "@",
            cssEase: "@",
            customPaging: "&",
            dots: "@",
            draggable: "@",
            fade: "@",
            focusOnSelect: "@",
            easing: "@",
            edgeFriction: "@",
            infinite: "@",
            initialSlide: "@",
            lazyLoad: "@",
            mobileFirst: "@",
            pauseOnHover: "@",
            pauseOnDotsHover: "@",
            respondTo: "@",
            responsive: "=?",
            rows: "@",
            slide: "@",
            slidesPerRow: "@",
            slidesToShow: "@",
            slidesToScroll: "@",
            speed: "@",
            swipe: "@",
            swipeToSlide: "@",
            touchMove: "@",
            touchThreshold: "@",
            useCSS: "@",
            variableWidth: "@",
            vertical: "@",
            verticalSwiping: "@",
            rtl: "@"
        },
        restrict: "AE",
        link: function(t, o, a) {
            angular.element(o).css("display", "none");
            var r, s, l, d, u, c;
            return s = function() {
                r = angular.extend(angular.copy(n), {
                    enabled: "false" !== t.enabled,
                    accessibility: "false" !== t.accessibility,
                    adaptiveHeight: "true" === t.adaptiveHeight,
                    autoplay: "true" === t.autoplay,
                    autoplaySpeed: null != t.autoplaySpeed ? parseInt(t.autoplaySpeed, 10) : 3e3,
                    arrows: "false" !== t.arrows,
                    asNavFor: t.asNavFor ? t.asNavFor : void 0,
                    appendArrows: angular.element(t.appendArrows ? t.appendArrows : o),
                    prevArrow: t.prevArrow ? angular.element(t.prevArrow) : void 0,
                    nextArrow: t.nextArrow ? angular.element(t.nextArrow) : void 0,
                    centerMode: "true" === t.centerMode,
                    centerPadding: t.centerPadding || "50px",
                    cssEase: t.cssEase || "ease",
                    customPaging: a.customPaging ? function(e, n) {
                        return t.customPaging({
                            slick: e,
                            index: n
                        })
                    } : void 0,
                    dots: "true" === t.dots,
                    draggable: "false" !== t.draggable,
                    fade: "true" === t.fade,
                    focusOnSelect: "true" === t.focusOnSelect,
                    easing: t.easing || "linear",
                    edgeFriction: t.edgeFriction || .15,
                    infinite: "false" !== t.infinite,
                    initialSlide: parseInt(t.initialSlide) || 0,
                    lazyLoad: t.lazyLoad || "ondemand",
                    mobileFirst: "true" === t.mobileFirst,
                    pauseOnHover: "false" !== t.pauseOnHover,
                    pauseOnDotsHover: "true" === t.pauseOnDotsHover,
                    respondTo: null != t.respondTo ? t.respondTo : "window",
                    responsive: t.responsive || void 0,
                    rows: null != t.rows ? parseInt(t.rows, 10) : 1,
                    slide: t.slide || "",
                    slidesPerRow: null != t.slidesPerRow ? parseInt(t.slidesPerRow, 10) : 1,
                    slidesToShow: null != t.slidesToShow ? parseInt(t.slidesToShow, 10) : 1,
                    slidesToScroll: null != t.slidesToScroll ? parseInt(t.slidesToScroll, 10) : 1,
                    speed: null != t.speed ? parseInt(t.speed, 10) : 300,
                    swipe: "false" !== t.swipe,
                    swipeToSlide: "true" === t.swipeToSlide,
                    touchMove: "false" !== t.touchMove,
                    touchThreshold: t.touchThreshold ? parseInt(t.touchThreshold, 10) : 5,
                    useCSS: "false" !== t.useCSS,
                    variableWidth: "true" === t.variableWidth,
                    vertical: "true" === t.vertical,
                    verticalSwiping: "true" === t.verticalSwiping,
                    rtl: "true" === t.rtl
                }, t.settings)
            }, l = function() {
                var e = angular.element(o);
                return e.hasClass("slick-initialized") && (e.remove("slick-list"), e.slick("unslick")), e
            }, d = function() {
                s();
                var n = angular.element(o);
                if (angular.element(o).hasClass("slick-initialized")) {
                    if (r.enabled) return n.slick("getSlick");
                    l()
                } else {
                    if (!r.enabled) return;
                    n.on("init", function(e, n) {
                        return "undefined" != typeof r.event.init && r.event.init(e, n), "undefined" != typeof c ? n.slideHandler(c) : void 0
                    }), e(function() {
                        angular.element(o).css("display", "block"), n.not(".slick-initialized").slick(r)
                    })
                }
                t.internalControl = r.method || {}, i.forEach(function(e) {
                    t.internalControl[e] = function() {
                        var i;
                        i = Array.prototype.slice.call(arguments), i.unshift(e), n.slick.apply(o, i)
                    }
                }), n.on("afterChange", function(n, i, o) {
                    c = o, "undefined" != typeof r.event.afterChange && e(function() {
                        t.$apply(function() {
                            r.event.afterChange(n, i, o)
                        })
                    })
                }), n.on("beforeChange", function(n, i, o, a) {
                    "undefined" != typeof r.event.beforeChange && e(function() {
                        e(function() {
                            t.$apply(function() {
                                r.event.beforeChange(n, i, o, a)
                            })
                        })
                    })
                }), n.on("reInit", function(n, i) {
                    "undefined" != typeof r.event.reInit && e(function() {
                        t.$apply(function() {
                            r.event.reInit(n, i)
                        })
                    })
                }), "undefined" != typeof r.event.breakpoint && n.on("breakpoint", function(n, i, o) {
                    e(function() {
                        t.$apply(function() {
                            r.event.breakpoint(n, i, o)
                        })
                    })
                }), "undefined" != typeof r.event.destroy && n.on("destroy", function(n, i) {
                    e(function() {
                        t.$apply(function() {
                            r.event.destroy(n, i)
                        })
                    })
                }), "undefined" != typeof r.event.edge && n.on("edge", function(n, i, o) {
                    e(function() {
                        t.$apply(function() {
                            r.event.edge(n, i, o)
                        })
                    })
                }), "undefined" != typeof r.event.setPosition && n.on("setPosition", function(n, i) {
                    e(function() {
                        t.$apply(function() {
                            r.event.setPosition(n, i)
                        })
                    })
                }), "undefined" != typeof r.event.swipe && n.on("swipe", function(n, i, o) {
                    e(function() {
                        t.$apply(function() {
                            r.event.swipe(n, i, o)
                        })
                    })
                }), "undefined" != typeof r.event.lazyLoaded && n.on("lazyLoaded", function(n, i, o, a) {
                    e(function() {
                        t.$apply(function() {
                            r.event.lazyLoaded(n, i, o, a)
                        })
                    })
                }), "undefined" != typeof r.event.lazyLoadError && n.on("lazyLoadError", function(n, i, o, a) {
                    e(function() {
                        t.$apply(function() {
                            r.event.lazyLoadError(n, i, o, a)
                        })
                    })
                })
            }, u = function() {
                l(), d()
            }, o.one("$destroy", function() {
                l()
            }), t.$watch("settings", function(e, n) {
                return null !== e ? u() : void 0
            }, !0)
        }
    }
}]);"use strict";
angular.module("slickCarousel", []).constant("slickCarouselConfig", {
    method: {},
    event: {}
}).directive("slick", ["$timeout", "slickCarouselConfig", function(e, n) {
    var i, t;
    return i = ["slickGoTo", "slickNext", "slickPrev", "slickPause", "slickPlay", "slickAdd", "slickRemove", "slickFilter", "slickUnfilter", "unslick"], t = ["afterChange", "beforeChange", "breakpoint", "destroy", "edge", "init", "reInit", "setPosition", "swipe", "lazyLoaded", "lazyLoadError"], {
        scope: {
            settings: "=",
            enabled: "@",
            accessibility: "@",
            adaptiveHeight: "@",
            autoplay: "@",
            autoplaySpeed: "@",
            arrows: "@",
            asNavFor: "@",
            appendArrows: "@",
            prevArrow: "@",
            nextArrow: "@",
            centerMode: "@",
            centerPadding: "@",
            cssEase: "@",
            customPaging: "&",
            dots: "@",
            draggable: "@",
            fade: "@",
            focusOnSelect: "@",
            easing: "@",
            edgeFriction: "@",
            infinite: "@",
            initialSlide: "@",
            lazyLoad: "@",
            mobileFirst: "@",
            pauseOnHover: "@",
            pauseOnDotsHover: "@",
            respondTo: "@",
            responsive: "=?",
            rows: "@",
            slide: "@",
            slidesPerRow: "@",
            slidesToShow: "@",
            slidesToScroll: "@",
            speed: "@",
            swipe: "@",
            swipeToSlide: "@",
            touchMove: "@",
            touchThreshold: "@",
            useCSS: "@",
            variableWidth: "@",
            vertical: "@",
            verticalSwiping: "@",
            rtl: "@"
        },
        restrict: "AE",
        link: function(t, o, a) {
            angular.element(o).css("display", "none");
            var r, s, l, d, u, c;
            return s = function() {
                r = angular.extend(angular.copy(n), {
                    enabled: "false" !== t.enabled,
                    accessibility: "false" !== t.accessibility,
                    adaptiveHeight: "true" === t.adaptiveHeight,
                    autoplay: "true" === t.autoplay,
                    autoplaySpeed: null != t.autoplaySpeed ? parseInt(t.autoplaySpeed, 10) : 3e3,
                    arrows: "false" !== t.arrows,
                    asNavFor: t.asNavFor ? t.asNavFor : void 0,
                    appendArrows: angular.element(t.appendArrows ? t.appendArrows : o),
                    prevArrow: t.prevArrow ? angular.element(t.prevArrow) : void 0,
                    nextArrow: t.nextArrow ? angular.element(t.nextArrow) : void 0,
                    centerMode: "true" === t.centerMode,
                    centerPadding: t.centerPadding || "50px",
                    cssEase: t.cssEase || "ease",
                    customPaging: a.customPaging ? function(e, n) {
                        return t.customPaging({
                            slick: e,
                            index: n
                        })
                    } : void 0,
                    dots: "true" === t.dots,
                    draggable: "false" !== t.draggable,
                    fade: "true" === t.fade,
                    focusOnSelect: "true" === t.focusOnSelect,
                    easing: t.easing || "linear",
                    edgeFriction: t.edgeFriction || .15,
                    infinite: "false" !== t.infinite,
                    initialSlide: parseInt(t.initialSlide) || 0,
                    lazyLoad: t.lazyLoad || "ondemand",
                    mobileFirst: "true" === t.mobileFirst,
                    pauseOnHover: "false" !== t.pauseOnHover,
                    pauseOnDotsHover: "true" === t.pauseOnDotsHover,
                    respondTo: null != t.respondTo ? t.respondTo : "window",
                    responsive: t.responsive || void 0,
                    rows: null != t.rows ? parseInt(t.rows, 10) : 1,
                    slide: t.slide || "",
                    slidesPerRow: null != t.slidesPerRow ? parseInt(t.slidesPerRow, 10) : 1,
                    slidesToShow: null != t.slidesToShow ? parseInt(t.slidesToShow, 10) : 1,
                    slidesToScroll: null != t.slidesToScroll ? parseInt(t.slidesToScroll, 10) : 1,
                    speed: null != t.speed ? parseInt(t.speed, 10) : 300,
                    swipe: "false" !== t.swipe,
                    swipeToSlide: "true" === t.swipeToSlide,
                    touchMove: "false" !== t.touchMove,
                    touchThreshold: t.touchThreshold ? parseInt(t.touchThreshold, 10) : 5,
                    useCSS: "false" !== t.useCSS,
                    variableWidth: "true" === t.variableWidth,
                    vertical: "true" === t.vertical,
                    verticalSwiping: "true" === t.verticalSwiping,
                    rtl: "true" === t.rtl
                }, t.settings)
            }, l = function() {
                var e = angular.element(o);
                return e.hasClass("slick-initialized") && (e.remove("slick-list"), e.slick("unslick")), e
            }, d = function() {
                s();
                var n = angular.element(o);
                if (angular.element(o).hasClass("slick-initialized")) {
                    if (r.enabled) return n.slick("getSlick");
                    l()
                } else {
                    if (!r.enabled) return;
                    n.on("init", function(e, n) {
                        return "undefined" != typeof r.event.init && r.event.init(e, n), "undefined" != typeof c ? n.slideHandler(c) : void 0
                    }), e(function() {
                        angular.element(o).css("display", "block"), n.not(".slick-initialized").slick(r)
                    })
                }
                t.internalControl = r.method || {}, i.forEach(function(e) {
                    t.internalControl[e] = function() {
                        var i;
                        i = Array.prototype.slice.call(arguments), i.unshift(e), n.slick.apply(o, i)
                    }
                }), n.on("afterChange", function(n, i, o) {
                    c = o, "undefined" != typeof r.event.afterChange && e(function() {
                        t.$apply(function() {
                            r.event.afterChange(n, i, o)
                        })
                    })
                }), n.on("beforeChange", function(n, i, o, a) {
                    "undefined" != typeof r.event.beforeChange && e(function() {
                        e(function() {
                            t.$apply(function() {
                                r.event.beforeChange(n, i, o, a)
                            })
                        })
                    })
                }), n.on("reInit", function(n, i) {
                    "undefined" != typeof r.event.reInit && e(function() {
                        t.$apply(function() {
                            r.event.reInit(n, i)
                        })
                    })
                }), "undefined" != typeof r.event.breakpoint && n.on("breakpoint", function(n, i, o) {
                    e(function() {
                        t.$apply(function() {
                            r.event.breakpoint(n, i, o)
                        })
                    })
                }), "undefined" != typeof r.event.destroy && n.on("destroy", function(n, i) {
                    e(function() {
                        t.$apply(function() {
                            r.event.destroy(n, i)
                        })
                    })
                }), "undefined" != typeof r.event.edge && n.on("edge", function(n, i, o) {
                    e(function() {
                        t.$apply(function() {
                            r.event.edge(n, i, o)
                        })
                    })
                }), "undefined" != typeof r.event.setPosition && n.on("setPosition", function(n, i) {
                    e(function() {
                        t.$apply(function() {
                            r.event.setPosition(n, i)
                        })
                    })
                }), "undefined" != typeof r.event.swipe && n.on("swipe", function(n, i, o) {
                    e(function() {
                        t.$apply(function() {
                            r.event.swipe(n, i, o)
                        })
                    })
                }), "undefined" != typeof r.event.lazyLoaded && n.on("lazyLoaded", function(n, i, o, a) {
                    e(function() {
                        t.$apply(function() {
                            r.event.lazyLoaded(n, i, o, a)
                        })
                    })
                }), "undefined" != typeof r.event.lazyLoadError && n.on("lazyLoadError", function(n, i, o, a) {
                    e(function() {
                        t.$apply(function() {
                            r.event.lazyLoadError(n, i, o, a)
                        })
                    })
                })
            }, u = function() {
                l(), d()
            }, o.one("$destroy", function() {
                l()
            }), t.$watch("settings", function(e, n) {
                return null !== e ? u() : void 0
            }, !0)
        }
    }
}]);