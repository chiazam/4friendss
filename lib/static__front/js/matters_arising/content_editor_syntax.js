/* global funcs, lib, regex, api */

!function () {

    funcs.slice_string = function (str, start, end) {

        return str.slice(start, end);

    };

    funcs.select_amount_words = function (str, end, start = 0) {

        let arr = str.replace(/\s+/g, ' ').split(' ');

        let new_word = str;

        if (arr.length > end) {
            new_word = (arr.slice(start, end)).join(' ');
        }

        return new_word;

    };

    funcs.wordsCount = function (str) {

        let arr = str.trim().replace(/\s+/g, ' ').split(' ');

        return (!arr[0] ? 0 : arr.length);

    };

    funcs.insert_contenteditable_to_textarea = function (e) {

        let num_words = 60;

        $(`${e.currentTarget.id}_boxer`).value = funcs.select_amount_words(e.currentTarget.innerText, num_words);

        e.currentTarget.dataset.numword = `${funcs.wordsCount($(`${e.currentTarget.id}_boxer`).value)}/${num_words}`;

        funcs.wordsCount($(`${e.currentTarget.id}_boxer`).value);

        lib.host_event_execute_now('input', $(`${e.currentTarget.id}_boxer`));

    };

    funcs.content_editable_syntax = function (e) {

        if (!e.ctrlKey) {
            var caret = new VanillaCaret(e.currentTarget);

            let caret_position = lib.get_caret_position(e.currentTarget);
            let new_content = regex.hash__tag_replacer($(`${e.currentTarget.id}_boxer`).value);
            e.currentTarget.innerHTML = new_content;

            if (e.keyCode === 13) {

                caret.setPos(caret_position + 1);

            } else {
                caret.setPos(caret_position);
            }

            if (funcs.input_hint_searcher__ajax !== undefined) {

                clearTimeout(funcs.input_hint_searcher__ajax);

            }

            if (lib.getSelectionElement().hasAttribute('editorhighlit')) {

                let wipe_hint = lib.getSelectionElement().innerText;

                if (regex.tag.test(wipe_hint) || regex.hashtag.test(wipe_hint)) {

                    regex.tag.test(wipe_hint);

                    if (regex.tag.test(wipe_hint) && $(`${e.currentTarget.id}__suggest_holder`).dataset.searched !== wipe_hint) {

                        let element = e.currentTarget;

                        funcs.input_hint_searcher__ajax = setTimeout(function () {

                            funcs.send_get_me_something({suffix: element.dataset.suffix, category: 'content maker', type: 'autocomplete username', repeat: false, input_id: element.id, input_child_index: lib.node_index(lib.getSelectionElement()), display_id: `${element.id}__suggest_holder`, return_typr: 'people', word: wipe_hint}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/search/hint_search.php?word=${wipe_hint}&type=people&limit=5&offset=0`);

                        }, 1000);

                    } else if (regex.hashtag.test(wipe_hint)) {



                    }

                } else {

                    lib.remove_class('display-block', `${e.currentTarget.id}__suggest_holder`);
                    lib.add_class('display-none', `${e.currentTarget.id}__suggest_holder`);

                    funcs.make_spinner_ajax(`${e.currentTarget.id}__suggest_holder`, false);

                }

            } else {

                lib.remove_class('display-block', `${e.currentTarget.id}__suggest_holder`);

                lib.add_class('display-none', `${e.currentTarget.id}__suggest_holder`);

                funcs.make_spinner_ajax(`${e.currentTarget.id}__suggest_holder`, false);

            }

        }

    };

    lib.free_lock_post_sub_draft = function (e) {

        if (lib.trim(e.currentTarget.value).length === 0) {

            $(`${e.currentTarget.id}_publish`).setAttribute('disabled', true);

            $(`${e.currentTarget.id}_draft`).setAttribute('disabled', true);

            $(`${e.currentTarget.id}_publish`).removeAttribute('style');

            $(`${e.currentTarget.id}_draft`).removeAttribute('style');

        } else if (lib.trim(e.currentTarget.value).length > 0) {
            $(`${e.currentTarget.id}_publish`).removeAttribute('disabled');

            $(`${e.currentTarget.id}_draft`).removeAttribute('disabled');

            $(`${e.currentTarget.id}_publish`).setAttribute('style', 'opacity:1;');

            $(`${e.currentTarget.id}_draft`).setAttribute('style', 'opacity:1;');
        }

    }

}();
