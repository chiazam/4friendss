!function () {

    funcs.start_message = function (container_id) {

        let suffix = lib.switch_num;

        funcs.hunt__latest(container_id, 0, 5, 10, suffix);

        ++lib.switch_num;

    };

    funcs.hunt__latest = function (container_id, offset, limit, repeat, suffix) {

        funcs.send_get_me_something({category: 'dialogue things', type: 'latest dialogue', repeat: repeat, limit: limit, offset: offset, container_id: container_id, suffix: suffix}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/latest_chat/latest_chat_dia.php?offset=${offset}&limit=${limit}`);

    }

}();
