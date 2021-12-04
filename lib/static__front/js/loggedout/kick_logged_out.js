/* global funcs */
'use strict';
!function () {

    funcs.logout_starter = {

        login_template: `
        
                    <section> 

                        <form action="${api}api/log_in/" method="POST" id='login__forms_2' enctype="multipart/form-data">  
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="email" placeholder="registered email address"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input id="them-password" class="loggers-lock-inputs" type="password" spellcheck="false" autocomplete="off" name="password" placeholder="registered password"/></section>
        
                                <section class="loggers-lock-symbol-holders align-items-center display-flex"> <i id="see-unseen-password" onclick="funcs.password_changer('see-unseen-password','them-password');" class='fa fa-eye'></i> </section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> By login into your account you accept our ability to set cookies and retain some login information for your accounts security as stated by our cookie policy</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button_2' data-after_spin="Log in" class="loggers-lock-inputs">Log in</button></section>
                            
                            </section>

                        </form>

                    </section>
            
                    <section class=""> 
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'sign up');};" class="heavier loggers-lock-inputs">Don't have an account? sign up</button>

                                </section>
                            
                            </section>
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button class="heavier loggers-lock-inputs" onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'recover password');};">Did you just forget your password? recover</button>

                                    </section>
                            
                            </section>

                    </section>
            
                    <section class="awareness-hinter-dope text-align-center"> ${name_company} ${device} </section>
        
`,
        reset_template: `
        
                    <section> 

                        <form id="login__forms" action="${api}api/reset_password/send_reset.php" method="POST" enctype="multipart/form-data">
            
                        <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="email" placeholder="registered email address"/></section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> By reseting your account you accept our ability to send you emails to aid your account recovery</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button' data-after_spin="Recover account" class="loggers-lock-inputs">Recover account</button></section>
                            
                            </section>

                        </form>

                    </section>
            
                    <section class=""> 
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"></section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button class="heavier loggers-lock-inputs" onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'sign up');};">Don't have an account? sign up</button>

                                </section>
                            
                            </section>
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center"><button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log in');};" class="loggers-lock-inputs">Have an account? log in</button></section>
                            
                            </section>
                
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'update password');};" class="heavier loggers-lock-inputs">Have a recover account token? Update password</button>

                                    </section>
                            
                            </section>

                    </section>
            
                    <section class="awareness-hinter-dope text-align-center"> ${name_company} ${device} </section>
        
`,
        sign_template: `
        
                    <section> 

                        <form id="login__forms" action="${api}api/sign_up/" method="POST" enctype="multipart/form-data">
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="fullname" placeholder="your fullname"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="email" placeholder="your email address"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1">

                                    <input id="them-password" class="loggers-lock-inputs" type="password" spellcheck="false" autocomplete="off" name="password" placeholder="your password"/>

                                </section>
        
                                <section class="loggers-lock-symbol-holders align-items-center display-flex"> <i onclick="funcs.password_changer('see-unseen-password','them-password');" id="see-unseen-password" class='fa fa-eye'></i> </section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> By creating an account you accept to our terms, conditions and policies wholly ok!</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button' data-after_spin="Sign up" class="loggers-lock-inputs">Sign up</button></section>
                            
                            </section>

                        </form>

                    </section>
            
                    <section class=""> 
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log in');};" class="heavier loggers-lock-inputs">Have an account? log in</button>

                                    </section>
                            
                            </section>
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'recover password');};;" class="heavier loggers-lock-inputs">Did you just forget your password? recover</button>

                                </section>
                            
                            </section>

                    </section>
            
                    <section class="awareness-hinter-dope text-align-center"> ${name_company} ${device} </section>
        
`,
        update_password_template: `
        
                    <section> 

                        <form id="login__forms" action="${api}api/reset_password/" method="POST" enctype="multipart/form-data">
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="token" placeholder="recover account token sent to your email"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="email" placeholder="your email address"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1">

                                    <input id="them-password" class="loggers-lock-inputs" type="password" spellcheck="false" autocomplete="off" name="password" placeholder="new password"/>

                                </section>
        
                                <section class="loggers-lock-symbol-holders align-items-center display-flex"> <i onclick="funcs.password_changer('see-unseen-password','them-password');" id="see-unseen-password" class='fa fa-eye'></i> </section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> We need your recover account token sent to your email, in other to help you update your password</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button' data-after_spin="Update password" class="loggers-lock-inputs">Update password</button></section>
                            
                            </section>

                        </form>

                    </section>
            
                    <section class=""> 
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log in');};" class="heavier loggers-lock-inputs">Have an account? log in</button>

                                    </section>
                            
                            </section>
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex overflow-hidden">
            
                                <section class="flex-1 display-flex justify-content-center">

                                    <button onclick="{let logout_starter_ = funcs.logout_starter; logout_starter_.call_form_steps('logger-boss-effiecient_2', 'recover password');};;" class="heavier loggers-lock-inputs">Lost your token? resend</button>

                                </section>
                            
                            </section>

                    </section>
            
                    <section class="awareness-hinter-dope text-align-center"> ${name_company} ${device} </section>
        
`,
        template: function (container, html) {

            $(container).innerHTML = html;
        },
        call_form_steps: function (id_element, type) {

            let template = ``;
            if (type === 'log in') {

                template = this.login_template;
            } else if (type === 'sign up') {

                template = this.sign_template;
            } else if (type === 'recover password') {

                template = this.reset_template;
            } else if (type === 'log confirm') {

                template = this.login_saved_template()

            } else if (type === 'update password') {

                template = this.update_password_template;
            }
            this.template(id_element, template);
            if (type === 'log confirm') {
                funcs.setDocumentTitle('my_title', `${name_company} - log in and continue with us`);
                this.aid_login(true);
            } else if (type === 'log in') {
                funcs.setDocumentTitle('my_title', `${name_company} - log in and join us`);
                this.aid_login();
            } else if (type === 'sign up') {
                funcs.setDocumentTitle('my_title', `${name_company} - sign up and join us`);
                this.aid_signup();
            } else if (type === 'recover password') {

                funcs.setDocumentTitle('my_title', `${name_company} - recover your password`);
                this.aid_reset();
            } else if (type === 'update password') {

                funcs.setDocumentTitle('my_title', `${name_company} - update your password`);
                this.aid_update_password();
            }

        },
        show_error: function (id, word = ``) {

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
        aid_reset: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {

                e.stopPropagation(); e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').email.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your email in the field labelled email`);
                } else if (!lib.is_email($('login__forms').email.value)) {

                    parent.show_error('login-error-shower', `Fill in a valid email, this email is invalid`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({}, 'login__forms')).then(function (e) {
                        parent.reset_json_handler('login-error-shower', e);
                    }).catch(function (e) {
                        funcs.all_catches_(e);
                    });
                }
            }, 1);
        },
        aid_signup: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {
                e.stopPropagation(); e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').fullname.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your fullname in the field labelled fullname`);
                } else if (!lib.is_fullname($('login__forms').fullname.value)) {

                    parent.show_error('login-error-shower', `Fill in just two of your names (first and second names)`);
                } else if ($('login__forms').email.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your email in the field labelled email`);
                } else if (!lib.is_email($('login__forms').email.value)) {

                    parent.show_error('login-error-shower', `Fill in a valid email, this email is invalid`);
                } else if ($('login__forms').password.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your password in the field labelled password`);
                } else if ($('login__forms').password.value.length < 10) {

                    parent.show_error('login-error-shower', `Fill in your password with not less than 10 characters`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({ asker: funcs.is_trusted_asker('origin') }, 'login__forms')).then(function (e) {
                        parent.signup_json_handler('login-error-shower', e);
                    }).catch(function (e) {
                        funcs.all_catches_(e);
                    });
                }
            }, 1);
        },
        aid_update_password: function () {

            let parent = this;
            lib.event_attach($('login__forms'), 'submit', function (e) {
                e.stopPropagation(); e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms').token.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your token in the field labelled token`);
                } else if ($('login__forms').email.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your email in the field labelled email`);
                } else if (!lib.is_email($('login__forms').email.value)) {

                    parent.show_error('login-error-shower', `Fill in a valid email, this email is invalid`);
                } else if ($('login__forms').password.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your password in the field labelled password`);
                } else if ($('login__forms').password.value.length < 10) {

                    parent.show_error('login-error-shower', `Fill in your password with not less than 10 characters`);
                } else {

                    funcs.ajax_trigger($('login__forms').action, 'pufflar_login_button', funcs.make_spinner_ajax, funcs.formmaker({}, 'login__forms')).then(function (e) {
                        parent.update_password_handler('login-error-shower', e);
                    }).catch(function (e) {
                        funcs.all_catches_(e);
                    });
                }
            }, 1);
        },
        aid_login: function (saved = false) {

            let parent = this;

            lib.event_attach($('login__forms_2'), 'submit', function (e) {
                e.stopPropagation(); e.preventDefault();
                parent.show_error('login-error-shower', ``);
                if ($('login__forms_2').email.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your registered email in the field labelled email`);
                } else if (!lib.is_email($('login__forms_2').email.value)) {

                    parent.show_error('login-error-shower', `Fill in a valid email, this email is invalid`);
                } else if ($('login__forms_2').password.value.length === 0) {

                    parent.show_error('login-error-shower', `Fill in your password in the field labelled password`);
                } else if ($('login__forms_2').password.value.length < 6) {

                    parent.show_error('login-error-shower', `Fill in your password with not less than 6 characters`);
                } else {

                    funcs.ajax_trigger($('login__forms_2').action, 'pufflar_login_button_2', funcs.make_spinner_ajax, funcs.formmaker({ asker: funcs.is_trusted_asker('origin'), 'device': device }, 'login__forms_2')).then(function (e) {
                        parent.login_json_handler('login-error-shower', e, saved);
                    }).catch(function (e) {

                        funcs.all_catches_(e);
                    });
                }
            }, 1);
        },

        login_json_handler: function (element_id, json_result, saved = false) {

            try {

                let result = json_result['api_result'];

                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);

                } else if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `${result['failed']}`);

                } else if (result.hasOwnProperty('success')) {

                    let logout_starter_ = funcs.logout_starter;

                    logout_starter_.log_me_in_now(json_result['logged_in'], !(saved));

                }

            } catch (e) {

                funcs.all_catches_(e);

            }

        },
        reset_json_handler: function (element_id, json_result) {

            try {

                let result = json_result['api_result'];
                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('success')) {

                    $(element_id).classList.remove('buttoners-goog-red');
                    $(element_id).classList.add('buttoners-fb-green');
                    this.show_error(element_id, `${result['success']}`);
                    setTimeout(function () {

                        let logout_starter_ = funcs.logout_starter;
                        logout_starter_.call_form_steps('logger-boss-effiecient_2', 'update password');
                    }, 3000);
                } else if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `${result['failed']}`);
                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },
        signup_json_handler: function (element_id, json_result) {

            try {

                let result = json_result['api_result'];
                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('success')) {

                    $(element_id).classList.remove('buttoners-goog-red');
                    $(element_id).classList.add('buttoners-fb-green');
                    this.show_error(element_id, `${result['success']}`);
                    setTimeout(function () {

                        let logout_starter_ = funcs.logout_starter;
                        logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log in');
                    }, 3000);
                } else if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `${result['failed']}`);
                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },
        update_password_handler: function (element_id, json_result) {

            try {

                let result = json_result['api_result'];
                if (result.hasOwnProperty('mis_conduct') && result.hasOwnProperty('field')) {

                    this.show_error(element_id, `${result['mis_conduct']} ${result['field']}`);
                } else if (result.hasOwnProperty('success')) {

                    $(element_id).classList.remove('buttoners-goog-red');
                    $(element_id).classList.add('buttoners-fb-green');
                    this.show_error(element_id, `${result['success']}`);
                    setTimeout(function () {

                        let logout_starter_ = funcs.logout_starter;
                        logout_starter_.call_form_steps('logger-boss-effiecient_2', 'log in');
                    }, 3000);
                } else if (result.hasOwnProperty('failed')) {

                    this.show_error(element_id, `${result['failed']}`);
                }

            } catch (e) {

                funcs.all_catches_(e);
            }

        },
        log_me_in_now: function (login_info, restart = true) {

            if (login_info === false) {

                funcs.logout_person(true);

                return false;

            } else {

                sessionStorage.setItem('login_info', JSON.stringify(login_info));

                funcs.logged_in__mainer = true;

                if ((restart === true) || (funcs.userinfo.hasOwnProperty('logged_user')&&funcs.userinfo.logged_user.info.username !== login_info.logged_user.info.username)) {

                    funcs.kick___offf___();

                } else {

                    funcs.is_logged_in();

                    if (restart === false) {

                        lib.remove_class_ele('display-block', $('logger-boss-effiecient_2').parentNode.parentNode.parentNode);
                        lib.add_class_ele('display-none', $('logger-boss-effiecient_2').parentNode.parentNode.parentNode);

                        lib.inc_html('', 'boss_topp_odit_2');

                    }

                    let login_starter_ = funcs.login_starter;

                    login_starter_.kick_off_login();

                }

            }

            return true;

        },
        login_saved_template: function () {
            return `
        
                    <section> 
                    
                        <section class="margin-auto overflow-hidden round-border width-150-px height-150-px border-5px-solid">
                    
                                <img draggable='false' style='filter:${funcs.add_main_effect_to_yall(funcs.userinfo.logged_user.prof_styler)};background:${funcs.userinfo.logged_user.info.prof_pix_backgrund};' class='object-fit-cover width-150-px height-150-px iiiiii' src="${funcs.addImage(funcs.userinfo.logged_user.info.prof_pix, 50, 50, 60, 1)}"/>

                        </section>

                        <form action="${api}api/log_in/" method="POST" id='login__forms_2' enctype="multipart/form-data">
            
                         <section id="login-error-shower" class="loggers-lock-inputs-holders-holders error-box border-1px-solid display-none buttoners-goog-red"></section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-none">

                                <section class="flex-1"><input value='${lib.username_to_email(funcs.userinfo.logged_user.info.username)}' class="loggers-lock-inputs" spellcheck="false" autocomplete="off" type="text" name="email" placeholder="registered email address"/></section>

                            </section>
        
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">

                                <section class="flex-1"><input id="them-password" class="loggers-lock-inputs" type="password" spellcheck="false" autocomplete="off" name="password" placeholder="registered password"/></section>
        
                                <section class="loggers-lock-symbol-holders align-items-center display-flex"> <i id="see-unseen-password" onclick="funcs.password_changer('see-unseen-password','them-password');" class='fa fa-eye'></i> </section>

                            </section>
            
                            <section class="awareness-hinter-dope"><i class='fa fa-asterisk'></i> <strong>${funcs.userinfo.logged_user.info.full}</strong> input your password to continue, this check is done to make sure that no one uses your account in your absence, by login into your account you accept our ability to set cookies and retain some login information for your accounts security as stated by our cookie policy</section>
            
                            <section class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex buttoners-fb-blue">
            
                                <section class="flex-1 display-flex justify-content-center"><button id='pufflar_login_button_2' data-after_spin="Log in" class="loggers-lock-inputs">Log in</button></section>
                            
                            </section>

                        </form>

                    </section>
            
                    <section class=""> 
            
                            <section class="display-flex">

                                <section class="solemma-push flex-1 border-1px-solid"> </section>
            
                                <section> or </section>
            
                                <section class="solemma-push flex-1 border-1px-solid"> </section>

                            </section>

                            <section onclick="funcs.logout_person(true);" class="loggers-lock-inputs-holders-holders border-1px-solid border-right-none border-left-none border-top-none display-flex">
            
                                <section class="flex-1 display-flex justify-content-center"><button class="loggers-lock-inputs">not me? Logout</button></section>
                            
                            </section>

                    </section>
            
                    <section class="awareness-hinter-dope text-align-center"> ${name_company} ${device} </section>
        
`;
        },
    }

}();


