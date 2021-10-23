/* global funcs, lib */

!function () {

    funcs.template_back_music_list = function (obj) {

        let templater = ``;
        if (!obj.success.api_result.message.hasOwnProperty('none')) {

            lib._looper_challenge(obj.success.api_result.message, function (element) {

                templater += `

                <section class="display-flex padding-5-px">

                    <section class="flex-1">${funcs.list_related_songs(element, false)}</section>
            
                    <section class="display-flex padding-5-px">${funcs.selector_butt_hoop(element, 'backgound music', obj.recognize.suffix, {big: obj.recognize.big})}</section>

                </section>

            `;
            });
        } else {

            templater = ` <section class="padding-5-px text-align-center font-weight-bold">No such music found</section>`;
        }

        funcs.inc_html(templater, $(obj.recognize.display_id));
    };

}();
