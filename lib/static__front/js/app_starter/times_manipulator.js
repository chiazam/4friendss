/* global funcs, lib, regex */

!function () {

    funcs.template_times = function (container_id, obj, suffix) {

        funcs.timeline_times_display(container_id, obj, suffix);

    };

    funcs.story_profile_dumper = function (obj, border = 3, suffix, classes = '', name = true, round = true) {

        let its_me = '';

        if (funcs.userinfo.logged_user.info.username === obj.info.username && funcs.userinfo.logged_user.info.b === obj.info.b && funcs.userinfo.logged_user.info.g === obj.info.g) {
            its_me = 'iiiiii';
        }

        let prof_stylee = obj.prof_styler;

        if (obj.hasOwnProperty('styler')) {
            prof_stylee = obj.styler;
        }

        let nameerr = ``;

        if (name === true) {

            nameerr = `<section>${obj.info.full} ${funcs.verify_returner(obj.info.act)}</section>`;

        }

        let rounder = ``;

        if (round === true) {
            rounder = `round-border`;
        }

        return `
        
        <section class="display-flex flex-column align-items-center">

            <section class="cursor-pointer overflow-hidden align-items-center justify-content-center display-flex heavier-border-color ${rounder} icon-mager-xxxxx-small border-${border}px-solid heavier ${classes} line-height-initial ${funcs.story_release_border(obj)}">
                    
                    <img draggable="false" class='object-fit-cover ${rounder} ${its_me}' style='filter:${funcs.add_main_effect_to_yall(prof_stylee)};background:${obj.info.prof_pix_backgrund};' src="${funcs.addImage(obj.info.prof_pix, 50, 50, 60, 1)}"/>

            </section>
        
            ${nameerr}  
        
        </section>

`;

    };

    funcs.timeline_times_display = function (container_id, obj, suffix) {

        let template = ``;

        lib._looper_challenge(obj, function (element) {


            template += `

                    <section class="width-fit-content margin-right-10-px padding-5-px border-radius-5px cursor-pointer hover-background-twitter hover-color-fb-blue">
            
                    <a href="${funcs.app}?means=times&by_g=${element.info.g}">

                        ${funcs.story_profile_dumper(element, 1, suffix)}   
                        
                    </a>

                    </section>

            `;

        });

        lib.inc_html(`<section class="overflow-hidden heavier border-box width-100-cent border-1px-solid border-right-none border-left-none">${funcs.scroll_amber_wawerteer_fdtg(template)}</section>`, container_id);

    };



}();
