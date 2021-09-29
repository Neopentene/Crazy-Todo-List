function growTextArea(element, height) {
    var remUnits = parseInt(getComputedStyle(document.documentElement).fontSize);
    element.style.height = height + "rem";
    element.style.height = element.scrollHeight - remUnits + "px";
}
