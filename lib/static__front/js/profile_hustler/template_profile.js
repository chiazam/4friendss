/* global funcs, regex, api, lib, lib */

!function () {

    funcs.update_profile_now = function (element, form_id) {

        element.children[0].className = 'fa fa-spinner animate-spin';

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        lib.add_class_ele('display-none', $(`update_profile_err_disp_${element.dataset.suffix}_${element.dataset.g}`));

        let obj_form = funcs.return_form_to_option($(form_id));

        obj_form['4friendss_user'] = funcs.userinfo.login_token;

        funcs.send_get_me_something({suffix: element.dataset.suffix, g: element.dataset.g, category: 'profile', type: 'profile update', repeat: false, on_click: onclicker, butt_id: element.id, form_id: form_id}, obj_form, `${api}api/profile_handler/update_info.php`);

    };

    funcs.edit_my_info_profile = function (container_id, suffix) {

        let returned = ``;

        lib.obj_looper_challenge(funcs.userinfo.logged_user.info, function (key, value) {

            value = (value === null) ? ('') : (value);

            if (key.toLowerCase() === "phone" || key.toLowerCase() === "city" || key.toLowerCase() === "state" || key.toLowerCase() === "country" || key.toLowerCase() === "lga" || key.toLowerCase() === "status" || key.toLowerCase() === "theme") {

                let input_holder;

                if (key.toLowerCase() !== "status") {

                    let attr_focus = ``;

                    if (key.toLowerCase() === "country" || key.toLowerCase() === "state" || key.toLowerCase() === "theme") {

                        attr_focus = `onfocus="this.blur();"`;

                    }

                    input_holder = `<input ${attr_focus} id="${key}_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}" name="${key}" autocomplete="off" spellcheck="false" class="loggers-lock-inputs-holders-holders border-1px-solid padding-5-px border-1px-solid border-right-none border-left-none border-top-none width-100-cent border-box" value="${value}"/>`;

                } else if (key.toLowerCase() === "status") {

                    input_holder = `<section textbox autocomplete="off" spellcheck="false" contenteditable="true" class="lighter padding-5-px border-1px-solid padding-5-px border-1px-solid border-right-none border-left-none border-top-none border-radius-2px content-post-editor-smart-weep overflow-hidden overflow-y-scroll width-100-cent border-box" id="status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}" placeholder="Say your mind">${value}</section>
                    
                    <section id="status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}__suggest_holder" class="display-none overflow-hidden overflow-y-scroll max-height-300-px z-index-1"></section>
                    
                    <textarea name="${key}" class="display-none" id="status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}_boxer">${value}</textarea>

`;

                }

                let attr_onclick = ``;

                if (key.toLowerCase() === "country") {

                    attr_onclick = `onclick="countries.set_country_input('${key}_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}___holder','state_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}___holder');"`;

                } else if (key.toLowerCase() === "state") {

                    attr_onclick = `onclick="states.function_states_chai($('country_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}___holder').children[0].value,'${key}_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}___holder');"`;
                } else if (key.toLowerCase() === "theme") {

                    attr_onclick = `onclick="funcs.change_theme_hook('${key}_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}');"`;

                }

                returned += `
                
                    <section class="display-flex">

                        <section class="padding-5-px width-50-px">${funcs.jsUcfirst(key)}</section>
                
                        <section ${attr_onclick} id="${key}_edit_profile_${suffix}_${funcs.userinfo.logged_user.info.g}___holder" class="padding-5-px border-box max-width-300-px flex-1">${input_holder}</section>

                    </section>

                `;

            }

        });

        $(container_id).innerHTML = `<section class="width-100-cent hang-over-white-block" id="">

            <section class="overflow-hidden border-radius-5px border-1px-solid width-100-cent max-width-400-px height-fit-content friends-shadow-shadow display-flex flex-column margin-auto">
        
                    <section class="padding-5-px align-items-center justify-content-center display-flex border-1px-solid border-left-none border-right-none border-top-none font-size-16px">
        
                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fa fa-pencil-alt"></i></section>
        
                        <section class="font-weight-bold">Edit profile</section>

                    </section>

                    <section>
        
                        <section id="update_profile_err_disp_${suffix}_${funcs.userinfo.logged_user.info.g}" class="loggers-lock-inputs-holders-holders error-box margin-top-5-px border-box border-1px-solid width-98-cent margin-auto buttoners-goog-red display-none"></section>

                        <form id="update_profile_form_${suffix}_${funcs.userinfo.logged_user.info.g}"  class="">${returned}</form>
        
                        <section class="padding-5-px text-align-center"> 

                            <button data-suffix="${suffix}" data-g="${funcs.userinfo.logged_user.info.g}" id="update_profile_infoo_${suffix}_${funcs.userinfo.logged_user.info.g}" onclick="funcs.update_profile_now(this,'update_profile_form_${suffix}_${funcs.userinfo.logged_user.info.g}');" data-suffix="0" class="lighter width-100-cent border-1px-solid padding-5-px border-1px-solid border-right-none border-left-none border-top-none font-weight-bold hover-background-twitter hover-color-fb-blue post-button cursor-pointer" style="opacity:1;"><i class="fa-arrow-up fa"></i> Update profile</button>

                        </section>

                    </section>

            </section>

        </section>`;

        funcs.change_theme_hook = function (input_id) {

            funcs.option_maker_fool(funcs.theme__lister, false);

            lib._looper_challenge(lib.query_selector_all('.butt_selector'), function (element) {

                element.setAttribute('onclick', `
                $('${input_id}').value=this.dataset.value;
                lib.inc_html('', 'option-spender');
                lib.remove_class('display-flex', 'card-7');
                lib.add_class('display-none', 'card-7');
                
            `);

            });

        };

        lib.event_attach($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`), 'input', lib.empty_content_editable, 1);

        lib.event_attach($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`), 'input', funcs.insert_contenteditable_to_textarea, 1);

        lib.event_attach($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`), 'keyup', funcs.content_editable_syntax, 1);

        lib.event_attach($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`), 'blur', function (e) {

            e.currentTarget.dataset.focus = false;
        }, 1);

        lib.event_attach($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`), 'focus', function (e) {

            e.currentTarget.dataset.focus = true;
        }, 1);

        var caret = new VanillaCaret($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`));
        caret.setPos($(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}_boxer`).value.length);

        lib.host_event_execute_now('input', $(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`));
        lib.host_event_execute_now('keyup', $(`status_text_edit${suffix}_${funcs.userinfo.logged_user.info.g}`));


    };

    funcs.add_remove_contact_main = function (trigger_id, b, suffix, add = true) {

        $(trigger_id).children[0].className = `fa fa-spinner animate-spin`;
        let onclicker = $(trigger_id).getAttribute('onclick');
        $(trigger_id).removeAttribute('onclick');
        funcs.send_get_me_something({suffix: suffix, category: 'profile', type: 'remove add contact', repeat: false, container_id: trigger_id, onclick: onclicker, b: b, add: add}, {'4friendss_user': funcs.userinfo.login_token, fr_b: b, add: add}, `${api}api/profile_handler/contact_adder.php`);
    };

    funcs.return_status = function (obj, suffix) {

        let status = ``;
        if (obj.info.status !== null) {

            if (obj.info.status.length > 0) {

                status = `<section class='lighter border-radius-5px padding-5-px'>${regex.hash__tag_replacer(obj.info.status, true)}</section>`;
            }

        }
        return status;
    };
    funcs.add_remove_contact = function (obj, suffix) {

        let contacter_ = ``;
        if (funcs.its_me(obj) === false) {

            if (obj.contacted === 0) {

                contacter_ = `<section id="contacter_butt_${obj.info.b}_${suffix}" onclick="funcs.add_remove_contact_main(this.id,'${obj.info.b}','${suffix}',true);" class="hover-background-twitter hover-color-fb-blue cursor-pointer lighter border-radius-50px padding-5-px">
                
                                    <i draggable="false" class="fa fa-user-plus"></i> add contact

                              </section>`;
            } else if (obj.contacted === 1) {

                contacter_ = `<section id="contacter_butt_${obj.info.b}_${suffix}" onclick="funcs.add_remove_contact_main(this.id,'${obj.info.b}','${suffix}',false);" class="hover-background-twitter hover-color-fb-blue cursor-pointer lighter border-radius-50px padding-5-px">
                
                                    <i draggable="false" class="fa fa-user-minus"></i> remove contact

                              </section>`;
            }

        }

        return contacter_;
    };
    funcs.top_profile_title = function (obj, suffix) {

        let info_update = ``;

        if (funcs.its_me(obj) === true) {
            info_update = `<section class="info_my_profile_main width-100-cent"></section>`;
        } else if (funcs.its_me(obj) === false) {
            info_update = `

                <section class="display-flex justify-content-center">${funcs.return_status(obj, suffix)}</section>
        
                 <section class="border-box width-100-cent">${funcs.address_prof(obj, suffix)}</section>
                 
                 <section class="border-box width-100-cent padding-5-px"> <i class="fa fa-palette"></i> ${obj.info.theme}</section>`;
        }

        return `

            <section class="display-flex width-100-cent justify-content-center align-items-center flex-column margin-auto">

                <section class="font-weight-bold font-size-18px">${obj.info.full}&nbsp;${funcs.verify_returner(obj.info.act)}</section>
    
                <section>${obj.info.username}</section>
        
                <section class='font-size-10px'>${obj.relationship.relationship}</section>
        
                <section class="margin-bottom-5-px">${funcs.add_remove_contact(obj, suffix)}</section>
         
                ${info_update}  
                
                    <section class="border-box width-100-cent padding-5-px"> <i class="far fa-calendar-alt"></i> joined on ${obj.info.date} </section>

                    <section class="border-box width-100-cent padding-5-px"> <i class="fa fa-birthday-cake"></i> birth date ${obj.info.date_birth} </section>
                 
                 
                 
            </section>

        `;
    };
    funcs.address_prof = function (obj, suffix) {

        let addresses = ``;
        if (obj.info.phone !== null && obj.info.phone.length !== 0) {

            addresses += `<section class="border-box width-100-cent padding-5-px"> <i class="fa fa-phone"></i> ${obj.info.phone}</section>`;
        }

        if (obj.info.country !== null) {

            let state = (obj.info.state !== null) ? (obj.info.state) : (``);
            let city = (obj.info.city !== null) ? (obj.info.city) : (``);
            let lga = (obj.info.LGA !== null) ? (obj.info.LGA) : (``);
            addresses += `<section class="border-box width-100-cent padding-5-px"> <i class="fa fa-map-marker-alt"></i> ${obj.info.country}, ${state}, ${city}, ${lga}</section>`;
        }

        return addresses;
    };
    funcs.top_profile_hangover = function (obj, suffix) {

        let editer_profile = '';

        let num_notify = ``;

        if (obj.notify_unseen.is === true) {

            num_notify = `<section class="border-radius-20px background-google-red padding-5-px display-flex justify-content-center align-items-center border-box height-fit-content width-fit-content margin-left-top--15-px"><!--${obj.notify_unseen.num}--></section>`;

        }

        let num_chat = ``;

        if (obj.me_yet_see.is === true) {

            num_chat = `<section class="border-radius-20px background-google-red padding-5-px display-flex justify-content-center align-items-center border-box height-fit-content width-fit-content margin-left-top--15-px"><!--${obj.me_yet_see.num}--></section>`;

        }

        let music_info_url = `${funcs.app}?means=personal music&gip=${obj.info.g}&bip=${obj.info.b}`;

        let dialogue_message = `${funcs.app}?means=dialogue&bim=${obj.info.b}&qim=${obj.info.q}`;

        if (funcs.its_me(obj) === true) {

            editer_profile = `<section onclick="lib.toggle_class_ele('display-none', $('profile_card_hanger_${obj.info.g}_${suffix}').parentNode);funcs.edit_my_info_profile('profile_card_hanger_${obj.info.g}_${suffix}','${suffix}');" class="font-size-16px flex-1 justify-content-center display-flex align-items-center cursor-pointer border-radius-5px hover-background-twitter hover-color-fb-blue">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small border-radius-5px">

                            <i draggable="false" class="fa fa-pencil-alt"></i>

                        </section>

                    </section>`;

            music_info_url = `${funcs.app}?means=music`;

            dialogue_message = `${funcs.app}?means=message`;

        }
		
		let message_profile = ``;
		
		if(funcs.its_me(obj) === false){
			
			message_profile = `<a href='${dialogue_message}' class="font-size-16px flex-1 justify-content-center display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer border-radius-5px">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small">

                            <i draggable="false" class="far fa-envelope"></i>

                        </section>
        
                        ${num_chat}   

                    </a>`;
			
		}
		
		let comment_profile = funcs.comment_button_template(`${obj.info.g}`,obj.comment_num);
		
		let tie_profile =``;
		
		if(funcs.its_me(obj) === false){
		
			tie_profile = funcs.tie_templater(`${obj.info.g}`, `${suffix}`, obj.num_tiers);
		
		}

        return `

                <section class="font-size-16px display-flex padding-5-px width-100-cent border-box justify-content-center align-items-center margin-auto">

                    <section onclick="funcs.trigger_change_tagged___posted('posted', '${obj.info.g}', '${suffix}');" class="flex-1 justify-content-center display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer border-radius-5px">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small">

                            <i draggable="false" class="far fa-list-alt"></i>

                        </section>

                    </section>
    
                    <section onclick="funcs.trigger_change_tagged___posted('tagged', '${obj.info.g}', '${suffix}');" class="font-size-16px flex-1 justify-content-center display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer border-radius-5px">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small">

                            <i draggable="false" class="fa fa-tag"></i>

                        </section>

                    </section>
    
                   ${message_profile}      
        
                    <a href="${funcs.app}?means=activites&bis=${obj.info.b}&qis=${obj.info.q}" class="font-size-16px flex-1 justify-content-center display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer border-radius-5px">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small">

                            <i draggable="false" class="far fa-bell"></i>

                        </section> 
        
                        ${num_notify}  

                    </a>
        
                    <a href="${music_info_url}" class="font-size-16px flex-1 justify-content-center display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer border-radius-5px">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small">

                            <i draggable="false" class="fab fa-itunes-note"></i>

                        </section>

                    </a>
        
                    <a href="${funcs.app}?means=contact info&bike=${obj.info.b}" class="font-size-16px flex-1 justify-content-center display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer border-radius-5px">

                        <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small">

                            <i draggable="false" class="fa fa-users"></i>

                        </section>

                    </a>
					
					${comment_profile}   

					${tie_profile}   
        
                    ${editer_profile} 

                </section>

        `;
    };
    funcs.upload_profile_symbol = function (container_id, percent) {

        console.log(percent);
        console.log(typeof (percent));
        if (typeof (percent) === "string") {

            $(container_id).children[0].className = "fa fa-spinner animate-spin";
        } else if (typeof (percent) === "boolean") {

            $(container_id).children[0].className = "fa fa-camera";
        }

    };
    funcs.update_my_prof_pix_ponk = function (e) {

        if (funcs.image_validator(e.currentTarget.files[0])) {

            funcs.file_upload_kick({suffix: e.currentTarget.dataset.suffix, category: 'profile', type: 'update prof_pix', repeat: false, input_id: e.currentTarget.id}, `${api}api/profile_handler/prof_pix_changer.php`, e.currentTarget.parentNode.id, `${e.currentTarget.id}_parenter_parenter`, funcs.upload_profile_symbol, {'4friendss_user': funcs.userinfo.login_token});
        } else {

            e.currentTarget.files = $('empty_inp_file').files;
            funcs.error_showers_bit(`

                <section class="padding-5-px">
                    
                    <section>${funcs.input_hollar_error(`images`)}</section>
                    
                </section>
                
            `);
        }

    };
    funcs.update_my_cover_ponk = function (e) {

        if (funcs.image_validator(e.currentTarget.files[0])) {

            funcs.file_upload_kick({suffix: e.currentTarget.dataset.suffix, category: 'profile', type: 'update cover', repeat: false, input_id: e.currentTarget.id}, `${api}api/profile_handler/cover_changer.php`, e.currentTarget.parentNode.id, `${e.currentTarget.id}_parenter_parenter`, funcs.upload_profile_symbol, {'4friendss_user': funcs.userinfo.login_token});
        } else {

            e.currentTarget.files = $('empty_inp_file').files;
            funcs.error_showers_bit(`

                <section class="padding-5-px">
                    
                    <section>${funcs.input_hollar_error(`images`)}</section>
                    
                </section>
                
            `);
        }

    };
    funcs.prof_pix_main_dumperr = function (obj, suffix, border = 5) {

        let its_me = '';
        let prof_pix_changer = ``;
        let edit_prodile_pix = ``;
        let latest_story = ``;
        if (funcs.is_story(obj) === true) {

            latest_story += `<div href="${funcs.app}?means=times&by_g=${obj.info.g}" id="" class="padding-5-px border-box width-100-cent hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-user-clock"></i> See new times </div>`;
        }

        let profpixx = `${obj.info.prof_pix}`;

        if (funcs.its_me(obj) === true) {

            its_me = 'iiiiii';
            edit_prodile_pix = `<section id="" onclick="funcs.edit_something_now('profile','${obj.info.prof_pix}', 'content maker','${its_me}', '${suffix}'); lib.toggle_class_ele('display-none', this.parentNode);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-paint-brush"></i> Edit profile photo </section>`;
            prof_pix_changer = `

<section class="width-100-cent border-box display-flex justify-content-center padding-5-px position-relative z-index-1 margin-top--50-px margin-bottom-10-px">

<section class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2">

        <label id='main_inp_prof_pix_${suffix}__${obj.info.g}_parenter_parenter' for="main_inp_prof_pix_${suffix}__${obj.info.g}">

            <i class="fa fa-camera"></i></section>
            
            <form class="display-none" data-suffix="${suffix}" data-g="${obj.info.g}" id='main_inp_prof_pix_${suffix}__${obj.info.g}_parenter' enctype='multipart/form-data'>
            
            <input type="file" name="image" data-g="${obj.info.g}" data-suffix="${suffix}" id="main_inp_prof_pix_${suffix}__${obj.info.g}"/>
            </form>
            
        </label>
            
                </section>

            `;

            profpixx = 'me';

            setTimeout(function () {

                lib.event_attach($(`main_inp_prof_pix_${suffix}__${obj.info.g}`), 'change', funcs.update_my_prof_pix_ponk, true);
            }, 100);

        }

        return `<section onclick="lib.toggle_class_ele('display-none', this.nextElementSibling)" class="cursor-pointer overflow-hidden align-items-center justify-content-center display-flex heavier-border-color round-border icon-mager-profilllerr-small border-${border}px-solid heavier line-height-initial ${funcs.story_release_border(obj)}">
                    
                    <img draggable="false" class='object-fit-cover round-border ${its_me}' style='filter:${funcs.add_main_effect_to_yall(obj.prof_styler)};background:${obj.info.prof_pix_backgrund};' src="${funcs.addImage(obj.info.prof_pix, 300, 300, 60, 2)}"/>
        
                    <section class="position-absolute margin-left--5px online-dotist-prover">${funcs.online_color_datist(obj.online, false).online_template}</section> 
            
        </section>
        
        <section class="heavier display-none position-absolute friends-shadow-shadow border-radius-5px z-index-2">
            
                                ${edit_prodile_pix}  
            
                                <section id="" onclick="lib.toggle_class_ele('display-none', $('profile_card_hanger_${obj.info.g}_${suffix}').parentNode);funcs.large_prof_pix_display('profile_card_hanger_${obj.info.g}_${suffix}','${profpixx}','${suffix}','${funcs.add_main_effect_to_yall(obj.prof_styler)}','${obj.info.prof_pix_backgrund}');lib.toggle_class_ele('display-none', this.parentNode);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-expand"></i> See profile photo </section>
            
                                ${latest_story}  
                                
                                <section onclick="lib.toggle_class_ele('display-none', this.parentNode);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-times"></i> close</section>
            
                            </section>
        
        ${prof_pix_changer}  `;
    };

    funcs.large_prof_pix_display = function (container_id, img_path, suffix, effect, background_color) {

        if (img_path === 'me') {

            img_path = funcs.userinfo.logged_user.info.prof_pix;

        }

        $(container_id).innerHTML = `<img draggable="false" class='object-fit-contain width-100-cent height-100-cent' style='filter:${effect};background:${background_color};' src="${funcs.addImage(img_path, 50, 50, 60, 1)}"/>`;

    };

    funcs.drop_profile_initials = function (obj, suffix) {

        let its_me_2 = '';
        let changer_cover = ``;
        if (funcs.its_me(obj) === true) {

            its_me_2 = 'cover_may_coulkd_wash_is_me';
            changer_cover = `<section class="margin-right-5px light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2">

        <label id='main_inp_cover_${suffix}__${obj.info.g}_parenter_parenter' for="main_inp_cover_${suffix}__${obj.info.g}">

            <i class="fa fa-camera"></i>
            
            <form class="display-none" data-suffix="${suffix}" data-g="${obj.info.g}" id='main_inp_cover_${suffix}__${obj.info.g}_parenter' enctype='multipart/form-data'>
            
                <input type="file" name="image" data-g="${obj.info.g}" data-suffix="${suffix}" id="main_inp_cover_${suffix}__${obj.info.g}"/>
            
            </form>

        </label>
            
    </section> 
            
             <section>
        
                        <section onclick="lib.toggle_class_ele('display-none', this.nextElementSibling)" class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2"><i class="fa fa-ellipsis-h"></i></section>
        
        <section class="heavier display-none position-absolute friends-shadow-shadow border-radius-5px z-index-2">
            
                                <section id="" onclick="funcs.edit_something_now('cover','${obj.info.cover}', 'content maker','${its_me_2}', '${suffix}'); lib.toggle_class_ele('display-none', this.parentNode);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-pencil-alt"></i> Edit cover photo </section>
            
                                <section id="" onclick="funcs.start_adjust_my_profile_pix();lib.toggle_class_ele('display-none', this.parentNode);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-arrows-alt"></i> Adjust cover photo </section>

                            </section>
        
                    </section>

 `;
            setTimeout(function () {

                lib.event_attach($(`main_inp_cover_${suffix}__${obj.info.g}`), 'change', funcs.update_my_cover_ponk, true);
            }, 100);
        }


        setTimeout(function () {

            let fullscreen_toggler_callback_cover_profile = function (the_bool, reciever, trigger) {

                if (the_bool === true) {

                    lib.remove_class_ele('height-100-cent', reciever);
                    lib.remove_class_ele('height-100-cent', reciever.children[1]);
                    lib.remove_class_ele('object-fit-contain', reciever.children[1]);
                    lib.add_class_ele('height-200-px', reciever);
                    lib.add_class_ele('height-200-px', reciever.children[1]);
                    lib.add_class_ele('object-fit-cover', reciever.children[1]);
                    trigger.children[0].className = `fa fa-expand`;
                } else if (the_bool === false) {

                    lib.remove_class_ele('height-200-px', reciever);
                    lib.remove_class_ele('height-200-px', reciever.children[1]);
                    lib.remove_class_ele('object-fit-cover', reciever.children[1]);
                    lib.add_class_ele('object-fit-contain', reciever.children[1]);
                    lib.add_class_ele('height-100-cent', reciever);
                    lib.add_class_ele('height-100-cent', reciever.children[1]);
                    trigger.children[0].className = `fa fa-compress`;
                }

            };
            lib.detect_full_screen($(`img_unsaved_holder_${suffix}_${obj.info.g}`), $(`fullscreen_cover_profile_${suffix}_${obj.info.g}`), fullscreen_toggler_callback_cover_profile);
            lib.toggle_full_screen($(`fullscreen_cover_profile_${suffix}_${obj.info.g}`), $(`img_unsaved_holder_${suffix}_${obj.info.g}`), 'click');
        }, 100);
        return `
        
            <section>
        
        <section class="overflow-hidden">

                <section id="img_unsaved_holder_${suffix}_${obj.info.g}" class="overflow-hidden display-flex flex-column align-items-center justify-content-center height-100-cent">
        
                <section class="width-100-cent border-box display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
            
                    ${changer_cover}   
                    
                    <section class="flex-1"></section>
            
                    <section id="fullscreen_cover_profile_${suffix}_${obj.info.g}" class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2"><i class="fa fa-expand"></i></section>
        
                </section>
            
                    <img draggable="false" class='height-200-px width-100-cent object-fit-cover ${its_me_2}' style='filter:${funcs.add_main_effect_to_yall(obj.cover_styler)};background:${obj.info.cover_backgrund}; object-position:${funcs.get_cover_features_prof_displayer_position(obj.cover_styler)};' src="${funcs.addImage(obj.info.cover, 1300, 500, 60, 2)}"/>

                </section>
        
                <section class="display-flex flex-column align-items-center justify-content-center position-relative margin-top--75-px">${funcs.prof_pix_main_dumperr(obj, suffix)}</section>
        
        </section>
        
                <section class="display-flex align-items-center justify-content-center"><section class="padding-5-px padding-top-0-px width-100-cent">${funcs.top_profile_hangover(obj, suffix)}</section></section>
        
            </section>

        `;
    };
    funcs.get_profile_post_tagged_main = function (type, g, q, suffix, offset = 0, limit = 5) {

        $(`main-more_post_tag__profile_${suffix}__${g}`).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;
        funcs.send_get_me_something({suffix: suffix, g: g, q: q, main_type: type, limit: limit, offset: offset, category: 'profile', type: 'post times posted tagged', repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/profile_handler/my_tagged_post_times.php?geef=${g}&qeef=${q}&type=${type}&offset=${offset}&limit=${limit}`);
    };
    funcs.change_get_person_posted_tagged = function (e) {

        if (e.currentTarget.value === 'posted' || e.currentTarget.value === 'tagged') {

            $(`main_cont_post_tag__profile_${e.currentTarget.dataset.suffix}__${e.currentTarget.dataset.g}`).innerHTML = ``;
            funcs.get_profile_post_tagged_main(e.currentTarget.value, e.currentTarget.dataset.g, e.currentTarget.dataset.q, e.currentTarget.dataset.suffix);
        }

    };
    funcs.get_person_contact_main = function (type, b, suffix, trigger = 'profile', offset = 0, limit = 10) {

        $(`friends_holder_profile_${suffix}__${b}`).innerHTML = `<section class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;
        funcs.send_get_me_something({suffix: suffix, b: b, category_main: type, limit: limit, offset: offset, category: 'profile', type: 'relationship profile', trigger: trigger, repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/contact_info/contact_main_info_giver.php?&bike=${b}&category=${type}&offset=${offset}&limit=${limit}`);
    };
    funcs.holla_first_prof_info = function (obj) {
        let profile = obj.success.api_result.message;
        $(obj.recognize.container_id).dataset.fetched = true;
        let my_class_bio = ``;
        if (funcs.its_me(profile) === true) {

            my_class_bio = `my__bioo_ni`;
        }

        $(obj.recognize.container_id).innerHTML = `
        
            <section class="display-flex min-height-100-cent width-100-cent container border-box flex-column">
        
                <section class='z-index-21 position-fixed overflow-hidden overflow-y-scroll flex-column card justify-content-center display-flex display-none' data-noroute='true'>

                    <section class="width-100-cent border-box display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
        
                        <section class="flex-1"></section>
        
                        <section class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2" onclick="$('profile_card_hanger_${profile.info.g}_${obj.recognize.suffix}').innerHTML='';lib.toggle_class_ele('display-none', this.parentNode.parentNode);"><i class="fa fa-times"></i></section>

                    </section>
        
                    <section id='profile_card_hanger_${profile.info.g}_${obj.recognize.suffix}' class="height-100-cent with-100-cent display-flex justify-content-center align-items-center"></section>

                </section>
        
                <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px font-size-16px"><i draggable="false" class="far fa-user"></i>&nbsp;Profile</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.trigger_profile_main('${obj.recognize.container_id}');"><i class="fa fa-redo-alt"></i></section> </section>`)}</section>
            
                <section class="padding-5-px">${funcs.drop_profile_initials(profile, obj.recognize.suffix)}</section>
            
                <section class="width-100-cent">
        
        <!--display-flex flex-column-row justify-align-content-items-center max-width-400-500-px border-1px-solid border-right-none border-left-none -->
        
                    <section class="display-flex width-100-cent margin-bottom-right-5-px height-fit-content flex-column align-items-center flex-1 lighter">
       
                        <section data-suffix="${obj.recognize.suffix}" class="${my_class_bio} padding-5-px border-box width-100-cent border-1px-solid border-right-none border-left-none heavier"> ${funcs.top_profile_title(profile, obj.recognize.suffix)} </section>
        
                        <section id="friends_holder_profile_${obj.recognize.suffix}__${profile.info.b}" data-b="${profile.info.b}" data-suffix="${obj.recognize.suffix}" class="${my_class_bio} margin-top-5-px width-100-cent heavier"> </section>

                    <section class="width-100-cent margin-top-5-px border-1px-solid border-right-none border-left-none heavier">
        
                        <section class="font-size-16px display-flex align-items-center"><section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fab fa-itunes-note"></i></section><section class="font-weight-bold">Played music</section></section>
                        
                        <section class="">
        
                            <section id="list_switch_music_${profile.info.g}_${obj.recognize.suffix}_person_music"></section>
        
                            <section class="padding-5-px" id="list_switch_next_${profile.info.g}_${obj.recognize.suffix}_person_music"> </section>
        
                        </section>
        
                    </section>
        
                    </section>
        
                    <section class="display-flex width-100-cent flex-1 flex-column align-items-center lighter">
        
                        <section class="width-100-cent" data-g="${profile.info.g}" data-q="${profile.info.q}" data-suffix="${obj.recognize.suffix}" id="main_cont_post_tag__profile_${obj.recognize.suffix}__${profile.info.g}"> </section>
        
                        <section class="width-100-cent border-box padding-5-px padding-top-0-px padding-right-0-px padding-left-0-px" data-g="${profile.info.g}" data-q="${profile.info.q}" data-suffix="${obj.recognize.suffix}" id="main-more_post_tag__profile_${obj.recognize.suffix}__${profile.info.g}"> </section>

                    </section>
        
                </section>

            </section>
        
                    <section class="display-none">
        
                        <input data-q="${profile.info.q}" data-g="${profile.info.g}" data-suffix="${obj.recognize.suffix}" id="main_inp_post_tag_profile_${obj.recognize.suffix}__${profile.info.g}"/>
        
                    </section>

        `;


        lib.event_attach($(`main_inp_post_tag_profile_${obj.recognize.suffix}__${profile.info.g}`), 'change', funcs.change_get_person_posted_tagged, 1);

        funcs.trigger_change_tagged___posted('posted', profile.info.g, obj.recognize.suffix);

        funcs.get_person_contact_main('contact', profile.info.b, obj.recognize.suffix);

        funcs.get_person_music_llist(profile.info.g, profile.info.b, obj.recognize.suffix, 'played');

    };
    funcs.trigger_change_tagged___posted = function (value, g, suffix) {

        if ($(`main_inp_post_tag_profile_${suffix}__${g}`).value !== value) {

            $(`main_inp_post_tag_profile_${suffix}__${g}`).value = value;
            lib.host_event_execute_now('change', $(`main_inp_post_tag_profile_${suffix}__${g}`));
        }

    };

    funcs.start_adjust_my_profile_pix = function () {

        funcs.adjust_something_now(funcs.userinfo.logged_user.info.cover, 'cover');

    };


}();
