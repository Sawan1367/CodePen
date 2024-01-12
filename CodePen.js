function run(){
    let HTMLCode = document.getElementById("html-code")
    let CSSCode = document.getElementById("css-code")
    let JSCode = document.getElementById("js-code")

    let Output = document.getElementById("output")

    Output.contentDocument.body.innerHTML = HTMLCode.value;
}
