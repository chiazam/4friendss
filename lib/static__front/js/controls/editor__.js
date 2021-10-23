/* global funcs, lib, api */

!function () {

    funcs.form_edit_maker = function (category, reason, media_id, suffix, key = '', type = '') {
        let extra_inp = ``;

        if (key.length > 0 && type.length > 0) {

            extra_inp += `<input value="${key}" data-suffix="${suffix}" id='media_key_${suffix}' name="media_key"><input id='media_type_${suffix}' data-suffix="${suffix}" value="${type}" name="media_type">`;

        }

        return `<form class="display-none" data-media_id="${media_id}" data-suffix="${suffix}" data-reason="${reason}" id="edit_form_${suffix}">
        
            <input id='blur_${suffix}' data-suffix="${suffix}" name="blur" class="edit_input_${suffix}">
        
            <input id='brightness_${suffix}' data-suffix="${suffix}" class="edit_input_100_${suffix}" name="brightness">
        
            <input id='contrast_${suffix}' data-suffix="${suffix}" class="edit_input_100_${suffix}" name="contrast">
        
            <input id='opacity_${suffix}' data-suffix="${suffix}" class="edit_input_100_${suffix}" name="opacity">
        
            <input id='sepia_${suffix}' data-suffix="${suffix}" name="sepia" class="edit_input_${suffix}">
        
            <input id='saturate_${suffix}' data-suffix="${suffix}" class="edit_input_100_${suffix}" name="saturate">
        
            <input id='hue-rotate_${suffix}' data-suffix="${suffix}" class="edit_input_${suffix}" name="hue-rotate">
        
            <input id='invert_${suffix}' data-suffix="${suffix}" name="invert" class="edit_input_${suffix}">
        
            <input id='grayscale_${suffix}' data-suffix="${suffix}" class="edit_input_${suffix}" name="grayscale">
        
            <input id='category_${suffix}' data-suffix="${suffix}" value="${category}" name="category">
        
            ${extra_inp}</form>`;
    };

    funcs.adjust_something_now = function (path, media_id) {

        let suffix = lib.switch_num;

        ++lib.switch_num;

        let searcher__template = funcs.option_head_maker(false, {container: 'edit_table_flex', container_container: 'card-15'});

        lib.inc_html(`<section class="border-1px-solid width-100-cent friends-shadow-shadow border-radius-5px padding-5-px container border-box">${searcher__template}    

        <section class='overflow-hidden'>

            <section class="display-flex">

                <section class="flex-1"> <img id="edit_adj_img_${suffix}" draggable="false" class='height-200-px width-100-cent object-fit-cover' src="${funcs.addImage(path, 1300, 500, 60, 2)}"/> </section>
        
                <section class="width-50-px position-relative z-index-1 display-flex justify-content-center margin-left--50px border-box padding-5-px">
                    
                    <section data-media_id="${media_id}" data-suffix="${suffix}" id="track_adjust_knob_holder_${suffix}" class="overflow-hidden width-100-cent width-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex">

                            <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-left-7px"></section>

                    </section>

                 </section>

            </section>
        
            <section class="padding-5-px text-align-center"> 
        
            <form method="POST" class="display-none" id="edit_form_${suffix}">
        
                <input id="edit_adj_posy_${suffix}" name="posY"/>

            </form>

            <button id="save_editor_butt_${suffix}" onclick="funcs.saver_edit_media(this,'edit_form_${suffix}','${api}api/profile_handler/cover_style.php');" data-suffix="${suffix}" class="max-width-200-px lighter padding-5-px width-100-cent border-1px-solid font-weight-bold border-radius-2px hover-background-twitter hover-color-fb-blue post-button cursor-pointer" style="opacity:1;"><i class="fa-save far"></i> Save</button>

        </section>

</section>`, 'edit_table_flex');

        funcs.adjust_placer_effecter(media_id, suffix);

        lib.add_class('container', 'edit_table_flex');

        lib.add_class('max-width-600-px', 'edit_table_flex');

        lib.add_class('width-98-cent', 'edit_table_flex');

        lib.remove_class('display-none', 'card-15');

        lib.add_class('display-flex', 'card-15');

    };

    funcs.adjust_placer_effecter = function (media_id, suffix) {

        let knobber_scallywag = function (e) {

            e.preventDefault();

            let margin = parseInt((((e.pageY) - (e.currentTarget.children[0].getBoundingClientRect().top)) - (e.currentTarget.children[0].children[0].offsetHeight)));

            if (margin > -1 && margin <= (e.currentTarget.children[0].offsetHeight)) {

                e.currentTarget.children[0].children[0].style.marginTop = margin + "px";

                $(`edit_adj_posy_${suffix}`).value = parseInt(((margin) / (e.currentTarget.children[0].offsetHeight) * 100));

                funcs.get_cover_features_prof_displayer_position({'pos-x': 50, 'pos-y': parseInt(((margin) / (e.currentTarget.children[0].offsetHeight) * 100))}, media_id);

                funcs.get_cover_features_prof_displayer_position({'pos-x': 50, 'pos-y': parseInt(((margin) / (e.currentTarget.children[0].offsetHeight) * 100))}, `edit_adj_img_${suffix}`);

            }

        };

        let knobber_scallywag_touch = function (e) {

            let margin = parseInt((((e.changedTouches[0].pageY) - (e.currentTarget.children[0].getBoundingClientRect().top)) - (e.currentTarget.children[0].children[0].offsetHeight)));

            if (margin > -1 && margin <= (e.currentTarget.children[0].offsetHeight)) {

                e.currentTarget.children[0].children[0].style.marginTop = margin + "px";

                $(`edit_adj_posy_${suffix}`).value = parseInt(((margin) / (e.currentTarget.children[0].offsetHeight) * 100));

                funcs.get_cover_features_prof_displayer_position({'pos-x': 50, 'pos-y': parseInt(((margin) / (e.currentTarget.children[0].offsetHeight) * 100))}, media_id);

                funcs.get_cover_features_prof_displayer_position({'pos-x': 50, 'pos-y': parseInt(((margin) / (e.currentTarget.children[0].offsetHeight) * 100))}, `edit_adj_img_${suffix}`);

            }

        };

        let knober_start_scallywag = function (e) {

            e.currentTarget.addEventListener('mousemove', knobber_scallywag, 1);

        };

        let knober_end_scallywag = function (e) {

            e.currentTarget.removeEventListener('mousemove', knobber_scallywag, 1);

        };


        $(`track_adjust_knob_holder_${suffix}`).parentNode.addEventListener('mousedown', knober_start_scallywag, 1);
        $(`track_adjust_knob_holder_${suffix}`).parentNode.addEventListener('mouseup', knober_end_scallywag, 1);
        $(`track_adjust_knob_holder_${suffix}`).parentNode.addEventListener('touchmove', knobber_scallywag_touch, {passive: true});
        $(`track_adjust_knob_holder_${suffix}`).parentNode.addEventListener('touchstart', knobber_scallywag_touch, {passive: true});

    };

    funcs.edit_something_now = function (category, path, reason, media_id, suffix, key = '', type = '') {

        let searcher__template = funcs.option_head_maker(false, {container: 'edit_table_flex', container_container: 'card-15'});

        let form_edit = funcs.form_edit_maker(category, reason, media_id, suffix, key, type);

        let image_video_tempplate = `<img data-suffix="${suffix}" data-hash="editor" class="width-100-cent object-fit-cover height-300-px border-radius-5px" draggable="false" src="${funcs.addImage(path, 700, 700, 60)}" id="vid_audio_${suffix}_editor"/>`;

        if (type === "videos_media") {

            image_video_tempplate = `

                <video preload="none" data-suffix="${suffix}" data-hash="editor" class="width-100-cent object-fit-cover height-200-px border-radius-5px" draggable="false" src="${api}${path}" id="vid_audio_${suffix}_editor"></video>

                <section data-suffix="${suffix}" data-hash="editor" id="controls_${suffix}_editor"></section>

            `;

        }

        let url_submit = `${api}api/timeline_gen/image_video_editor.php`;

        if (category === 'profile' || category === 'cover') {

            url_submit = `${api}api/profile_handler/cover_style_prof_style.php`;

        }

        lib.inc_html(`<section class="border-1px-solid height-fit-content friends-shadow-shadow border-radius-5px padding-5-px width-500-px max-width-100-cent margin-auto">${searcher__template}<section class='overflow-hidden'>
        
        <section class="heavier" id="holder_vid_audio_${suffix}_editor">${image_video_tempplate}</section>
        
          <section class="editor_holder" id="editor_holder">

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">blur</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="blur" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">brightness</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="brightness" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex each_draggable_editor_gear_knob_holder_end_${suffix}">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">contrast</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="contrast" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex each_draggable_editor_gear_knob_holder_end_${suffix}">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">opacity</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="opacity" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex each_draggable_editor_gear_knob_holder_end_${suffix}">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">sepia</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="sepia" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">saturate</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="saturate" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex each_draggable_editor_gear_knob_holder_end_${suffix}">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">hue-rotate</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="hue-rotate" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">invert</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="invert" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        <section class="display-flex">

            <section class="padding-5-px font-weight-bold width-80-px border-box">grayscale</section>

            <section class="padding-5-px font-weight-bold flex-1 display-flex align-items-center each_draggable_editor_gear_${suffix}" data-category='${category}'>

                <section data-suffix="${suffix}" data-editor="grayscale" class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex">

                    <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1 each_draggable_editor_gear_${suffix}_knob"></section>

                </section>

            </section>

        </section>

        <!-- -->

        </section>
        
        <section class="padding-5-px text-align-center"> 

            <button id="save_editor_butt_${suffix}" onclick="funcs.saver_edit_media(this,'edit_form_${suffix}','${url_submit}');" data-suffix="${suffix}" class="lighter padding-5-px width-100-cent border-1px-solid font-weight-bold border-radius-2px hover-background-twitter hover-color-fb-blue post-button cursor-pointer" style="opacity:1;"><i class="fa-save far"></i> Save</button>

        </section>${form_edit}</section>
        
            </section>`, 'edit_table_flex');

        lib.add_class('max-width-600-px', 'edit_table_flex');

        lib.add_class('width-98-cent', 'edit_table_flex');

        lib.remove_class('display-none', 'card-15');

        lib.add_class('display-flex', 'card-15');

        if (type === 'videos_media') {

            funcs.add_controls_aud_vid(`vid_audio_${suffix}_editor`, `controls_${suffix}_editor`);

        }

        lib._looper_challenge(lib.query_selector_all(`.each_draggable_editor_gear_${suffix}`), function (element) {
            element.addEventListener('mousedown', funcs.knober_start_scallywag, 1);
            element.addEventListener('mouseup', funcs.knober_end_scallywag, 1);
            element.addEventListener('touchmove', funcs.knobber_scallywag_touch, {passive: true});
            element.addEventListener('touchstart', funcs.knobber_scallywag_touch, {passive: true});
        });


        lib._looper_challenge(lib.query_selector_all(`.edit_input_${suffix}`), function (element) {
            element.value = 0;
        });


        lib._looper_challenge(lib.query_selector_all(`.edit_input_100_${suffix}`), function (element) {
            element.value = 100;
        });

        lib._looper_challenge(lib.query_selector_all(`.each_draggable_editor_gear_knob_holder_end_${suffix}>.each_draggable_editor_gear_${suffix}_knob`), function (element) {
            element.style.marginLeft = (element.parentElement.offsetWidth - (element.offsetWidth / 2)) + "px";
        });

    };

    funcs.knober_start_scallywag = function (e) {

        e.currentTarget.addEventListener('mousemove', funcs.knobber_scallywag, 1);
    };

    funcs.knober_end_scallywag = function (e) {

        e.currentTarget.removeEventListener('mousemove', funcs.knobber_scallywag, 1);
    };

    funcs.knobber_scallywag = function (e) {

        e.preventDefault();

        let margin = parseInt((((e.pageX) - (e.currentTarget.children[0].getBoundingClientRect().left)) - (e.currentTarget.children[0].children[0].offsetWidth)));

        if (margin > -1 && margin <= (e.currentTarget.children[0].offsetWidth)) {

            e.currentTarget.children[0].children[0].style.marginLeft = margin + "px";

            $(`edit_form_${e.currentTarget.children[0].dataset.suffix}`)[`${e.currentTarget.children[0].dataset.editor}_${e.currentTarget.children[0].dataset.suffix}`].value = parseInt(((margin) / (e.currentTarget.children[0].offsetWidth) * 100));

            funcs.shower_realtime_edit($(`edit_form_${e.currentTarget.children[0].dataset.suffix}`), `vid_audio_${e.currentTarget.children[0].dataset.suffix}_editor`, e.currentTarget.children[0].dataset.suffix, 'media_things');

            funcs.shower_realtime_edit($(`edit_form_${e.currentTarget.children[0].dataset.suffix}`), $(`edit_form_${e.currentTarget.children[0].dataset.suffix}`).dataset.media_id, e.currentTarget.children[0].dataset.suffix, e.currentTarget.dataset.category);


        }

    };

    funcs.knobber_scallywag_touch = function (e) {

        let margin = parseInt((((e.changedTouches[0].pageX) - (e.currentTarget.children[0].getBoundingClientRect().left)) - (e.currentTarget.children[0].children[0].offsetWidth)));

        if (margin > -1 && margin <= (e.currentTarget.children[0].offsetWidth)) {

            e.currentTarget.children[0].children[0].style.marginLeft = margin + "px";

            $(`edit_form_${e.currentTarget.children[0].dataset.suffix}`)[`${e.currentTarget.children[0].dataset.editor}_${e.currentTarget.children[0].dataset.suffix}`].value = parseInt(((margin) / (e.currentTarget.children[0].offsetWidth) * 100));

            funcs.shower_realtime_edit($(`edit_form_${e.currentTarget.children[0].dataset.suffix}`), `vid_audio_${e.currentTarget.children[0].dataset.suffix}_editor`, e.currentTarget.children[0].dataset.suffix, 'media_things');

            funcs.shower_realtime_edit($(`edit_form_${e.currentTarget.children[0].dataset.suffix}`), $(`edit_form_${e.currentTarget.children[0].dataset.suffix}`).dataset.media_id, e.currentTarget.children[0].dataset.suffix, e.currentTarget.dataset.category);

        }

    };

    funcs.shower_realtime_edit = function (form, media_id, suffix, category) {

        let filter = {
            blur: form[`blur_${suffix}`].value,
            brightness: form[`brightness_${suffix}`].value,
            contrast: form[`contrast_${suffix}`].value,
            opacity: form[`opacity_${suffix}`].value,
            sepia: form[`sepia_${suffix}`].value,
            saturate: form[`saturate_${suffix}`].value,
            invert: form[`invert_${suffix}`].value,
            grayscale: form[`grayscale_${suffix}`].value,
            'hue-rotate': form[`hue-rotate_${suffix}`].value,
        };

        if (category === 'cover' || category === 'profile') {

            console.log(category);

            funcs.add_main_effect_to_yall(filter, category);

        } else if (category === 'media_things') {

            funcs.add_main_effect_to_yall(filter, media_id);

        }

    };


    funcs.saver_edit_media = function (element, form_id, url) {

        element.innerHTML = funcs.loader_svg__lof;

        let form_obj = funcs.return_form_to_option($(form_id));

        form_obj['4friendss_user'] = funcs.userinfo.login_token;

        let on_click = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({suffix: element.dataset.suffix, category: 'editor', type: 'effect', repeat: false, display_id: element.id, 'onclick': on_click}, form_obj, url);

    };

}();

