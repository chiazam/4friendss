
/* global funcs, lib */

!function () {

    funcs.show_tagg_liffle = function (content) {

        lib.remove_class('display-none', $(`tagged-others-show`).parentNode.id);
        lib.add_class('display-flex', $(`tagged-others-show`).parentNode.id);


        $(`tagged-others-show`).innerHTML = content;

        funcs.handle_links();

    };

    funcs.show_tagged_people = function (hash, suffix) {

        if (funcs.timeline_content.hasOwnProperty(hash) && !funcs.timeline_content[hash].tagger.hasOwnProperty('none')) {

            lib.add_class('max-width-400-px', `tagged-others-show`);
            lib.add_class('width-100-cent', `tagged-others-show`);

            let people_holder = funcs.list_persons(funcs.timeline_content[hash].tagger, false, false);

            let html_contents = `

                    <section class='heavier overflow-hidden border-radius-5px border-1px-solid width-100-cent height-fit-content friends-shadow-shadow display-flex flex-column margin-auto'>
            
            <section class="padding-5-px align-items-center justify-content-center display-flex border-1px-solid border-left-none border-right-none border-top-none font-size-16px"><section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fa fa-tags"></i></section><section class="font-weight-bold">Tagged persons</section></section>
            
            <section>${people_holder}</section>

</section>

                `;

            funcs.show_tagg_liffle(html_contents);

        }

    };

}();
