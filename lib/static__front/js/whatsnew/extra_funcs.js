/* global funcs */

!function () {

funcs.event_date_display = function (suffix) {

$(`this_content_bulker_fwesh${suffix}_extar_spot`).innerHTML = `

        <section class="display-flex width-100-cent">

            <section class="border-box padding-5-px flex-1">
        
                <input data-display_id="date_panel_holder_${suffix}" onfocus="this.blur();showDatePicker(this.id,'date_panel_holder_${suffix}');" placeholder="Start date" textbox class="border-box width-100-cent loggers-lock-inputs-holders-holders padding-5-px border-1px-solid border-right-none border-left-none border-top-none" id="start_date_${suffix}">

            </section>
        
            <section class="border-box padding-5-px flex-1">
        
                <input data-display_id="date_panel_holder_${suffix}" onfocus="this.blur();showDatePicker(this.id,'date_panel_holder_${suffix}');" textbox placeholder="End date" class="border-box width-100-cent loggers-lock-inputs-holders-holders padding-5-px border-1px-solid border-right-none border-left-none border-top-none" id="end_date_${suffix}">

            </section>

        </section>
        
        <section id="date_panel_holder_${suffix}"></section>

`;
};
        }();
