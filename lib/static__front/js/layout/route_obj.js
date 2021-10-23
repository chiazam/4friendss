/* global funcs, lib, name_company */

!function () {

    funcs.route_obj = {

        activites: function () {

            funcs.start_activities('activites_holder');

            lib.remove_class('display-none', $(`activites_holder`).parentNode.id);
            lib.add_class('display-flex', $(`activites_holder`).parentNode.id);

        },

        'whats new?': function () {

            if (funcs.route_whats_new_before !== true) {
                funcs.route_whats_new_before = true;
                funcs.start_post('whatsnewholder');
            }

            lib.remove_class('display-none', $(`whatsnewholder`).parentNode.id);
            lib.add_class('display-flex', $(`whatsnewholder`).parentNode.id);
        },

        message: function () {
            if (funcs.route_message_before !== true) {
                funcs.route_message_before = true;
                funcs.start_message('whatsnewholder');
            }

            lib.remove_class('display-none', $(`messageholder`).parentNode.id);
            lib.add_class('display-flex', $(`messageholder`).parentNode.id);
        },

        notification: function () {

            if (funcs.route_notification !== true) {

                funcs.route_notification = true;

                funcs.trigger_notification(`notification_holder`);

            }

            lib.remove_class('display-none', $(`notification_holder`).parentNode.id);
            lib.add_class('display-flex', $(`notification_holder`).parentNode.id);

        },
        search: function () {

            if (funcs.route_search !== true) {

                funcs.route_search = true;
                funcs.trigger_search(`search_holder`);

            }

            lib.remove_class('display-none', $(`search_holder`).parentNode.id);
            lib.add_class('display-flex', $(`search_holder`).parentNode.id);

        },

        music: function () {

            funcs.validate_my_music_starter('my_music_holder');
            lib.remove_class('display-none', $(`my_music_holder`).parentNode.id);
            lib.add_class('display-flex', $(`my_music_holder`).parentNode.id);

        },
        profile: function () {
            funcs.trigger_profile(`profile__holder`);
            lib.remove_class('display-none', $(`profile__holder`).parentNode.id);
            lib.add_class('display-flex', $(`profile__holder`).parentNode.id);
        },

        bookmarks: function () {

            if (funcs.route_bookmark !== true) {

                funcs.route_bookmark = true;
                funcs.trigger_bookmarks(`bookmarks__holder`);

            }

            lib.remove_class('display-none', $(`bookmarks__holder`).parentNode.id);
            lib.add_class('display-flex', $(`bookmarks__holder`).parentNode.id);

        },

        times: function () {

            funcs.content_times_holder('times_content_holder');
            lib.remove_class('display-none', $('times_content_holder').parentNode.id);
            lib.add_class('display-flex', $('times_content_holder').parentNode.id);

        },

        menu: function () {

            if (funcs.route_menu !== true) {

                funcs.route_menu = true;
                funcs.trigger_menu(`menu__holder`);

            }

            lib.remove_class('display-none', $(`menu__holder`).parentNode.id);
            lib.add_class('display-flex', $(`menu__holder`).parentNode.id);

        },

        dialogue: function () {

            funcs.start_dialogue(`dialogue_holder`);
            lib.remove_class('display-none', $(`dialogue_holder`).parentNode.id);
            lib.add_class('display-flex', $(`dialogue_holder`).parentNode.id);

        },

        'contact info': function () {

            funcs.start_contact_info(`contact_info_holder`);
            lib.remove_class('display-none', $(`contact_info_holder`).parentNode.id);
            lib.add_class('display-flex', $(`contact_info_holder`).parentNode.id);

        },

        selector: function () {

            funcs.start_selector(`selector_lift`);
            lib.remove_class('display-none', $(`selector_lift`).parentNode.id);
            lib.add_class('display-flex', $(`selector_lift`).parentNode.id);
        },
        gallery: function () {

            funcs.start_gallery('gallery_ist_id');
            lib.remove_class('display-none', $('gallery_ist_id').parentNode.id);
            lib.add_class('display-flex', $('gallery_ist_id').parentNode.id);
        },
        comment: function () {

            funcs.start_comments('comment_table');
            lib.remove_class('display-none', $('comment_table').parentNode.id);
            lib.add_class('display-flex', $('comment_table').parentNode.id);

        },

        views: function () {

            funcs.content_views_holder('views_content_holder');
            lib.remove_class('display-none', $('views_content_holder').parentNode.id);
            lib.add_class('display-flex', $('views_content_holder').parentNode.id);

        },

        'personal music': function () {

            funcs.personal_music_holder('personal_music_holder');
            lib.remove_class('display-none', $('personal_music_holder').parentNode.id);
            lib.add_class('display-flex', $('personal_music_holder').parentNode.id);

        },

        music_info: function () {

            funcs.music_info_holder('music_info_holder');
            lib.remove_class('display-none', $('music_info_holder').parentNode.id);
            lib.add_class('display-flex', $('music_info_holder').parentNode.id);

        },

        tie:function () {

            funcs.tie_get_holder('tie_holder');

            lib.remove_class('display-none', $('tie_holder').parentNode.id);
            lib.add_class('display-flex', $('tie_holder').parentNode.id);
            
        },

    };
}();
!function () {

    funcs.call_headers_naver = function (title) {

        return `
            
                <section class="display-flex padding-5-px position-sticky heavier border-1px-solid border-top-none border-left-none border-right-none">

                    <section class='lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue' onclick="history.back();">
        
                        <i class="fa fa-arrow-left"></i>

                    </section>
        
                    <section class="flex-1 text-align-center font-weight-bold align-items-center justify-content-center">${title}</section>
        
                    <a class='lighter round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue' href="${funcs.app}">
        
                        <i class="fa fa-times"></i>

                    </a>

                </section>
    
    `;
    };
    
}();
