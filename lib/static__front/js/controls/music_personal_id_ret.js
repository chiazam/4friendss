/* global funcs, lib, api */

!function () {

    funcs.personal_music_identity_return = function (obj) {

        let person = obj.success.api_result.message.owner_music;

        if (obj.recognize.thiers === true) {
            lib.add_class('width-100-cent', obj.recognize.container_id);
            lib.add_class('min-height-100-cent', obj.recognize.container_id);
            $(obj.recognize.container_id).parentNode.style.background = `var(--liter-black-moder)`;

            lib.remove_class('height-fit-content', obj.recognize.container_id);

            funcs.personal_music_gip = obj.recognize.gip;

            funcs.personal_music_bip = obj.recognize.bip;

            lib.inc_html(`
         
         <section class='overflow-hidden border-radius-5px border-1px-solid width-100-cent height-fit-content border-box display-flex flex-column'>
         
            <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="fab fa-itunes-note"></i>&nbsp;${person.info.full}'s 4friendss box</section><section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.start_personal_music_holder('${obj.recognize.container_id}','${person.info.g}','${person.info.b}','${obj.recognize.suffix}',${obj.recognize.thiers});"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
        
            <section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none"> ${funcs.display_capter_namer_random(person, false, false)} </section>
             
            <section id="list_switch_header_${person.info.g}_${obj.recognize.suffix}_person_music"></section>
            
            <section id="list_switch_music_${person.info.g}_${obj.recognize.suffix}_person_music"></section>
            
            <section class="padding-5-px" id="list_switch_next_${person.info.g}_${obj.recognize.suffix}_person_music"></section>
        
         </section> `, obj.recognize.container_id);

        } else if (obj.recognize.thiers === false) {

            lib.inc_html(`
            
            <section id="list_switch_header_${person.info.g}_${obj.recognize.suffix}_person_music"></section>
            
            <section id="list_switch_music_${person.info.g}_${obj.recognize.suffix}_person_music" class="min-height-300-px"></section>
            
            <section class="padding-5-px" id="list_switch_next_${person.info.g}_${obj.recognize.suffix}_person_music"></section>

            `, obj.recognize.container_id);

        }

        funcs.enlisted_head_person_music(person, obj.recognize.suffix);

    };

    funcs.enlisted_head_person_music = function (obj, suffix) {

        $(`list_switch_header_${obj.info.g}_${suffix}_person_music`).innerHTML = funcs.scroll_amber_wawerteer_fdtg(`
        
                <section class="display-none">

                    <input data-suffix="${suffix}" data-g="${obj.info.g}" data-b="${obj.info.b}" value="playlist" id="input_switch_header_${obj.info.g}_${suffix}_person_music"/>

                </section>

                <section onclick="funcs.update_inp_person_music('playlist','${obj.info.g}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px font-weight-bold"> <i draggable="false" class="fa fa-th-list color-fb-blue"></i>&nbsp; Playlist ${(obj.playlist.num !== 0) ? (`(${obj.playlist.num})`) : ('')}</section>
        
                <section onclick="funcs.update_inp_person_music('favourite','${obj.info.g}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px font-weight-bold"> <i draggable="false" class="fa fa-heart color-google-red"></i>&nbsp; Favourite ${(obj.favourite.num !== 0) ? (`(${obj.favourite.num})`) : ('')}</section>
        
                <section onclick="funcs.update_inp_person_music('played','${obj.info.g}',${suffix});" class="display-flex align-items-center justify-content-center hover-background-twitter hover-color-fb-blue align-items-center cursor-pointer padding-5-px flex-1 border-radius-5px font-weight-bold"> <i draggable="false" class="fa fa-headphones-alt color-google-yellow"></i>&nbsp; Played ${(obj.played.num !== 0) ? (`(${obj.played.num})`) : ('')}</section>
        
                `, true, 'smaller_scroll_butt');

        lib.event_attach($(`input_switch_header_${obj.info.g}_${suffix}_person_music`), 'change', funcs.change_person_music_category, 1);

        lib.host_event_execute_now('change', $(`input_switch_header_${obj.info.g}_${suffix}_person_music`));

    };


    funcs.change_person_music_category = function (e) {

        funcs.get_person_music_llist(e.currentTarget.dataset.g, e.currentTarget.dataset.b, e.currentTarget.dataset.suffix, e.currentTarget.value);

    };

    funcs.get_person_music_llist = function (g, b, suffix, category, limit = 5, offset = 0) {

        $(`list_switch_next_${g}_${suffix}_person_music`).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center padding-5-px">${funcs.loader_svg__lof}</section>`;

        funcs.send_get_me_something({suffix: suffix, category: 'music things', type: 'personal music list', repeat: false, container_id: `list_switch_music_${g}_${suffix}_person_music`, gip: g, bip: b, category_: category, limit: limit, offset: offset}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/music/music__peckk_any_fleed_.php?gip=${g}&bip=${b}&category=${category}&limit=${limit}&offset=${offset}`);

    };

    funcs.update_inp_person_music = function (type, g, suffix) {

        if (type !== $(`input_switch_header_${g}_${suffix}_person_music`).value) {

            $(`input_switch_header_${g}_${suffix}_person_music`).value = type;

            $(`list_switch_music_${g}_${suffix}_person_music`).innerHTML = ``;

            lib.host_event_execute_now('change', $(`input_switch_header_${g}_${suffix}_person_music`));

        }

    };

}();


!function () {

    funcs.template_my_music_personally = function (obj, container_id = null) {

        let musics_holder = ``;

        if (!obj.success.api_result.message.hasOwnProperty('none')) {

            lib._looper_challenge(obj.success.api_result.message, function (element) {


                musics_holder += `<section class="padding-5-px">
                
                    <section>${funcs.list_related_songs(element)}</section>

                </section>`;

            });

        }

        if (container_id === null) {

            funcs.adj_html(`list_switch_music_${obj.recognize.gip}_${obj.recognize.suffix}_person_music`, 'beforeend', musics_holder);
        } else if (container_id !== null) {

            funcs.adj_html(container_id, 'beforeend', musics_holder);

    }


    };

}();
