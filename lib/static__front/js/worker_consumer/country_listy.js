
/* global countries, funcs, lib */

(function () {

    countries.set_country_input = function (input_id_parent, states_inp_parent = null) {

        funcs.option_maker_fool(countries.countries_list_formatted);

        lib._looper_challenge(lib.query_selector_all('.butt_selector'), function (element) {

            let happen_state = ``;

            if (states_inp_parent !== null) {

                happen_state = `$('${states_inp_parent}').children[0].value='';`;

            }

            element.setAttribute('onclick', `
            
              if($('${input_id_parent}').children[0].value!==this.dataset.value){
            
                $('${input_id_parent}').children[0].value=this.dataset.value;${happen_state}lib.host_event_execute_now('change',$('${input_id_parent}').children[0]);
            
            };

                lib.inc_html('', 'option-spender');
                lib.remove_class('display-flex', 'card-7');
                lib.add_class('display-none', 'card-7');
            
            `);


        });

    };

}());