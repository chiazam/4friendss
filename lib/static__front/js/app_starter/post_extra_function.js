/* global funcs, lib, regex, api, device, name_company */

!function () {

    funcs.timeline_comment = {};

    funcs.comments_template_toggler = function (container_id, key, suffix, reply) {

        if ($(container_id).innerHTML === ``) {

            funcs.comments_template(container_id, key, suffix, reply);

        } else {

            if (reply === true) {

                lib.toggle_class_ele('display-none', $(container_id));

            } else if (reply === false) {

                lib.remove_class_ele('display-none', $(container_id));

            }

        }

    };

    funcs.edit_template_toggler = function (container_id, key, suffix, reply) {

        if ($(container_id).innerHTML === ``) {

            funcs.edit_template(container_id, key, suffix, reply);

        } else {

            $(container_id).innerHTML = ``;

        }

    };

    funcs.comments_template = function (container_id, hash, suffix, reply = false) {

        let true_class = "";

        let butt_text_xplain = `<i class="fa-arrow-up fa"></i> Post`;

        let placeholder_text_xplain = `Make a comment`;

        if (reply === true) {
            true_class = "margin-bottom-5-px";

            butt_text_xplain = `<i class="fa fa-reply"></i> Reply`;

            placeholder_text_xplain = `Make a reply`;
        }

        $(container_id).innerHTML = `<section class='display-flex overflow-hidden loggers-lock-inputs-holders-holders padding-5-px border-1px-solid border-radius-5px ${true_class}'>
        
                    <section>${funcs.round_profile_dumper(funcs.userinfo.logged_user)}</section>
            
                    <section class='padding-5-px padding-top-0-px padding-bottom-0-px flex-1 border-radius-5px'>

                        <section id='comment_box_ese_${suffix}_${hash}' placeholder="${placeholder_text_xplain}" textbox spellcheck="false" contenteditable="true" class='content-post-editor-smart-weep overflow-hidden border-box overflow-y-scroll width-100-cent'></section>
            
                        <section id='comment_box_ese_${suffix}_${hash}__suggest_holder' class='display-none overflow-hidden overflow-y-scroll max-height-300-px'></section>
        
                        <textarea data-suffix="${suffix}" data-hash="${hash}" id='comment_box_ese_${suffix}_${hash}_boxer' class='display-none'></textarea>
        
                    </section>
            
                    <section class="">

                        <button data-commentfacilityholder="${container_id}" onclick="funcs.upload_comment_reply(this,'${hash}','${suffix}',${reply});" id='comment_box_ese_${suffix}_${hash}_comment_butt' class="disabled padding-5-px border-none border-radius-2px hover-background-twitter hover-color-fb-blue cursor-pointer transparent">

                            ${butt_text_xplain} 

                        </button>

                    </section>
        
                </section>`;
        lib.event_attach($(`comment_box_ese_${suffix}_${hash}_boxer`), 'input', funcs.disable_comment_button_on_inp_empty, 1);
        lib.host_event_execute_now('input', $(`comment_box_ese_${suffix}_${hash}_boxer`));
        lib.event_attach($(`comment_box_ese_${suffix}_${hash}`), 'input', lib.empty_content_editable, 1);
        lib.event_attach($(`comment_box_ese_${suffix}_${hash}`), 'input', funcs.insert_contenteditable_to_textarea, 1);
        lib.event_attach($(`comment_box_ese_${suffix}_${hash}`), 'keyup', funcs.content_editable_syntax, 1);
        lib.event_attach($(`comment_box_ese_${suffix}_${hash}`), 'blur', function (e) {

            e.currentTarget.dataset.focus = false;
        }, 1);
        lib.event_attach($(`comment_box_ese_${suffix}_${hash}`), 'focus', function (e) {

            e.currentTarget.dataset.focus = true;
        }, 1);
    };
    funcs.upload_comment_reply = function (element, hash, suffix, reply = false) {

        if (lib.trim($(`comment_box_ese_${suffix}_${hash}_boxer`).value).length > 0) {

            element.innerHTML = lib.loader_dot;
            let onclicker = element.getAttribute('onclick');
            element.removeAttribute('onclick');
            $(`comment_box_ese_${suffix}_${hash}`).removeAttribute('contenteditable');
            funcs.send_get_me_something({suffix: suffix, key: hash, category: 'content things', type: 'comment adder', repeat: false, facility_holder: element.dataset.commentfacilityholder, textarea_id: `comment_box_ese_${suffix}_${hash}_boxer`, contenteditable_id: `comment_box_ese_${suffix}_${hash}`, reply: reply, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, key: hash, word: $(`comment_box_ese_${suffix}_${hash}_boxer`).value, device: device}, `${api}api/post_viewer/comment_adder_shanor.php`);
    }

    };
    funcs.disable_comment_button_on_inp_empty = function (e) {

        if (lib.trim(e.currentTarget.value).length === 0) {

            $(`comment_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_comment_butt`).setAttribute('disabled', true);
            $(`comment_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_comment_butt`).removeAttribute('style');
        } else if (lib.trim(e.currentTarget.value).length > 0) {

            $(`comment_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_comment_butt`).removeAttribute('disabled');
            $(`comment_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_comment_butt`).setAttribute('style', 'opacity:1;');
        }

    };

    funcs.comment_display_sample = function (obj, hash, suffix, container_id, top, reply = false) {

        let comment_template = ``;
        if (!obj.hasOwnProperty('none')) {

            lib._looper_challenge(obj, function (element) {

                if (!funcs.timeline_comment.hasOwnProperty(element.key_main)) {

                    funcs.timeline_comment[element.key_main] = element;
                }
                let reply_numer = ``;
                let more_prev_er = ``;
                if (reply === false && element.reply_num !== 0) {

                    reply_numer = (element.reply_num !== 0) ? (`${element.reply_num} replies`) : (``);
                    more_prev_er = `<section>
                
                    <section class="display-flex">

                        <a onclick="funcs.get_comments_next_previous('${element.key_main}', false, true,true,'${suffix}',false);" id="comment_fetch_previous_${element.key_main}_${suffix}" class="tagger_hasher width-fit-content hover-background-twitter color-fb-blue display-flex align-items-center"> 

                            <section>previous replies &nbsp;</section>

                            <section>

                                <i class="fa fa-angle-up"></i>

                            </section>

                        </a>
                
                    </section>
                
                    <section id="comment_holder_${element.key_main}_${suffix}" class="line-height-22-px"></section>
                
                    <section class="display-flex">

                        <a onclick="funcs.get_comments_next_previous('${element.key_main}', true, true,true,'${suffix}',false);" id="comment_fetch_next_${element.key_main}_${suffix}" class="tagger_hasher width-fit-content hover-background-twitter color-fb-blue display-flex align-items-center">

                        <section>next replies &nbsp;</section>

                        <section>

                            <i class="fa fa-angle-down"></i>

                        </section>

                    </a>
                
                    </section>
                    
                    </section>`;
                }

                let my_comment_elipsse = ``;
                if (element.person.info.g === funcs.userinfo.logged_user.info.g && element.person.info.q === funcs.userinfo.logged_user.info.q) {

                    my_comment_elipsse = `<section>
                
                                <section onclick="lib.toggle_class_ele('display-none', this.nextElementSibling)" class="display-flex align-items-center cursor-pointer icon-mager-xxx-small justify-content-center hover-background-twitter hover-color-fb-blue round-border"><i class="fa fa-ellipsis-h"></i></section>
                    
                    <section class="heavier position-absolute margin-left--30px friends-shadow-shadow border-radius-5px display-none">
                    
                        <!-- <section onclick="funcs.edit_template_toggler('edit_comment_ff_holder_${element.key_main}_${suffix}', '${element.key_main}', '${suffix}', ${reply});lib.toggle_class_ele('display-none', this.parentNode);" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-pencil-alt"></i> Edit </section> -->
                    
                        <section data-fullfacilityholder='full_comment_holderrrr_${element.key_main}_${suffix}' id="delete_comment_holderrrr_${element.key_main}_${suffix}" onclick="funcs.delete_comment_now(this, '${element.key_main}', '${suffix}', ${reply});" class="padding-5-px hover-background-twitter hover-color-fb-blue cursor-pointer"> <i class="fa fa-trash-alt"></i> Delete </section>

                    </section>
    
                            </section>`;
                }
                let commenter_size = false;
                let comment_padder_larger = `padding-left-40-px`;

                let reply_button = ``;
                
                if (reply === true) {

                    comment_padder_larger = `padding-left-30-px`;

                    commenter_size = true;
                    
                } else if (reply === false) {

                    reply_button = `<section>
                
                                <section onclick="funcs.comments_template_toggler('comment_adder_ff_holder_${element.key_main}_${suffix}', '${element.key_main}', '${suffix}',true);" class="display-flex align-items-center cursor-pointer icon-mager-xxx-small justify-content-center hover-background-twitter hover-color-fb-blue round-border"><i class="fa fa-reply"></i></section>

                        </section>`;
                }

                comment_template += `<section data-comment_id="${element.id}" id='full_comment_holderrrr_${element.key_main}_${suffix}' class="padding-5-px border-1px-solid margin-bottom-5-px border-bottom-none border-right-none border-top-none border-radius-10px">

                    <section class="display-flex"> ${funcs.round_profile_dumper(element.person, commenter_size, false, 1)} 
                
                        <section class="display-flex flex-1 margin-left-5px">
                
                            <section class="flex-1 display-flex flex-column justify-content-center">
                    
                            <section>${funcs.text_profile_dumper(element.person, false, true, 'font-weight-bold')}</section>

                            <section>${funcs.display_hashtags_tags(element.hash_tags, element.mentions)}</section>

                                 <section class="font-size-16px padding-5-px margin-top-5-px border-radius-10px width-fit-content line-height-22-px" id="comment_word_holder_main_${element.key_main}_${suffix}">${regex.hash__tag_replacer(element.word, true)}</section>   
                                 
                                 <section>${funcs.sentiment_analysis_templater(element.word_analysis)}</section>
                
                                 <section class="line-height-22-px display-flex">${reply_numer} ${element.date}, ${name_company} ${element.device}</section>

                            </section>
                    
                                ${reply_button} 
                
                                ${my_comment_elipsse} 

                        </section>

                    </section>
                    
                    <section class="${comment_padder_larger}">
                
                    ${more_prev_er} 
                    
                                <section id="edit_comment_ff_holder_${element.key_main}_${suffix}"></section>                    
                    
                    <section id="comment_adder_ff_holder_${element.key_main}_${suffix}"></section>

                    </section>
                
                </section>`;
            });
        }

        let position_spot = `afterbegin`;
        if (top === true) {

            position_spot = `beforeend`;
        }

        funcs.adj_html(container_id, position_spot, comment_template);
    };

    funcs.comment_display_num = function (obj, hash, suffix) {

        let ret_comment_info = ``;
        if (obj.comment_num !== 0) {

            ret_comment_info += `<a class="display-flex align-items-center hover-background-twitter hover-color-fb-blue cursor-pointer"> 

                <section>${obj.comment_num}</section>
            
                    &nbsp;

                <section>comments</section>

            </a>`;
        }

        return ret_comment_info;
    };
    funcs.react_list = ['love', 'like', 'rate', 'dislike'];
    funcs.react_list_differ_class = {
        love: `color-google-red`,
        like: `color-fb-blue`,
        rate: `color-google-yellow`,
        dislike: `color-unique-blue`,
    };
    funcs.react_list_natural_class = {
        love: `fa-heart far font-size-18px`,
        like: `fa-thumbs-up far font-size-18px`,
        rate: `fa-star far font-size-18px`,
        dislike: `fa-thumbs-down far font-size-18px`,
    };
    funcs.num_react_shower = function (obj, hash, suffix) {

        lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`)[lib.element_array_index(funcs.react_list, 'love')].children[1].innerHTML = (obj.love !== 0) ? (obj.love) : ('');
        lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`)[lib.element_array_index(funcs.react_list, 'like')].children[1].innerHTML = (obj.like !== 0) ? (obj.like) : ('');
        lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`)[lib.element_array_index(funcs.react_list, 'rate')].children[1].innerHTML = (obj.rate !== 0) ? (obj.rate) : ('');
        lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`)[lib.element_array_index(funcs.react_list, 'dislike')].children[1].innerHTML = (obj.dislike !== 0) ? (obj.dislike) : ('');
    };
    funcs.my_react_shower = function (obj, hash, suffix) {

        lib._looper_challenge(lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`), function (element, q) {

            lib.remove_class_ele(funcs.react_list_differ_class[funcs.react_list[q]], element);
            lib.remove_class_ele(`fa`, element.children[0].children[0]);
            lib.add_class_ele(`far`, element.children[0].children[0]);
        });
        if (obj.did_i_react.hasOwnProperty('yes')) {

            if (lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`)[lib.element_array_index(funcs.react_list, obj.did_i_react.yes)] !== undefined) {

                let react_button = lib.query_selector_all(`.react-butt_wimper-${hash}-${suffix}`)[lib.element_array_index(funcs.react_list, obj.did_i_react.yes)];
                lib.add_class_ele(funcs.react_list_differ_class[obj.did_i_react.yes], react_button);
                lib.remove_class_ele(`far`, react_button.children[0].children[0]);
                lib.add_class_ele(`fa`, react_button.children[0].children[0]);
            }

        }

    };
    funcs.text_tag_displayer = function (tagged_list, hash, suffix, text = false) {

        let text_ret = ``;
        if (tagged_list.length > 0) {

            text_ret += `and&nbsp;${funcs.display_preview_persons(tagged_list, 2, text)}`;
            if (tagged_list.length > 2) {

                text_ret += `&nbsp;<a onclick="funcs.show_tagged_people('${hash}','${suffix}');" class="hover-background-twitter color-fb-blue height-fit-content">others</a>`;
            }

        }

        return text_ret;
    };

    funcs.display_preview_viewers = function (obj, hash, suffix, text = true) {

        let text_ret = `<section>`;

        if (!obj.views_persons.hasOwnProperty('none')) {

            text_ret += `<section class="border-1px-solid border-radius-5px margin-bottom-5-px">
            
            <section class="padding-5-px font-weight-bold"> People who saw this </section>`;

            let main_person = ``;
            
            main_person += `<section class="display-flex padding-5-px">`;

            main_person += funcs.display_preview_persons(obj.views_persons, 5, text);

            if (obj.views_persons > 5) {

                main_person += `<section class="margin-left-5px hover-background-twitter color-fb-blue">others</sections>`;
            }

            main_person += `</section>`;
            
            text_ret += ` ${funcs.scroll_amber_wawerteer_fdtg(main_person, true, 'smaller_scroll_butt')} </section>`;

        }
        return text_ret += `</section>`;
    };

    funcs.display_preview_reacters = function (obj, hash, suffix, text = true) {

        let text_ret = `<section>`;

        if (!obj.react_tip_people.hasOwnProperty('none')) {

            text_ret += `<section class="border-1px-solid border-radius-5px">
            
            <section class="padding-5-px font-weight-bold"> People who reacted </section>`;

            let main_person=``;
            
            main_person+=`<section class="display-flex padding-5-px">`;

            let array_persons = [];

            lib._looper_challenge(obj.react_tip_people, function (element, q) {

                array_persons.push(element.person);
            });
            main_person += funcs.display_preview_persons(array_persons, 5, text);
            if (obj.react_tip_people.length > 5) {

                main_person += `<section class="margin-left-5px hover-background-twitter color-fb-blue">others</sections>`;
            }

            main_person += `</section>`;

            text_ret += ` ${funcs.scroll_amber_wawerteer_fdtg(main_person, true, 'smaller_scroll_butt')} </section>`;
        }


        return text_ret += `</section>`;
    };
    funcs.display_preview_persons = function (array_persons, num_needed, text = true) {

        let text_ret = ``;
        
        if (!array_persons.hasOwnProperty('none')) {

            text_ret += `<section class="display-flex">`;
        
        lib._looper_challenge(lib.shuffleArray(array_persons), function (element, q) {

            if (q < num_needed) {

                if (text === false) {

                    text_ret += `<section class="margin-right-5px">${funcs.round_profile_dumper(element, true, true)}</section>`;
                } else {
                    text_ret += `<section class="margin-right-5px">${funcs.text_profile_dumper(element)}</section>&nbsp;`;
                }
            }

        });

        text_ret += `</section>`;
            
            
        }
        return text_ret;
    };

    funcs.get_comments_next_previous = function (key, top, stream, reply, suffix, comment_enable = true, limit = 3) {

        let offset = "";
        if ($(`comment_holder_${key}_${suffix}`).childElementCount === 0) {

            offset = 0;
        } else {

            if (top === true) {

                offset = $(`comment_holder_${key}_${suffix}`).lastElementChild.dataset.comment_id;
            } else if (top === false) {

                offset = $(`comment_holder_${key}_${suffix}`).firstElementChild.dataset.comment_id;
            }

        }

        if (top === false) {

            $(`comment_fetch_previous_${key}_${suffix}`).children[1].children[0].className = `fa fa-spinner animate-spin`;
        } else if (top === true) {

            $(`comment_fetch_next_${key}_${suffix}`).children[1].children[0].className = `fa fa-spinner animate-spin`;
        }

        let prev_onclicker = $(`comment_fetch_previous_${key}_${suffix}`).getAttribute('onclick');
        let next_onclicker = $(`comment_fetch_next_${key}_${suffix}`).getAttribute('onclick');
        $(`comment_fetch_previous_${key}_${suffix}`).removeAttribute('onclick');
        $(`comment_fetch_next_${key}_${suffix}`).removeAttribute('onclick');
        funcs.send_get_me_something({reply: reply, suffix: suffix, stream: stream, top: top, category: 'content things', type: 'comment getter', repeat: false, next_id: `comment_fetch_next_${key}_${suffix}`, prev_id: `comment_fetch_previous_${key}_${suffix}`, container_id: `comment_holder_${key}_${suffix}`, 'comment_enable': comment_enable, prev_onclick: prev_onclicker, next_onclick: next_onclicker, hash: key, offset: offset}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/post_viewer/comment_releaser.php?top=${top}&offset=${offset}&limit=${limit}&key=${key}&stream=${stream}`);
    };
    funcs.react_to_pictures = function (element, reaction, key, suffix) {

        element.children[0].children[0].className = "fa fa-spinner animate-spin";
        let love_onclicker = $(`react-butt_wimper-${key}-${suffix}-love`).getAttribute('onclick');
        let like_onclicker = $(`react-butt_wimper-${key}-${suffix}-like`).getAttribute('onclick');
        let rate_onclicker = $(`react-butt_wimper-${key}-${suffix}-rate`).getAttribute('onclick');
        let dislike_onclicker = $(`react-butt_wimper-${key}-${suffix}-dislike`).getAttribute('onclick');
        $(`react-butt_wimper-${key}-${suffix}-love`).removeAttribute('onclick');
        $(`react-butt_wimper-${key}-${suffix}-like`).removeAttribute('onclick');
        $(`react-butt_wimper-${key}-${suffix}-rate`).removeAttribute('onclick');
        $(`react-butt_wimper-${key}-${suffix}-dislike`).removeAttribute('onclick');
        funcs.send_get_me_something({suffix: suffix, hash: key, category: 'content things', type: 'react adder', repeat: false, trigger_id: element.id, react: reaction, love_onclick: love_onclicker, like_onclick: like_onclicker, rate_onclick: rate_onclicker, dislike_onclick: dislike_onclicker}, {'4friendss_user': funcs.userinfo.login_token, key__: key, react: reaction, device: device}, `${api}api/post_viewer/reactpostadder.php`);
    };

    funcs.delete_comment_now = function (element, hash, suffix, reply) {

        element.innerHTML = `<section class="text-align-center">${lib.loader_dot}</section>`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({suffix: suffix, key: hash, category: 'content things', type: 'comment deleter', repeat: false, facility_holder: element.dataset.fullfacilityholder, reply: reply, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, key: hash}, `${api}api/post_viewer/comment_deleter.php`);

    };

    funcs.start_tie_process = function (element, cate_post, hash, suffix) {

        let formal_html = element.innerHTML;

        element.innerHTML = `<section class="text-align-center">${lib.loader_dot}</section>`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({suffix: suffix, key: hash, category: 'content things', type: 'tie adder remover', repeat: false, cate_post: cate_post, formal_html: formal_html, facility_holder: element.dataset.fullfacilityholder, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, tie_key: hash, cate_post: cate_post}, `${api}api/timeline_gen/add_tie.php`);

    };

    funcs.__host_edit_content_ooo = function (element, hash, suffix) {

        element.innerHTML = `<section class="text-align-center">${lib.loader_dot}</section>`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({suffix: suffix, key: hash, category: 'content things', type: 'post editor', repeat: false, facility_holder: element.dataset.containerfacilityholder, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, key: hash}, `${api}api/post_viewer/edit_post_.php`);


    };

    funcs.__host_edit_delete_ooo = function (element, hash, suffix) {

        element.innerHTML = `<section class="text-align-center">${lib.loader_dot}</section>`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({suffix: suffix, key: hash, category: 'content things', type: 'post delete', repeat: false, facility_holder: element.dataset.containerfacilityholder, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, key: hash}, `${api}api/post_viewer/delete_post.php`);


    };

    funcs.edit_comment_upload = function (element, hash, suffix, reply) {

        if (lib.trim($(`edit_box_ese_${suffix}_${hash}_boxer`).value).length > 0) {

            element.innerHTML = lib.loader_dot;

            let onclicker = element.getAttribute('onclick');

            element.removeAttribute('onclick');

            lib.add_class_ele('display-none', element.parentNode.nextElementSibling);

            $(`edit_box_ese_${suffix}_${hash}`).removeAttribute('contenteditable');

            funcs.send_get_me_something({suffix: suffix, key: hash, category: 'content things', type: 'comment editor', repeat: false, final_display_id: `comment_word_holder_main_${hash}_${suffix}`, facility_holder: element.dataset.editfacilityholder, textarea_id: `edit_box_ese_${suffix}_${hash}_boxer`, contenteditable_id: `edit_box_ese_${suffix}_${hash}`, reply: reply, onclick: onclicker, submit_butt_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, key: hash, word: $(`edit_box_ese_${suffix}_${hash}_boxer`).value}, `${api}api/post_viewer/comment_editor.php`);

        }

    };

    funcs.edit_template = function (container_id, hash, suffix, reply = false) {

        let true_placeholder = "comment";

        if (reply === true) {
            true_placeholder = "reply";
        }

        $(container_id).innerHTML = `<section class='display-flex overflow-hidden loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none margin-bottom-5-px'>
            
                    <section class='padding-5-px padding-top-0-px padding-bottom-0-px flex-1'>

                        <section id='edit_box_ese_${suffix}_${hash}' placeholder="Update this ${true_placeholder}" textbox spellcheck="false" contenteditable="true" class='content-post-editor-smart-weep padding-5-px padding-bottom-0-px overflow-hidden border-box overflow-y-scroll width-100-cent'></section>
            
                        <section id='edit_box_ese_${suffix}_${hash}__suggest_holder' class='display-none overflow-hidden overflow-y-scroll max-height-300-px'></section>
        
                        <textarea data-suffix="${suffix}" data-hash="${hash}" id='edit_box_ese_${suffix}_${hash}_boxer' class='display-none'></textarea>
        
                    </section>
            
                    <section class="padding-5-px padding-bottom-0-px padding-right-0-px padding-left-0-px">

                        <button data-editfacilityholder="${container_id}" onclick="funcs.edit_comment_upload(this,'${hash}','${suffix}',${reply});" id='edit_box_ese_${suffix}_${hash}_edit_butt' class="disabled padding-5-px border-none border-radius-2px hover-background-twitter hover-color-fb-blue cursor-pointer transparent">

                            <i class="fa-arrow-up fa"></i> Update

                        </button>

                    </section>
        
                    <section class="padding-5-px padding-bottom-0-px padding-right-0-px padding-left-0-px">
        
                        <section onclick="funcs.edit_template_toggler('${container_id}', '${hash}', '${suffix}', '${reply}');" class="display-flex align-items-center cursor-pointer icon-mager-xxx-small justify-content-center hover-background-twitter hover-color-fb-blue round-border">

                            <i class="fa fa-times"></i>

                        </section>
        
                    <section>

                </section>`;
        lib.event_attach($(`edit_box_ese_${suffix}_${hash}_boxer`), 'input', funcs.disable_edit_button_on_inp_empty, 1);

        lib.event_attach($(`edit_box_ese_${suffix}_${hash}`), 'input', lib.empty_content_editable, 1);

        lib.event_attach($(`edit_box_ese_${suffix}_${hash}`), 'input', funcs.insert_contenteditable_to_textarea, 1);

        lib.event_attach($(`edit_box_ese_${suffix}_${hash}`), 'keyup', funcs.content_editable_syntax, 1);

        lib.event_attach($(`edit_box_ese_${suffix}_${hash}`), 'blur', function (e) {

            e.currentTarget.dataset.focus = false;
        }, 1);

        lib.event_attach($(`edit_box_ese_${suffix}_${hash}`), 'focus', function (e) {

            e.currentTarget.dataset.focus = true;
        }, 1);

        $(`edit_box_ese_${suffix}_${hash}`).innerText = funcs.timeline_comment[hash].word;

        (new VanillaCaret($(`edit_box_ese_${suffix}_${hash}`))).setPos(funcs.timeline_comment[hash].word.length);

        lib.host_event_execute_now('input', $(`edit_box_ese_${suffix}_${hash}`));
        lib.host_event_execute_now('keyup', $(`edit_box_ese_${suffix}_${hash}`));

    };

    funcs.disable_edit_button_on_inp_empty = function (e) {

        if (lib.trim(e.currentTarget.value).length === 0) {

            $(`edit_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_edit_butt`).setAttribute('disabled', true);
            $(`edit_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_edit_butt`).removeAttribute('style');
        } else if (lib.trim(e.currentTarget.value).length > 0) {

            $(`edit_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_edit_butt`).removeAttribute('disabled');
            $(`edit_box_ese_${e.currentTarget.dataset.suffix}_${e.currentTarget.dataset.hash}_edit_butt`).setAttribute('style', 'opacity:1;');
        }

    };

    funcs.save_unsaved_post = function (element, key, category, suffix, save) {

        element.innerHTML = `<section class="text-align-center">${lib.loader_dot}</section>`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        let url = `${api}api/views/save.php`;

        if (save === false) {

            url = `${api}api/views/unsave.php`;

        }

        funcs.send_get_me_something({suffix: suffix, save: save, key: key, category: 'content things', type: 'save unsave post', repeat: false, onclick: onclicker, trigger_id: element.id, cate_post: category}, {'4friendss_user': funcs.userinfo.login_token, key: key, category: category}, url);


    };

}();
