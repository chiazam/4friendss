/* global funcs, lib */

!function () {

    funcs.add_controls_aud_vid_multiple = function (vids_class, controls_class, extra_cont=true, pull_up=false) {

        lib._looper_challenge(lib.query_selector_all(`.${vids_class}`), function (element, q) {

            funcs.add_controls_aud_vid(element.id, lib.query_selector_all(`.${controls_class}`)[q].id, extra_cont, pull_up);

        });

    };

    funcs.media_play_detect = function (e) {

        $(`play_button_${ e.currentTarget.dataset.suffix}_${ e.currentTarget.dataset.hash}`).children[0].className = `fa fa-pause`;

        lib._looper_challenge(lib.query_selector_all("audio"), function (element) {
            if (element !== e.currentTarget && (!element.paused || !element.ended)) {

                element.pause();
            }
        });
        lib._looper_challenge(lib.query_selector_all("video"), function (element) {
            if (element !== e.currentTarget && (!element.paused || !element.ended)) {

                element.pause();
            }
        });

    };

    funcs.media_pause_detect = function (e) {

        $(`play_button_${ e.currentTarget.dataset.suffix}_${ e.currentTarget.dataset.hash}`).children[0].className = `fa fa-play`;

    };

    funcs.media_ended_detect = function (e) {

        $(`play_button_${ e.currentTarget.dataset.suffix}_${ e.currentTarget.dataset.hash}`).children[0].className = `fa fa-redo`;

    };

    funcs.seek_waiting = function (e) {

        $(`play_button_${ e.currentTarget.dataset.suffix}_${ e.currentTarget.dataset.hash}`).children[0].className = `fa fa-spinner animate-spin`;

    };

    funcs.media_timeupdate_detect = function (e) {

        let duration__ = funcs.seconds_to_time(e.currentTarget.duration);

        let currenttime_ = funcs.seconds_to_time(e.currentTarget.currentTime);

        $(`time_show_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).innerHTML = `${currenttime_["h"]}:${currenttime_["m"]}:${currenttime_["s"]}/${duration__["h"]}:${duration__["m"]}:${duration__["s"]}`;

        $(`indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).firstElementChild.style.marginLeft = (((e.currentTarget.currentTime * $(`indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).getBoundingClientRect().width) / e.currentTarget.duration) - (($(`indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).firstElementChild.getBoundingClientRect().width) / 2)) + "px";

    };

    funcs.progress_detect = function (e) {

        e.stopImmediatePropagation();

        let control_head = $(`indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`);
        let ranges_buffer = [];

        lib._looper_challenge(e.currentTarget.buffered, function (element, index, array) {
            ranges_buffer.push([array.start(index), array.end(index)]);
        });

        lib._looper_challenge(control_head.children, function (element, q) {

            if (q > 0) {

                element.remove();
            }
        });

        let duration = e.currentTarget.duration;
        let word_innerHTML = "";

        lib._looper_challenge(ranges_buffer, function (element__, q, array) {

            let percentage_width = parseInt(((element__[1] - element__[0]) * control_head.offsetWidth) / duration);
            let percentage_margin = parseInt(((element__[0]) * control_head.offsetWidth) / duration);

            word_innerHTML += `<section style="margin-left:${percentage_margin}px;width:${percentage_width}px;position:absolute;" class="height-5px background-scroll-color border-radius-20px position-absolute"></section> `;

        });

        funcs.adj_html_element(control_head, "beforeend", word_innerHTML);

    };

    funcs.volume_change_note = function (e) {

        if (e.currentTarget.volume === 0) {

            $(`volume_indic_icon_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).firstElementChild.className = `fa fa-volume-off`;

        } else {

            $(`volume_indic_icon_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).firstElementChild.className = `fa fa-volume-up`;

        }

        $(`volume_indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).firstElementChild.style.marginLeft = (((e.currentTarget.volume * $(`volume_indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).getBoundingClientRect().width)) - (($(`volume_indic_holder_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`).firstElementChild.getBoundingClientRect().width) / 2)) + "px";

    };

    funcs.media_ratechange_detect = function (e) {

        if ($(`play_rate_chooser_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_holder`) !== null && $(`play_rate_chooser_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_${e.currentTarget.playbackRate}`) !== null) {

            lib._looper_challenge($(`play_rate_chooser_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_holder`).children, function (element) {

                lib.remove_class_ele('lighter', element);

            });

            lib.add_class_ele('lighter', $(`play_rate_chooser_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_${e.currentTarget.playbackRate}`));

        }

    };

    funcs.media_loopchange_detect = function (e) {

        if (e.currentTarget.loop === true) {

            lib.add_class_ele('friends-shadow-shadow-2', $(`loop_activator_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`));

            lib.add_class_ele('color-fb-blue', $(`loop_activator_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`));

        } else if (e.currentTarget.loop === false) {

            lib.remove_class_ele('friends-shadow-shadow-2', $(`loop_activator_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`));

            lib.remove_class_ele('color-fb-blue', $(`loop_activator_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}`));

        }


    };

    funcs.add_controls_aud_vid = function (video_audio_id, controls_id, extra_cont=true, pull_up=false) {

        let rand_string = lib.rand_string_gen(1);

        let video = $(video_audio_id);

        let display_extra ='';

        if(extra_cont===false){

            display_extra = ` style="display:none;"`;

        }

        $(controls_id).innerHTML = `
        
        <section class="border-box">
        
                <section ${display_extra} class="extra_cont_${video.dataset.suffix}_${video.dataset.hash} padding-5-px">

                    <section class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex" id="indic_holder_${video.dataset.suffix}_${video.dataset.hash}">
        
                            <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1"></section>

                    </section>

                </section>
        
            <section class="padding-5-px display-flex align-items-center">

                <section class="margin-right-5px">

                    <section id="play_button_${video.dataset.suffix}_${video.dataset.hash}" class="heavier round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2">

                        <i class="fa fa-play"></i>

                    </section>

                </section>
        
                <section ${display_extra} class="extra_cont_${video.dataset.suffix}_${video.dataset.hash} margin-right-5px">

                    <section class="heavier fb-shadow-shadow-2 padding-5-px border-radius-20px" id="time_show_${video.dataset.suffix}_${video.dataset.hash}"></section>
            
                </section>
        
                <section class="flex-1"></section>
        
                <section ${display_extra} class="extra_cont_${video.dataset.suffix}_${video.dataset.hash} margin-right-5px">

                    <section onclick="lib.toggle_class_ele('display-none', $('_setting_controls_vid_aud_${video.dataset.suffix}_${video.dataset.hash}__ply_card'));" id="_setting_controls_vid_aud_${video.dataset.suffix}_${video.dataset.hash}" class="heavier round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2">

                        <i class="fa fa-cog"></i>

                    </section>
        
                    <section class="border-radius-5px heavier overflow-hidden friends-shadow-shadow z-index-1 position-absolute width-250-px height-150-px margin-top--180-px margin-left--150-px border-box overflow-y-scroll display-none" id="_setting_controls_vid_aud_${video.dataset.suffix}_${video.dataset.hash}__ply_card">

                        <section class='padding-5-px display-flex align-items-center'>

                            <section id="volume_indic_icon_holder_${video.dataset.suffix}_${video.dataset.hash}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue margin-right-5px">

                                <i class="fa fa-volume-up"></i>

                            </section>
        
                            <section class="flex-1 margin-right-5px display-flex align-items-center">
        
                                <section class="overflow-hidden width-100-cent height-5px cursor-pointer display-flex lighter border-radius-20px border-1px-solid display-flex" id="volume_indic_holder_${video.dataset.suffix}_${video.dataset.hash}">
        
                            <section class="height-20px width-20px heaver fb-shadow-shadow-2 position-absolute heavier round-border margin-minus-top-7px z-index-1"></section>

                    </section>

                            </section>

                        </section>
        
                        <section onclick="lib.toggle_class_ele('display-none', $('play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_holder'));" class='padding-5-px border-1px-solid cursor-pointer hover-background-twitter hover-color-fb-blue display-flex'>
        
                            <section class="font-weight-bold text-align-center flex-1">

                                <i class="fa fa-stopwatch"></i>&nbsp;Play speed

                            </section>
        
                            <section class="">
        
                                <i class="fa fa-angle-down"></i>
        
                            </section>

                        </section>
        
                        <section id="play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_holder" class='padding-5-px display-none'>
        
                            <section onclick="lib.set_play_back_rate($('${video_audio_id}'), 0.25);" id="play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_0.25" class='padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer'> 0.25 </section>

                            <section onclick="lib.set_play_back_rate($('${video_audio_id}'), 0.5);" id="play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_0.5" class='padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer'> 0.5 </section>
        
                            <section onclick="lib.set_play_back_rate($('${video_audio_id}'), 1);" id="play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_1" class='padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer'> Normal </section>
        
                            <section onclick="lib.set_play_back_rate($('${video_audio_id}'), 1.5);" id="play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_1.5" class='padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer'> 1.5 </section>
        
                            <section onclick="lib.set_play_back_rate($('${video_audio_id}'), 2);" id="play_rate_chooser_${video.dataset.suffix}_${video.dataset.hash}_2" class='padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer'> 2.0 </section>

                        </section>

                    </section>

                </section>
        
                <section ${display_extra} class="extra_cont_${video.dataset.suffix}_${video.dataset.hash} margin-right-5px">

                    <section onclick="funcs.loop_changer($('${video_audio_id}'));" id="loop_activator_${video.dataset.suffix}_${video.dataset.hash}" class="heavier round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2">

                        <i class="fa fa-redo-alt"></i>

                    </section>

                </section>
        
                 <section class="margin-right-5px">

                    <section id="toggle_fullscreen_button_${video.dataset.suffix}_${video.dataset.hash}" class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2">

                        <i class="fa fa-expand"></i>

                    </section>

                </section>

            </section>
    </section>
        `;

        if(pull_up===true){

            lib.add_class('margin-top--40-px',controls_id);
            
        }else{

            lib.add_class_ele('border-1px-solid',$(controls_id).children[0]);

        }

        let play_pause_media = function () {

            if (video.paused || video.ended) {

                video.play();

            } else {

                video.pause();

            }

        };

        let fullscreen_toggler_callback = function (the_bool, reciever, trigger) {

            if (the_bool === true) {

                trigger.children[0].className = `fa fa-expand`;

                if(extra_cont===false){

                    lib._looper_challenge(lib.query_selector_all(`.extra_cont_${video.dataset.suffix}_${video.dataset.hash}`), function (element) {

                       element.style.display='none';

                    });

                }

                if(pull_up===true){

                    lib.add_class('margin-top--40-px',controls_id);

                    lib.remove_class_ele('border-1px-solid',$(controls_id).children[0]);
                    
                }

            } else if (the_bool === false) {

                trigger.children[0].className = `fa fa-compress`;
                
                if(extra_cont===false){

                    lib._looper_challenge(lib.query_selector_all(`.extra_cont_${video.dataset.suffix}_${video.dataset.hash}`), function (element) {

                        element.style.display='block';

                    });

                }

                if(pull_up===true){

                    lib.remove_class('margin-top--40-px',controls_id);

                    lib.add_class_ele('border-1px-solid',$(controls_id).children[0]);
                    
                }

            }

        };


        let adjust_seek_mouse = function (e) {

            e.stopPropagation();
            let currentTing = (((e.pageX - e.currentTarget.getBoundingClientRect().left) * video.duration) / e.currentTarget.getBoundingClientRect().width);
            if (currentTing >= 0 && currentTing <= video.duration) {

                video.currentTime = currentTing;
                e.currentTarget.firstElementChild.style.marginLeft = ((e.pageX - e.currentTarget.getBoundingClientRect().left) - ((e.currentTarget.firstElementChild.getBoundingClientRect().width) / 2)) + "px";
            }

        };

        let adjust_seek_touch = function (e) {

            e.stopPropagation();
            let currentTing = (((e.changedTouches[0].pageX - e.currentTarget.getBoundingClientRect().left) * video.duration) / e.currentTarget.getBoundingClientRect().width);
            if (currentTing >= 0 && currentTing <= video.duration) {

                video.currentTime = currentTing;
                e.currentTarget.firstElementChild.style.marginLeft = ((e.changedTouches[0].pageX - e.currentTarget.getBoundingClientRect().left) - ((e.currentTarget.firstElementChild.getBoundingClientRect().width) / 2)) + "px";
            }

        };

        let mouse_adjust_volume = function (e) {

            e.stopPropagation();
            let new_volume = ((e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.getBoundingClientRect().width);
            if (new_volume < 0) {

                video.volume = 0;
            } else if (new_volume > 1) {

                video.volume = 1;
            } else {

                video.volume = new_volume;
            }

        };

        let mouse_adjust_volume_touch = function (e) {

            e.stopPropagation();
            let new_volume = ((e.changedTouches[0].pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.getBoundingClientRect().width);
            if (new_volume < 0) {

                video.volume = 0;
            } else if (new_volume > 1) {

                video.volume = 1;
            } else {

                video.volume = new_volume;
            }

        };

        lib.event_attach(video, 'volumechange', funcs.volume_change_note, 1);

        lib.event_attach(video, 'play', funcs.media_play_detect, 1);

        lib.event_attach(video, 'pause', funcs.media_pause_detect, 1);

        lib.event_attach(video, 'playing', funcs.media_play_detect, 1);

        lib.event_attach(video, 'timeupdate', funcs.media_timeupdate_detect, 1);

        lib.event_attach(video, 'progress', funcs.progress_detect, 1);

        lib.event_attach(video, 'seek', funcs.seek_waiting, 1);

        lib.event_attach(video, 'loopchange', funcs.media_loopchange_detect, 1);

        lib.event_attach(video, 'waiting', funcs.seek_waiting, 1);

        lib.event_attach(video, 'ended', funcs.media_ended_detect, 1);

        lib.event_attach(video, 'ratechange', funcs.media_ratechange_detect, 1);

        lib.event_attach($(`indic_holder_${video.dataset.suffix}_${video.dataset.hash}`), 'click', adjust_seek_mouse, 1);

        lib.event_attach($(`indic_holder_${video.dataset.suffix}_${video.dataset.hash}`), 'touchstart', adjust_seek_touch, {passive: true});

        lib.event_attach($(`indic_holder_${video.dataset.suffix}_${video.dataset.hash}`), 'touchmove', adjust_seek_touch, {passive: true});

        lib.event_attach($(`play_button_${video.dataset.suffix}_${video.dataset.hash}`), 'click', play_pause_media, 1);

        lib.host_event_execute_now('ratechange', video);

        lib.detect_full_screen($(`holder_vid_audio_${video.dataset.suffix}_${video.dataset.hash}`), $(`toggle_fullscreen_button_${video.dataset.suffix}_${video.dataset.hash}`), fullscreen_toggler_callback);

        lib.toggle_full_screen($(`toggle_fullscreen_button_${video.dataset.suffix}_${video.dataset.hash}`), $(`holder_vid_audio_${video.dataset.suffix}_${video.dataset.hash}`), 'click');

        let bold_poster = function () {

            if ($(`poster-vid-aud-mine-${video.dataset.suffix}-${video.dataset.hash}`) !== null) {

                if (document.fullscreenElement) {

                    lib.remove_class_ele($(`poster-vid-aud-mine-${video.dataset.suffix}-${video.dataset.hash}`).dataset.height, $(`poster-vid-aud-mine-${video.dataset.suffix}-${video.dataset.hash}`));

                } else {

                    lib.add_class_ele($(`poster-vid-aud-mine-${video.dataset.suffix}-${video.dataset.hash}`).dataset.height, $(`poster-vid-aud-mine-${video.dataset.suffix}-${video.dataset.hash}`));

                }

            } else {

                if (document.fullscreenElement) {

                    lib.remove_class_ele(video.dataset.height, video);

                } else {

                    lib.add_class_ele(video.dataset.height, video);

                }

            }

        };

        lib.event_attach($(`holder_vid_audio_${video.dataset.suffix}_${video.dataset.hash}`), 'fullscreenchange', bold_poster, 1);

        lib.event_attach($(`volume_indic_holder_${video.dataset.suffix}_${video.dataset.hash}`), 'click', mouse_adjust_volume, 1);

        lib.event_attach($(`volume_indic_holder_${video.dataset.suffix}_${video.dataset.hash}`), 'touchstart', mouse_adjust_volume_touch, {passive: true});

        lib.event_attach($(`volume_indic_holder_${video.dataset.suffix}_${video.dataset.hash}`), 'touchmove', mouse_adjust_volume_touch, {passive: true});




    };




}();
