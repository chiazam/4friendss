

/* global states, lib, funcs */

(function () {

    states.function_states_chai = function (country, input_id_parent) {

        if (lib.trim(country).length > 0) {

            funcs.option_maker_fool(states.send_states(country));

            lib._looper_challenge(lib.query_selector_all('.butt_selector'), function (element) {

                element.setAttribute('onclick', `
                
                if($('${input_id_parent}').children[0].value!==this.dataset.value){
                
                $('${input_id_parent}').children[0].value=this.dataset.value;
                
                };
                
                lib.inc_html('', 'option-spender');
                lib.remove_class('display-flex', 'card-7');
                lib.add_class('display-none', 'card-7');
            `);


            });

        }

    };

})();