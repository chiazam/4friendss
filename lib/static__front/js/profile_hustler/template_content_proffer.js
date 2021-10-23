/* global funcs */

!function () {

    funcs.display_my_posted_tagged_returns = function (obj) {

        funcs.template_main_times(`main_cont_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`, obj.success.api_result.message.times, obj.recognize.suffix);

        funcs.template_post(`main_cont_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`, obj.success.api_result.message.post, obj.recognize.suffix);

        funcs.timeline_blog_display(`main_cont_post_tag__profile_${obj.recognize.suffix}__${obj.recognize.g}`, obj.success.api_result.message.blog, obj.recognize.suffix);

    };

    funcs.bookmark_main__display = function (obj) {

        funcs.template_main_times(obj.recognize.container_id, obj.success.api_result.message.times, obj.recognize.suffix,true);

        funcs.template_post(obj.recognize.container_id, obj.success.api_result.message.post, obj.recognize.suffix);

        funcs.timeline_blog_display(obj.recognize.container_id, obj.success.api_result.message.blog, obj.recognize.suffix);

    };

    funcs.profile_arrange_friends = function (obj) {

        if (!obj.success.api_result.message.persons.hasOwnProperty('none')) {

            $(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`).innerHTML = `
            
                <section id="friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}_1_son" class="font-size-16px display-flex align-items-center">

                    <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fa fa-user-friends"></i></section>
            
                    <section class="font-weight-bold">Contacts</section>

                </section>
            
                <section id="friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}_2_son"></section>

            `;

            funcs.show_persons_yet(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`, obj.success.api_result.message.persons, obj.recognize.suffix, true);
        } else {

            $(`friends_holder_profile_${obj.recognize.suffix}__${obj.recognize.b}`).innerHTML = ``;

        }

    };

}();
