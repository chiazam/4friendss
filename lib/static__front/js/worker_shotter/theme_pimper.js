/* global funcs, api */

!function () {

    funcs.kick_off_theme = function () {

        if (typeof (Worker) !== "undefined") {

            if (typeof (theme_hunter) === "undefined") {

                let theme_hunter = new Worker(`${api}extra_script/theme_lister.php`);

                theme_hunter.addEventListener('message', function (e) {

                    funcs.theme__lister = e.data;

                }, 1);

                theme_hunter.addEventListener('error', function (e) {

                    funcs.kick_off_theme();

                }, 1);

                theme_hunter.postMessage("");

            }

        }
    };

    funcs.kick_off_theme();

}();
