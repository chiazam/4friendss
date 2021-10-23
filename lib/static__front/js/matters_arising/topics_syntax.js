/* global funcs */

!function () {

    funcs.syntax_topics = function (e) {

        let num_words = 10;

        e.currentTarget.value = funcs.select_amount_words(e.currentTarget.value, num_words);

        e.currentTarget.nextElementSibling.innerHTML = `${funcs.wordsCount(e.currentTarget.value)}/${num_words}`;

    };


}();
