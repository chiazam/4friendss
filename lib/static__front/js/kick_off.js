/* global funcs, lib, api, name_company */

'use strict';
(function () {

    funcs.userinfo = {};

    funcs.log_frame=true;

    funcs.logout_person = function () {

        let inner = funcs.is_session();

        if (inner === true) {

            sessionStorage.removeItem('login_info');

        }

            funcs.userinfo = {}

            location.href=location.href;

    };

    funcs.logged_in_before = false;

    funcs.post_login_handler=function () {

        if(funcs.logged_in_before===false){

            funcs.logged_in_before = true;

            funcs.store_user_g = funcs.userinfo.logged_user.info.g;

            funcs.off_on_line_template('main_body_hanger');

            setInterval(funcs.main_layoutes, 5);

            setTimeout(funcs.kick_off_start_main,500);

        }else{

            if(funcs.store_user_g !== funcs.userinfo.logged_user.info.g){

                location.href=location.href;

            }

        }
        
    };

    funcs.off_on_line_template = function (element_id) {

        if(funcs.is_session()===false){

            lib.inc_html(funcs.off_template_hmm(), element_id);

        }else if(funcs.is_session()===true){

            lib.inc_html(funcs.on_template_hmm(), element_id);

        }

    };

    funcs.form_uperloggoo = function () {
        return `<section class="display-flex friends-h3 align-items-center"> 

                        <section>
                    
                            <img draggable="false" class="object-fit-cover icon-mager-xx-small" src="${funcs.addImage('icons/friends_wee.jpg', 100, 100, 60)}"/>

                        </section> &nbsp;

                        <section>

                            <section class="font-weight-bold">${name_company}</section>
        
                            <!-- <section class="font-size-10px">udekwe chiazam's platform </section> -->
        
                            <section class="font-size-10px color-fb-blue">Email or text us feedback or ideas at <strong>
                            
                                    <a redirect target="_blank" href="mailto:jochalazacub@gmail.com">
                                    
                                    <u> jochalazacub@gmail.com </u>
                                    
                                    </a>
                                    
                                    </strong> or <strong>
                                    
                                    <a redirect target="_blank" href="tel:+2349037458415">
                                    
                                    <u> +2349037458415</a> </u>
                                    
                                </strong> 
                                
                            </section>

                        </section>

                     </section>`;
    };

    
    funcs.kick_off_start_main = function () {

        funcs.main_starter = funcs.app_starter;

        funcs.main_starter.app_start('container-1');

    };

    funcs.every_observer_ajax = function (e) {

        let str_logged_info = false;

        if(e.logged_in !== false){

            str_logged_info = JSON.stringify(e.logged_in);

        }

        funcs.loger_recieve_oauth(str_logged_info);

    };

}());

(function () {

    funcs.first_in_log_validate = function () {

        let logged = JSON.stringify({});
        
            if(sessionStorage.getItem('login_info')!==null){
    
                logged = sessionStorage.getItem('login_info');
    
            }    
            
            funcs.enroll_session(JSON.parse(logged));
        
    }

    window.addEventListener('load', function () {

        funcs.first_in_log_validate();

        funcs.start_log_waiter();

        funcs.off_on_line_template('main_body_hanger');

    }, 1);
    
})();

