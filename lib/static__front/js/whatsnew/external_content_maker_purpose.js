!function () {
    !function () {

        funcs.continue_contant_maker = function (obj) {
    
            if (obj.recognize.type === 'text') {
                funcs.set_word_innerText(obj);
            } else if (obj.recognize.type === 'remove files') {
                funcs.remove_files(obj);
            } else if (obj.recognize.type === 'tag') {
                funcs.set_tag_innerText(obj);
            } else if (obj.recognize.type === 'media uploaded') {
                funcs.set_media_innerText(obj);
            } else if (obj.recognize.type === "remove tag") {
                funcs.tag_remover_act(obj);
            } else if (obj.recognize.type === "tag search") {
                funcs.tag_searcher_act(obj);
            } else if (obj.recognize.type === 'photo' || obj.recognize.type === 'audio' || obj.recognize.type === 'video') {
                funcs.media_act_content_maker(obj);
            } else if (obj.recognize.type === 'privacy') {
                funcs.set_privacy_innerText(obj);
            } else if (obj.recognize.type === 'autocomplete username') {
                funcs.inp_auto_username_innerText(obj);
            } else if (obj.recognize.type === 'draft') {
                funcs.draft_actor(obj);
            } else if (obj.recognize.type === 'publish') {
                funcs.publish_actor(obj);
            } else if (obj.recognize.type === 'file upload') {
                funcs.file_upload_handle(obj);
            } else if (obj.recognize.type === 'new show') {
                funcs.new_show_handle(obj);
            } else if (obj.recognize.type === 'view show') {
                funcs.view_show_handle(obj);
            }
    
        };
    }();
 
}();

!function () {

    
    funcs.inp_auto_username_innerText = function (obj) {

        if ($(obj.recognize.display_id) !== null && $(obj.recognize.input_id) !== null && $(obj.recognize.input_id).children[obj.recognize.input_child_index] !== null) {

            if (obj.hasOwnProperty('failed')) {

                funcs.all_catches_(obj.failed);
                funcs.inc_html(funcs.error_reviver__(`funcs.reenroll_ajax_no_repeat(JSON.parse(\`${JSON.stringify({recognize: obj.recognize, form: obj.form, url: obj.url})}\`));funcs.make_spinner_ajax(this.parentNode.id, true, funcs.loader_svg__lof);`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.display_id));
                lib.remove_class('display-none', obj.recognize.display_id);
                lib.add_class('display-block', obj.recognize.display_id);
            } else if (obj.hasOwnProperty('success')) {

                funcs.every_observer_ajax(obj.success);
                if (obj.success.api_result.hasOwnProperty('permission')) {

                    funcs.inc_html(funcs.error_reviver__(`funcs.reenroll_ajax_no_repeat(JSON.parse(\`${JSON.stringify({recognize: obj.recognize, form: obj.form, url: obj.url})}\`));funcs.make_spinner_ajax(this.parentNode.id, true, funcs.loader_svg__lof);`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.display_id));
                    lib.remove_class('display-none', obj.recognize.display_id);
                    lib.add_class('display-block', obj.recognize.display_id);
                } else {

                    funcs.inp_auto_username_text(obj);
                }

            }

        }

    };
    
    funcs.inp_auto_username_text = function (obj) {

        if ($(obj.recognize.display_id) !== null && $(obj.recognize.input_id) !== null && $(obj.recognize.input_id).children[obj.recognize.input_child_index] !== null) {

            if (obj.success.api_result.message.people.hasOwnProperty('none')) {

                lib.remove_class('display-block', obj.recognize.display_id);
                lib.add_class('display-none', obj.recognize.display_id);
            } else {
                lib.remove_class('display-none', obj.recognize.display_id);
                lib.add_class('display-block', obj.recognize.display_id);
                let people_holder = ``;
                lib._looper_challenge(obj.success.api_result.message.people, function (element) {

                    people_holder += `<section onclick="funcs.insert_auto_complete_text('${element.info.username}',$('${obj.recognize.input_id}'),${obj.recognize.input_child_index},this.parentNode);" class="flex-1 border-1px-solid border-bottom-none border-left-none border-right-none cursor-pointer hover-background-twitter display-flex padding-5-px">${funcs.display_capter_namer_random(element, true, true)}</section>`;
                });
                $(obj.recognize.display_id).innerHTML = people_holder;
                $(obj.recognize.display_id).dataset.searched = obj.recognize.word;
            }

        }

    };

    
    funcs.insert_auto_complete_text = function (text, input, child_index, card_holder) {

        input.children[child_index].innerText = text;
        lib.host_event_execute_now('input', input);
        lib.host_event_execute_now('keyup', input);
        var caret = new VanillaCaret(input.children[child_index]);
        caret.setPos(input.children[child_index].innerText.length);
        lib.remove_class('display-block', card_holder.id);
        lib.add_class('display-none', card_holder.id);
        card_holder.dataset.searched = '';
    };
    
}();