/* global funcs, lib, regex, api */

!function () {

    funcs.display_fully_dialogue_anytime = function (obj) {

        funcs.display_dialogue_background_music(obj);
        funcs.display_prev_dialogue_butt(obj);
    };

    funcs.display_prev_dialogue_butt = function (obj) {

        if ($(`previous_chat_${obj.recognize.b}_${obj.recognize.suffix}`).dataset.chatprev === '') {

            funcs.inc_html(funcs.error_reviver__(`funcs.stream_chat_to_fro_flee("${obj.recognize.q}", "${obj.recognize.b}", "${obj.recognize.suffix}", "previous_chat_${obj.recognize.b}_${obj.recognize.suffix}", false, false, "${obj.recognize.limit}");`, `<i class='fa fa-angle-up'></i> &nbsp; <section>See previous</section>`), $(`previous_chat_${obj.recognize.b}_${obj.recognize.suffix}`));
            lib.add_class('padding-5-px', `previous_chat_${obj.recognize.b}_${obj.recognize.suffix}`);
        }

        funcs.template_dialogue_seen(obj);

        funcs.template_dialogue_online(obj);

        funcs.template_dialogue_main_main(obj);

    };

    funcs.template_dialogue_online = function (obj) {

        let person = obj.success.api_result.message.user;

        let seen_last = `online`;

        if (person.online.online === false) {

            seen_last = 'last seen on ' + person.online.last;
        }

        $(`last_seen_${person.info.b}_${obj.recognize.suffix}`).innerHTML = `<section class="padding-5-px line-height-22-px display-flex border-1px-solid border-box border-top-none border-left-none heavier border-right-none font-size-10px">${seen_last}</section>`;

    };

    funcs.template_dialogue_main_main = function (obj) {

        let person = obj.success.api_result.message.user;

        lib._looper_challenge(obj.success.api_result.message.dialogue, function (element) {

            funcs.display_each_chat_flip(element, obj.recognize.suffix, obj.recognize.top, person);

        });

    };

    funcs.display_each_chat_flip = function (element, suffix, top, person) {

        let ss_num = lib.switch_num;

        ++lib.switch_num;

        let person_face = 'beforeend';

        if (top === false) {

            person_face = 'afterbegin';

        }

        let flex_dir = ``;

        let dialogue_align = `align-items-start`;

        let face_of_sender = funcs.round_profile_dumper(person);

        if (element.b_sender === funcs.userinfo.logged_user.info.b && element.q_sender === funcs.userinfo.logged_user.info.q) {

            flex_dir = `flex-row-reverse`;

            dialogue_align = `align-items-end`;

            face_of_sender = `<section onclick="funcs.delete_dialogue_trigger(this,'holder_each_chat_${person.info.b}_${suffix}_${ss_num}','${suffix}','${person.info.b}','${person.info.q}','${element.chat_key}');" id="delete_each_chat_${person.info.b}_${suffix}_${ss_num}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-trash-alt"></i></section>`;

            /*funcs.round_profile_dumper(funcs.userinfo.logged_user, true, false);*/

        }

        if (top === true) {

            $(`next_chat_${person.info.b}_${suffix}`).dataset.chatnext = element.id;

        }

        if ((top === false && (parseInt(element.id) < parseInt($(`previous_chat_${person.info.b}_${suffix}`).dataset.chatprev))) || ($(`previous_chat_${person.info.b}_${suffix}`).dataset.chatprev.length === 0)) {

            $(`previous_chat_${person.info.b}_${suffix}`).dataset.chatprev = element.id;

        }

        let template = `
        
            <section class="border-1px-solid border-top-none border-right-none border-left-none heavier" id="holder_each_chat_${person.info.b}_${suffix}_${ss_num}">

                <section class="padding-5-px display-flex ${flex_dir}">

                    <section class="padding-5-px">${face_of_sender}</section>
        
                    <section class="display-flex flex-1 flex-column ${dialogue_align}">

                        <section class="font-size-16px padding-5-px lighter border-radius-2px">${regex.hash__tag_replacer(element.word, true)}</section>

                        <section class="width-70-cent margin-top-5-px">${funcs.display_hashtags_tags(element.hash_tags, element.mentions)}</section>

                        <section class="padding-2-px width-70-cent">${funcs.sentiment_analysis_templater(element.word_analysis)}</section>
        
                        <section class="width-50-cent" id="hold_threesome_media_count_${person.info.b}_${suffix}_${ss_num}"></section>
        
                        <section class="padding-5-px font-size-10px">sent on ${element.date}, from ${element.device}</section>

                    </section>

                </section>
        
                <section></section>

            </section>

        `;

        funcs.adj_html(`holder_chat_${person.info.b}_${suffix}`, person_face, template);

        let obj_num_media = {};

        obj_num_media.recognize = {bic: person.info.b, qic: person.info.q, suffix: suffix, container_id: `hold_threesome_media_count_${person.info.b}_${suffix}_${ss_num}`, chat_key: element.chat_key};

        obj_num_media.success = {api_result: {message: element.files_num}};

        funcs.dialogue_display_media(obj_num_media, true);

        if (top === false) {

            lib.scroll_to_top($(`holder_chat_${person.info.b}_${suffix}`).parentNode.parentNode.parentNode.id);

        } else if (top === true) {

            lib.scroll_to_bottom($(`holder_chat_${person.info.b}_${suffix}`).parentNode.parentNode.parentNode.id);

        }

    };

    funcs.get_media_wanted_dialogue = function (bic, qic, suffix, chat_key, type) {

        let type____ = '';

        if (type === 'images') {

            type____ = 'dialogue photo';

        } else if (type === 'audios') {

            type____ = 'dialogue audio';

        } else if (type === 'videos') {

            type____ = 'dialogue video';

        }

        lib.toggle_class_ele('display-none', $(`hold_main_media_yet_${bic}_${suffix}`).parentNode);

        funcs.send_get_me_something({suffix: suffix, bic: bic, qic: qic, category: 'dialogue things', type: type____, repeat: false, display_id: `hold_main_media_yet_${bic}_${suffix}`, saved: true, chat_key: chat_key}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/chat/dialogue_get_file_.php?media=${type}&chat_key=${chat_key}`);


    };

    funcs.template_dialogue_seen = function (obj) {

        let person = obj.success.api_result.message.user;

        if (obj.success.api_result.message.them_yet_see.is === true) {

            $(`seen_display_${person.info.b}_${obj.recognize.suffix}`).innerHTML = `<section class="padding-5-px line-height-22-px text-align-center">${person.info.full} has not seen ${obj.success.api_result.message.them_yet_see.num} of your messages</section>`;

        } else {

            $(`seen_display_${person.info.b}_${obj.recognize.suffix}`).innerHTML = ``;

        }

    };

    funcs.display_dialogue_background_music = function (obj) {

        let back_musica = obj.success.api_result.message.back_music;

        if (back_musica.hasOwnProperty('none')) {

            $(`back_music_${obj.recognize.b}_${obj.recognize.suffix}`).innerHTML = ``;

            $(`back_music_${obj.recognize.b}_${obj.recognize.suffix}`).dataset.music_hash = ``;

        } else if (back_musica.music.hash !== $(`back_music_${obj.recognize.b}_${obj.recognize.suffix}`).dataset.music_hash) {

            $(`back_music_${obj.recognize.b}_${obj.recognize.suffix}`).dataset.music_hash = back_musica.music.hash;

            $(`back_music_${obj.recognize.b}_${obj.recognize.suffix}`).innerHTML = `
            
            <section class="padding-5-px border-1px-solid border-box border-top-none border-left-none heavier border-right-none">
            
                <section>${funcs.audio_galleryer_singer(back_musica.music, obj.recognize.suffix, null, true, true, back_musica.music_currentTimer, true)}</section>

                <section class="flex-wrap display-flex align-items-center">

                    ${funcs.text_profile_dumper(back_musica.changer, false, false, 'font-weight-bold', true)} &nbsp;
                    
                    <section class="padding-5-px">Updated the chat music on ${back_musica.date_change}</section>
                    
                </section>
            
            </section>

            `;

        }

    };

    funcs.delete_dialogue_trigger = function (element, container_id, suffix, bic, qic, chat_key) {

        element.children[0].className = `fa fa-spinner animate-spin`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({suffix: suffix, category: 'dialogue things', type: 'chat deleter', repeat: false, container_id: container_id, trigger_id: element.id, onclick: onclicker, chat_key: chat_key, qic: qic, bic: bic}, {'4friendss_user': funcs.userinfo.login_token, chat_key: chat_key}, `${api}api/chat/dialogue_deleter.php?bic=${bic}&qic=${qic}`);

    };

}();