(function () {

    funcs.off_template_hmm=function () {

        return `
        
        <section class="z-index-20 padding-5-px heavier border-1px-solid border-right-none border-top-none border-left-none position-sticky">
        
            <section>${funcs.form_uperloggoo()}</section>
        
        </section>

        <section class="justify-content-center" id="card-31">

            <section class="margin-auto max-width-400-px width-98-cent">

                <section class="padding-10-px margin-auto margin-top-10-px max-width-98-cent border-box heavier border-1px-solid margin-bottom-5-px font-size-16px padding-5-px friends-shadow-shadow buttoners-twitter-light-blue">A social platform for blogging and music streaming. Meet people, enlarge your contacts and get connected</section>
        
                <section class="padding-5-px height-150-px">
        
                    <img draggable="false" class="object-fit-cover width-100-cent height-200-px border-radius-10px border-1px-solid" src="${funcs.addImage('icons/vect_connect.jpg', 500, 500, 60)}"/>
            
                </section>

                <section onclick="funcs.trigger_login();" class="padding-5-px cursor-pointer heavier position-relative border-1px-solid border-radius-20px display-flex justify-content-center font-size-16px hover-color-fb-blue friends-shadow-shadow">
            
                    <section class="display-flex align-items-center"> Log or Signup to ${name_company} to continue </section>
            
                    <section class="display-flex align-items-center justify-content-center icon-mager-xxx-small"><i draggable="false" class="fa fa-angle-right"></i></section>
    
                </section>
    
                <section class="awareness-hinter-dope lighter text-align-center margin-top-10-px"> ${name_company} ${device} </section>

            </section>
    
        </section>
    
    </section>

        `;
        
    };

    funcs.on_template_hmm=function () {

        return `
        
        <section class="padding-5-px heavier border-1px-solid border-right-none border-top-none border-left-none">
        
            <section>${funcs.form_uperloggoo()}</section>
        
        </section>
    
        <section class="" id='container'>

        <section id="container-1"></section>

        <section id="container-2">
    
    
    <!-- .................... -->
    
    <section id="container-2-hang">
    
        <section class="display-none card card-1 justify-content-center" id="card-1">

            <section class="hang-over-white-block" id="profile__holder"></section>

        </section>
    
        <section class="display-none card card-2 justify-content-center" id="card-2">

                <section class="hang-over-white-block" id="menu__holder"></section>

        </section>
    
    <section class="display-none card card-30 justify-content-center" id="card-30">

                <section class="hang-over-white-block" id="tie_holder"></section>

        </section>
    
    <section class="display-none card card-29 justify-content-center" id="card-29">

                <section class="hang-over-white-block" id=""></section>

        </section>
    
    <section class="display-none card card-28 justify-content-center" id="card-28">

                <section class="hang-over-white-block" id=""></section>

        </section>
    
    <section class="display-none card card-27 justify-content-center" id="card-27">

                <section class="hang-over-white-block" id=""></section>

        </section>
    
    <section class="display-none card card-26 justify-content-center" id="card-26">

                <section class="hang-over-white-block" id=""></section>

        </section>
    
    <section class="display-none card card-25 justify-content-center" id="card-25">

                <section class="hang-over-white-block" id="dialogue_music_holder"></section>

        </section>
    
        <section class="display-none card card-18 justify-content-center" id="card-18">

                <section class="hang-over-white-block" id="messageholder"></section>

        </section>
    
        <section class="display-none card card-19 justify-content-center" id="card-19">

                <section class="hang-over-white-block" id="music_info_holder"></section>

        </section>
    
        <section class="display-none card card-20 justify-content-center" id="card-20">

                <section class="hang-over-white-block" id="my_music_holder"></section>

        </section>
    
        <section class="display-none card card-21 justify-content-center" id="card-21">

                <section class="hang-over-white-block" id="dialogue_holder"></section>

        </section>
    
        <section class="display-none card card-22 justify-content-center" id="card-22">

                <section class="hang-over-white-block" id="activites_holder"></section>

        </section>
    
        <section class="display-none card card-23 justify-content-center" id="card-23">

                <section class="hang-over-white-block" id="notification_holder"></section>

        </section>
    
        <section class="display-none card card-24 justify-content-center" id="card-24">

                <section class="hang-over-white-block" id="search_holder"></section>

        </section>

        <section class="display-none card card-3 justify-content-center" id="card-3">

            <section class="hang-over-white-block" id="personal_music_holder"></section>

        </section>
    
        <section class="display-none card card-17 justify-content-center" id="card-17">

            <section class="hang-over-white-block" id="times_content_holder"></section>

        </section>

        <section class="display-none card card-4 justify-content-center" id="card-4">

            <section class="hang-over-white-block" id="views_content_holder"></section>

        </section>
    
        <section class="display-none card card-5 justify-content-center" id="card-5">

            <section class="hang-over-white-block" id="contact_info_holder"></section>

        </section>
    
        <section class="display-none card card-8 justify-content-center" id="card-8">

            <section class="hang-over-white-block" id="bookmarks__holder"></section>

        </section>
    
        <section class="display-none card card-9 justify-content-center" id="card-9">

            <section class="hang-over-white-block" id="comment_table"></section>

        </section>

        <section class="display-none card card-10 justify-content-center" id="card-10">

            <section class="hang-over-white-block" id="gallery_ist_id"></section>

        </section>

        <section class="display-none card card-11 justify-content-center" id="card-11">

            <section class="hang-over-white-block" id="selector_lift"></section>

        </section>
    
        <section class="display-none card card-12 justify-content-center" id="card-12">

            <section class="hang-over-white-block" id="whatsnewholder"></section>

        </section>
    
        <section class="display-none card card-13 justify-content-center" id="card-13">
        
            <section class="hang-over-white-block" id="404_pipper"></section>
    
        </section>
    
    </section>
    
    <!-- .................... -->
    
            <section id="container-2-main">
    
                <section class="margin-auto border-box" id="container-2-contenter"></section>
    
                <section class="border-box padding-5-px margin-auto" id="container-2-next"></section>
    
            </section>

        </section>

        <!-- <section id="container-3"></section> -->

    </section>
    
<section class="display-block">
    
        <section class='z-index-21 position-fixed overflow-hidden overflow-y-scroll flex-column card align-items-center display-flex display-none card-16' id="card-16" data-noroute='true'>

                <section class="width-100-cent border-box display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px">
    
                    <section class="flex-1"></section>
    
                    <section class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2" onclick="$('tagged-others-show').innerHTML='';lib.toggle_class_ele('display-none', this.parentNode.parentNode);"><i class="fa fa-times"></i></section>

                </section>
    
                <section id='tagged-others-show' class="tagged-others-show height-100-cent width-100-cent display-flex justify-content-center align-items-center"></section>

            </section>
    
    <section class="display-none z-index-21 card card-15 position-fixed overflow-hidden overflow-y-scroll justify-content-center" id="card-15">

            <section class="hang-over-white-block" id="edit_table_flex"></section>
    
        </section>
    
        <section class="z-index-21 display-none position-fixed overflow-hidden overflow-y-scroll card card-7 justify-content-center" id="card-7">
    
            <section class="hang-over-white-block" id="option-spender"></section>

        </section>
    
        <section class="z-index-21 display-none position-fixed overflow-hidden overflow-y-scroll card card-14 justify-content-center" id="card-14">
    
            <section class="hang-over-white-block" id="error-giver-show"></section>

        </section>
    
    </section>

        `;
        
    };
    
})();

