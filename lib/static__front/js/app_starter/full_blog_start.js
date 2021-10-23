/* global lib, funcs, regex, name_company*/

!function () {

    funcs.start_blog_full_main = function (element, container_id, suffix) {

        $(container_id).parentNode.style.background = `var(--darker-black-moder)`;

        lib.add_class('width-100-cent', container_id);

        funcs.timeline_content[element.key_link] = element;
        lib.inc_html(`
         
         <section style="background:var(--liter-black-moder);" class='overflow-hidden width-100-cent height-fit-content border-box display-flex flex-column margin-auto'>
        
        <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="fa fa-book-open"></i>&nbsp;${element.cate_post}</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.start_views__beem('${container_id}', '${element.key_link}', '${suffix}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
        
                <section id="post__holderr__few_${element.key_link}_${suffix}" class="margin-top-10-px border-1px-solid border-right-none border-left-none width-100-cent lighter display-flex padding-5-px border-box margin-bottom-5-px heavier">
        
                    <section class="margin-right-5px border-radius-20px">${funcs.round_profile_dumper(element.poster, false, false)}</section>
                
                        <section class="flex-1 overflow-hidden">
                
                            <section class="display-flex">

                                <section>${funcs.text_profile_dumper(element.poster, false, true, 'font-weight-bold')}</section>
                
                                <section class="display-flex flex-1 border-box height-fit-content">&nbsp;${funcs.text_tag_displayer(element.tagger, element.key_link, suffix)}</section>
                
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
            
                            <section class="" id="photo_post_wegbet_${element.key_link}_${suffix}"></section>
            
                            <section id="audio_post_wegbet_${element.key_link}_${suffix}"></section>
            
                            <section id="video_post_wegbet_${element.key_link}_${suffix}"></section>
            
                        </section>
                
                        <section id='post__holderr__few_${element.key_link}_${suffix}_tied' class="margin-top-5-px"> </section>
                
                        <section class="margin-top-5-px">${funcs.apply_react_template(element.react_info, element.key_link, suffix)}</section>
        
                         <section>${funcs.display_preview_viewers(element.view_info, element.key_link, suffix, false)}</section>
        
                         <section>${funcs.display_preview_reacters(element.react_info, element.key_link, suffix, false)}</section>
                
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
        
         </section>
         
         `, container_id);
        funcs.long_comment_displayer(element, `comment_adder_ff_holder_${element.key_link}_${suffix}`, suffix);
        funcs.my_react_shower(element.react_info, element.key_link, suffix);
        funcs.num_react_shower(element.react_info, element.key_link, suffix);

        funcs.contain_post_tied(`post__holderr__few_${element.key_link}_${suffix}_tied`, element.tied_info, element.cate_post);

        if (!element.images.hasOwnProperty('none') && element.images.length > 0) {

            funcs.photo_galleryer_content_maker(element.images, `photo_post_wegbet_${element.key_link}_${suffix}`, true, suffix, '', false, false);
            
        }

        
            if (!element.audios.hasOwnProperty('none') && element.audios.length > 0) {
			 
				$(`audio_post_wegbet_${element.key_link}_${suffix}`).innerHTML = funcs.templater_content_music(element.audios);
			 
             }
         
          if (!element.videos.hasOwnProperty('none') && element.videos.length > 0) {
         
         funcs.video_galleryer_content_maker(element.videos, `video_post_wegbet_${element.key_link}_${suffix}`, true, suffix,'',true);
         }
         

        funcs.handle_links();
    };
}();
