document.addEventListener("DOMContentLoaded", function() {
    var a = "cus-blocks-3-121-box"; /* article box's class. add "d-none" class as well */
    var l = "cus-blocks-3-121-load-more"; /* load more button's class*/
    var v = 6;
    var t = document.getElementsByClassName(a).length;
    if (document.getElementsByClassName(a)[1]) {
        document.getElementsByClassName(l)[0].classList.remove("d-none");
    }

    function countActiveBoxes() {
        var u = 0;
        var b = document.getElementsByClassName(a);
        for (i = 0; i < b.length; i++) {
            if (b[i].childElementCount > 0) {
                u++;
            } else {
                b[i].classList.add("d-none");
            }
        }
        return u;
    }
    document.getElementsByClassName(l)[0].setAttribute("data-load-start", countActiveBoxes());
    document.getElementsByClassName(l)[0].setAttribute("data-load-show", v + countActiveBoxes());
    document.getElementsByClassName(l)[0].setAttribute("data-load-max", t);
    document.getElementsByClassName(l)[0].addEventListener("click", function() {
        document.getElementsByClassName(l + "-p")[0].classList.add("invisible");
        setTimeout(function() {
            document.getElementsByClassName(l + "-i")[0].classList.remove("d-none");
        }, 100);
        setTimeout(function() {
            document.getElementsByClassName(l + "-i")[0].classList.add("d-none");
            document.getElementsByClassName(l + "-p")[0].classList.remove("invisible");
            var st = document.getElementsByClassName(l)[0].getAttribute("data-load-start");
            var sw = document.getElementsByClassName(l)[0].getAttribute("data-load-show");
            for (i = parseInt(st); i < parseInt(sw); i++) {
                if (document.getElementsByClassName(a)[i]) {
                    if (document.getElementsByClassName(a)[i].childElementCount == 0) {
                        document.getElementsByClassName(a)[i].classList.remove("d-none");
                        document.getElementsByClassName(a)[i].innerHTML = document.getElementsByClassName(a)[i].innerHTML.replace("<!--", "").replace("-->", "");
                    }
                }
            }
            document.getElementsByClassName(l)[0].setAttribute("data-load-start", countActiveBoxes());
            document.getElementsByClassName(l)[0].setAttribute("data-load-show", v + countActiveBoxes());
            if (document.getElementsByClassName(l)[0].getAttribute("data-load-start") == document.getElementsByClassName(l)[0].getAttribute("data-load-max")) {
                document.getElementsByClassName(l)[0].classList.add("d-none");
            }
        }, 800);
    });
});
