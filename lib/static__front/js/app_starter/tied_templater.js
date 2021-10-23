/* global funcs, lib, name_company, regex */

!function () {

    funcs.contain_post_tied = function (container_id, element_full, tie_to = 'post', saved = true) {

        if (!element_full.hasOwnProperty('none')) {

            if (element_full.hasOwnProperty('online')) {

                funcs.tied_preview_profile_(container_id, element_full, tie_to, saved);

            }else if (element_full.hasOwnProperty('album')) {

                funcs.tied_preview_music_(container_id, element_full, tie_to, saved);

            } else if (element_full[0].cate_post === 'post') {

                funcs.tied_preview_post_(container_id, element_full[0], tie_to, saved);

            } else if (element_full[0].cate_post === 'times') {

                funcs.tied_preview_times_(container_id, element_full[0], tie_to, saved);

            } else if (element_full[0].cate_post === 'blog') {

                funcs.tied_preview_blog_(container_id, element_full[0], tie_to, saved);

            }

            funcs.handle_links();

    }

    };
	
	funcs.tied_preview_profile_= function (container_id, element, tie_to = 'post', saved = true) {
					
					  let suffix = lib.switch_num;

        let remove_template = ``;

        if (saved === false) {

            remove_template = `<section data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" onclick="funcs.start_tie_process(this,'${tie_to}','untie','${suffix}');" id="remove_tieer_${element.key_link}_${suffix}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-times"></i></section>`;

        }
		
		$(container_id).innerHTML = `

            <section id="post__holderr__few_${element.key_link}_${suffix}" class="heavier width-100-cent margin-bottom-5-px border-box border-1px-solid border-radius-5px overflow-hidden">

                <section class="display-flex"> 
        
                    <section class="flex-1 margin-right-5px">
                
                        <section>${funcs.vertical_suggest(element, suffix)}</section>

                    </section>
        
                    ${remove_template}    

                </section>

            </section>`;


        ++lib.switch_num;
					
						
	};

    funcs.tied_preview_music_ = function (container_id, element, tie_to = 'post', saved = true) {

        let suffix = lib.switch_num;

        let remove_template = ``;

        if (saved === false) {

            remove_template = `<section data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" onclick="funcs.start_tie_process(this,'${tie_to}','untie','${suffix}');" id="remove_tieer_${element.key_link}_${suffix}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-times"></i></section>`;

        }

        $(container_id).innerHTML = `

            <section id="post__holderr__few_${element.key_link}_${suffix}" class="heavier width-100-cent margin-bottom-5-px border-box border-1px-solid padding-5-px border-radius-5px overflow-hidden">

                <section class="display-flex"> 
        
                    <section class="flex-1 margin-right-5px">
                
                        <section>${funcs.list_related_songs(element)}</section>

                    </section>
        
                    ${remove_template}    

                </section>

            </section>`;


        ++lib.switch_num;

    };

    funcs.tied_preview_times_ = function (container_id, element, tie_to = 'post', saved = true) {

        let suffix = lib.switch_num;

        if (!funcs.timeline_content.hasOwnProperty(element.key_link)) {

            funcs.timeline_content[element.key_link] = element;
        }

        let video = ``;
        let audio = ``;

        if (element.images.hasOwnProperty('none')) {

            if (!element.audios.hasOwnProperty('none') && element.audios.length > 0) {
			 
				audio = funcs.templater_content_music(element.audios);

            } else if (!element.videos.hasOwnProperty('none') && element.videos.length > 0) {

                video = funcs.video_galleryer_singer(element.videos[0], true, suffix,'',false,true);
            }

        }

        let remove_template = ``;

        if (saved === false) {

            remove_template = `<section data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" onclick="funcs.start_tie_process(this,'${tie_to}','untie','${suffix}');" id="remove_tieer_${element.key_link}_${suffix}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-times"></i></section>`;

        } else if (saved === true) {

            remove_template = `<a href="${funcs.app}?means=views&key_viewer=${element.key_link}" data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" id="remove_tieer_${element.key_link}_${suffix}" class="round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-external-link-alt"></i></a>`;

        }

        $(container_id).innerHTML = `

            <section id="post__holderr__few_${element.key_link}_${suffix}" class="heavier width-100-cent margin-bottom-5-px border-box border-1px-solid border-radius-5px overflow-hidden">
        
                <section class="padding-5-px display-flex"> 
        
                    ${funcs.display_capter_namer_random(element.poster, true, true)}  
            
                    <section class="display-flex flex-1 border-box height-fit-content">&nbsp;${funcs.text_tag_displayer(element.tagger, element.key_link, suffix)}</section>
            
                    ${remove_template} 

                </section>
                
                    <section class="padding-5-px padding-top-0-px padding-bottom-0-px font-size-18px font-weight-bold">${element.topic}</section>

                    <section>${funcs.display_hashtags_tags(element.hash_tags, element.mentions)}</section>
        
                <section class="font-size-16px line-height-25-px padding-5-px padding-top-0-px padding-bottom-0-px">${regex.hash__tag_replacer(element.word, true)}</section>

                <section>${funcs.sentiment_analysis_templater(element.word_analysis)}</section>
        
                <section class="padding-5-px">
            
                    <section id="photo_post_wegbet_${element.key_link}_${suffix}"></section>

            
                    <section>${audio}</section>
            
                    <section>${video}</section>
        
                </section>
        
                <section class="display-flex padding-5-px line-height-25-px">

                <section> <i class="fa fa-clock"></i> times</section>

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
        
            </section>

        `;

        if (!element.images.hasOwnProperty('none')) {

          /*  funcs.photo_switcher_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, suffix, true); */

          funcs.photo_galleryer_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, true, suffix);

        }

        funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`,false,true);

        ++lib.switch_num;



    };

    funcs.tied_preview_blog_ = function (container_id, element, tie_to = 'post', saved = true) {
        let suffix = lib.switch_num;

        if (!funcs.timeline_content.hasOwnProperty(element.key_link)) {

            funcs.timeline_content[element.key_link] = element;
        }

        let video = ``;
        let audio = ``;

        if (element.images.hasOwnProperty('none')) {

            if (!element.audios.hasOwnProperty('none') && element.audios.length > 0) {

                audio = funcs.templater_content_music(element.audios);

            } else if (!element.videos.hasOwnProperty('none') && element.videos.length > 0) {

                video = funcs.video_galleryer_singer(element.videos[0], true, suffix,'',false,true);
            }

        }

        let remove_template = ``;

        if (saved === false) {

            remove_template = `<section data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" onclick="funcs.start_tie_process(this,'${tie_to}','untie','${suffix}');" id="remove_tieer_${element.key_link}_${suffix}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-times"></i></section>`;

        } else if (saved === true) {

            remove_template = `<a href="${funcs.app}?means=views&key_viewer=${element.key_link}" data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" id="remove_tieer_${element.key_link}_${suffix}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-external-link-alt"></i></a>`;

        }


        $(container_id).innerHTML = `

            <section id="post__holderr__few_${element.key_link}_${suffix}" class="width-100-cent margin-bottom-5-px border-box border-1px-solid border-radius-5px overflow-hidden">
        
                <section class="padding-5-px display-flex"> 
        
                    ${funcs.display_capter_namer_random(element.poster, true, false)}  
            
                    <section class="display-flex flex-1 border-box height-fit-content">&nbsp;${funcs.text_tag_displayer(element.tagger, element.key_link, suffix)}</section>
            
                    ${remove_template} 

                </section>
        
        <section class="padding-left-40-px">
                
                    <section class="padding-5-px padding-top-0-px padding-bottom-0-px font-size-18px font-weight-bold">${element.topic}</section>
        
                <section class="padding-5-px">
            
                    <section id="photo_post_wegbet_${element.key_link}_${suffix}"></section>
            
                    <section>${audio}</section>
            
                    <section>${video}</section>
        
                </section>

                <section>${funcs.display_hashtags_tags(element.hash_tags, element.mentions)}</section>
                
                <section class="font-size-16px line-height-25-px padding-5-px padding-top-0-px padding-bottom-0-px">${regex.hash__tag_replacer(element.word, true)}</section>

                <section>${funcs.sentiment_analysis_templater(element.word_analysis)}</section>
        
                <section class="padding-5-px">
        
                    <section>
            
                    <section>
        
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
        
            </section>
        
            </section>

        `;

        if (!element.images.hasOwnProperty('none')) {

            funcs.photo_galleryer_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, true, suffix, '', true, true); 
        }

        funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`,false,true);

        ++lib.switch_num;

    };


    funcs.tied_preview_post_ = function (container_id, element, tie_to = 'post', saved = true) {

        let suffix = lib.switch_num;

        if (!funcs.timeline_content.hasOwnProperty(element.key_link)) {

            funcs.timeline_content[element.key_link] = element;
        }

        let video = ``;
        let audio = ``;

        if (element.images.hasOwnProperty('none')) {

            if (!element.audios.hasOwnProperty('none') && element.audios.length > 0) {

                audio = funcs.templater_content_music(element.audios);

            } else if (!element.videos.hasOwnProperty('none') && element.videos.length > 0) {

                video = funcs.video_galleryer_singer(element.videos[0], true, suffix,'',false,true);
            }

        }

        let remove_template = ``;

        if (saved === false) {

            remove_template = `<section data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" onclick="funcs.start_tie_process(this,'${tie_to}','untie','${suffix}');" id="remove_tieer_${element.key_link}_${suffix}" class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-times"></i></section>`;

        } else if (saved === true) {

            remove_template = `<a href="${funcs.app}?means=views&key_viewer=${element.key_link}" data-fullfacilityholder="post__holderr__few_${element.key_link}_${suffix}" id="remove_tieer_${element.key_link}_${suffix}" class="round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-external-link-alt"></i></a>`;

        }

        $(container_id).innerHTML = `

            <section id="post__holderr__few_${element.key_link}_${suffix}" class="heavier width-100-cent margin-bottom-5-px border-box border-1px-solid border-radius-5px overflow-hidden">
        
                <section class="padding-5-px display-flex"> 
        
                    ${funcs.display_capter_namer_random(element.poster, true, true)}  
            
                    <section class="display-flex flex-1 border-box height-fit-content">&nbsp;${funcs.text_tag_displayer(element.tagger, element.key_link, suffix)}</section>
            
                    ${remove_template} 

                </section>
                
                    <section class="padding-5-px padding-top-0-px padding-bottom-0-px font-size-18px font-weight-bold">${element.topic}</section>

                    <section>${funcs.display_hashtags_tags(element.hash_tags, element.mentions)}</section>
        
                <section class="font-size-16px line-height-25-px padding-5-px padding-top-0-px padding-bottom-0-px">${regex.hash__tag_replacer(element.word, true)}</section>

                <section>${funcs.sentiment_analysis_templater(element.word_analysis)}</section>
        
                <section class="padding-5-px">
            
                    <section id="photo_post_wegbet_${element.key_link}_${suffix}"></section>
            
                    <section>${audio}</section>
            
                    <section>${video}</section>
        
                </section>
        
                <section class="display-flex padding-5-px line-height-25-px">

                <section> <i class="fa fa-globe"></i> post</section>

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
        
            </section>

        `;

        if (!element.images.hasOwnProperty('none')) {

            lib.add_class('padding-5-px', `post__holderr__few_${element.key_link}_${suffix}`);

           /* funcs.photo_galleryer_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, true, suffix, ''); */

           funcs.photo_switcher_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, suffix, true);
        }

        funcs.add_controls_aud_vid_multiple(`stone-vid-aud-mine-${suffix}`, `stone-controls-mine-${suffix}`,false,true);

        ++lib.switch_num;

    };

}();
