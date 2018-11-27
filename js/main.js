;
(function () {
    const div = document.querySelector('#div');
    const textarea = document.querySelector('#textarea');

    document.body.onkeydown = click;

    function click(e) {
        if (e.target !== textarea) {
            e.preventDefault();
        }

        if (e.ctrlKey === true && e.key === 'e') {
            textarea.innerHTML = div.innerHTML;
            div.style.cssText = "display: none;";
            textarea.style.cssText = "display: inline;";
        }

        if (e.ctrlKey === true && e.key === 's') {
            div.innerHTML = textarea.value;

            div.style.cssText = "display: block;";
            textarea.style.cssText = "display: none;";
        }

        if (e.key === 'Escape') {
            div.style.cssText = "display: block;";
            textarea.style.cssText = "display: none;";
        }
    }
})();