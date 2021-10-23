/* global funcs, lib, regex */

!function () {

    funcs.templattte_times = function (element, suffix, poster) {

        let person_story = ``;

        if (poster === true) {

            person_story = `<section class="width-100-cent align-self-end display-flex justify-content-center">

                                        <section class="width-fit-content padding-5-px border-radius-5px cursor-pointer hover-background-twitter hover-color-fb-blue">

                                            ${funcs.story_profile_dumper(element.poster, 2, suffix, '', false)} 
                                         
                                        </section>
                    
                                    </section>`;

        }

        return `
                
                    <section class="min-width-150-px max-width-150-px class-suggested-persons-margin border-1px-solid overflow-hidden heavier height-fit-content overflow-hidden margin-left-5-px margin-bottom-5-px border-radius-10px">
                
                <a href="${funcs.app}?means=views&key_viewer=${element.key_link}">
                
                                <section class="overflow-hidden margin-bottom--200-px height-200-px position-relative z-index-1 display-flex">

                                    ${person_story}    

                                </section>
                
                                <section class="overflow-hidden display-flex align-items-center height-200-px">${funcs.story_pix_text_audio(element, suffix)} </section>
                
                        </a>
                
                            </section>
                
`;
    };

    funcs.template_main_times = function (container_id, obj, suffix, poster = false) {

        if (!obj.hasOwnProperty('none')) {

            let template = ``;
            lib._looper_challenge(obj, function (element) {

                template += funcs.templattte_times(element, suffix, poster);

            });

            funcs.adj_html(container_id, 'beforeend', `<section class="border-box overflow-hidden border-radius-5px width-100-cent margin-bottom-5-px margin-top-5-px">${funcs.scroll_amber_wawerteer_fdtg(template, true, 'z-index-2', 20)}</section>`);
    }

    };


    funcs.story_pix_text_audio = function (element, suffix) {

        let returner = ``;

        if (!element.images.hasOwnProperty('none')) {

            let color__ = (element.images[0].file_info.img_background.length > 0) ? (element.images[0].file_info.img_background) : ('var(--liter-black-moder)');

            returner = `

                <section class="height-200-px width-100-cent">
            
                    <section style="background-image:linear-gradient(to top,${color__} 1%, 70%, transparent 100%);" class="margin-bottom--200-px height-200-px position-relative"></section>

                    <img class="height-200-px object-fit-cover width-100-cent" style="filter:${funcs.add_main_effect_to_yall(element.images[0].style)};background-color:${color__};" src="${funcs.addImage(element.images[0].file_info.path, 350, 450, 60)}"/>

                </section>

            `;
        } else if (!element.audios.hasOwnProperty('none')) {

            let audio__objj = funcs.audio_info_parser(element.audios[0].audio_info);

            let color__ = (audio__objj.img_background.length > 0) ? (audio__objj.img_background) : ('var(--liter-black-moder)');

            returner = `

                <section class="height-200-px width-100-cent">
            
                    <section style="background-image:linear-gradient(to top,${color__} 1%, 70%, transparent 100%);" class="margin-bottom--200-px height-220-px position-relative"></section>

                    <img class="height-200-px object-fit-cover width-100-cent" style="background-color:${color__};" src="${funcs.addImage(audio__objj.path, 350, 450, 60)}"/>

                </section>

            `;
        } else {
            returner = `<section style=" /* background: linear-gradient(to top, var(--liter-black-moder) 1%, 70%, transparent 100%); */ " class="padding-5-px width-100-cent height-200-px border-box display-flex">
            
                <section class="align-self-center width-100-cent font-size-16px">${regex.hash__tag_replacer(element.word, true)}</section>

            </section>`;
        }

        return returner;

    };
}();
