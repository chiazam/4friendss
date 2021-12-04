/* global funcs, lib */

!function () {

    funcs.suggest_sharer_gulp = function (obj) {

        if (obj.recognize.type === 'suggest person') {

            funcs.show_suggest_persons(obj);

        } else if (obj.recognize.type === 'suggest music') {

            funcs.show_suggest_music(obj);

        }

    };

}();

!function () {

    funcs.show_suggest_music = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);

            funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_music_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.retry_id));

            $(`hold-suggest-music-${obj.recognize.suffix}`).remove();

        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_music_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.retry_id));

                $(`hold-suggest-music-${obj.recognize.suffix}`).remove();

            } else {

                if (!obj.success.api_result.message.hasOwnProperty('none')) {

                    lib.inc_html('<section class="font-size-16px padding-5-px font-weight-bold"><i class="fab fa-itunes-note"></i> Checkout this songs</section>', $(`hold-suggest-music-${obj.recognize.suffix}`).children[0].id);

                    lib.inc_html(`<section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none">${funcs.search_display_music(obj.success.api_result.message,false)}</section>`, $(`hold-suggest-music-${obj.recognize.suffix}`).children[1].id );

                    /* if(obj.success.api_result.message.length < 4){

                        lib.inc_html(`<section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none">${funcs.search_display_music(obj.success.api_result.message,false)}</section>`, $(`hold-suggest-music-${obj.recognize.suffix}`).children[1].id );

                    }else{

                        funcs.audio_galleryer_content_maker(obj.success.api_result.message, $(`hold-suggest-music-${obj.recognize.suffix}`).children[1].id, true, obj.recognize.suffix);

                    } */


                    funcs.main_starter.aggregate_music_dropper = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                } else {
                    $(`hold-suggest-music-${obj.recognize.suffix}`).remove();
                }

                funcs.inc_html(``, $(obj.recognize.retry_id));

                funcs.handle_links();

                funcs.main_starter.call_post_jury(obj.recognize.display_id, obj.recognize.retry_id);

            }

        }

    };


    funcs.show_suggest_persons = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);

            funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_suggest_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.retry_id));

            $(`hold-suggest-person-${obj.recognize.suffix}`).remove();

        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_suggest_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.retry_id));

                $(`hold-suggest-person-${obj.recognize.suffix}`).remove();

            } else {

                if (!obj.success.api_result.people.hasOwnProperty('none')) {

                    lib.inc_html('<section class="font-size-16px padding-5-px font-weight-bold"><i class="fa fa-cocktail"></i> Do you know them?</section>', $(`hold-suggest-person-${obj.recognize.suffix}`).children[0].id);

                    funcs.show_persons_yet(`hold-suggest-person-${obj.recognize.suffix}`, obj.success.api_result.people, obj.recognize.suffix,true);

                    funcs.main_starter.aggregate_suggest_dropper = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                } else {
                    $(`hold-suggest-person-${obj.recognize.suffix}`).remove();
                }

                funcs.inc_html(``, $(obj.recognize.retry_id));

                funcs.handle_links();

                funcs.main_starter.call_blog_jury(obj.recognize.display_id, obj.recognize.retry_id);

            }

        }

    };


}();
