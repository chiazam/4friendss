/* global funcs, lib, api */

!function () {

    funcs.times_owner_hunted = function (obj) {
        lib.add_class('width-100-cent', obj.recognize.container_id);
        $(obj.recognize.container_id).parentNode.style.background = ``;
        lib.remove_class('height-fit-content', obj.recognize.container_id);

        funcs.times_by_g = funcs.search.by_g;

        let person = obj.success.api_result.message.owner_times;

        lib.inc_html(`
         
         <section class='overflow-hidden border-radius-5px border-1px-solid width-100-cent height-fit-content border-right-none border-left-none border-box display-flex flex-column margin-auto'>
         
               <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px"><i draggable="false" class="fa fa-clock"></i>&nbsp;${person.info.full}'s times</section> <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.start_times_by_g('${obj.recognize.container_id}', '${obj.recognize.by_g}', '${obj.recognize.suffix}');"><i class="fa fa-redo-alt"></i></section></section>`)}</section>
        
            <section class="display-flex flex-column">
        
                <section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none"> ${funcs.display_capter_namer_random(person, false, true)} </section>
                
        
                <section class="lighter">
         
                    ${funcs.scroll_amber_wawerteer_fdtg(`<section class="display-flex padding-5-px flex-1" id="times_lister_${obj.recognize.by_g}_${obj.recognize.suffix}"> </section>     <section id="times_lister_${obj.recognize.by_g}_${obj.recognize.suffix}___" class="min-width-150-px max-width-150-px class-suggested-persons-margin height-fit-content border-radius-10px"></section>`, true, 'z-index-2', 20)} 
        
                </section>
        
            </section>
        
         </section> 
         
         `, obj.recognize.container_id);

        funcs.handle_links();

        funcs.list_times_roller(`times_lister_${obj.recognize.by_g}_${obj.recognize.suffix}`, obj.recognize.by_g, obj.recognize.suffix);

    };

    funcs.times_list_hunted = function (obj) {

        if (!obj.hasOwnProperty('none')) {

            let template = ``;
            lib._looper_challenge(obj.success.api_result.message.times, function (element) {

                template += funcs.templattte_times(element, obj.recognize.suffix, false);

            });

            funcs.adj_html_element($(obj.recognize.container_id), 'beforeend', template);

            funcs.inc_html(funcs.error_reviver__(`funcs.list_times_roller("${obj.recognize.container_id}","${obj.recognize.by_g}", "${obj.recognize.suffix}", "${obj.recognize.limit}","${(lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset}")`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.container_more));

        }

    };


    funcs.list_times_roller = function (container_id, by_g, suffix, limit = 6, offset = 0) {

        $(`times_lister_${by_g}_${suffix}___`).innerHTML = `<section style="background:transparent;" class="display-flex width-100-cent height-100-cent align-items-center justify-content-center">${funcs.loader_svg__lof}</section> `;
        funcs.send_get_me_something({suffix: suffix, category: 'content things', type: 'times list', repeat: false, container_id: container_id,container_more:`times_lister_${by_g}_${suffix}___`, limit: limit, offset: offset, by_g: by_g}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/times_popper/times_lister.php?by_g=${by_g}&limit=${limit}&offset=${offset}`);

    };

}();
