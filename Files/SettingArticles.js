<script>
    function putArticleAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    var bl = document.getElementsByClassName("cus-101-blocks-1-article");
    var bp = document.getElementsByClassName("cus-102-blocks-1-wrap");
    if (bl[0]) {
    bp[0].insertAdjacentHTML("beforeend", "<div class=\'col-12 cus-101-blocks-1-a1\'></div>");
    document.getElementsByClassName("cus-101-blocks-1-a1")[0].appendChild(bl[0]);
    }
    for (var i = 1; i <= bl.length; i++) {
        if (bl[i]) {
            if (i < 3) {
                if (i == 1) {
                    bp[0].insertAdjacentHTML("beforeend", "<div class=\'col-12 cus-101-blocks-1-a23 mb-3\'></div>");
                    document.getElementsByClassName("cus-101-blocks-1-a23")[0].appendChild(bl[0]);
                }
                else {
                    document.getElementsByClassName("cus-101-blocks-1-a23")[0].appendChild(bl[0]);
                }
            }
            else if(i < 6) {
                bp[0].insertAdjacentHTML("beforeend", "<div class=\'row cus-101-blocks-1-a345\'></div>");
                document.getElementsByClassName("cus-101-blocks-1-a345")[0].appendChild(bl[0]);
            }
            else {
                if(i == 6) {
                    bp[0].insertAdjacentHTML("beforeend", "<div class=\'row cus-101-blocks-1-a6 mx-0\'></div>");
                    document.getElementsByClassName("cus-101-blocks-1-a6")[0].insertAdjacentHTML("beforeend", "<div class=\'col-12 position-relative border-bottom border-2 border-red px-0 my-3\'><span class=\'text-white bg-theme py-2 px-3 d-inline-block\'>In Case You Missed It </span></div>");
                    document.getElementsByClassName("cus-101-blocks-1-a6")[0].appendChild(bl[0]);
                }
                else {
                    document.getElementsByClassName("cus-101-blocks-1-a6")[0].appendChild(bl[0]);
                }
            }
        }
    }
</script>
