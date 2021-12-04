'use strict';

(function () {

    funcs.userinfo = {};

    funcs.parse_loggin = function () {

        let inner = funcs.is_session();

        if (inner === true) {

            funcs.userinfo = JSON.parse(sessionStorage.getItem('login_info'));

        }

    };

    if (funcs.is_trusted_asker() === false) {

        window.location.href = location.origin + location.pathname;

    }

    window.addEventListener('load', function () {

        let logged = JSON.stringify({});

        let url_info = lib.url_info_extractor(window.location);

        if (url_info.hasOwnProperty('hash_array') && url_info.hash_array.hasOwnProperty('logged')) {

            logged = funcs.decode_url(url_info.hash_array.logged);

        }

        funcs.loger_start_oauth(logged);

    }, 1);

    funcs.is_logged_in = function () {

        let inner = funcs.is_session();

        if (inner === false) {

            return false;

        } else if (inner === true) {

            funcs.parse_loggin();

            return true;

        }

    };

    funcs.start_afresh = function () {

        funcs.setDocumentIcon(`rel__page_icon`, `icons/friends_wee.jpg`);
        funcs.kick___offf___();

    };

    funcs.kick___offf___ = function () {

        funcs.start_all_template('main_body_hanger');
        funcs.start_all_js_caller();

    };

    funcs.intro_logger_display = function () {

        let asker = funcs.is_trusted_asker();

        if (domain === asker) {

            return `<section class="height-60-px"></section>

            <section class="margin-auto max-width-400-px border-box">

                <section class="padding-10-px margin-auto margin-top-10-px max-width-98-cent border-box heavier border-1px-solid margin-bottom-5-px font-size-16px padding-5-px friends-shadow-shadow buttoners-twitter-light-blue">A social platform for blogging and music streaming. Meet people, enlarge your contacts and get connected</section>
    
                <section class="padding-5-px">
    
                    <img draggable="false" class="object-fit-cover width-100-cent height-150-px border-radius-10px border-1px-solid" src="${funcs.addImage('icons/vect_connect.jpg', 500, 500, 60)}"/>
        
                </section>

            </section>
`;

        } else {

            return `<section class="height-60-px"></section>

            <section class="margin-auto max-width-400-px border-box">

                <section class="padding-10-px margin-auto margin-top-10-px max-width-98-cent border-box heavier border-1px-solid margin-bottom-5-px font-size-16px padding-5-px friends-shadow-shadow buttoners-twitter-light-blue">You are login in to <b>${asker}</b> via <b>4friendss</b>, some of your information would be shared. don't panic yet, <b>${asker}</b> is also a <b>4friendss</b> platform.</section>

            </section>
            
            `;

        }

    };

    funcs.start_all_template = function (element_id) {

        lib.inc_html(``, element_id);

        lib.inc_html(`
        
        <section class="z-index-20 padding-5-px heavier border-1px-solid border-right-none border-top-none border-left-none position-sticky">
        
            <section>${funcs.form_uperloggoo()}</section>
        
        </section>
        
         <section class="display-block">
        
        <section class="dislay-none z-index-21 display-none card card-15 position-fixed overflow-hidden overflow-y-scroll justify-content-center" id="card-15">

                <section class="hang-over-white-block" id="edit_table_flex"></section>
        
            </section>

            <section class="display-none position-fixed overflow-hidden overflow-y-scroll card card-6 justify-content-center" id="card-6" style="background:var(--darker-black-moder);">

                <section class="hang-over-white-block" id="boss_topp_odit"></section>
        
            </section>

            <section class="display-none position-fixed overflow-hidden overflow-y-scroll card card-31 justify-content-center" id="card-31" style="background:var(--darker-black-moder);">

                ${funcs.intro_logger_display()}   

                <section class="hang-over-white-block" id="boss_topp_odit_2"></section>
        
            </section>
        
            <section class="z-index-21 display-none position-fixed overflow-hidden overflow-y-scroll card card-7 justify-content-center" id="card-7">
        
                <section class="hang-over-white-block" id="option-spender"></section>

            </section>
        
        <section class="display-none position-fixed overflow-hidden overflow-y-scroll card card-13 justify-content-center" id="card-13">
        
                <section class="hang-over-white-block" id="404_pipper"></section>

            </section>
        
        <section class="display-none position-fixed overflow-hidden overflow-y-scroll card card-14 justify-content-center" id="card-14">
        
            <section class="hang-over-white-block" id="error-giver-show"></section>

        </section>
        
        </section>

            `, element_id);

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

    funcs.start_all_js_caller = function () {

        let logged_inn = funcs.is_logged_in();

        if (logged_inn === false) {

            lib.inc_html(`<section class='stable-platformers margin-auto width-98-cent'>
        
                <section id='logger-boss-effiecient_2' class='beticey-logout-template'> </section>

        </section>`, 'boss_topp_odit_2');

            let logout_starter_ = funcs.logout_starter;

            logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log in');

            lib.remove_class_ele('display-none', $('logger-boss-effiecient_2').parentNode.parentNode.parentNode);

            lib.add_class_ele('display-block', $('logger-boss-effiecient_2').parentNode.parentNode.parentNode);

        } else if (logged_inn === true) {

            let login_starter_ = funcs.login_starter;

            login_starter_.kick_off_login();

        }

    };

    funcs.every_observer_ajax = function (e) {

        if (e.logged_in === false) {

            if (funcs.logged_in__mainer !== false) {
                funcs.logged_in__mainer = false;
                funcs.re_login_trigger();
            }

        } else {

            let logout_starter_ = funcs.logout_starter;

            if (e.logged_in.updated_login_token === true) {

                logout_starter_.log_me_in_now(e.logged_in, false);

            } else {
                logout_starter_.log_me_in_now(e.logged_in, null);

            }
        }

    };

    funcs.re_login_trigger = function () {

        let logout_starter_ = funcs.logout_starter;

        lib.inc_html(`<section class='stable-platformers margin-auto width-98-cent'>
        
                <section id='logger-boss-effiecient_2' class='beticey-logout-template'> </section>

        </section>`, 'boss_topp_odit_2');

        logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log confirm');

        lib.remove_class_ele('display-none', $('logger-boss-effiecient_2').parentNode.parentNode.parentNode);

        lib.add_class_ele('display-block', $('logger-boss-effiecient_2').parentNode.parentNode.parentNode);
    };

}());

(function () {

    funcs.logout_person = function (reload = false) {

        funcs.userinfo = {};

        if (sessionStorage.getItem('login_info') !== null) {

            sessionStorage.removeItem('login_info');

        }

        if (reload === true) {

            window.location.href = lib.url_remove_search_hash(window.location.href, true, false)

        }

    };

    funcs.loger_send_oauth = function () {

        let user_info = funcs.userinfo;

        user_info.updated_login_token = true;

        let logged_in = JSON.stringify(user_info);

        funcs.logout_person();

        let is_iframe_open = funcs.is_iframe();

        if (is_iframe_open.is_frame === true || is_iframe_open.is_opened === true) {

            if (is_iframe_open.is_frame === true) {

                lib.post_message(window.parent, { logged: logged_in }, funcs.is_trusted_asker('origin'));

            } else if (is_iframe_open.is_opened === true) {

                lib.post_message(window.opener, { logged: logged_in }, funcs.is_trusted_asker('origin'));

                window.close();

            }

        } else {

            window.location.href = `${lib.url_remove_search_hash(funcs.is_trusted_asker(true), true, false)}#logged=${logged_in}`;

        }

    };

})();