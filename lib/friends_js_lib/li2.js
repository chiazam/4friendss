/* global funcs, lib */

!function () {

    funcs.timeline_media_innerText = function (obj) {

        let inner_content = `<section class="text-align-center line-height-25-px fb-shadow-shadow-2 border-radius-20px margin-auto">`;
        if (obj.images > 0) {

            inner_content += `
<a class="tagger_hasher hover-background-twitter hover-color-fb-blue cursor-pointer">${obj.images} images</a>
                        `;
        }

        if (obj.videos > 0) {

            inner_content += `
<a class="tagger_hasher hover-background-twitter hover-color-fb-blue cursor-pointer">${obj.videos} videos</a>
                        `;
        }
        if (obj.audios > 0) {

            inner_content += `
<a class="tagger_hasher hover-background-twitter hover-color-fb-blue cursor-pointer">${obj.audios} audios</a>
                        `;
        }

        inner_content += `</section>`;

        return inner_content;


    };

    funcs.audio_obj_ = {};
    funcs.file_obj_ = {};
    funcs.media_obj_ = {};
    funcs.timeline_content = {};
    funcs.related_songss = {};

    funcs.audio_push_info = function (audio_info) {

        let audio__objj = funcs.audio_info_parser(audio_info);

        funcs.audio_obj_[audio__objj.hash] = audio__objj;

    };

    funcs.file_push_info = function (file_info) {

        if (!funcs.file_obj_.hasOwnProperty(file_info.file_info.hash)) {

            funcs.file_obj_[file_info.file_info.hash] = file_info;

        }

    };

    funcs.spill_played_playlist_favourite_template = function (audio_info, play_butt = true, retweet = true, comment=true) {

        let suffix = lib.switch_num;

        ++lib.switch_num;

        setTimeout(function () {

            funcs.favourite_music_display_switer(`favourite_${suffix}_${audio_info.hash}`, audio_info.favourite);

            funcs.playlist_music_display_switer(`playlist_${suffix}_${audio_info.hash}`, audio_info.playlist);

        }, 200);

        let play_template = ``;

        if (play_butt === true) {

            play_template = `<section onclick="funcs.music_player_hunt('${funcs.main_player_holder_plat}','${audio_info.hash}');" class="border-radius-2px display-flex flex-1 justify-content-center hover-background-twitter align-items-center cursor-pointer padding-5-px">

                        <i class="fa-play font-size-16px fa"></i>

                    </section>`;

        }

        let retweet_butt = ``;

        if (retweet === true) {

            retweet_butt = funcs.tie_templater(audio_info.hash, suffix, audio_info.num_tiers);

        }
		
		let comment_butt = ``;
		
		if (comment === true) {

            comment_butt = funcs.comment_button_template(audio_info.hash,audio_info.comment_num);

        }

        return `
        
                <section class="display-flex">

                    <section onclick="funcs.add_remove_favourite(this,'${audio_info.hash}');" id="favourite_${suffix}_${audio_info.hash}" class="border-radius-2px display-flex flex-1 justify-content-center hover-background-twitter align-items-center cursor-pointer padding-5-px">

                        <i class="fa-heart font-size-18px far"></i>

                    </section>
        
                    <section onclick="funcs.add_remove_playlist(this,'${audio_info.hash}');" id="playlist_${suffix}_${audio_info.hash}" class="border-radius-2px display-flex flex-1 justify-content-center hover-background-twitter align-items-center cursor-pointer padding-5-px">

                        <i class="fa-list-ul font-size-16px fa"></i>

                    </section>
        
                    ${play_template}   
					
					${comment_butt}   
                    
                    ${retweet_butt}  

                </section>
        
                `;


    };

    funcs.favourite_music_display_switer = function (container_id, favourite) {

        if (favourite === true) {

            lib.remove_class_ele(`far`, $(container_id).children[0]);
            lib.add_class_ele(`fa`, $(container_id).children[0]);
            lib.add_class_ele(`color-google-red`, $(container_id).children[0]);

        } else if (favourite === false) {

            lib.remove_class_ele(`fa`, $(container_id).children[0]);
            lib.remove_class_ele(`color-google-red`, $(container_id).children[0]);
            lib.add_class_ele(`far`, $(container_id).children[0]);


        }

    };

    funcs.playlist_music_display_switer = function (container_id, playlist) {

        if (playlist === true) {

            lib.remove_class_ele(`fa-list-ul`, $(container_id).children[0]);
            lib.add_class_ele(`fa-th-list`, $(container_id).children[0]);
            lib.add_class_ele(`color-fb-blue`, $(container_id).children[0]);

        } else if (playlist === false) {

            lib.remove_class_ele(`fa-th-list`, $(container_id).children[0]);
            lib.add_class_ele(`fa-list-ul`, $(container_id).children[0]);
            lib.remove_class_ele(`color-fb-blue`, $(container_id).children[0]);


        }

    };

    funcs.audio_info_parser = function (audio_info, mini = false) {

        if (mini === false) {


            if (audio_info.track_number === `unknown`) {

                audio_info.track_number = ``;

            }

            if (audio_info.composer === `unknown`) {

                audio_info.composer = ``;

            }

            if (audio_info.band === `unknown`) {

                audio_info.band = ``;

            }

        }

        if (audio_info.album === `unknown`) {

            audio_info.album = ``;

        } else if (audio_info.album !== `unknown`) {

            audio_info.album = audio_info.album;

        }

        if (audio_info.year === `unknown`) {

            audio_info.year = ``;

        }

        if (audio_info.artist === `unknown`) {

            audio_info.artist = '';

        }

        if (audio_info.title === `unknown`) {

            audio_info.title = audio_info.name;

        }

        return audio_info;

    };

    funcs.music_artist_returner = function (music_artist_array) {

        let artist_list = '';

        if (!(music_artist_array.length === 1 && music_artist_array[0] === 'unknown')) {

            artist_list += `<i class="fa fa-microphone"></i> `;

            lib._looper_challenge(lib.shuffleArray(music_artist_array), function (element) {

                artist_list += `<a onclick='trigger_search("search_holder", "${element}","music");' class="margin-left-5px hover-background-twitter color-fb-blue cursor-pointer">${(funcs.word_shortener(null, element, 15,true)).word_}</a>`;

            });

        }

        return artist_list;

    };

    funcs.music_album_returner = function (music_album) {

        if (music_album !== ``) {
            return `<a onclick='trigger_search("search_holder", "${music_album}","music");' class='margin-top-5-px align-self-center width-max-content cursor-pointer color-fb-blue hover-background-twitter font-size-10px'>${(funcs.word_shortener(null, music_album, 15,true)).word_}</a>`;
        } else {
            return ``;
        }

    };

    funcs.music_year_returner = function (music_year) {

        if (music_year !== '') {

            return `<a onclick='trigger_search("search_holder", "${music_year}","music");' class='cursor-pointer color-fb-blue hover-background-twitter'>${music_year}</a>`;

        } else {

            return ``;

        }

    };

    funcs.music_related_songs_returner = function (audio__info) {

        if (!audio__info.related_songs.hasOwnProperty('none')) {

            funcs.related_songss[audio__info.hash] = audio__info.related_songs;

            return `<section class="cursor-pointer color-fb-blue hover-background-twitter border-box margin-auto text-align-center border-radius-2px margin-bottom-5-px margin-top-5-px" onclick="funcs.show_related_song('${audio__info.hash}');">

                    <i class="fa fa-link"></i> related songs

                </section>`;

        } else {

            return ``;

        }

    };

    funcs.text_profile_dumper = function (obj, online = true, username = false, classes = '', user_anchor = true) {

      if(!obj.hasOwnProperty('none')) { 
          
        let onlineerr = ``;

        if (online === true) {

            onlineerr = funcs.online_color_datist(obj.online).online_template;

        }

        let usernameerr = ``;
        let relation_ship = '';
        let fit_content = ``;

        if (username === true) {

            usernameerr = `<section class="font-size-10px">${obj.info.username}</section>`;

            fit_content = `width-fit-content-o`;

            if (obj.hasOwnProperty('relationship') && obj.relationship.go === true) {

                relation_ship = `<section class='font-size-10px'>${obj.relationship.relationship}</section>`;

            }

        }


        let prof_link = ``;

        if (user_anchor === false) {

            prof_link = `${funcs.app}?means=profile&fr_g=${obj.info.g}&fr_r=${obj.info.r}`;

        } else if (user_anchor === true) {

            prof_link = `${funcs.app}?means=profile&fr_user=${obj.info.username}`;

        }


        return ` <a class="display-flex flex-column hover-background-twitter color-fb-blue cursor-pointer line-height-initial ${fit_content}" href="${prof_link}">

            <section class="display-flex">
        
                ${onlineerr} 

                <section class="${classes}"> ${obj.info.full}&nbsp;${funcs.verify_returner(obj.info.act)} </section>

            </section>
        
            ${usernameerr} 
            
            ${relation_ship} 
            
        </a>`;
          
          
      }else{
          
          return ``;
          
      }

    };

    funcs.round_profile_dumper = function (obj, small = true, round = true, border = 1, classes = '', onlinerr = true, user_anchor = true) {
        
    if(!obj.hasOwnProperty('none')) { 

        let rounder = ``;

        if (round === true) {
            rounder = `round-border`;
        }

        let smaller = `icon-mager-xxx-small`;

        if (small === false) {

            smaller = `icon-mager-xx-small`;

        } else if (small === 'tiny') {

            smaller = `icon-mager-x-small`;

        }

        let its_me = '';

        if (funcs.its_me(obj) === true) {
            its_me = 'iiiiii';
        }

        let prof_stylee = obj.prof_styler;

        if (obj.hasOwnProperty('styler')) {
            prof_stylee = obj.styler;
        }

        let ooo__nliner = ``;

        if (onlinerr === true) {

            ooo__nliner = `<section class="position-absolute margin-left--5px online-dotist-prover">${funcs.online_color_datist(obj.online).online_template}</section>`;

        }

        let prof_link = ``;

        if (user_anchor === false) {

            prof_link = `${funcs.app}?means=profile&fr_g=${obj.info.g}&fr_r=${obj.info.r}`;

        } else if (user_anchor === true) {

            prof_link = `${funcs.app}?means=profile&fr_user=${obj.info.username}`;

        }

        return `<a class="cursor-pointer overflow-hidden align-items-center justify-content-center display-flex heavier-border-color border-radius-5px ${rounder} ${smaller} border-${border}px-solid heavier ${classes} line-height-initial ${funcs.story_release_border(obj)}" href="${prof_link}">
                    
                    <img draggable="false" class='object-fit-cover border-radius-5px ${rounder} ${its_me}' style='filter:${funcs.add_main_effect_to_yall(prof_stylee)};background:${obj.info.prof_pix_backgrund};' src="${funcs.addImage(obj.info.prof_pix, 50, 50, 60, 1)}"/>
        
                    ${ooo__nliner} 
            
                </a> `;
                
    }else{
          
          return ``;
          
      }

    };

    funcs.display_capter_namer_random = function (element, small = true, round = true, border = 1, classes = '', onlinerr = true, user_anchor = true) {

        if(!element.hasOwnProperty('none')) { 

        return ` <section class="width-fit-content display-flex line-height-initial align-items-center">

                    <section>${funcs.round_profile_dumper(element, small, round, border, classes, onlinerr, user_anchor)}</section>
            
                    &nbsp;<section class="flex-1">${funcs.text_profile_dumper(element, false, true, 'font-weight-bold', user_anchor)}</section>

                </section>
`;

        }

    };
	
	funcs.templater_content_music = function(element){
		
		 if (!element.hasOwnProperty('none') && element.length > 0) {
		
		let musics_holder = ``;
			 
				lib._looper_challenge(element, function (element_) {

					musics_holder += `<section class="padding-5-px">
                
						<section>${funcs.list_related_songs(element_.audio_info)}</section>

					</section>`;
				
				});
			
				return `
				
				<section class="width-98-cent border-radius-5px margin-bottom-5-px margin-auto border-1px-solid">${musics_holder}</section>
				
				`;
				
		 }else{
			 
			 return ``;
			 
		 }
		
		
	};

    funcs.music_display_uploader = function (element) {

        if(!element.uploader.hasOwnProperty('none')) { 

            return ` <section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-5-px">
    
            &nbsp;<section class="flex-1">${funcs.text_profile_dumper(element.uploader, false, false)}</section>

        </section> `;
        
        }else{

            return '';

        }
        
    };
	
}();