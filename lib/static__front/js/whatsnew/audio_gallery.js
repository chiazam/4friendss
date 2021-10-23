/* global funcs, lib, api */

!function () {

    funcs.audio_galleryer_singer = function (element, suffix, next = null, auto_play = false, loop = false, cont_time = null, info = false) {

        let template = ``;

        let audio__info = '';

        let file_info = ``;

        if (element.hasOwnProperty('audio_info')) {

            funcs.file_push_info(element);

            file_info = element.file_info.hash;

            funcs.audio_push_info(element.audio_info);

            audio__info = funcs.audio_obj_[element.audio_info.hash];

        } else if (element.hasOwnProperty('album')) {

            funcs.audio_push_info(element);

            audio__info = funcs.audio_obj_[element.hash];

        }

        let extra_info = ``;

        if (info === true) {

            extra_info = `<section class="text-align-center padding-5-px">
        
                        ${audio__info.title} ${funcs.music_year_returner(audio__info.year)} &nbsp;<a href="${funcs.app}?means=music_info&key=${audio__info.hash}" class="cursor-pointer color-fb-blue hover-background-twitter border-box"> <i class="fa fa-external-link-alt font-size-16px"></i> </a>  

                    </section>
        
                    <section class='display-flex align-items-center justify-content-center width-100-cent margin-top-5-px border-box flex-wrap'>${funcs.music_artist_returner(audio__info.artist_array)}</section>
            
            <section class='display-flex justify-content-center'>  ${funcs.music_album_returner(audio__info.album)}  </section>
            
            <section>${funcs.spill_played_playlist_favourite_template(audio__info, false)}</section>`;

        }

        template += `

                <section class='fish_woop_lips_hold min-width-100-cent max-width-100-cent margin-right-10px overflow-hidden heavier'>

<section class='heavier display-flex flex-column justify-content-center' id="holder_vid_audio_${suffix}_${audio__info.hash}">

                        <img style="background:${audio__info.img_background};border-color:${audio__info.img_background};" draggable="false" data-height="height-150-px" class="cursor-pointer width-100-cent border-3px-solid border-box object-fit-contain height-150-px max-height-90-cent" id="poster-vid-aud-mine-${suffix}-${audio__info.hash}" src="${funcs.addImage(audio__info.path, 100, 100, 100, 1)}"/>
         
         <audio data-hash="${audio__info.hash}" data-suffix="${suffix}" class="stone-vid-aud-mine-${suffix} display-none" preload="none" src="${api}${audio__info.path}" id="vid_audio_${suffix}_${audio__info.hash}" data-file-info='${file_info}' data-mediakey='${audio__info.hash}'></audio>
        
                    ${extra_info}    
            
                    <section data-suffix="${suffix}" data-hash="${file_info}" class="position-relative margin-top-58px stone-controls-mine-${suffix}" id="controls_${suffix}_${audio__info.hash}"></section>

                </section>
            
            </section>

            `;

        setTimeout(function () {

            $(`vid_audio_${suffix}_${audio__info.hash}`).loop = loop;

            funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`);

            (function () {

                if (cont_time !== null) {

                    $(`vid_audio_${suffix}_${audio__info.hash}`).currentTime = cont_time;

                }

                if (auto_play === true) {

                    $(`vid_audio_${suffix}_${audio__info.hash}`).play();

                }

                if (next !== null) {

                    lib.event_attach($(`vid_audio_${suffix}_${audio__info.hash}`), 'ended', function (e) {

                        if (e.currentTarget.loop === false) {

                            setTimeout(function () {

                                funcs.music_player_hunt(funcs.main_player_holder_plat, next);

                            }, 100);

                        }

                    }, 1);

                }

            })();

        }, 100);

        return template;

    };


    funcs.audio_galleryer_content_maker = function (obj, container_id, saved, suffix, purpose = '') {

        if (!obj.hasOwnProperty('none')){

        let template = ``;

        lib._looper_challenge(obj, function (element) {

            let audio__info = '';

            let file_info = ``;

            if (element.hasOwnProperty('audio_info')) {

                funcs.file_push_info(element);

                file_info = element.file_info.hash;

                funcs.audio_push_info(element.audio_info);

                audio__info = funcs.audio_obj_[element.audio_info.hash];

            } else if (element.hasOwnProperty('album')) {

                funcs.audio_push_info(element);

                audio__info = funcs.audio_obj_[element.hash];

            }

            let canceller = ``;

            if (saved === 'false') {

                canceller += `<section onclick="funcs.obj_tagger_type_remover.file_remover(this,'${file_info}');" data-purpose="${purpose}" data-hash="${file_info}" data-suffix="${suffix}" id="file_remover_${suffix}_${file_info}" class="lighter fb-shadow-shadow-2 round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue"><i class="fa fa-times"></i></section>`;
            }

            template += `

             <section data-file-info='${file_info}' data-mediakey='${audio__info.hash}' class='fish_woop_lips_hold min-width-150-px max-width-150-px padding-5-px class-suggested-persons-margin border-1px-solid overflow-hidden heavier height-100-cent margin-right-5px border-box display-flex flex-column border-radius-5px'>

                <section class="display-flex padding-5-px position-relative z-index-1 margin-bottom--29-px">
            
                        <section class="lighter fb-shadow-shadow-2 padding-2-px border-radius-2px cursor-pointer display-flex align-items-center justify-content-center">${audio__info.duration}</section>
            
                        <section class="flex-1"></section>${canceller}  

                </section>

                        <section class="display-flex align-items-center justify-content-center">

                            <img style="background:${audio__info.img_background};border-color:${audio__info.img_background};" draggable="false" class="cursor-pointer border-3px-solid border-box width-100-px height-50-px object-fit-contain border-box" src="${funcs.addImage(audio__info.path, 200, 150, 50)}"/>

                        </section>
            
                        <section class='text-align-center margin-top-5-px'>${(funcs.word_shortener(null, audio__info.title, 15,true)).word_}</section>
            
                        <section class='display-flex width-100-cent border-box flex-wrap justify-content-center'>${funcs.music_artist_returner(audio__info.artist_array)}</section>
            
                        <section class='width-fit-content cursor-pointer align-self-center'> ${funcs.music_year_returner(audio__info.year)}  </section>

                        ${funcs.music_album_returner(audio__info.album)} 
            
                        ${funcs.music_related_songs_returner(audio__info)} 

                        <section class="display-flex width-100-cent justify-content-center">${funcs.music_display_uploader(audio__info)}</section>  
                        
                        <section class='margin-top-auto'>${funcs.spill_played_playlist_favourite_template(audio__info, true, false,false)}</section>
            
                        <a class="width-fit-content align-self-center" href="${funcs.app}?means=music_info&key=${audio__info.hash}"> <section class="width-max-content cursor-pointer color-fb-blue hover-background-twitter border-box margin-auto padding-5-px text-align-center border-radius-50px lighter"><i class="fa fa-external-link-alt"></i> See music info </section> </a>
            

        </section>

`;

        });

        funcs.inc_html(funcs.scroll_amber_wawerteer_fdtg(template, true, '', 10, '', 'padding-5-px border-box'), $(container_id));
    };

}

}();
