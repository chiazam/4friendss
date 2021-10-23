/* global funcs, lib, api */

!function () {

    funcs.start_my_music = function (container_id) {

        lib.add_class('width-100-cent', container_id);
        lib.add_class('min-height-100-cent', container_id);
        $(container_id).parentNode.style.background = `var(--liter-black-moder)`;

        let suffix = lib.switch_num;

        ++lib.switch_num;

        lib.inc_html(`
         
         <section class='overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent border-box display-flex flex-column'>
        
            <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="fab fa-itunes-note"></i>&nbsp;4friendss box</section><section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.start_my_music('${container_id}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
        
            <section id="music_box_retain_my_music_bbox_${funcs.userinfo.logged_user.info.g}_${suffix}"></section>
        
            <section id="music_box_retain_my_music_info_${funcs.userinfo.logged_user.info.g}_${suffix}"></section>
            
         </section>
        
         `, container_id);

        funcs.music_header_player_start(`music_box_retain_my_music_bbox_${funcs.userinfo.logged_user.info.g}_${suffix}`);

        funcs.start_personal_music_holder(`music_box_retain_my_music_info_${funcs.userinfo.logged_user.info.g}_${suffix}`, funcs.userinfo.logged_user.info.g, funcs.userinfo.logged_user.info.b, suffix, false);

    };

    funcs.music_header_player_start = function (container_id) {

        let suffix = lib.switch_num;

        ++lib.switch_num;

        $(container_id).innerHTML = `
        
        <section id="__music__progress_${suffix}"> </section>
        
        <section class="display-flex border-box padding-5-px height-47-px">

                <section class="margin-right-5px flex-1">

                    <section class=" loggers-lock-inputs-holders-holders border-1px-solid flex-1 display-flex align-items-center border-right-none border-left-none border-top-none">

                        <section class="padding-5-px">

                            <i class="fa fa-search"></i>

                        </section>

                        <section class="flex-1">

                            <input data-suffix="${suffix}" id="music-sercher-full-inp-${suffix}" class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" placeholder="search for music">

                        </section>

                        <section class="cursor-pointer padding-5-px height-fit-content">

                            <i onclick="/* $('music-sercher-full-inp-${suffix}').value='';lib.host_event_execute_now('input', $('music-sercher-full-inp-${suffix}')); */ lib.add_class('display-none', 'music-sercher-full-result-holder-${suffix}');" class="fa fa-times"></i>

                        </section>

                    </section>
        
                    <section data-suffix="${suffix}" id="music-sercher-full-result-holder-${suffix}" class="display-none border-1px-solid heavier border-box border-radius-5px position-relative z-index-2 friends-shadow-shadow">

                        <section class="padding-5-px max-height-300-px overflow-hidden overflow-y-scroll"></section>
        
                        <section class="padding-5-px"></section>

                    </section>

                </section>
        
                <label for="audio_uploaded_filer_${suffix}">
        
                <section class="cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue border-radius-5px">
        
                    <i class="fa fa-plus"></i>
        
                    <form class='display-none' data-suffix='${suffix}' id='upload_filer_filer_${suffix}_parenter' enctype='multipart/form-data'>

            <input name="audio_uploaded[]" multiple type='file' data-suffix='${suffix}' id='audio_uploaded_filer_${suffix}'>

                    </form>

                </section>
        
                </label>

            </section>
        
            <section id="player_holder_main_chances_${suffix}"></section>
        
    `;
        lib.event_attach($(`music-sercher-full-inp-${suffix}`), 'focus', funcs.change_funcs_music, 1);
        lib.event_attach($(`music-sercher-full-inp-${suffix}`), 'input', funcs.change_search_music, 1);

        lib.host_event_execute_now('input', $(`music-sercher-full-inp-${suffix}`));

        lib.event_attach($(`audio_uploaded_filer_${suffix}`), 'change', function (e) {

            let validate = true;

            lib._looper_challenge(e.currentTarget.files, function (element) {

                if (!funcs.audio_validator(element)) {

                    validate = false;

                    e.currentTarget.files = $('empty_inp_file').files;

                    funcs.error_showers_bit(`<section class="padding-5-px">
                    
                        <section>${funcs.input_hollar_error(`audio`)}</section>
                    
                    </section>
                    
                    `);

                }

            });

            if (validate === true) {

                funcs.file_upload_kick({suffix: e.currentTarget.dataset.suffix, category: 'music things', type: 'music upload', repeat: false, input_id: e.currentTarget.id}, `${api}api/music/audio_uploader_duke.php`, e.currentTarget.parentNode.id, `__music__progress_${e.currentTarget.dataset.suffix}`, funcs.upload_puff_symbol, {'4friendss_user': funcs.userinfo.login_token});

            }

        }, 1);





        funcs.main_player_holder_plat = `player_holder_main_chances_${suffix}`;

        funcs.music_player_hunt(funcs.main_player_holder_plat);

    };

    funcs.change_funcs_music = function (e) {

        lib.remove_class('display-none', `music-sercher-full-result-holder-${e.currentTarget.dataset.suffix}`);

    };

    funcs.get_search_music = function (element_id, word, suffix, offset = 0, limit = 5) {

        let element = $(element_id);

        $(`music-sercher-full-result-holder-${suffix}`).children[1].innerHTML = `<section class="display-flex width-100-cent border-box height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({suffix: suffix, category: 'music things', type: 'music search', repeat: false, container_id: `music-sercher-full-result-holder-${suffix}`, input_id: element.id, word: word, limit: limit, offset: offset}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/my_music_modules/search_musics_my_only.php?offset=${offset}&limit=${limit}&word=${word}`);

    };

    funcs.change_search_music = function (e) {

        if (funcs.search_music_outer !== undefined) {

            clearTimeout(funcs.search_music_outer);

        }

        let targeted = e.currentTarget;

        $(`music-sercher-full-result-holder-${targeted.dataset.suffix}`).children[0].innerHTML = ``;

        funcs.search_music_outer = setTimeout(function () {

            funcs.get_search_music(targeted.id, targeted.value, targeted.dataset.suffix);

        }, 1000);

    };

    funcs.template_my_music_search = function (obj, container_id) {

        let musics_holder = ``;

        if (!obj.success.api_result.message.music.hasOwnProperty('none')) {

            lib._looper_challenge(obj.success.api_result.message.music, function (element) {


                musics_holder += `<section class="padding-5-px">
                
                    <section>${funcs.list_related_songs(element)}</section>

                </section>`;

            });

        }

        funcs.adj_html_element($(container_id).children[0], 'beforeend', musics_holder);

    };

    funcs.validate_my_music_starter = function (container_id) {

        if (funcs.route_my_music_before !== true) {
            funcs.route_my_music_before = true;
            funcs.start_my_music(container_id);
        }

    };

    funcs.music_player_hunt = function (container_id, key = `next`) {

        $(container_id).innerHTML = ` <section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({category: 'music things', type: 'music player', repeat: false, container_id: container_id, key: key}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/my_music_modules/music_player_key_bulker.php?music_key=${key}`);

    };

    funcs.music_player_display_role = function (obj) {

        if (!obj.success.api_result.message.present_song.hasOwnProperty('none')) {

            let suffix = lib.switch_num;

            ++lib.switch_num;

            funcs.audio_push_info(obj.success.api_result.message.present_song);

            let present_song = funcs.audio_obj_[obj.success.api_result.message.present_song.hash];

            funcs.music_related_songs_returner(present_song);



            $(obj.recognize.container_id).innerHTML = `
    
                    <section id="music_player_hold_present_music_finally_${suffix}"></section>
            
                    <section id="music_player_hold_next_music_finally_${suffix}"></section>

                `;

            let next = null;

            if (!obj.success.api_result.message.next_song.hasOwnProperty('none')) {

                next = obj.success.api_result.message.next_song.hash

            }

            $(`music_player_hold_present_music_finally_${suffix}`).innerHTML = `
            
                <section>

                    <section class="display-flex align-items-center justify-content-center"><section class="padding-5-px">

                    <i draggable="false" class="fab fa-itunes-note"></i>&nbsp;${present_song.title} ${funcs.music_year_returner(present_song.year)}&nbsp;<a href="${funcs.app}?means=music_info&key=${present_song.hash}" class="cursor-pointer color-fb-blue hover-background-twitter border-box"> <i class="fa fa-external-link-alt font-size-16px"></i> </a>

                    </section></section>
            
                    <section class='display-flex align-items-center justify-content-center width-100-cent margin-top-5-px border-box flex-wrap'>${funcs.music_artist_returner(present_song.artist_array)}</section>
            
                    <section class='display-flex justify-content-center'>  ${funcs.music_album_returner(present_song.album)}  </section>
            
                    <section>${funcs.spill_played_playlist_favourite_template(present_song, false)}</section>

                </section>
            
                <section>${funcs.audio_galleryer_singer(present_song, suffix, next, true)}</section>

                <section>${funcs.show_related_song_flex(present_song.hash)}</section>

            `;

            if (!obj.success.api_result.message.next_song.hasOwnProperty('none')) {

                funcs.audio_push_info(obj.success.api_result.message.next_song);

                let next_song = funcs.audio_obj_[obj.success.api_result.message.next_song.hash];

                funcs.music_related_songs_returner(next_song);

                $(`music_player_hold_next_music_finally_${suffix}`).innerHTML = `
                
                <section class="padding-5-px lighter margin-auto">
    
                        <section class="display-flex align-items-center">
                
                            <section class="font-weight-bold">Next song</section>
                
                            <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fa fa-caret-right"></i></section>

                        </section>
                
                        <section class="overflow-hidden heavier border-radius-5px border-1px-solid">${funcs.list_related_songs(next_song)}</section>
                
                </section>

                    `;


            }

        } else {

            $(obj.recognize.container_id).innerHTML = ``;

        }

    };

}();
