/* global funcs, lib */

funcs.option_head_maker = function(searcher = true, closer = {container:'option-spender', container_container:'card-7'}){

let searcher__template = `<section onclick="lib.inc_html('', '${closer.container}');lib.remove_class('display-flex', '${closer.container_container}');lib.add_class('display-none', '${closer.container_container}');" class="display-flex float-right lighter cursor-pointer overflow-hidden icon-mager-xxx-small justify-content-center align-items-center align-items-center round-border hover-background-twitter hover-color-fb-blue">
    
                            <i class="fa fa-times"></i>
        
                        </section>
    
    <section class='clear_both'></section>

`;
        if (searcher === true){

searcher__template = `<section class="lighter border-1px-solid display-flex align-items-center border-radius-5px">
    
                            <section class="padding-5-px height-fit-content">

                                <i class="fa fa-search"></i>

                            </section>
    
                            <section class="flex-1">

                                <input id='search-option-main-inp' class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" placeholder="search options">

                            </section>
    
                            <section class="cursor-pointer padding-5-px height-fit-content"><i id="see-unseen-country" onclick="lib.inc_html('', 'option-spender');lib.remove_class('display-flex', 'card-7');lib.add_class('display-none', 'card-7');" class="fa fa-times"></i></section>
        
                        </section>`;
        }

return searcher__template;
};
        !function () {

        funcs.option_maker_fool = function (list, searcher = true) {

        let searcher__template = funcs.option_head_maker(searcher);
                lib.inc_html(`<section class="border-1px-solid height-fit-content friends-shadow-shadow border-radius-5px padding-5-px min-width-300-px max-width-100-cent margin-auto">${searcher__template}<section class='max-height-500px overflow-hidden overflow-y-scroll'>${list}</section>
        
            </section>`, 'option-spender');
                lib.remove_class('display-none', 'card-7');
                lib.add_class('display-flex', 'card-7');
                if (searcher === true){

        lib.event_attach($('search-option-main-inp'), 'input', function(e){

        lib._looper_challenge(lib.query_selector_all('.butt_selector'), function(element){

        if (element.dataset.value.includes(lib.trim(e.target.value))){

        lib.remove_class_ele('display-none', element);
                lib.add_class_ele('display-block', element);
        } else if (!element.dataset.value.toLowerCase().includes(lib.trim(e.target.value.toLowerCase()))){

        lib.remove_class_ele('display-block', element);
                lib.add_class_ele('display-none', element);
        }

        });
        }, 1);
        }


        }
        }();
