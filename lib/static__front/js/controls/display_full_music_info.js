/* global funcs, lib, api */

!function () {

    funcs.music_info_display_infoo = function (obj) {

        if (!obj.success.api_result.hasOwnProperty('mis_conduct')) {

            funcs.audio_push_info(obj.success.api_result.message.music_info);

            let audio__info = funcs.audio_obj_[obj.success.api_result.message.music_info.hash];

            let color__ = (audio__info.img_background.length > 0) ? (audio__info.img_background) : ('var(--liter-black-moder)');

            funcs.music_related_songs_returner(audio__info);

            funcs.music_info_key = audio__info.hash;

            $(obj.recognize.container_id).innerHTML = `

        <section class='overflow-hidden width-100-cent height-fit-content border-1px-solid border-right-none border-left-none border-box display-flex flex-column'>

            <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="fab fa-itunes-note"></i>&nbsp;${audio__info.title} ${funcs.music_year_returner(audio__info.year)}</section><section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.fully_start_music_info_now('${obj.recognize.container_id}','${audio__info.hash}','${obj.recognize.suffix}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
            
            <section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--29-px">
            
                        <section class="lighter fb-shadow-shadow-2 padding-2-px border-radius-2px cursor-pointer display-flex align-items-center justify-content-center">${audio__info.duration}</section>
            
                        <section class="flex-1"></section>

                </section>
        
            <section>

                 <img style="background:${color__};border-color:${color__};" draggable="false" class="cursor-pointer width-100-cent border-3px-solid border-box object-fit-contain height-150-px" src="${funcs.addImage(audio__info.path, 700, 500, 60, 2)}"/>

            </section>

            <section class='display-flex align-items-center justify-content-center margin-top-5-px border-box border-radius-5px margin-bottom-5-px'>${funcs.display_capter_namer_random(audio__info.uploader, false, false)}</section>
            
            <section class='display-flex align-items-center justify-content-center width-100-cent margin-top-5-px border-box flex-wrap'>${funcs.music_artist_returner(audio__info.artist_array)}</section>
            
            <section class='display-flex justify-content-center'>  ${funcs.music_album_returner(audio__info.album)}  </section>
            
            <section>${funcs.spill_played_playlist_favourite_template(audio__info)}</section>
            
            <section>${funcs.show_related_song_flex(audio__info.hash)}</section>
            
            <section id="hold_below_par__${audio__info.hash}_${obj.recognize.suffix}"></section>
            
            <section id="list_switch_music_${audio__info.hash}_${obj.recognize.suffix}"></section>
            
            <section class="padding-5-px" id="list_switch_loading_${audio__info.hash}_${obj.recognize.suffix}"></section>

        </section>

        `;

            funcs.hunt_music_info_catory(audio__info, audio__info.hash, obj.recognize.suffix);

        } else {
            funcs.main_all40000004();
        }

    };

    funcs.hunt_music_info_catory = function (obj, hash, suffix) {

        $(`hold_below_par__${hash}_${suffix}`).innerHTML = funcs.scroll_amber_wawerteer_fdtg(`
        
                <section class="display-none">

                    <input data-suffix="${suffix}" data-hash="${hash}" value="related" id="input_switch_header_${hash}_${suffix}"/>

                </section>
        
                <section onclick="funcs.update_inp_music_info('related','${hash}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px min-width-120-px font-weight-bold"> <i draggable="false" class="fa fa-link color-fb-green"></i>&nbsp; Related ${(obj.related.num !== 0) ? (`(${obj.related.num})`) : ('')}</section>

                <section onclick="funcs.update_inp_music_info('playlist','${hash}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px min-width-120-px font-weight-bold"> <i draggable="false" class="fa fa-th-list color-fb-blue"></i>&nbsp; Playlisted by ${(obj.playlisted_by.num !== 0) ? (`(${obj.playlisted_by.num})`) : ('')}</section>
        
                <section onclick="funcs.update_inp_music_info('favourite','${hash}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px min-width-120-px font-weight-bold"> <i draggable="false" class="fa fa-heart color-google-red"></i>&nbsp; Favourited by ${(obj.favourited_by.num !== 0) ? (`(${obj.favourited_by.num})`) : ('')}</section>
        
                <section onclick="funcs.update_inp_music_info('played','${hash}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px min-width-120-px font-weight-bold"> <i draggable="false" class="fa fa-headphones-alt color-google-yellow"></i>&nbsp; Played by ${(obj.played_by.num !== 0) ? (`(${obj.played_by.num})`) : ('')}</section>
        
                `, true, 'smaller_scroll_butt');

        lib.event_attach($(`input_switch_header_${hash}_${suffix}`), 'change', funcs.change_music_info_category, 1);

        lib.host_event_execute_now('change', $(`input_switch_header_${hash}_${suffix}`));


    };

    funcs.mudin_info_category_llist = function (hash, suffix, category, limit = 5, offset = 0) {

        $(`list_switch_loading_${hash}_${suffix}`).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({suffix: suffix, category: 'music things', type: 'music info list', repeat: false, container_id: `list_switch_music_${hash}_${suffix}`, hash: hash, category_: category, limit: limit, offset: offset}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/music/music_info_category.php?hash=${hash}&category=${category}&limit=${limit}&offset=${offset}`);

    };

    funcs.update_inp_music_info = function (type, hash, suffix) {

        if (type !== $(`input_switch_header_${hash}_${suffix}`).value) {

            $(`input_switch_header_${hash}_${suffix}`).value = type;

            $(`list_switch_music_${hash}_${suffix}`).innerHTML = ``;

            lib.host_event_execute_now('change', $(`input_switch_header_${hash}_${suffix}`));

        }

    };

    funcs.change_music_info_category = function (e) {

        funcs.mudin_info_category_llist(e.currentTarget.dataset.hash, e.currentTarget.dataset.suffix, e.currentTarget.value);

    };

    funcs.music_info_display_list = function (obj) {

        if (!obj.success.api_result.message.hasOwnProperty('none')) {

            if (obj.recognize.category_ === 'related') {

                funcs.template_my_music_personally(obj, obj.recognize.container_id);

            } else if (obj.recognize.category_ !== 'related') {

                funcs.bulk_human_adder(obj.success.api_result.message, obj.recognize.container_id, obj.recognize.suffix);

            }

        }

    };


    funcs.bulk_human_adder = function (obj, container_id, suffix) {

        if (!obj.hasOwnProperty('none')) {

            let people_stack = ``;

            lib._looper_challenge(obj, function (element) {

                people_stack += funcs.vertical_suggest(element, suffix, false);

            });

            funcs.adj_html(container_id, 'beforeend', people_stack);

        }

    };

}();
