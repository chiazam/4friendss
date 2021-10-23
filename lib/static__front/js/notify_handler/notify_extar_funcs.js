/* global funcs */

!function () {

    funcs.profile_viewed_notification_template = function (obj, suffix) {

        let seen = ``;

        if (obj.seen === false) {

            seen = `lighter`;

        }

        return `<section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none ${seen}">

                    <section class="display-flex">
        
                        <section class="margin-right-5px">${funcs.round_profile_dumper(obj.persons, false,false)}</section> 
        
                        <section class="flex-1">
        
                            <section>${funcs.text_profile_dumper(obj.persons, false, true, 'font-weight-bold')}</section>
        
                            <section class="font-size-16px">Checked out your profile </section>
        
                            <section>${obj.date}</section>

                        </section> 

                    </section>

                </section>`;

    };

    funcs.tag_notification_template = function (obj, suffix) {

        let seen = ``;

        if (obj.seen === false) {

            seen = `lighter`;

        }

        return `<section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none ${seen}">

                    <section class="display-flex">
        
                        <section class="margin-right-5px">${funcs.round_profile_dumper(obj.persons, false,false)}</section> 
        
                        <section class="flex-1">
        
                            <section>${funcs.text_profile_dumper(obj.persons, false, true, 'font-weight-bold')}</section>
        
                            <section class="font-size-16px">Was tagged in a content</section>

                            <section>${obj.date}</section>
        
                        </section> 
        
                        <section>

                            <a href="${funcs.app}?means=views&key_viewer=${obj.notify_key}" class="border-radius-20px padding-5-px cursor-pointer display-flex align-items-center justify-content-center hover-background-twitter border-1px-solid hover-color-fb-blue"><i class="fa fa-external-link-alt"></i> &nbsp; see content</a>

                        </section> 

                    </section>

                </section>`;

    };

    funcs.music_notification_template = function (obj, suffix) {

        let seen = ``;

        if (obj.seen === false) {

            seen = `lighter`;

        }

        return `<section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none ${seen}">

                    <section class="display-flex">
        
                        <section class="margin-right-5px">${funcs.round_profile_dumper(obj.persons, false,false)}</section> 
        
                        <section class="flex-1">
        
                            <section>${funcs.text_profile_dumper(obj.persons, false, true, 'font-weight-bold')}</section>
        
                            <section class="font-size-16px">Checked out a song</section> 

                            <section>${obj.date}</section>

                        </section> 
        
                        <section>

                            <a href="${funcs.app}?means=music_info&key=${obj.notify_key}" class="border-radius-20px padding-5-px cursor-pointer display-flex align-items-center justify-content-center hover-background-twitter border-1px-solid hover-color-fb-blue"><i class="fa fa-external-link-alt"></i> &nbsp; see music info</a>

                        </section> 

                    </section>

                </section>`;

    };

    funcs.blog_times_post_notification_template = function (obj, suffix) {

        let seen = ``;

        if (obj.seen === false) {

            seen = `lighter`;

        }

        return `<section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none ${seen}">

                    <section class="display-flex">
        
                        <section class="margin-right-5px">${funcs.round_profile_dumper(obj.persons, false,false)}</section> 
        
                        <section class="flex-1">
        
                            <section>${funcs.text_profile_dumper(obj.persons, false, true, 'font-weight-bold')}</section>
        
                            <section class="font-size-16px">Made a ${obj.category}</section>

                            <section>${obj.date}</section>

                        </section> 
        
                        <section>

                            <a href="${funcs.app}?means=views&key_viewer=${obj.notify_key}" class="border-radius-20px padding-5-px cursor-pointer display-flex align-items-center justify-content-center hover-background-twitter border-1px-solid hover-color-fb-blue"><i class="fa fa-external-link-alt"></i> &nbsp; see ${obj.category}</a>

                        </section> 

                    </section>

                </section>`;

    };

    funcs.post_viewed_notification_template = function (obj, suffix) {

        let seen = ``;

        if (obj.seen === false) {

            seen = `lighter`;

        }

        return `<section class="padding-5-px border-1px-solid border-top-none border-left-none border-right-none ${seen}">

                    <section class="display-flex">
        
                        <section class="margin-right-5px">${funcs.round_profile_dumper(obj.persons, false,false)}</section> 
        
                        <section class="flex-1">
        
                            <section>${funcs.text_profile_dumper(obj.persons, false, true, 'font-weight-bold')}</section>
        
                            <section class="font-size-16px">Viewed a content</section>

                            <section>${obj.date}</section>

                        </section> 
        
                        <section>

                            <a href="${funcs.app}?means=views&key_viewer=${obj.notify_key}" class="border-radius-20px padding-5-px cursor-pointer display-flex align-items-center justify-content-center hover-background-twitter border-1px-solid hover-color-fb-blue"><i class="fa fa-external-link-alt"></i> &nbsp; see content</a>

                        </section> 

                    </section>

                </section>`;

    };


}();
