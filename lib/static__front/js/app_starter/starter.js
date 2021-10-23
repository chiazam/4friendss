/* global funcs, api, name_company, lib */

!function () {

    funcs.app_starter = {
        aggregate_post_dropper: 0,
        aggregate_times_dropper: 0,
        aggregate_suggest_dropper: 0,
        aggregate_music_dropper: 0,
        aggregate_notify_dropper: 0,
        aggregate_blog_dropper: 0,

        app_start: function (element_id) {

            funcs.popstatist();

            funcs.validate_my_music_starter('my_music_holder');

            $(element_id).innerHTML = `
            
                    <input class='display-none' type="file" id="empty_inp_file"/>

                    <a href="${funcs.app}" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="far fa-list-alt"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Home</section>

                    </a>

                    <a href="${funcs.app}?means=whats new?" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="far fa-edit"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; What's new?</section>

                    </a>

                    <!-- <a href="${funcs.app}?means=message" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="far fa-envelope"/></i>
            
                            <section id="chat_notify_indicator" class="display-none border-radius-20px background-google-red padding-5-px display-flex justify-content-center align-items-center border-box height-fit-content width-fit-content margin-left--5-top--10-px"></section>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Messages</section>

                    </a> -->
    
                    <a href="${funcs.app}?means=notification" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="far fa-bell"/></i>
            
                            <section id="main_notify_indicator" class="display-none border-radius-20px background-google-red padding-5-px display-flex justify-content-center align-items-center border-box height-fit-content width-fit-content margin-left--5-top--10-px"></section>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Notifications</section>

                    </a>
    
                    <a href="${funcs.app}?means=search" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="fa fa-search"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Search</section>

                    </a>
    
                    <a href="${funcs.app}?means=music" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="fab fa-itunes-note"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Music</section>

                    </a>
    
                    <a href="${funcs.app}?means=bookmarks" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="far fa-bookmark"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Bookmarks</section>

                    </a>
    
                    <a href="${funcs.app}?means=profile&fr_user=${funcs.userinfo.logged_user.info.username}" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 
            
                        <section style="background:${funcs.userinfo.logged_user.info.prof_pix_backgrund};" class='display-flex align-items-center justify-content-center icon-mager-xxx-small border-radius-5px'>
                    
                        <img draggable="false" class='object-fit-cover border-radius-5px iiiiii height-98-cent width-98-cent' style='filter:${funcs.add_main_effect_to_yall(funcs.userinfo.logged_user.prof_styler)};background:${funcs.userinfo.logged_user.info.prof_pix_backgrund};' src="${funcs.addImage(funcs.userinfo.logged_user.info.prof_pix, 100, 100, 60, 2)}"/>

                        </section> 
                     
                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Profile</section>

                    </a>
                
                    <!--  <a href="${funcs.app}?means=menu" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="fa fa-ellipsis-h"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; More</section>

                    </a> -->
            
                    <section onclick="funcs.logout_person();" class='font-size-16px display-flex hover-background-twitter hover-color-fb-blue cursor-pointer flex-1 mini-justify-center padding-5-px' id=''> 

                        <section class='display-flex align-items-center justify-content-center icon-mager-xxx-small'>
                    
                            <i draggable="false" class="fa fa-sign-out-alt"/></i>

                        </section> 

                        <section class="menu-no-stable display-flex align-items-center">&nbsp; Logout</section>

                     </section>
            
                `;

            funcs.handle_links();

            this.call_times_jury('container-2-contenter', 'container-2-next');

            funcs.notify_real_time(`main_notify_indicator`, `chat_notify_indicator`);

        },
        call_suggest_jury: function (container_id, loader_shower) {

            let num_inserter = lib.switch_num;

            let offset = this.aggregate_suggest_dropper;

            let limit = 1;

            funcs.adj_html(container_id, 'beforeend', `<section data-suffix='${num_inserter}' id="hold-suggest-person-${num_inserter}">

                <section id="hold-suggest-person-${num_inserter}-topic"></section>
            
                <section id="hold-suggest-person-${num_inserter}-content"></section>

            </section>`);

            funcs.make_spinner_ajax(loader_shower, true, funcs.loader_svg__lof);

            funcs.send_get_me_something({suffix: $(`hold-suggest-person-${num_inserter}`).dataset.suffix, category: 'suggest', type: 'suggest person', display_id: container_id, retry_id: loader_shower, offset: offset, limit: limit, repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/suggest/suggest_contacts.php?skip=${offset}&limit=${limit}`);

            ++lib.switch_num;

        },

        call_music_jury: function (container_id, loader_shower) {

            let num_inserter = lib.switch_num;

            let offset = this.aggregate_music_dropper;

            let limit = 5;

            funcs.adj_html(container_id, 'beforeend', `<section data-suffix='${num_inserter}' id="hold-suggest-music-${num_inserter}">

                <section id="hold-suggest-music-${num_inserter}-topic"></section>
            
                <section id="hold-suggest-music-${num_inserter}-content"></section>

            </section>`);

            funcs.make_spinner_ajax(loader_shower, true, funcs.loader_svg__lof);

            funcs.send_get_me_something({suffix: $(`hold-suggest-music-${num_inserter}`).dataset.suffix, category: 'suggest', type: 'suggest music', display_id: container_id, retry_id: loader_shower, offset: offset, limit: limit, repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/suggest/suggest___music.php?skip=${offset}&limit=${limit}`);

            ++lib.switch_num;

        },

        call_post_jury: function (container_id, loader_shower) {

            let num_inserter = lib.switch_num;

            let offset = this.aggregate_post_dropper;

            let limit = 4;

            funcs.adj_html(container_id, 'beforeend', `<section data-suffix='${num_inserter}' id="hold-content-post-${num_inserter}">

                <section id="hold-content-post-${num_inserter}-topic"></section>
            
                <section id="hold-content-post-${num_inserter}-content"></section>

            </section>`);

            funcs.make_spinner_ajax(loader_shower, true, funcs.loader_svg__lof);

            funcs.send_get_me_something({suffix: $(`hold-content-post-${num_inserter}`).dataset.suffix, category: 'content', type: 'content post', display_id: container_id, retry_id: loader_shower, offset: offset, limit: limit, repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/post_viewer/_release_post.php?offset=${offset}&limit=${limit}&how=timeline`);

            ++lib.switch_num;

        },

        call_times_jury: function (container_id, loader_shower) {

            let num_inserter = lib.switch_num;

            let offset = this.aggregate_times_dropper;

            let limit = 4;

            funcs.adj_html(container_id, 'beforeend', `<section data-suffix='${num_inserter}' id="hold-content-times-${num_inserter}">

                <section id="hold-content-times-${num_inserter}-topic"></section>
            
                <section id="hold-content-times-${num_inserter}-content"></section>

            </section>`);

            funcs.make_spinner_ajax(loader_shower, true, funcs.loader_svg__lof);

            funcs.send_get_me_something({suffix: $(`hold-content-times-${num_inserter}`).dataset.suffix, category: 'content', type: 'content times', display_id: container_id, retry_id: loader_shower, offset: offset, limit: limit, repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/post_viewer/_release_times.php?offset=${offset}&limit=${limit}&how=timeline`);

            ++lib.switch_num;

        },

        call_blog_jury: function (container_id, loader_shower) {

            let num_inserter = lib.switch_num;

            let offset = this.aggregate_blog_dropper;

            let limit = 4;

            funcs.adj_html(container_id, 'beforeend', `<section data-suffix='${num_inserter}' id="hold-content-blog-${num_inserter}">

                <section id="hold-content-blog-${num_inserter}-topic"></section>
            
                <section id="hold-content-blog-${num_inserter}-content"></section>

            </section>`);

            funcs.make_spinner_ajax(loader_shower, true, funcs.loader_svg__lof);

            funcs.send_get_me_something({suffix: $(`hold-content-blog-${num_inserter}`).dataset.suffix, category: 'content', type: 'content blog', display_id: container_id, retry_id: loader_shower, offset: offset, limit: limit, repeat: false}, {'4friendss_user': funcs.userinfo.login_token}, `${api}api/post_viewer/_release_blog.php?offset=${offset}&limit=${limit}&how=timeline`);

            ++lib.switch_num;

        },

    };

}();
