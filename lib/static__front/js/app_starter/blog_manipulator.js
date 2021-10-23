/* global funcs, lib, regex, name_company */

!function () {

    funcs.template_blog = function (container_id, obj, suffix) {

        funcs.timeline_blog_display(container_id, obj, suffix);

    };

    funcs.timeline_blog_display = function (container_id, obj, suffix) {

        if (!obj.hasOwnProperty('none')) {

            let template = ``;

            lib._looper_challenge(obj, function (element) {

                funcs.timeline_content[element.key_link] = element;

                if (element.images.hasOwnProperty('none')) {

                    if (!element.audios.hasOwnProperty('none') && element.audios.length > 0) {

                        audio = funcs.audio_galleryer_singer(element.audios[0], suffix);

                    } else if (!element.videos.hasOwnProperty('none') && element.videos.length > 0) {

                        video = funcs.video_galleryer_singer(element.videos[0], true, suffix);
                    }

                }

                template += `

                    <section id="post__holderr__few_${element.key_link}_${suffix}" class="display-flex border-1px-solid border-right-none border-left-none padding-5-px heavier margin-bottom-5-px">

                        <section class="margin-right-5px border-radius-20px">${funcs.round_profile_dumper(element.poster, false, false)}</section>
                
                        <section class="flex-1 overflow-hidden">
                
                            <section class="display-flex">

                                <section>${funcs.text_profile_dumper(element.poster, false, true, 'font-weight-bold')}</section>
                
                                <section class="display-flex flex-1 border-box height-fit-content">&nbsp;${funcs.text_tag_displayer(element.tagger, element.key_link, suffix)}</section>
                
                       <section>

                            <a href="${funcs.app}?means=views&key_viewer=${element.key_link}" data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" id="remove_tieer_${element.key_link}_${suffix}" class="round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-external-link-alt"></i></a>
            
                       </section>
                
                                <section>
                
                                    <section onclick="lib.toggle_class_ele('display-none', this.nextElementSibling)" class="display-flex align-items-center cursor-pointer icon-mager-xxx-small justify-content-center hover-background-twitter hover-color-fb-blue round-border"><i class="fa fa-ellipsis-h"></i></section>
            
                                        ${funcs.long_context_menu_displayer(element, suffix)}   

                                </section>

                            </section>
                            
                            <section class="padding-5-px padding-top-0-px padding-bottom-0-px font-size-18px font-weight-bold">${element.topic}</section>

                            <section>${funcs.display_hashtags_tags(element.hash_tags, element.mentions)}</section>
                
                <section class="font-size-16px line-height-25-px padding-5-px padding-top-0-px padding-bottom-0-px">${regex.hash__tag_replacer(element.word, true)}</section>

                <section>${funcs.sentiment_analysis_templater(element.word_analysis)}</section>
                            
                        <section>
            
                            <section id="photo_post_wegbet_${element.key_link}_${suffix}"></section>
            
                            <section id="audio_post_wegbet_${element.key_link}_${suffix}"></section>
            
                            <section id="video_post_wegbet_${element.key_link}_${suffix}"></section>
            
                        </section>
                
                        <section class="margin-top-5-px" id='post__holderr__few_${element.key_link}_${suffix}_tied'> </section>
                
                        <section class="margin-top-5-px">${funcs.apply_react_template(element.react_info, element.key_link, suffix)}</section>
                
                        <section>${funcs.display_preview_viewers(element.view_info, element.key_link, suffix)}</section>
                
                        <section>${funcs.display_preview_reacters(element.react_info, element.key_link, suffix)}</section>
                
                        <section class="display-flex padding-5-px line-height-25-px">

                                <section> <i class="fa fa-book-open"></i> blog</section>

                                <section>&nbsp; ${element.date}&nbsp; </section>
            
                                <section class="display-flex flex-1">
            
                                <section class="display-flex flex-1">

                                    <section class="display-flex flex-1 justify-content-center">
                
                                        <section class="padding-5-px padding-left-0-px padding-top-0-px padding-bottom-0-px">${funcs.post_privacy_obj_icons[element.privacy]}</section>
                
                                        <section>${element.privacy}</section>
                
                                    </section>
                                
                                    <section class="display-flex flex-1 justify-content-center">${name_company} ${element.device}</section>

                                    </section>
                                 
                                 </section>
            
                        </section>
                
                        <section id="comment_adder_ff_holder_${element.key_link}_${suffix}"></section>
                
                        </section>

                    </section>

                `;

            });

            funcs.adj_html(container_id, 'beforeend', template);

            lib._looper_challenge(obj, function (element) {

                if (!element.images.hasOwnProperty('none')) {

                    funcs.photo_galleryer_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, true, suffix); 
                    
                }
                
            if (!element.audios.hasOwnProperty('none') && element.audios.length > 0) {
			 
				$(`audio_post_wegbet_${element.key_link}_${suffix}`).innerHTML = funcs.templater_content_music(element.audios);
			 
             }
                 
            if (!element.videos.hasOwnProperty('none') && element.videos.length > 0) {
                 
                funcs.video_galleryer_content_maker(element.videos, `video_post_wegbet_${element.key_link}_${suffix}`, true, suffix,'',true,true);
            }

                funcs.long_comment_displayer(element, `comment_adder_ff_holder_${element.key_link}_${suffix}`, suffix);
                funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`);
                funcs.my_react_shower(element.react_info, element.key_link, suffix);
                funcs.num_react_shower(element.react_info, element.key_link, suffix);


                funcs.contain_post_tied(`post__holderr__few_${element.key_link}_${suffix}_tied`, element.tied_info, element.cate_post);

            });

        }

        funcs.handle_links();

    };

}();
