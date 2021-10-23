/* global funcs, api, lib */

!function () {

    funcs.show_persons_yet = function (container_id, people_obj, suffix, vertical = '') {

        let template_fleed = ``;

        if (vertical === false || (vertical !== false && vertical !== true && people_obj.length >= 3)) {

            template_fleed += `<section class="width-fit-content padding-5-px display-flex">`;

        } else if (vertical === true || (vertical !== false && vertical !== true && people_obj.length < 3)) {

            template_fleed += `<section class="overflow-hidden border-1px-solid border-right-none border-left-none">`;

        }

        lib._looper_challenge(people_obj, function (element) {

            if (vertical === false || (vertical !== false && vertical !== true && people_obj.length >= 3)) {

                template_fleed += funcs.horizontal_suggest(element, suffix);

            } else if (vertical === true || (vertical !== false && vertical !== true && people_obj.length < 3)) {

                template_fleed += funcs.vertical_suggest(element, suffix);

            }

        });

        template_fleed += `</section>`;

        if (vertical === false || (vertical !== false && vertical !== true && people_obj.length >= 3)) {

            lib.inc_html(`<section class="overflow-hidden">${funcs.scroll_amber_wawerteer_fdtg(template_fleed, true, '', 8)}</section>`, $(container_id).children[1].id);

        } else if (vertical === true || (vertical !== false && vertical !== true && people_obj.length < 3)) {

            $(container_id).children[1].innerHTML = template_fleed;

    }

    };
    funcs.vertical_suggest = function (element, suffix, contacter = true) {

        let contacter_butt = ``;

        if (contacter === true) {

            contacter_butt = `
            
                    <section class="display-flex align-item-center">
            
                        ${funcs.friend_remover_adder_butt_gen(element)}   

                    </section>`;

        }

        return `

                <section class="display-flex heavier padding-5-px">
            
                    ${funcs.display_capter_namer_random(element, false, false)} 
                    
                    <section class="flex-1"></section>
            
                        ${contacter_butt}   

                </section>

            `;
    };


    funcs.suggest_profile_dumper = function (obj, suffix, border = 3) {

        return `

            <section class="width-100-px height-100-px">
        
                <img style="filter:${funcs.add_main_effect_to_yall(obj.prof_styler)};background:${obj.info.prof_pix_backgrund};border-color:${obj.info.prof_pix_backgrund};" draggable="false" class="cursor-pointer border-${border}px-solid border-box round-border width-100-px height-100-px object-fit-cover border-box" src="${funcs.addImage(obj.info.prof_pix, 50, 50, 60, 1)}"/>

            </section>

        `;

    };


    funcs.horizontal_suggest = function (element, suffix, contacter = true) {

        let contacter_butt = ``;

        if (contacter === true) {

            contacter_butt = `
            
                <section class="margin-auto"> ${funcs.friend_remover_adder_butt_gen(element)} </section>  
            
                    `;

        }

        return `
             
             <section class="padding-5-px max-width-150-px min-width-150-px overflow-hidden heavier border-1px-solid margin-left-5-px border-radius-5px display-flex flex-column justify-content-center">
             
                    <section class="display-flex align-items-center justify-content-center">${funcs.suggest_profile_dumper(element, suffix)}</section>
        
                    <section class="margin-auto cursor-pointer border-box display-flex flex-column justify-content-center width-fit-content padding-5-px"> ${funcs.text_profile_dumper(element, false, true, 'font-weight-bold')} </section>
                    
                    <section class="margin-top-auto">
        
                        ${contacter_butt}  
                    
                    </section>
             
             </section>
             
             `;
    };


    funcs.friend_remover_adder_butt_gen = function (element) {

        let suffix = lib.switch_num;
        ++lib.switch_num;
        
        if(!funcs.its_me(element)){
            

        if (element.contacted === 0) {

            return `<section id="contacter_butt_${element.info.b}_${suffix}" onclick="funcs.add_remove_contact_main(this.id,'${element.info.b}','${suffix}');" class="width-max-content cursor-pointer color-fb-blue hover-background-twitter border-box margin-auto padding-5-px text-align-center border-radius-50px lighter"> 
         
                        <i class="fa fa-user-plus"></i> add contact
         
                    </section>`;

        } else if (element.contacted === 1) {

            return `<section id="contacter_butt_${element.info.b}_${suffix}" onclick="funcs.add_remove_contact_main(this.id,'${element.info.b}','${suffix}',false);" class="width-max-content cursor-pointer color-fb-blue hover-background-twitter border-box margin-auto padding-5-px text-align-center border-radius-50px lighter"> 
         
                        <i class="fa fa-user-minus"></i> remove contact
         
                    </section>`;

        }
            
            
        }else{
            
            return ``;
            
        }

    };

}();
