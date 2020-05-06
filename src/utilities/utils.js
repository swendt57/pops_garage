import $ from "jquery";

//Not using at this time - keeping it for now
export const adjustSpacing = () => {
    console.log("adjust triggered")
    $('.detail').each(function() {
        let $this = $(this);

        let maxHeight = parseInt($this.children('img').css("max-height").replace(/[^-\d.]/g, ''));
        console.log($this.children('img').attr('src'));
        let imgHeight = $this.children('img').outerHeight();
        console.log("img: " + imgHeight);
        let imgHeight2Use = (imgHeight > maxHeight) ? maxHeight : imgHeight;
        console.log("max: " + maxHeight);
        let textHeight = $this[0].scrollHeight;
        console.log("text: " + textHeight);
        let divHeight = (imgHeight2Use > textHeight) ? imgHeight2Use + 5 : textHeight + 5;
        console.log("div: " + divHeight)
        $this.parent().css({"height": divHeight});
    });
}