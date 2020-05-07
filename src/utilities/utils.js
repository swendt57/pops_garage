import $ from "jquery";
import React from "react";

export const urlParserConfigs = [
    {
        regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
        fn: (key, result) => <span key={key}>
                                     <a href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`} target="_blank" rel="noopener noreferrer">url_name</a>{result[5]}
                                 </span>
    },
    {
        regex: /(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
        fn: (key, result) => <span key={key}>
                             <a href={`http://${result[1]}.${result[2]}${result[3]}`} target="_blank" rel="noopener noreferrer">url_name</a>{result[4]}
                         </span>
    }
];

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