/* global funcs, lib */

!function () {
    funcs.content_sharer_gulp = function (obj) {

        if (obj.recognize.type === 'content post') {

            funcs.show_content_post(obj);

        } else if (obj.recognize.type === 'content times') {

            funcs.show_content_times(obj);

        } else if (obj.recognize.type === 'content blog') {

            funcs.show_content_blog(obj);

        }

    };

    funcs.show_content_post = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);

            funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_post_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.retry_id));

            $(`hold-content-post-${obj.recognize.suffix}`).remove();

        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_music_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.retry_id));

                $(`hold-content-post-${obj.recognize.suffix}`).remove();

            } else {

                if (!obj.success.api_result.message.post.hasOwnProperty('none')) {

                    lib.inc_html('<section class="font-size-16px padding-5-px font-weight-bold"><i class="fa fa-globe"></i> Look at this posts</section>', $(`hold-content-post-${obj.recognize.suffix}`).children[0].id);

                    funcs.template_post($(`hold-content-post-${obj.recognize.suffix}`).children[1].id, obj.success.api_result.message.post, obj.recognize.suffix);

                    funcs.main_starter.aggregate_post_dropper = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                } else {

                    $(`hold-content-post-${obj.recognize.suffix}`).remove();
                }

                funcs.inc_html(``, $(obj.recognize.retry_id));

                funcs.handle_links();

                funcs.main_starter.call_suggest_jury(obj.recognize.display_id, obj.recognize.retry_id);

            }

        }

    };

    funcs.show_content_times = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);

            funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_times_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.retry_id));

            $(`hold-content-times-${obj.recognize.suffix}`).remove();

        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_times_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.retry_id));

                $(`hold-content-times-${obj.recognize.suffix}`).remove();

            } else {

                if (!obj.success.api_result.message.people.hasOwnProperty('none')) {

                    lib.inc_html('<section class="font-size-16px padding-5-px font-weight-bold"><i class="fa fa-clock"></i> People with latest times</section>', $(`hold-content-times-${obj.recognize.suffix}`).children[0].id);

                    funcs.template_times($(`hold-content-times-${obj.recognize.suffix}`).children[1].id, obj.success.api_result.message.people, obj.recognize.suffix);

                    funcs.main_starter.aggregate_times_dropper = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                } else {
                    $(`hold-content-times-${obj.recognize.suffix}`).remove();
                }

                funcs.inc_html(``, $(obj.recognize.retry_id));

                funcs.handle_links();

                funcs.main_starter.call_music_jury(obj.recognize.display_id, obj.recognize.retry_id);

            }

        }

    };


    funcs.show_content_blog = function (obj) {

        if (obj.hasOwnProperty('failed')) {

            funcs.all_catches_(obj.failed);

            funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_blog_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops bad network or resource not found, click to retry</section>`), $(obj.recognize.retry_id));

            $(`hold-content-blog-${obj.recognize.suffix}`).remove();

        } else if (obj.hasOwnProperty('success')) {

            funcs.every_observer_ajax(obj.success);

            if (obj.success.api_result.hasOwnProperty('permission')) {

                funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_blog_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-redo'></i> &nbsp; <section>Oops wrong credentials or unrevalidate login, click to retry</section>`), $(obj.recognize.retry_id));

                $(`hold-content-blog-${obj.recognize.suffix}`).remove();

            } else {

                if (!obj.success.api_result.message.blog.hasOwnProperty('none')) {

                    lib.inc_html('<section class="font-size-16px padding-5-px font-weight-bold"><i class="fa fa-book-open"></i> Here\'s some blog diaries</section>', $(`hold-content-blog-${obj.recognize.suffix}`).children[0].id);

                    funcs.template_blog($(`hold-content-blog-${obj.recognize.suffix}`).children[1].id, obj.success.api_result.message.blog, obj.recognize.suffix);

                    funcs.main_starter.aggregate_blog_dropper = (lib.next_offset(obj.recognize.offset, obj.recognize.limit)).offset;

                } else {
                    $(`hold-content-blog-${obj.recognize.suffix}`).remove();
                }

                funcs.handle_links();

                funcs.inc_html(funcs.error_reviver__(`funcs.main_starter.call_times_jury("${obj.recognize.display_id}", "${obj.recognize.retry_id}");`, `<i class='fa fa-angle-down'></i> &nbsp; <section>See more contents</section>`), $(obj.recognize.retry_id));

            }

        }


    };

}();
