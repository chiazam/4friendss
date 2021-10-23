/* global funcs, lib, device, api, name_company, logout_starter_ */
'use strict';
!function () {

    funcs.login_starter = {

        kick_off_login: function () {

            if (funcs.userinfo.account_ist.hasOwnProperty('account') && funcs.userinfo.account_ist.hasOwnProperty('mis_conduct')) {

                this.account_proccess_start();

            } else {

                if((funcs.user_login_token!==funcs.userinfo.login_token)&&(!funcs.userinfo.hasOwnProperty('from_asker'))){
                    
                    funcs.loger_send_oauth();
                
                }

            }

        },

        account_proccess_start: function () {

            if (funcs.userinfo.account_ist.mis_conduct === "unverified") {

                this.account_verify__process_start();

                funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.userinfo.logged_user.info.full} (account verification)`);

            } else if (funcs.userinfo.account_ist.mis_conduct === 'no birthdate') {

                funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.userinfo.logged_user.info.full} (update birthday)`);

                this.account_birthday__process_start();

            } else if (funcs.userinfo.account_ist.mis_conduct === 'no gender') {

                funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.userinfo.logged_user.info.full} (update gender)`);

                this.account_gender__process_start();
            } else if (funcs.userinfo.account_ist.mis_conduct === 'no origin') {

                funcs.setDocumentTitle('my_title', `${name_company} - ${funcs.userinfo.logged_user.info.full} (update origin)`);

                this.account_origin__process_start()

            }

        },

        account_verify__process_start: function () {

            lib.inc_html(`<section class='stable-platformers margin-auto width-98-cent'>

                <section class="height-60-px"></section>
        
                <section id='logger-boss-effiecient' class='beticey-logout-template'> </section>

        </section>`, 'boss_topp_odit');

            lib.inc_html(this.verify_account_template(funcs.userinfo.logged_user.info.g, funcs.userinfo.logged_user.info.b), 'logger-boss-effiecient');

            lib.remove_class_ele('display-none', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            lib.add_class_ele('display-flex', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            this.aid_verify();

        },

        verify_account_template: function (g, b) {
            return `
        
                    <section> 

                        <form id='login__forms' action="${api}api/verify/?geeip=${g}&&beeip=${b}" method="POST" enctype="multipart/form-data">
            
                        <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="verify" placeholder="insert the recieved token"/></section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> check your email if not seen check your email spam, please if in spam help us tag it not spam, we sent a verification token to you please type it into the input labelled token</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button data-after_spin='verify me' id='pufflar_login_button' class="loggers-lock-inputs">verify me</button></section>
                            
                            </section>

                        </form>

                    </section>
            
                    <section class=""> 
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class='display-none' id="hold_resent_token_reply">  </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button data-after_spin='Not recieved token yet? resend token' id='pricky_resend_token_butt' onclick="  let login_starter_ = funcs.login_starter; login_starter_.resend_token_kicker(this.id,'${g}','${b}');" class="heavier loggers-lock-inputs">Not recieved token yet? resend token</button>

                                </section>
                            
                            </section>

                    </section>
            
                    <section class="awareness-hinter-dope text-align-center"> ${name_company} ${device} </section>
        
`;
        },

        resend_token_json_handler: function (element_id, json_result) {

            try {

                funcs.every_observer_ajax(json_result);

                let result = json_result['api_result'];

                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('success')) {

                    $(element_id).classList.remove('buttoners-goog-red');
                    $(element_id).classList.add('buttoners-fb-green');
                    this.show_error(element_id, `${result['success']}`);
                    setTimeout(function () {

                        let logout_starter_ = funcs.logout_starter;
                        logout_starter_.call_form_steps('logger-boss-effiecient', 'log in');
                    }, 3000);
                } else if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `${result['failed']}`);
                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },

        resend_token_kicker: function (element_id, g, b) {

            let parent = this;

            funcs.ajax_trigger(`${api}api/verify/resend_token.php?geeip=${g}&&beeip=${b}&&4friendss_user=${funcs.userinfo.login_token}`, element_id, funcs.make_spinner_ajax, funcs.formmaker()).then(function (e) {

                parent.resend_token_json_handler('hold_resent_token_reply', e);
            }).catch(function (e) {

                funcs.all_catches_(e);
            });

        }, show_error: function (id, word = ``) {

            $(id).innerHTML = word;
            if (word.length === 0) {

                $(id).classList.remove('display-block');
                $(id).classList.remove('display-flex');
                $(id).classList.add('display-none');
            } else if (word.length > 0) {
                $(id).classList.add('display-block');
                $(id).classList.remove('display-none');
        }

        },

        resend_token_json_handler: function (element_id, json_result) {

            try {

                let result = json_result['api_result'];

                if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `<b style="color:var(--frend-redder);">${result['failed']}</b>`);
                } else if (result.hasOwnProperty('permission')) {
                    let logout_starter_ = funcs.logout_starter;
                    logout_starter_.log_me_in_now(json_result['logged_in']);
                } else if (result.hasOwnProperty('success')) {

                    this.show_error(element_id, `<b style="color:var(--fb-green);">${result['success']}</b>`);

                    setTimeout(function () {

                        let login_starter_ = funcs.login_starter;

                        login_starter_.show_error(element_id, ``);
                    }, 3000);

                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },

        verify_json_handler: function (element_id, json_result) {

            try {

                funcs.every_observer_ajax(json_result);

                let result = json_result['api_result'];

                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('permission')) {
                    let logout_starter_ = funcs.logout_starter;
                    logout_starter_.log_me_in_now(json_result['logged_in']);
                } else if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `${result['failed']}`);
                } else if (result.hasOwnProperty('success')) {

                    let logout_starter_ = funcs.logout_starter;

                    if (logout_starter_.log_me_in_now(json_result['logged_in']) === true) {

                        funcs.userinfo.account_ist.mis_conduct = 'no birthdate';

                        logout_starter_.log_me_in_now(funcs.userinfo);

                    }

                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },

        aid_verify: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {
                e.stopPropagation();
                e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').verify.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your verification token in the field labelled verify token`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({asker:funcs.is_trusted_asker('origin'),'4friendss_user':funcs.userinfo.login_token}, 'login__forms')).then(function (e) {
                        parent.verify_json_handler('login-error-shower', e);
                    }).catch(function (e) {

                        funcs.all_catches_(e);
                    });
                }
            }, 1);
        },

        birthday_template: function () {

            return `
        
                    <section> 

                        <form id="login__forms" action="${api}api/set_profile/birth_date_adder.php" method="POST" enctype="multipart/form-data">
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="day" placeholder="your day of birth"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="month" placeholder="your month of birth"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input id="them-password" class="loggers-lock-inputs" spellcheck="false" autocomplete="off" name="year" placeholder="your year of birth" type="text"/></section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> Help us with the accurate birth information, so that we can give you the best experience for your age</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button' data-after_spin="Submit date of birth" class="loggers-lock-inputs">Submit date of birth</button></section>
                            
                            </section>

                        </form>

                    </section>
            `;

        },

        account_birthday__process_start: function () {

            lib.inc_html(`<section class='stable-platformers margin-auto width-98-cent'>

            <section class="height-60-px"></section>
    
            <section id='logger-boss-effiecient' class='beticey-logout-template'> </section>

        </section>`, 'boss_topp_odit');

            lib.inc_html(this.birthday_template(), 'logger-boss-effiecient');

            lib.remove_class_ele('display-none', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            lib.add_class_ele('display-flex', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            this.aid_birthdate();

        },

        birthdate_json_handler: function (element_id, json_result) {

            try {

                funcs.every_observer_ajax(json_result);

                let result = json_result['api_result'];

                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('permission')) {
                    let logout_starter_ = funcs.logout_starter;
                    logout_starter_.log_me_in_now(json_result['logged_in']);
                } else if (result.hasOwnProperty('success')) {

                    let logout_starter_ = funcs.logout_starter;

                    if (logout_starter_.log_me_in_now(json_result['logged_in']) === true) {

                        funcs.userinfo.account_ist.mis_conduct = 'no gender';

                        logout_starter_.log_me_in_now(funcs.userinfo);

                    }

                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },

        aid_birthdate: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {
                e.stopPropagation();
                e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').day.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your day of birth in field labelled day`);
                } else if ($('login__forms').month.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your month of birth in field labelled month`);
                } else if ($('login__forms').year.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your year of birth in field labelled year`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({asker:funcs.is_trusted_asker('origin'),'4friendss_user':funcs.userinfo.login_token}, 'login__forms')).then(function (e) {
                        parent.birthdate_json_handler('login-error-shower', e);
                    }).catch(function (e) {

                        funcs.all_catches_(e);
                    });
                }
            }, 1);
        },

        account_gender__process_start: function () {

            lib.inc_html(`<section class='stable-platformers margin-auto width-98-cent'>

            <section class="height-60-px"></section>
    
            <section id='logger-boss-effiecient' class='beticey-logout-template'> </section>

        </section>`, 'boss_topp_odit');

            lib.inc_html(this.gender_template(), 'logger-boss-effiecient');

            lib.remove_class_ele('display-none', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            lib.add_class_ele('display-flex',  $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            this.aid_gender();

        },

        gender_template: function () {

            return `<section> 

                        <form id="login__forms" action="${api}api/set_profile/tele_gender_setters.php" method="POST" enctype="multipart/form-data">
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
            
                            <section class="display-flex">

                                <section class="display-none"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="gender" placeholder="your gender"/></section>
            
                                    <section onclick="$('login__forms').gender.value=this.dataset.value;this.children[0].children[0].className='far fa-check-square';this.nextElementSibling.children[1].children[0].className='far fa-square';" data-value="male" class="padding-5-px loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex flex-1">
            
                                        <section class="align-items-center display-flex"><i class="far fa-square"></i></section>

                                        <section class="text-align-center flex-1">male</section>

                                    </section>

                                    <section onclick="$('login__forms').gender.value=this.dataset.value;this.children[1].children[0].className='far fa-check-square';this.previousElementSibling.children[0].children[0].className='far fa-square';" data-value="female" class="padding-5-px loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex flex-1">

                                        <section class="text-align-center flex-1">female</section>

                                        <section class="align-items-center display-flex"><i class="far fa-square"></i></section>

                                    </section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="phone" placeholder="your telephone (optional)"/></section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> We will be needing your gender and your telephone, note that the telephone is optional but the gender is needed for accurate categorizing of information</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button' data-after_spin="Submit gender and telephone" class="loggers-lock-inputs">Submit gender and telephone</button></section>
                            
                            </section>

                        </form>

                    </section>`;

        },

        aid_gender: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {
                e.stopPropagation();
                e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').gender.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your gender of birth in field labelled gender`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({asker:funcs.is_trusted_asker('origin'),'4friendss_user':funcs.userinfo.login_token}, 'login__forms')).then(function (e) {
                        parent.gender_json_handler('login-error-shower', e);
                    }).catch(function (e) {
                        funcs.all_catches_(e);
                    });
                }
            }, 1);

        },

        gender_json_handler: function (element_id, json_result) {

            try {

                funcs.every_observer_ajax(json_result);

                let result = json_result['api_result'];

                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('permission')) {
                    let logout_starter_ = funcs.logout_starter;
                    logout_starter_.log_me_in_now(json_result['logged_in']);
                } else if (result.hasOwnProperty('success')) {

                    let logout_starter_ = funcs.logout_starter;

                    if (logout_starter_.log_me_in_now(json_result['logged_in']) === true) {

                        funcs.userinfo.account_ist.mis_conduct = 'no origin';

                        logout_starter_.log_me_in_now(funcs.userinfo);

                    }

                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },

        origin_template: function () {

            return `<section> 

                        <form id="login__forms" action="${api}api/set_profile/origin_setters.php" method="POST" enctype="multipart/form-data">
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section id='country-parent-holder' onclick="countries.set_country_input('country-parent-holder','state-parent-holder');" class="flex-1"><input onfocus="this.blur();" class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="country" placeholder="your country of origin" onchange="if(lib.trim(this.value).length>0){lib.remove_class('display-none', 'fwiper--jjef');lib.add_class('display-block', 'fwiper--jjef');}else{lib.add_class('display-none', 'fwiper--jjef');lib.remove_class('display-block', 'fwiper--jjef');}"/></section>
                                   
                            </section>
            
                        <section id="fwiper--jjef" class="display-none">
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section id='state-parent-holder' onclick="states.function_states_chai($('country-parent-holder').children[0].value,'state-parent-holder');" class="flex-1"><input onfocus="this.blur();" class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="state" placeholder="your state of origin"/></section>
                                   
                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="city" placeholder="your city of origin"/></section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="LGA" placeholder="your street of residence/LGA of origin"/></section>

                            </section>
            
                    </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> We will be needing your origin, so we can send you tips on what is happening around you</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button' data-after_spin="Submit place of origin info" class="loggers-lock-inputs">Submit place of origin</button></section>
                            
                            </section>

                        </form>

                    </section>`;

        },

        account_origin__process_start: function () {

            lib.inc_html(`<section class='stable-platformers margin-auto width-98-cent'>

            <section class="height-60-px"></section>
    
            <section id='logger-boss-effiecient' class='beticey-logout-template'> </section>

            </section>`, 'boss_topp_odit');

            lib.inc_html(this.origin_template(), 'logger-boss-effiecient');

            lib.remove_class_ele('display-none', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            lib.add_class_ele('display-flex', $('logger-boss-effiecient').parentNode.parentNode.parentNode);

            this.aid_origin();

        },

        aid_origin: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {
                e.stopPropagation();
                e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').country.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your country of origin in field labelled country`);
                } else if ($('login__forms').city.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your city of origin in field labelled city`);
                } else if ($('login__forms').LGA.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your LGA of origin/street of residence in field labelled LGA`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({asker:funcs.is_trusted_asker('origin'),'4friendss_user':funcs.userinfo.login_token}, 'login__forms')).then(function (e) {
                        parent.origin_json_handler('login-error-shower', e);
                    }).catch(function (e) {


                        funcs.all_catches_(e);
                    });
                }
            }, 1);

        },

        origin_json_handler: function (element_id, json_result) {

            try {

                funcs.every_observer_ajax(json_result);

                let result = json_result['api_result'];

                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('permission')) {
                    let logout_starter_ = funcs.logout_starter;
                    logout_starter_.log_me_in_now(json_result['logged_in']);
                } else if (result.hasOwnProperty('success')) {

                    let logout_starter_ = funcs.logout_starter;

                    if (logout_starter_.log_me_in_now(json_result['logged_in']) === true) {

                        funcs.userinfo.account_ist = true;

                        logout_starter_.log_me_in_now(funcs.userinfo);

                    }

                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },

    };

}();
