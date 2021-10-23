/* global funcs, lib, api */

!function () {

    funcs.video_galleryer_singer = function (element, saved, suffix, purpose = '',scroll=false, small = false,wrap = false) {

        let template = ``;

        let canceller = ``;

        funcs.file_push_info(element);

        let max_heighter = 'height-150-px';

        if(small===true){

            max_heighter = 'height-100-px';

        }

        let min_width_mager = `min-width-100-cent`;

        if(scroll===true){

            if(wrap===true){

                min_width_mager = `min-width-50-cent`;

            }else{

                if(small===true){

                    min_width_mager = `min-width-32-cent`;
        
                }else if(small===false){

                    min_width_mager = `min-width-150-px`;
        
                }

                

            }

        }

        if (saved === 'false') {

            canceller += `<section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                        <section onclick="funcs.edit_something_now('media_things','${element.file_info.path}', 'content maker','vid_audio_${suffix}_${element.file_info.hash}', '${suffix}', '${element.file_info.hash}', 'videos_media');" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-paint-brush"></i></section>
            
                        <section class="flex-1"></section>
            
                        <section onclick="funcs.obj_tagger_type_remover.file_remover(this,'${element.file_info.hash}');" data-hash="${element.file_info.hash}" data-purpose="${purpose}" data-suffix="${suffix}" id="file_remover_${suffix}_${element.file_info.hash}" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-times"></i></section>
                      
                    </section>`;
        }

        template += `

                <section class='fish_woop_lips_hold flex-1 ${min_width_mager} margin-right-10px overflow-hidden heavier border-1px-solid border-box'>${canceller}<section class='heavier display-flex flex-column justify-content-center' id="holder_vid_audio_${suffix}_${element.file_info.hash}">

                        <video data-height="${max_heighter}" draggable="false" data-suffix="${suffix}" data-hash="${element.file_info.hash}" class="max-height-90-cent cursor-pointer min-width-100-cent width-100-cent object-fit-contain border-bottom-left-radius-0px border-bottom-right-radius-0px stone-vid-aud-mine-${suffix} ${max_heighter}" preload="none" style="filter:${funcs.add_main_effect_to_yall(element.style)};" src="${api}${element.file_info.path}" id="vid_audio_${suffix}_${element.file_info.hash}" data-file-info='${element.file_info.hash}'></video>
            
                    <section data-suffix="${suffix}" data-hash="${element.file_info.hash}" class="position-relative border-radius-5px border-top-left-radius-0px border-top-right-radius-0px stone-controls-mine-${suffix}" id="controls_${suffix}_${element.file_info.hash}"></section>

                </section>
            
            </section>

            `;

        return template;

    };

    funcs.video_galleryer_content_maker = function (obj, container_id, saved, suffix, purpose = '',scroll=false, small = false, wrap = false) {

        let template = ``;

        lib._looper_challenge(obj, function (element) {

            template += funcs.video_galleryer_singer(element, saved, suffix, purpose,scroll,small,wrap);

        });

        let class_wrap=``;

        if(wrap===true){

            class_wrap=`flex-wrap`;

        }

        funcs.inc_html(`<section class="padding-5-px">${funcs.scroll_amber_wawerteer_fdtg(template, scroll,'',10, '', `border-radius-5px ${class_wrap}`)}</section>`, $(container_id));

        setTimeout(function () {
            funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`,false,true);
        }, 100);

    };

}();
