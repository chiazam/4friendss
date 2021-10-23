/* global funcs, lib, api */

!function () {


    funcs.list_related_songs = function (element, round = false, smaller = false) {

        let audio__info = funcs.audio_info_parser(element, true);

        let round_border = ``;

        if (round === true) {

            round_border = `round-border`;

        }

        let action_hoster = ``;

        let action_hoster_2 = ``;

        if (smaller === false) {

            action_hoster = funcs.spill_played_playlist_favourite_template(audio__info, true, false,false);

            action_hoster_2 = ``;
        } else if (smaller !== false) {
            action_hoster = ``;

            action_hoster_2 = funcs.spill_played_playlist_favourite_template(audio__info, true, false,false);
        }

        return `
        
        <section class="display-flex height-100-cent flex-column">

        <section class="display-flex">

            <section>
        
                <img src="${funcs.addImage(audio__info.path, 100, 100, 60)}" style="background:${audio__info.img_background};border-color:${audio__info.img_background};" draggable='false' class="cursor-pointer border-radius-5px height-40-px width-40-px border-3px-solid border-box object-fit-cover border-box ${round_border}"/>

            </section>
        
            <section class="display-flex flex-1 justify-content-center flex-column padding-5-px padding-bottom-0-px padding-top-0-px">
        
                <section class='margin-top-5-px display-flex'>
                
                    <section class="flex-1">${(funcs.word_shortener(null, audio__info.title, 15,true)).word_}</section>
                
                    <section>&nbsp;${funcs.music_year_returner(audio__info.year)}</section>
                
                </section>
        
                <section class='display-flex width-100-cent margin-top-5-px border-box flex-wrap'>${funcs.music_artist_returner(audio__info.artist_array)}</section>
            
                <section>  ${funcs.music_album_returner(audio__info.album)}  </section>

                <section>${funcs.music_display_uploader(audio__info)}</section>

            </section>
    
            <section>${action_hoster}</section>
        
            <section class="padding-5-px border-radius-5px height-fit-content hover-background-twitter">

                <a href="${funcs.app}?means=music_info&key=${audio__info.hash}" class="cursor-pointer color-fb-blue hover-background-twitter border-box"> <i class="fa fa-external-link-alt font-size-16px"></i> </a>

            </section>
        
</section>
        
        <section class="margin-top-auto">${action_hoster_2}</section>
    
    </section>
    
`;
    };

    funcs.show_related_song_flex = function (hash) {

        if (funcs.related_songss.hasOwnProperty(hash)) {

            let musics_holder = ``;

            lib._looper_challenge(funcs.related_songss[hash], function (element) {

                musics_holder += `
                
                    <section class="border-1px-solid border-radius-5px height-100-cent min-width-250-px margin-right-5px">${funcs.list_related_songs(element, false, true)}</section>

                `;
            });

            return `
                
                    <section class="padding-5-px">${funcs.scroll_amber_wawerteer_fdtg(musics_holder, true, '', 10, '', 'padding-5-px')}</section>

                `;

        } else {
            return '';
        }

    };

    funcs.show_related_song = function (hash) {

        if (funcs.related_songss.hasOwnProperty(hash)) {

            lib.add_class('width-100-cent', `tagged-others-show`);
            let musics_holder = ``;
            lib._looper_challenge(funcs.related_songss[hash], function (element) {

                musics_holder += `<section class="padding-5-px">
                
                    <section>${funcs.list_related_songs(element)}</section>

                </section>`;
            });
            let html_contents = `

                    <section class='heavier overflow-hidden border-radius-5px border-1px-solid width-100-cent height-fit-content friends-shadow-shadow display-flex flex-column margin-auto'>
            
            <section class="padding-5-px align-items-center justify-content-center display-flex border-1px-solid border-left-none border-right-none border-top-none font-size-16px"><section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fa fa-link"></i></section><section class="font-weight-bold"> related songs</section></section>
            
            <section>${musics_holder}</section>

</section>

                `;
            funcs.show_tagg_liffle(html_contents);
        }

    };

    funcs.add_remove_playlist = function (element, key) {

        element.children[0].className = `fa fa-spinner animate-spin`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({hash: key, category: 'music things', type: 'playlister', repeat: false, onclick: onclicker, container_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, music_hash: key}, `${api}api/my_music_modules/audio_add_remove_playlist.php`);

    };

    funcs.add_remove_favourite = function (element, key) {

        element.children[0].className = `fa fa-spinner animate-spin`;

        let onclicker = element.getAttribute('onclick');

        element.removeAttribute('onclick');

        funcs.send_get_me_something({hash: key, category: 'music things', type: 'favouriter', repeat: false, onclick: onclicker, container_id: element.id}, {'4friendss_user': funcs.userinfo.login_token, music_hash: key}, `${api}api/my_music_modules/audio_add_remove_favourite.php`);

    };

}();

funcs.search_display_music = function (array_song, round = true) {

    let musics_holder = ``;

    lib._looper_challenge(array_song, function (element) {

        musics_holder += `<section class="padding-5-px">
                
                    <section>${funcs.list_related_songs(element, round)}</section>

                </section>`;
    });

    return musics_holder;

};
