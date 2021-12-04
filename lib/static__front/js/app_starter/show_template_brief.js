!function () {

    funcs.template_each_show = function(element, suffix, round=false, small=false, border = 2, classes = ''){

        let template = ``;

        if (!element.hasOwnProperty('none')) {

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

            template = `<section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none padding-5-px">
        
                <section class="display-flex">
        
                    <section class="flex-1">

                        <section class='margin-bottom-5-px border-box border-radius-5px'>${funcs.display_capter_namer_random(element.owner, false, false)}</section>
        
                        <section class="font-size-18px font-weight-bold">${element.name_}</section>
        
                        <section class="font-size-16px line-height-25-px">${regex.hash__tag_replacer(element.desc_, true)}</section>

                        <section class="border-box width-100-cent padding-5-px padding-left-0-px padding-right-0-px font-10-px"><b>Show</b> created on ${element.create_date} <b>${(element.publish=="0")?("unpublished"):("published")}</b></section>
                
                    </section>
        
                    <section class="cursor-pointer border-radius-5px overflow-hidden align-items-center justify-content-center display-flex heavier-border-color ${rounder} ${smaller} border-${border}px-solid heavier ${classes} line-height-initial" style='border-color:${element.cover_backgrund};'>
                    
                        <img draggable="false" class='object-fit-cover border-radius-5px ${rounder}' style='background:${element.cover_backgrund};' src="${funcs.addImage(element.cover, 150, 150, 60, 2)}"/>
                    
                    </section>

                    <section>

                        <a href="${my_app}?means=shows&key_viewer=${element.key_}" class="round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-external-link-alt"></i></a>
            
                    </section>
            
                </section>

            </section>`;
            
        }

        return template;

    };


    funcs.template_each_season = function(element, suffix, round=false, small=false, border = 2, classes = '',show=false){

        let template = ``;

        if (!element.hasOwnProperty('none')) {

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

            template = `<section class="heavier margin-top-5-px margin-bottom-5-px overflow-hidden border-1px-solid border-right-none border-left-none padding-5-px">
        
                <section class="display-flex">
        
                    <section class="flex-1">
        
                        <section class="font-size-18px font-weight-bold">${element.name_}</section>
        
                        <section class="font-size-16px line-height-25-px">${regex.hash__tag_replacer(element.desc_, true)}</section>

                        <section class="border-box width-100-cent padding-5-px padding-left-0-px padding-right-0-px font-10-px"><b>Season</b> created on ${element.create_date} <b>${(element.publish=="0"||element.show_publish=="0")?("unpublished"):("published")}</b></section>
                
                    </section>
        
                    <section class="cursor-pointer border-radius-5px overflow-hidden align-items-center justify-content-center display-flex heavier-border-color ${rounder} ${smaller} border-${border}px-solid heavier ${classes} line-height-initial" style='border-color:${element.cover_backgrund};'>
                    
                        <img draggable="false" class='object-fit-cover border-radius-5px ${rounder}' style='background:${element.cover_backgrund};' src="${funcs.addImage(element.cover, 150, 150, 60, 2)}"/>
                    
                    </section>

                    <section>

                        <a href="${my_app}?means=seasons&key_viewer=${element.key_}" class="round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-background-twitter hover-color-fb-blue"><i class="fa fa-external-link-alt"></i></a>
            
                    </section>
            
                </section>

                <a class="width-fit-content align-self-center" href="${my_app}?means=shows&key_viewer=${element.show_}"> 
                
                    <section class="width-max-content cursor-pointer color-fb-blue hover-background-twitter border-box padding-5-px text-align-center border-radius-50px lighter">
                    
                        <i class="fa fa-external-link-alt"></i> Check the show 
                    
                    </section> 
                
                </a>

            </section>`;
            
        }

        return template;

    };
    
}();