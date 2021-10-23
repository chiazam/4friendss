/* global funcs */

!function () {

    funcs.obj_ajax_out_side = {

        "content maker": function (e) {

            funcs.continue_contant_maker(e);

        },

        suggest: function (e) {

            funcs.suggest_sharer_gulp(e);

        },

        content: function (e) {

            funcs.content_sharer_gulp(e);

        },

        editor: function (e) {

            funcs.spill_editor_handler(e);

        },

        "content things": function (e) {

            funcs.content_things_maker(e);

        },
        "profile": function (e) {

            funcs.profile_handler(e);

        },

        'music things': function (e) {

            funcs.music_thing_hanana(e);

        },

        'search things': function (e) {

            funcs.search_thing_hanana(e);

        },

        'notify things': function (e) {

            funcs.notify_type_show(e);

        },

        'dialogue things': function (e) {

            funcs.dialogue_type_show(e);

        },

    };

    funcs.divide_to_suit_job = function (obj) {

        console.log(obj);

        if (funcs.obj_ajax_out_side.hasOwnProperty(obj.recognize.category)) {

            (funcs.obj_ajax_out_side[obj.recognize.category])(obj);

            funcs.handle_links();

        }

    };

}();
