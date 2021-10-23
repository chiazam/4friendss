/* global funcs, lib */

!function () {

    funcs.layout_big = function () {

        $('container').className = `display-flex flex-row justify-content-center container border-box`;
        $('container-1').className = `flex-2 margin-right-5px position-sticky width-fit-content height-fit-content font-weight-bold border-box`;

        $('container-2').className = `flex-4 max-width-600-px lighter border-1px-solid border-top-none border-bottom-none`;
        /*$('container-3').className = `display-none flex-2 padding-5-px position-sticky max-width-400-px`;*/

    };

    funcs.layout_medium = function () {

        $('container').className = `display-flex flex-row justify-content-center container border-box`;
        $('container-1').className = `flex-2 margin-right-5px position-sticky width-fit-content height-fit-content font-weight-bold border-box`;

        $('container-2').className = `flex-4 max-width-600-px lighter border-1px-solid border-top-none border-bottom-none`;

        /*$('container-3').className = `display-none position-sticky`;*/


    };

    funcs.layout_small = function () {

        $('container').className = `display-flex align-items-center flex-column-reverse height-100-cent border-box`;

        $('container-1').className = `width-100-cent z-index-5 position-sticky align-self-center overflow-hidden overflow-x-scroll display-flex border-1px-solid heavier border-box fb-shadow-shadow-2`;

        $('container-2').className = `flex-1 width-100-cent max-width-600-px overflow-hidden overflow-y-scroll lighter`;

        /*$('container-3').className = `display-none position-sticky`;*/

    };

    funcs.main_layoutes = function () {

        if (lib.big_screen() === true) {

            funcs.layout_big();

        } else if (lib.medium_screen() === true) {

            funcs.layout_medium();

        } else if (lib.small_screen() === true) {

            funcs.layout_small();

        }

    };

}();
