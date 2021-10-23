/* global funcs, lib */

!function () {

funcs.long_comment_displayer = function (element, container_id, suffix) {

if (element.comment_info.comment_num !== 0) {

let comment_next_previous = ` <section>
            
                   <section class="display-flex margin-top-5-px">

                            <a onclick="funcs.get_comments_next_previous('${element.key_link}', false, true,false,'${suffix}');" id="comment_fetch_previous_${element.key_link}_${suffix}" class="tagger_hasher width-fit-content hover-background-twitter color-fb-blue display-flex align-items-center">

                                <section>previous gossips &nbsp;</section>

                                    <section>

                                        <i class="fa fa-angle-up"></i>

                                    </section>

                            </a>
                
                    </section>
            
                    <section id="comment_holder_${element.key_link}_${suffix}" class="line-height-25-px"></section>
            
                    <section class="display-flex">

                            <a onclick="funcs.get_comments_next_previous('${element.key_link}', true, true,false,'${suffix}');" id="comment_fetch_next_${element.key_link}_${suffix}" class="tagger_hasher width-fit-content hover-background-twitter color-fb-blue display-flex align-items-center">

                                <section>next gossips &nbsp;</section>

                                <section>

                                    <i class="fa fa-angle-down"></i>

                                </section>

                            </a>
                
                    </section>
            
            </section>`;
        $(container_id).innerHTML = comment_next_previous;
        funcs.comment_display_sample(element.comment_info.comment_sample, element.key_link, suffix, `comment_holder_${element.key_link}_${suffix}`, true);
        }

};
        funcs.long_context_menu_displayer = function (element, suffix) {

        let my_edit_delete = ``;
                if (element.poster.info.g === funcs.userinfo.logged_user.info.g && element.poster.info.q === funcs.userinfo.logged_user.info.q) {

        my_edit_delete = `
        
            <!--<section id="post_edit_edit_${element.key_link}_${suffix}" data-containerfacilityholder="post__holderr__few_${element.key_link}_${suffix}" onclick="funcs.__host_edit_content_ooo(this,'${element.key_link}','${suffix}');" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-pencil-alt"></i> Edit </section>-->
                    
            <section data-containerfacilityholder="post__holderr__few_${element.key_link}_${suffix}" id="post_edit_delete_${element.key_link}_${suffix}" onclick="funcs.__host_edit_delete_ooo(this,'${element.key_link}','${suffix}');" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="far fa-trash-alt"></i> Delete </section>
            
            `;
        }

        let saved_unsaved_template;
                if (element.saved === false) {

        saved_unsaved_template = `<section id="save_usave_${element.key_link}_${suffix}" onclick="funcs.save_unsaved_post(this, '${element.key_link}', '${element.cate_post}', '${suffix}', true);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="far fa-bookmark"></i> See later </section>`;
        } else if (element.saved === true) {

        saved_unsaved_template = `<section id="save_usave_${element.key_link}_${suffix}" onclick="funcs.save_unsaved_post(this, '${element.key_link}', '${element.cate_post}', '${suffix}', false);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-bookmark"></i> Unsave </section>`;
        }

        return `<section class="heavier position-absolute margin-left--50px friends-shadow-shadow border-radius-5px display-none z-index-2">
                    
                                ${my_edit_delete}       
            
                                ${saved_unsaved_template}      

                            </section>`;
        };
		
        funcs.tie_templater = function(hash, suffix, num_tiers){

        let list_tie = ``;
                lib.obj_looper_challenge (funcs.post_type_obj, function(key, value){

                list_tie += `<section data-fullfacilityholder="add-tie-holder-${hash}-${suffix}" id="add-tie-post-${hash}-${suffix}-${key}" onclick="funcs.start_tie_process(this,'${key}','${hash}','${suffix}')" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer">${value}</section>`;
                });
                return `

                <section class="flex-1 border-box padding-5-px">

                    <section onclick="lib.toggle_class_ele('display-none', this.nextElementSibling)" id="react-butt-coment-${hash}-${suffix}-comment" class="border-radius-2px display-flex flex-1 justify-content-center align-items-center cursor-pointer">

                        <section><i class="fa-retweet font-size-18px fa"></i></section>

                        &nbsp;<section>${(num_tiers !== 0) ? (num_tiers) : ('')}</section>

                    </section>
            
                            <section id="add-tie-holder-${hash}-${suffix}" class="heavier margin-left--35px position-absolute friends-shadow-shadow border-radius-2px z-index-2 display-none">
                            
                            ${list_tie} 
                            
                            <div href="?means=tie&tie_key=${hash}" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer">

                                <i class="fa fa-external-link-alt"></i> &nbsp;

                                <span class='font-weight-bold'>See all ties</span>
                            
                            </div>
                            
                            </section>

                </section>`;
        };
		
		funcs.comment_button_template = function(hash,num){
			
			return `<a href="${funcs.app}?means=comment&key=${hash}" class="border-radius-2px display-flex flex-1 justify-content-center hover-background-twitter hover-color-fb-blue align-items-center padding-5-px cursor-pointer">

                    <section><i class="fa-comment-alt far font-size-16px"></i></section>
                        &nbsp;
                    <section>${(num !== 0) ? (num) : ('')}</section>
        
                </a>`;
			
		};
		
        funcs.apply_react_template = function (obj, hash, suffix, tie = true, comment = true) {

        let comment_template = ``;
                if (comment === true && funcs.timeline_content.hasOwnProperty(hash)) {

        comment_template = funcs.comment_button_template(hash,funcs.timeline_content[hash].comment_info.comment_num);
        }

        let tie_template = ``;
                if (tie === true && funcs.timeline_content.hasOwnProperty(hash)) {

        tie_template = funcs.tie_templater(hash, suffix, funcs.timeline_content[hash].num_tiers);
        }

        return `

            <section class="display-flex">
        
                <section onclick="funcs.react_to_pictures(this,'love','${hash}','${suffix}')" id="react-butt_wimper-${hash}-${suffix}-love" class="border-radius-2px display-flex flex-1 padding-5-px justify-content-center hover-background-twitter align-items-center cursor-pointer react-butt_wimper-${hash}-${suffix}">

                    <section><i class="fa-heart far font-size-18px"></i></section>
                        &nbsp;
                    <section></section>
        
                </section>
        
                <section onclick="funcs.react_to_pictures(this,'like','${hash}','${suffix}')" id="react-butt_wimper-${hash}-${suffix}-like" class="border-radius-2px display-flex flex-1 padding-5-px justify-content-center hover-background-twitter align-items-center cursor-pointer react-butt_wimper-${hash}-${suffix}">
        
                    <section><i class="fa-thumbs-up far font-size-18px"></i></section>
                        &nbsp;
                    <section></section>
                        
                </section>
        
                <section onclick="funcs.react_to_pictures(this,'rate','${hash}','${suffix}')" id="react-butt_wimper-${hash}-${suffix}-rate" class="border-radius-2px display-flex flex-1 padding-5-px justify-content-center hover-background-twitter align-items-center cursor-pointer react-butt_wimper-${hash}-${suffix}">
        
                    <section><i class="fa-star far font-size-18px"></i></section>
                        &nbsp;
                    <section></section>
        
                </section>
        
                <section onclick="funcs.react_to_pictures(this,'dislike','${hash}','${suffix}')" id="react-butt_wimper-${hash}-${suffix}-dislike" class="border-radius-2px display-flex flex-1 padding-5-px justify-content-center hover-background-twitter align-items-center cursor-pointer react-butt_wimper-${hash}-${suffix}">

                    <section><i class="fa-thumbs-down far font-size-18px"></i></section>
                        &nbsp;
                    <section></section>
        
                </section>
        
        ${comment_template}  
        
        ${tie_template} 
        
            </section>

        `;
        };
}();
