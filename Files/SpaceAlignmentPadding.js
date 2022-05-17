<script>
    /* Space Adjustment - Padding*/
    var a5 = document.getElementsByClassName("cus-blocks-4-131-box");
    if(a5 && document.body.clientWidth >= 576){
        for (var i = 0; i < a5.length; i++) {
            if (i % 2 == 0) {
                a5[i].classList.add("pe-1");
            } else {
                a5[i].classList.add("ps-1");
            }
        }
    }
</script>
