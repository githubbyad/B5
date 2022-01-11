<script>
function putArticleAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var bl = document.getElementsByClassName("cus-blocks-2-130-article");
var bp = document.getElementsByClassName("cus-blocks-2-130-wrap");
var v = bl.length;
for (var i = 0; i < v; i++) {
    if (bl[i]) {
        if (i < 2) {
            if (i == 0) {
                bp[0].insertAdjacentHTML("beforeend", "<div class=\'col-lg-6 cus-blocks-2-130-a12\'></div>");
                document.getElementsByClassName("cus-blocks-2-130-a12")[0].appendChild(bl[0]);
            } else {
                document.getElementsByClassName("cus-blocks-2-130-a12")[0].appendChild(bl[0]);
            }
        } else {
            if (i == 2) {
                bp[0].insertAdjacentHTML("beforeend", "<div class=\'col-lg-6 cus-blocks-2-130-ax\'></div>");
                document.getElementsByClassName("cus-blocks-2-130-ax")[0].appendChild(bl[0]);
            } else {
                document.getElementsByClassName("cus-blocks-2-130-ax")[0].appendChild(bl[0]);
            }
        }
    }
}
<\/script>
