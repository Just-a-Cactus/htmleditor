;
(function () {
    const div = document.querySelector('#div');
    const textarea = document.querySelector('#textarea');

    document.body.onkeydown = click;

    function click(e) {

        if (e.ctrlKey === true && e.keyCode === 69) {
            e.preventDefault();
            div.style.cssText = "display: none;";
            textarea.style.cssText = "display: inline;";
            textarea.value = div.innerHTML;
            textarea.focus();
        }

        if (e.ctrlKey === true && e.keyCode === 83) {
            e.preventDefault();
            div.style.cssText = "display: block;";
            textarea.style.cssText = "display: none;";
            div.innerHTML = textarea.value;
        }

        if (e.keyCode === 27) {
            e.preventDefault();
            div.style.cssText = "display: block;";
            textarea.style.cssText = "display: none;";
        }
    }
})();