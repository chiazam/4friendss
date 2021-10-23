/* global funcs, lib, api */

!function () {

    funcs.search_info_display_infoo = function (obj) {

        let search_result = obj.success.api_result.message;

        let container_id = `search_result_holder_${obj.recognize.suffix}`;

        let suffix = lib.switch_num;

        ++lib.switch_num;

        if (!search_result.dictionary.hasOwnProperty('none') && search_result.dictionary.length > 0) {

            funcs.display_dictionary_search(search_result.dictionary, container_id, suffix);

        }

        if (!search_result.people.hasOwnProperty('none') && search_result.people.length > 0) {

            funcs.adj_html(container_id, 'beforeend', `<section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none">${funcs.list_persons(search_result.people, false, false)}</section>`);
        }

        if (!search_result.music.hasOwnProperty('none') && search_result.music.length > 0) {

            funcs.adj_html(container_id, 'beforeend', `<section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none">${funcs.search_display_music(search_result.music,false)}</section>`);

        }

        if (!search_result.post.hasOwnProperty('none') && search_result.post.length > 0) {

            funcs.categorize_post_search(search_result.post, container_id, suffix);

        }

        if (!search_result.show.hasOwnProperty('none') && search_result.show.length > 0) {

            funcs.display_show_search(search_result.show, container_id, suffix);

        }

    };

}();

!function () {

    funcs.categorize_post_search = function (post_array, container_id, suffix) {

        let array_times = [];

        lib._looper_challenge(post_array, function (element) {

            if (element.cate_post === 'times') {

                array_times.push(element);

            } else if (element.cate_post === 'blog') {

                funcs.template_blog(container_id, [element], suffix);

            } else if (element.cate_post === 'post') {

                funcs.template_post(container_id, [element], suffix);

            }

        });

        if (array_times.length > 0) {

            funcs.template_main_times(container_id, array_times, suffix, true);

        }

    };

    funcs.display_dictionary_search = function (array_dictionary, container_id, suffix) {

        let template = ``;
        lib._looper_challenge(array_dictionary, function (element) {

            template += funcs.template_each_dictionary(element, suffix);

        });

        funcs.adj_html(container_id, 'beforeend', template);

    };

    funcs.template_each_dictionary = function (element, suffix) {

        let key = Object.keys(element);

        return `

            <section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none">

                    <section class="display-flex padding-5-px font-size-16px">

                        <section class="display-flex align-items-center">
        
                            <i draggable="false" class="fa fa-cubes"></i> &nbsp;
        
                            <section class="">${key[0]}</section>

                        </section>
        
                        <section class="flex-1"></section>
        
                        <section class="font-size-16px lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue margin-right-10-px">

                            <i draggable="false" onclick="let u = new SpeechSynthesisUtterance(); u.text = '${key[0]}'; speechSynthesis.speak(u);" class="fa fa-volume-up"></i>

                        </section>
        
                        <section id="hold_upload_dict_${key[0]}_${suffix}" onclick="funcs.upload_dict_searched(this,'${key[0]}','${suffix}');" class="font-size-16px lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue">

                            <i draggable="false" class="fa fa-angle-down"></i>

                        </section>

                    </section>
        
                    <section id="hold_word_dict_${key[0]}_${suffix}" class="padding-5-px display-none">${element[key[0]]}</section>

            </section>`;

    };

    funcs.display_show_search = function (show_array, container_id, suffix) {

        let template = ``;
        lib._looper_challenge(show_array, function (element) {

            template += funcs.template_each_show(element, suffix);

        });

        funcs.adj_html(container_id, 'beforeend', template);

    };

    funcs.upload_dict_searched = function (element, word, suffix) {

        if (element.dataset.seen === undefined) {

            element.children[0].className = `fa fa-spinner animate-spin`;

            let onclicker = element.getAttribute('onclick');

            element.removeAttribute('onclick');

            funcs.send_get_me_something({word: word, suffix: suffix, category: 'search things', type: 'dict upload', repeat: false, onclick: onclicker, trigger_id: element.id, 'container_id': `hold_word_dict_${word}_${suffix}`}, {'4friendss_user': funcs.userinfo.login_token, word: word}, `${api}api/search/dict_saver.php`);

        } else if (element.dataset.seen !== undefined) {

            lib.toggle_class_ele('display-none', $(`hold_word_dict_${word}_${suffix}`));

        }

    };


}();
