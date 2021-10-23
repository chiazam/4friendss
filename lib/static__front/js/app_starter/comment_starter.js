/* global lib, funcs */

!function () {

    funcs.start_comments = function (container_id) {
        if (funcs.search.hasOwnProperty('key') && funcs.search.key.length > 0) {

            if (funcs.search.key !== funcs.comment_key) {

                funcs.realest_start_comments(container_id);

            }

        } else {

            funcs.main_all40000004();

        }

    };

    funcs.realest_start_comments = function (container_id) {

            funcs.comment_key = funcs.search.key;

            let suffix = lib.switch_num;

            ++lib.switch_num;
            
            lib.add_class('width-100-cent', container_id);
            lib.add_class('min-height-100-cent', container_id);
            $(container_id).parentNode.style.background = `var(--liter-black-moder)`;
            lib.inc_html(`

<section class='overflow-hidden border-1px-solid border-right-none border-left-none width-100-cent height-fit-content display-flex flex-column'>
    
        <section>${funcs.call_headers_naver(`<section class="display-flex align-items-center justify-content-center"><section class="padding-5-px"><i draggable="false" class="fa-comment-alt far"></i>&nbsp;Gossips</section>  <section class="lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue" onclick="funcs.realest_start_comments('${container_id}');"><i class="fa fa-redo-alt"></i></section> </section>`)}</section>
    
    <section>
    
        <section onclick="funcs.get_comments_next_previous('${funcs.search.key}', false, true,false,'${suffix}');" id="comment_fetch_previous_${funcs.search.key}_${suffix}" class="hover-background-twitter color-fb-blue display-flex align-items-center cursor-pointer padding-5-px justify-content-center width-fit-content">

            <section>previous gossips &nbsp;</section>

                                <section>

                                    <i class="fa fa-angle-up"></i>

                                </section>

        </section>
    
        <section id="comment_holder_${funcs.search.key}_${suffix}" class="padding-5-px">

</section>
    
        <section onclick="funcs.get_comments_next_previous('${funcs.search.key}', true, true,false,'${suffix}');" id="comment_fetch_next_${funcs.search.key}_${suffix}" class="hover-background-twitter color-fb-blue display-flex align-items-center cursor-pointer padding-5-px justify-content-center width-fit-content">

                            <section>next gossips &nbsp;</section>

                            <section>

                                <i class="fa fa-angle-down"></i>

                            </section></section>

    </section>
    
    <section id='comment_holder_main_${funcs.search.key}_${suffix}' class="padding-5-px"></section>
    
    </section>

    `, container_id);

            lib.host_event_execute_now('click', $(`comment_fetch_next_${funcs.search.key}_${suffix}`));
        
    };

}();
