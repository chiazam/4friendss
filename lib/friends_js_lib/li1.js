'use strict';
var lib = {};

lib.url_info_extractor = function (link) {

    let url_obj = (new URL(link));

    if (url_obj.search.length > 0) {

        url_obj.search_array = lib.hashsearchToObject(url_obj.search);

    }

    if (url_obj.hash.length > 0) {

        url_obj.hash_array = lib.hashsearchToObject(url_obj.hash);

    }

    return url_obj;

};

var funcs = {};
var resize_js = {};
var controls = {};
var regex = {};
var countries = {};
var states = {};
const domain = (lib.url_info_extractor(api)).hostname;

const name_company = '4friendss';
function $(element) {
    return document.getElementById(element);
}

(function () {

    funcs.app = api;

    funcs.decode_url = function (text) {

        return decodeURIComponent(text);

    };

    funcs.encode_url = function (text) {

        return encodeURIComponent(text);

    };

    funcs.time_int = function () {
        return new Date().getTime();
    }

    lib.url_remove_search_hash = function (url, hash_search = true, act_return = true) {

        let url_info = lib.url_info_extractor(url);

        let link_finally = `${url_info.origin}${url_info.pathname}`;

        if (hash_search === true) {

            link_finally += `${url_info.search}`;

        } else if (hash_search === false) {

            link_finally += `${url_info.hash}`;

        }

        if (act_return === true) {

            history.pushState("", "", link_finally);

        } else if (act_return === false) {

            return link_finally;

        }

    }

    lib.change_attribute = function (element, attribute, value) {

        element[attribute] = value;
    };
    lib.switch_num = 0;
    lib.music_graph_updown = `<svg height="24px" stroke-width="4" viewBox="-12 -12 24 24" width="24px"><g jsname="HGYFec"><line x1="-6" x2="-6" y1="8" y2="-8" style="animation: leftLine 1.5s linear infinite; stroke: #1a73e8; stroke-dasharray: 16;"></line><line x1="0" x2="0" y1="8" y2="-8" style="animation: middleLine 1.5s linear infinite; stroke: #1a73e8; stroke-dasharray: 16;"></line><line x1="6" x2="6" y1="8" y2="-8" style="animation: rightLine 1.5s linear infinite; stroke: #1a73e8; stroke-dasharray: 16;"></line></g></svg>`;
    lib.loader_dot = `<svg id="dots" width="20px" height="10px" viewBox="0 0 132 58" version="1.1" xmlns="http://www.w3.org/2000/svg"> <style>#dots #dot1{animation: load 1s infinite;} #dots #dot2{animation: load 1s infinite;animation-delay: 0.2s;} #dots #dot3{animation: load 1s infinite;animation-delay: 0.4s;} @keyframes load{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 0;}}</style><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="dots" sketch:type="MSArtboardGroup" fill="#0055c4"> <circle id="dot1" sketch:type="MSShapeGroup" cx="25" cy="30" r="13"></circle> <circle id="dot2" sketch:type="MSShapeGroup" cx="65" cy="30" r="13"></circle> <circle id="dot3" sketch:type="MSShapeGroup" cx="105" cy="30" r="13"></circle> </g> </g> </svg>`;
    funcs.loader_svg__lof = `<svg version="1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><style>@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes fillunfill{0%{stroke-dashoffset:32.3}50%{stroke-dashoffset:0}to{stroke-dashoffset:-31.9}}@keyframes rot{0%{transform:rotate(0deg)}to{transform:rotate(-360deg)}}@keyframes colors{0%,to{stroke: #0055c4}}</style><g style="animation-duration:1568.63ms;animation-iteration-count:infinite;animation-name:rotate;animation-timing-function:linear;transform-origin:50% 50%;width:16px;height:16px"><path fill="none" d="M8 1.125A6.875 6.875 0 1 1 1.125 8" stroke-width="2.25" stroke-linecap="round" style="animation-duration:1333ms,5332ms,5332ms;animation-fill-mode:forwards;animation-iteration-count:infinite,infinite,infinite;animation-name:fillunfill,rot,colors;animation-play-state:running,running,running;animation-timing-function:cubic-bezier(.4,0,.2,1),steps(4),linear;transform-origin:50% 50%" stroke-dasharray="32.4" stroke-dashoffset="32.4"/></g></svg>`;


    funcs.is_device_apple_product = function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPhone/.test(userAgent) && !window.MSStream) {

            return "iPhone";

        } else if (/iPad/.test(userAgent) && !window.MSStream) {

            return "iPad";

        } else if (/iPod/.test(userAgent) && !window.MSStream) {

            return "iPod";

        }

        return "unknown";
    };

    funcs.base_64_encode = function (string_) {

        return btoa(string_);

    };

    funcs.base_64_decode = function (string_) {

        return atob(string_);

    };

    funcs.get_device_operating_system = function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        } else if (/android/i.test(userAgent)) {
            return "Android";
        } else {
            return funcs.is_device_apple_product();
        }

    };

    funcs.jsUcfirst = function (string) {

        return string.charAt(0).toUpperCase() + string.slice(1);

    };

    lib.openFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    };

    lib.closeFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };

    lib.detect_full_screen = function (reciever, trigger, eventcallback) {

        reciever.addEventListener('fullscreenchange', function () {

            if (document.fullscreenElement) {

                eventcallback(false, reciever, trigger);

            } else {

                eventcallback(true, reciever, trigger);

            }

        }, 1);

    };

    lib.toggle_full_screen = function (trigger, reciever, event) {

        trigger.addEventListener(event, function () {

            if (document.fullscreenElement) {

                lib.closeFullscreen();

            } else {

                lib.openFullscreen(reciever);

            }

        }, 1);

    };

    funcs.seconds_to_time = function (second) {

        let date = new Date(second * 1000);
        let hours = date.getUTCHours();
        let minutes = date.getUTCMinutes();
        let seconds = date.getUTCSeconds();
        (hours < 10) ? (hours = "0" + hours) : (null);
        (minutes < 10) ? (minutes = "0" + minutes) : (null);
        (seconds < 10) ? (seconds = "0" + seconds) : (null);
        return { h: hours, m: minutes, s: seconds };
    };

    funcs.error_reviver__ = function (onclick, innerhtml) {

        return `<section class="margin-auto max-width-400-500-px width-100-cent border-box display-flex justify-content-center cursor-pointer font-size-pimp margin-auto display-flex align-items-center padding-5-px border-radius-20px display-flex heavier border-1px-solid hover-background-twitter hover-color-fb-blue" onclick='${onclick}'>${innerhtml}</section>`;

    };

    funcs.open_window = function (url, name_, params, replace = false) {

        return window.open(url, name_, params, replace);

    }

    funcs.is_trusted_asker = function (full_url = false) {

        let ask_url = (lib.hashsearchToObject(window.location.search));

        if ((window.location.search.length > 0) && (ask_url.hasOwnProperty('asker')) && (ask_url.asker.length > 0)) {

            let ask_info = lib.url_info_extractor(funcs.decode_url(ask_url.asker));

            let asker = ask_info.hostname;

            if ((lib.element_array_index(my_our_platforms, asker)) !== (-1)) {

                if (full_url === true) {

                    return ask_info.href;

                } else if (full_url === false) {

                    return asker;

                } else if (full_url === 'origin') {

                    return ask_info.origin;

                }

            } else {

                return false;

            }

        } else {

            let path = `${domain}`;

            if (full_url === true) {

                path = `http://${domain}/`;

            } else if (full_url === 'origin') {

                path = `http://${domain}`;

            }

            return path;

        }

    };

    funcs.asker_gen_form_url = function (form = false) {

        let asker = funcs.is_trusted_asker();

        if (domain === asker) {

            return '';

        } else {

            let origin = funcs.is_trusted_asker('origin');

            if (form === false) {

                return `asker=${origin}`;

            } else if (form === true) {

                return `<input type=hidden name="asker" value="${origin}">`;

            }


        }

    };

    funcs.getDeviceType = function () {

        if (funcs.get_device_operating_system() !== "unknown") {

            return funcs.get_device_operating_system();

        } else {

            const ua = navigator.userAgent || navigator.vendor || window.opera;

            if (/(tablet|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
                return "tablet";
            } else if (/Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
                return "mobile";
            } else {
                return "computer";
            }

        }

    };

    regex.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+[ ]*$/;
    regex.fullname = /^[a-zA-Z0-9]{2,14}[ ]{1}[a-zA-Z0-9]{2,14}[ ]*$/i;
    regex.url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/igm;
    regex.hashtag = /(#([A-Za-z0-9\_\(\)]+))/igm;
    regex.tag = /(@([A-Za-z0-9\_\(\)\.]+))/igm;
    regex.email_replacer = /((([A-Za-z0-9\_])*(\.)?)*@(([A-Za-z0-9\_])*(\.)?)*(\.)([A-Za-z0-9]*))/igm;
    regex.hash__tag_replacer = function (text_contain_hjfh, link = false, class_indic = '') {

        let hash_redirect = ``;

        let site_redirect = ``;

        let profile_redirect = ``;

        let email_redirect = ``;

        if (link === true) {

            profile_redirect = `onclick="trigger_anchor('$2')"`;

            site_redirect = `href="$1" redirect target="_blank"`;

            email_redirect = `href="mailto:$1" redirect target="_blank"`;

            hash_redirect = `onclick='trigger_search("search_holder", "$2","post");'`;

        }

        let single_group_tag = `<a ${profile_redirect} editorhighlit class="cursor-pointer hover-text-decoration-underline hover-background-twitter color-fb-blue ${class_indic}">$1</a>`;

        let single_group_hash = `<span ${hash_redirect} editorhighlit class="cursor-pointer hover-text-decoration-underline hover-background-twitter color-fb-blue ${class_indic}">$1</span>`;

        let single_group_url = `<a ${site_redirect} editorhighlit class="hover-text-decoration-underline hover-background-twitter color-fb-blue ${class_indic}">$1</a>`;

        let single_group_email = `<a ${email_redirect} editorhighlit class="hover-text-decoration-underline hover-background-twitter color-fb-blue ${class_indic}">$1</a>`;

        /* .replace(regex.email_replacer,single_group_email) */

        return text_contain_hjfh.replace(regex.hashtag, single_group_hash).replace(regex.tag, single_group_tag).replace(regex.url, single_group_url);
    };

    funcs.is_iframe = function () {

        if (window !== window.parent) {

            return { is_frame: true, is_opened: false };

        } if (window.opener !== null) {

            return { is_frame: false, is_opened: true };

        } else {

            return { is_frame: false, is_opened: false };

        }

    };

})();
(function () {

    lib.alphabet_array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    lib.get_num_array_range_list = function (num_start = 0, num_end = 100) {

        let list = [];

        for (var i = num_start; i <= num_end; i++) {

            list.push(i);

        }

        return list;

    };

    lib.empty_content_editable = function (e) {
        if (e.currentTarget.innerHTML.trim() === '<br>') {
            e.currentTarget.innerHTML = '';
        }
    };

    lib.node_index = function (element) {

        return Array.from(element.parentNode.children).indexOf(element);

    };

    lib.element_array_index = function (array, element) {

        return Array.from(array).indexOf(element);

    };

    lib.email_to_username = function (email) {

        if (lib.is_email(email)) {

            let first_split = email.split('@');
            let second_split = first_split[1].split('.');
            let last_end = second_split.pop();

            return `@${first_split[0]}(${last_end})${second_split.join('.')}`;
        } else {

            throw new Error('wrong username');
        }
    };
    lib.username_to_email = function (username) {

        let first = username.replace('@', "");
        let first_split = first.split('(');
        let second_split = first_split[1].split(')');
        let email = `${first_split[0]}@${second_split[1]}.${second_split[0]}`;
        if (lib.is_email(email)) {

            return email;
        } else {

            throw new Error('wrong username');
        }

    };
    lib.is_empty = function (string) {

        if (lib.trim(string).length === 0) {
            return true;
        } else if (lib.trim(string).length > 0) {
            return false;
        }

    };

    lib.set_play_back_rate = function (media, value) {

        media.playbackRate = value;

    };

    lib.inc_html = function (text, element_id) {
        $(element_id).innerHTML = text;
    };
    lib.add_class_ele = function (class_name, element) {

        element.classList.add(class_name);
    };

    lib.toggle_class_ele = function (class_name, element) {

        element.classList.toggle(class_name);
    };

    lib.remove_class_ele = function (class_name, element) {

        element.classList.remove(class_name);
    };
    lib.add_class = function (class_name, element_id) {

        $(element_id).classList.add(class_name);
    };
    lib.remove_class = function (class_name, element_id) {

        $(element_id).classList.remove(class_name);
    };
    lib.is_email = function (email) {

        return regex.email.test(email);
    };
    lib.is_fullname = function (fullname) {

        return regex.fullname.test(fullname);
    };
    lib._loader_1_feed = `<section class="load_funckers_1_feed"><i class="demo-icon icon-spin4 animate-spin"></i></section>`;
    lib.isInFrame = function () {

        if (window.location !== window.parent.location) {
            return true;
        } else {

            return false;
        }

    };

    funcs.its_me = function (obj) {

        return (funcs.userinfo.logged_user.info.username === obj.info.username && funcs.userinfo.logged_user.info.b === obj.info.b && funcs.userinfo.logged_user.info.g === obj.info.g);

    };

    lib.obj_length = function (object) {
        return Object.keys(object).length;
    };

    lib.obj_equals = function (obj_1, obj_2) {

        let same = true;

        if (lib.obj_length(obj_1) === lib.obj_length(obj_2)) {

            lib.obj_looper_challenge(obj_1, function (key, value, element, arrays) {

                if (!obj_2.hasOwnProperty(key)) {

                    same = false;

                } else if (obj_2[key] !== value) {

                    same = false;

                }

            });
        } else {

            same = false;

        }


        return same;
    };
    lib.small_screen = function () {

        return (lib.documentWidth() <= 600);
    };
    lib.big_screen = function () {

        return (lib.documentWidth() > 1000);
    };
    lib.medium_screen = function () {

        return (lib.documentWidth() > 600 && lib.documentWidth() <= 1000);
    };
    lib.hashsearchToObject = function (search) {
        return search.substring(1).split("&").reduce(function (result, value) {
            var parts = value.split('=');
            if (parts[0])
                result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
            return result;
        }, {});
    };
    lib.documentHeight = function () {
        return window.innerHeight || (document.documentElement || document.body).clientHeight;
    };
    lib.documentWidth = function () {
        return window.innerWidth || (document.documentElement || document.body).clientWidth;
    };
    lib.documentScrollTop = function () {
        return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    };
    lib.documentScrollLeft = function () {
        return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    };
    lib.elementScrollToBottom = function (element) {

        if ((element.offsetHeight + element.scrollTop) === element.scrollHeight) {
            return true;
        } else {
            return false;
        }

    };
    lib.pageScrolledToBottom = function () {
        var pageHeight = document.documentElement.offsetHeight,
            windowHeight = window.innerHeight,
            scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
        if (pageHeight <= windowHeight + scrollPosition) {
            return true;
        } else {
            return false;
        }

    };
    lib.scroll_top = function (element) {
        return element.scrollTop;
    };
    lib.scroll_left = function (element) {
        return element.scrollLeft;
    };
    lib.scrollableHeightValue = function (element) {
        return element.scrollHeight - element.offsetHeight;
    };
    lib.scrollableWidthtValue = function (element) {
        return element.scrollWidth - element.offsetWidth;
    };
    lib.scrollableHeightValueRemain = function (element) {
        return lib.scrollableHeightValue(element) - lib.scroll_top(element);
    };
    lib.scrollableWidthValueRemain = function (element) {
        return lib.scrollableWidthtValue(element) - lib.scroll_left(element);
    };
    lib.rand_range = function (start_no, end_no) {

        if (start_no > end_no) {

            throw new Error("first argument should be less than second argument");
        }

        let num_returner = Math.ceil(Math.random() * end_no);
        return parseInt((num_returner < start_no) ? (start_no) : ((num_returner > end_no) ? (end_no) : (num_returner)));
    };
    lib._looper_challenge = function (arrays, funcs_tion_) {

        for (let q = 0; q < arrays.length; q++) {
            const element = arrays[q];
            funcs_tion_(element, q, arrays);
        }

    };
    lib.trim = function (string_) {
        return string_.trim();
    };
    lib.trim_start = function (string_) {
        return string_.trimStart();
    };
    lib.trim_end = function (string_) {
        return string_.trimEnd();
    };
    lib.log = function (text) {
        console.log(text);
    };
    lib.logstyle = function (text, style) {
        console.log("%c" + text, style);
    };
    funcs.inc_html = function (word, element) {

        element.innerHTML = word;
    };
    funcs.adj_html = function (element_id, position, text) {

        $(element_id).insertAdjacentHTML(position, text);
    };
    funcs.adj_html_element = function (element, position, text) {

        element.insertAdjacentHTML(position, text);
    };
    lib.shuffleArray = function (array) {

        let quip = array;
        for (var i = quip.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = quip[i];
            quip[i] = quip[j];
            quip[j] = temp;
        }

        return quip;
    };
    lib.ins_bef = function (parent, new_child, parent_child) {

        parent.insertBefore(new_child, parent_child);
    };
    lib.scroll_to_bottom = function (element_id) {

        $(element_id).scrollBy(0, ($(element_id).scrollHeight - (($(element_id).scrollTop) + ($(element_id).offsetHeight))));
    };
    lib.scroll_to_top = function (element_id) {
        $(element_id).scrollTo(0, 0);
    };
    
    lib.rand_string_gen = function (times = 0) {

        if (times < 0) {
            throw new Error("times must be greater than 1");
        }

        let string = '';
        for (let i = 0; i <= times; i++) {

            string += Math.random().toString(36).slice(2);
        }

        return string;
    };

    lib.set_css_variable = function (element, variable, value, important = null) {

        if (element.style.setProperty) {

            element.style.setProperty(variable, value, important);
        } else {

            element.style.setAttribute(variable, value);
        }

    };
    lib.remove_css_variable = function (element, variable) {

        if (element.style.removeProperty) {

            element.style.removeProperty(variable);
        } else {

            element.style.setAttribute(variable, 'unset');
        }

    };
    lib.get_css_variable = function (element, variable) {

        return getComputedStyle(element).getPropertyValue(variable);
    };
    lib.kick_off__sample_draw_vidorimg_on_canvas = function (vidorimg_id, canvas_id, start_x, start_y, end_x, end_y) {

        let canvas_2d = $(canvas_id).getContext("2d");
        let height_need = ((end_y * $(canvas_id).offsetWidth) / end_x);
        $(canvas_id).height = height_need;
        return setInterval(function () {

            if ($(canvas_id) !== null && $(vidorimg_id) !== null) {

                canvas_2d.drawImage($(vidorimg_id), start_x, start_y, $(canvas_id).offsetWidth, height_need);
            }

        }, 16);
    };
    lib.next_offset = function (offset, limit) {
        return { limit: parseInt(limit), offset: parseInt(parseInt(offset) + parseInt(limit)) };
    };

    funcs.word_short_obj = {};

    funcs.word_shortener = function (id = null, word, word_length, returner_ = false) {

        let rand_string = lib.rand_string_gen(1);

        funcs.word_short_obj[rand_string] = word;

        if (returner_ === false && id !== null) {

            if (word.length > word_length) {

                $(id).innerHTML = word.substring(0, word_length) + `<section onclick="this.parentElement.innerHTML=funcs.word_short_obj[this.parentElement.dataset.wordAllNote]" style="display:inline;" class="cursor-pointer lighter hover-background-twitter hover-color-fb-blue"> <i class="fa fa-ellipsis-h"></i> </section>`;

                $(id).dataset.wordAllNote = rand_string;

            } else {

                $(id).innerHTML = word;

            }

        } else if (returner_ === true && id === null) {

            if (word.length > word_length) {

                return { word_: word.substring(0, word_length) + `<section data-word-all-note='${rand_string}' onclick="this.parentElement.innerHTML=funcs.word_short_obj[this.dataset.wordAllNote]" style="display:inline;" class="cursor-pointer lighter hover-background-twitter hover-color-fb-blue"> <i class="fa fa-ellipsis-h"></i> </section>` };
            } else {

                return { word_: word };
            }

        } else {

            throw new Error("param id must be null when param returner_ is true and param id must be a value when param returner_ is false");
        }

    };
    funcs.verify_returner = function (act) {

        let verify_template = ``;
        if (parseInt(act) === 1) {

            verify_template = `<i class='fa fa-check-circle mail-verify'></i>`;
        }

        return verify_template;
    };
    lib.drop_jaw_text_area = function (text_id) {

        $(text_id).addEventListener('input', function (e) {

            if (lib.scrollableHeightValue(e.currentTarget) > 0) {

                e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
            }

        }, 1);
    };

    lib.create_new_event = function (event, detail = {}) {

        return new Event(event, detail);

    };

    lib.dispatch_event = function (element, event) {

        element.dispatchEvent(event);

    }

    lib.host_event_execute_now = function (event, element, detail = {}) {

        detail.isTrusted = true;

        let eventish = lib.create_new_event(event, detail);

        lib.dispatch_event(element, eventish);

    };

    lib.touch_smooth_scroll = function (element) {

        let start;
        let end;
        element.addEventListener('mousedown', function (e) {

            e.stopPropagation();
            start = e.pageX;
        }, 1);
        element.addEventListener('mouseup', function (e) {

            e.stopPropagation();
            end = e.pageX;
            let dif_start_end = Math.sign((start - end));
            if ((dif_start_end === (1)) && ((start - end) > 4)) {

                if (element.nextElementSibling.hasAttribute('onclick')) {

                    lib.host_event_execute_now('click', element.nextElementSibling);
                }

            } else if ((dif_start_end === (-1)) && (((start - end) <= -5))) {

                if (element.previousElementSibling.hasAttribute('onclick')) {

                    lib.host_event_execute_now('click', element.previousElementSibling);
                }

            }

        }, 1);
        element.addEventListener('touchstart', function (e) {

            e.stopPropagation();
            start = e.changedTouches[0].pageX;
        }, { passive: true });
        element.addEventListener('touchend', function (e) {

            e.stopPropagation();
            end = e.changedTouches[0].pageX;
            let dif_start_end = Math.sign((start - end));
            if ((dif_start_end === (1)) && ((start - end) > 4)) {

                if (element.nextElementSibling.hasAttribute('onclick')) {

                    lib.host_event_execute_now('click', element.nextElementSibling);
                }

            } else if ((dif_start_end === (-1)) && (((start - end) <= -5))) {

                if (element.previousElementSibling.hasAttribute('onclick')) {

                    lib.host_event_execute_now('click', element.previousElementSibling);
                }

            }

        }, { passive: true });
    };
    lib.smooth_scroll = function (element, rate) {
        let scrolling = setInterval(function () {
            element.scrollBy(rate, 0);
        }, 5);
        setTimeout(function () {
            clearInterval(scrolling);
        }, 200);
    };
    lib.touch_display_scroll = function (element) {

        let start;
        let end;
        element.addEventListener('mousedown', function (e) {

            e.stopPropagation();
            start = e.pageX;
        }, 1);
        element.addEventListener('mouseup', function (e) {
            e.stopPropagation();
            end = e.pageX;
            let dif_start_end = Math.sign((start - end));
            if ((dif_start_end === (1)) && ((start - end) > 4)) {

                lib.display_scroll(element, 'forward');
            } else if ((dif_start_end === (-1)) && (((start - end) <= -5))) {

                lib.display_scroll(element, 'backward');
            }

        }, 1);
        element.addEventListener('touchstart', function (e) {
            e.stopPropagation();
            start = e.changedTouches[0].pageX;
        }, { passive: true });
        element.addEventListener('touchend', function (e) {
            e.stopPropagation();
            end = e.changedTouches[0].pageX;
            let dif_start_end = Math.sign((start - end));
            if ((dif_start_end === (1)) && ((start - end) > 4)) {

                lib.display_scroll(element, 'forward');
            } else if ((dif_start_end === (-1)) && (((start - end) <= -5))) {

                lib.display_scroll(element, 'backward');
            }

        }, { passive: true });
    };
    funcs.quicken_slider_by_clickerf = function (element_trigger, element_changer, child_num) {

        if (element_changer.children[child_num] !== null) {

            if (element_changer.children[child_num].style.display !== 'block') {

                if (element_changer.nextElementSibling !== null && element_changer.previousElementSibling !== null) {

                    element_changer.nextElementSibling.style.visibility = 'visible';
                    element_changer.previousElementSibling.style.visibility = 'visible';
                    if (element_changer.children[child_num] === element_changer.lastElementChild) {

                        if (element_changer.nextElementSibling !== null) {

                            element_changer.nextElementSibling.style.visibility = 'hidden';
                        }

                    } else if (element_changer.children[child_num] === element_changer.firstElementChild) {

                        if (element_changer.previousElementSibling !== null) {

                            element_changer.previousElementSibling.style.visibility = 'hidden';
                        }

                    }
                }

                element_changer.children[child_num].style.display = 'block';
                element_trigger.style.background = 'var(--goog-blue)';
                for (let a = 0; a < element_changer.children.length; a++) {
                    const element___ = element_changer.children[a];
                    if (element___ !== element_changer.children[child_num]) {

                        element___.style.display = 'none';
                        element_trigger.parentNode.children[a].style.background = 'var(--liter-black-moder)';
                    }

                }

            }

        }

    };
    lib.display_scroll = function (element_main, direction) {

        if (direction === `backward` && element_main !== null) {

            for (let a = 0; a < element_main.children.length; a++) {

                const element = element_main.children[a];
                if ((element.previousElementSibling !== null) && (element.style.display === "block" || element.style.display === "")) {

                    element.style.display = "none";
                    element.previousElementSibling.style.display = "block";
                    element_main.nextElementSibling.style.visibility = "visible";
                    lib._looper_challenge(element_main.parentNode.nextElementSibling.children, function (dom_part) {
                        dom_part.style.background = `var(--liter-black-moder)`;
                    });
                    element_main.parentNode.nextElementSibling.children[(a - 1)].style.background = `var(--goog-blue)`;
                    if (element.previousElementSibling === element_main.firstElementChild) {

                        if (element_main.previousElementSibling !== null) {
                            element_main.previousElementSibling.style.visibility = "hidden";
                        }

                    }

                    break;
                }

            }


        } else if (direction === `forward` && element_main !== null) {

            for (let a = 0; a < element_main.children.length; a++) {

                const element = element_main.children[a];
                if ((element.nextElementSibling !== null) && (element.style.display === "block" || element.style.display === "")) {

                    element.style.display = "none";
                    element.nextElementSibling.style.display = "block";
                    element_main.previousElementSibling.style.visibility = "visible";
                    lib._looper_challenge(element_main.parentNode.nextElementSibling.children, function (dom_part) {
                        dom_part.style.background = `var(--liter-black-moder)`;
                    });
                    element_main.parentNode.nextElementSibling.children[(a + 1)].style.background = `var(--goog-blue)`;
                    if (element.nextElementSibling === element_main.lastElementChild) {

                        if (element_main.nextElementSibling !== null) {
                            element_main.nextElementSibling.style.visibility = "hidden";
                        }

                    }

                    break;
                }

            }

        }

    };
    lib.return_if_true = function (true_returner, false_returner, param_bool) {

        if (param_bool === true) {
            return true_returner;
        } else if (param_bool === false) {
            return false_returner;
        }

    };

    funcs.is_focused = function (element) {
        return (element === document.activeElement);
    };

    funcs.scroller_numm = 0;

    funcs.scroll_amber_wawerteer_fdtg = function (contents, scroll = true, class_mirror_kish = '', alltitude = 10, id = '', classes = '') {

        let bis_bis_id = id;

        if (id.length === 0) {
            bis_bis_id = `sdgyfdyfytgd__scroollist${funcs.scroller_numm}`;
            ++funcs.scroller_numm;
        }

        let scroll_right = ` lib.smooth_scroll(this.nextElementSibling,-${alltitude});`;
        let scroll_left = `lib.smooth_scroll(this.previousElementSibling,${alltitude});`;
        if (scroll === false) {

            scroll_right = `lib.display_scroll(this.nextElementSibling,'backward');`;
            scroll_left = `lib.display_scroll(this.previousElementSibling,'forward');`;
        }

        setTimeout(function () {

            if ((scroll === false) && ($(bis_bis_id) !== null)) {

                if ($(bis_bis_id).childElementCount >= 2) {

                    lib.remove_class('display-none', `${bis_bis_id}_sroller_right`);

                    lib.remove_class('display-none', `${bis_bis_id}_sroller_left`);

                    lib.add_class('display-flex-none', `${bis_bis_id}_sroller_right`);

                    lib.add_class('display-flex-none', `${bis_bis_id}_sroller_left`);

                }

                lib.touch_display_scroll($(bis_bis_id));

                let passer_by_indicator = ``;

                for (let i = 0; i < $(bis_bis_id).children.length; i++) {

                    let style = ``;
                    if (i === 0) {

                        style = `style="background:var(--goog-blue);"`;
                    }

                    passer_by_indicator += `<section onclick="funcs.quicken_slider_by_clickerf(this,$('${bis_bis_id}'),${i});" ${style} class="padding-3-px lighter border-1px-solid round-border margin-left-5px cursor-pointer"></section>`;
                    if (i !== 0) {

                        $(bis_bis_id).children[i].style.display = 'none';
                    }

                }

                lib.add_class_ele('padding-5-px', $(bis_bis_id).parentNode.nextElementSibling);

                $(bis_bis_id).parentNode.nextElementSibling.innerHTML = passer_by_indicator;
            } else if ((scroll === true) && ($(bis_bis_id) !== null)) {

                if (lib.scrollableWidthtValue($(bis_bis_id)) > 0) {

                    lib.remove_class('display-none', `${bis_bis_id}_sroller_right`);

                    lib.remove_class('display-none', `${bis_bis_id}_sroller_left`);

                    lib.add_class('display-flex-none', `${bis_bis_id}_sroller_right`);

                    lib.add_class('display-flex-none', `${bis_bis_id}_sroller_left`);

                }

                lib.touch_smooth_scroll($(bis_bis_id));
                lib.scroll_target_fever($(bis_bis_id));
            }
        }, 1000);

        let passer_by_indicator = ``;
        if (scroll === false) {

            passer_by_indicator = `<section class="display-flex justify-content-center"></section>`;
        }

        return `
  
          <section class="if-only-was-carosel">
  
          <section class='display-flex'>
  
              <section id="${bis_bis_id}_sroller_left" onclick="${scroll_right}" class='sliderhand z-index-1 sliderhand-1 position-relative cursor-pointer display-none align-self-center justify-content-center align-items-center fb-shadow-shadow-2 padding-5-px heavier hover-color-fb-blue round-border ${class_mirror_kish}'  style='visibility:hidden;'> <i class="fa fa-arrow-left"></i> </section>
        
              <section id="${bis_bis_id}" class="display-flex align-items-center overflow-hidden flex-1 ${classes}">${contents}</section>
        
              <section id="${bis_bis_id}_sroller_right" onclick="${scroll_left}" class='sliderhand z-index-1 display-none sliderhand-2 cursor-pointer position-relative fb-shadow-shadow-2 align-self-center justify-content-center align-items-center padding-5-px heavier hover-color-fb-blue round-border ${class_mirror_kish}'> <i class="fa fa-arrow-right"></i> </section>
          
          </section>${passer_by_indicator}</section>
          
          `;

    };

    lib.scroll_happener_execise = function (e) {

        let spill_1 = lib.scroll_left(e.currentTarget);
        let spill_2 = (e.currentTarget.offsetWidth + spill_1);

        if (e.currentTarget.previousElementSibling !== null && Math.ceil(spill_1) <= 0) {

            e.currentTarget.previousElementSibling.style.visibility = 'hidden';
        } else if (e.currentTarget.previousElementSibling !== null && Math.ceil(spill_1) > 0) {

            e.currentTarget.previousElementSibling.style.visibility = 'visible';
        }

        if (e.currentTarget.nextElementSibling !== null && Math.ceil(spill_2) >= parseInt(e.currentTarget.scrollWidth)) {

            e.currentTarget.nextElementSibling.style.visibility = 'hidden';
        } else if (e.currentTarget.nextElementSibling !== null && Math.ceil(spill_2) < parseInt(e.currentTarget.scrollWidth)) {

            e.currentTarget.nextElementSibling.style.visibility = 'visible';
        }

    };
    lib.scroll_target_fever = function (element) {

        if (element.previousElementSibling !== null && element.nextElementSibling !== null) {
            element.addEventListener('scroll', lib.scroll_happener_execise, 1);
        }

    };
    funcs.get_cover_features_prof_displayer_position = function (compass, nature = "me") {

        let filter = `${compass['pos-x']}% ${compass['pos-y']}%`;
        if (nature === "cover") {

            lib._looper_challenge(lib.query_selector_all(".cover_may_coulkd_wash_is_me"), function (element) {
                element.style.objectPosition = filter;
            });
        } else if (nature === "me") {

            return filter;
        } else {

            $(nature).style.objectPosition = filter;
        }

    };
    funcs.online_color_datist = function (online, small = true) {

        if (online !== undefined && online.hasOwnProperty('online')) {

            let border_color = "var(--border-color_darker)";
            let online_template = ``;
            if (online.online === true) {

                let style_size_cont = "style='height: 13px;width: 13px;'";

                let style_size_font = 'font-size:7px;';

                if (small === false) {

                    style_size_cont = "style='height: 26px;width: 26px;'";

                    style_size_font = 'font-size:14px;';

                }

                border_color = "var(--twitter-blue)";

                online_template = `<section ${style_size_cont} class="align-self-center round-border display-flex justify-content-center align-items-center heavier">

                            <i style='${style_size_font}color:${border_color};' class="fa fa-circle"></i>

                    </section>`;

            }

            return { online: online.online, last: (online.hasOwnProperty("last")) ? (online.last) : ("never logged in"), border_color: border_color, online_template: online_template };

        } else {

            return ``;

        }

    };
    funcs.add_main_effect_to_yall = function (style, nature = "me") {

        if (style === false) {

            return ``;
        } else {

            let filter = `blur(${style.blur}px) brightness(${style.brightness}%) contrast(${style.contrast}%) opacity(${style.opacity}%) sepia(${style.sepia}%) saturate(${style.saturate}%) hue-rotate(${style['hue-rotate']}deg) invert(${style.invert}%) grayscale(${style.grayscale}%)`;
            if (nature === "cover") {

                lib._looper_challenge(lib.query_selector_all(".cover_may_coulkd_wash_is_me"), function (element) {
                    element.style.filter = filter;
                });

            } else if (nature === "profile") {

                lib._looper_challenge(lib.query_selector_all(".iiiiii"), function (element) {
                    element.style.filter = filter;
                });

            } else if (nature === "me") {

                return filter;

            } else {

                if ($(nature) !== null) {

                    $(nature).style.filter = filter;

                }
            }
        }

    };
    funcs.hash = false;
    funcs.search = false;
    funcs.url_respawner = function () {

        funcs.hash = false;
        funcs.search = false;
        if (window.location.hash && window.location.hash.length > 0) {

            funcs.hash = lib.hashsearchToObject(window.location.hash);
        }

        if (window.location.search && window.location.search.length > 0) {

            funcs.search = lib.hashsearchToObject(window.location.search);
        }

    };
    funcs.password_changer = function (clicker, input) {

        if ($(input).type !== 'text') {
            $(input).type = 'text';
            $(clicker).className = 'fa fa-eye-slash';
        } else {
            $(input).type = 'password';
            $(clicker).className = 'fa fa-eye';
        }

    };
    funcs.setDocumentTitle = function (id, title) {

        if (funcs.title_documentist !== title) {

            $(id).innerHTML = title;
            funcs.title_documentist = title;
        }

    };
    funcs.setDocumentIcon = function (id, icon) {

        if (funcs.icon_documentist !== funcs.addImage(icon, 30, 30, 30)) {

            $(id).href = funcs.addImage(icon, 30, 30, 30);
            funcs.icon_documentist = funcs.addImage(icon, 30, 30, 30);
        }

    };
    funcs.addImage = function (path, width, height, quality, percent = 2) {

        return `${api}extra_script/image_static.php?file=${path}&width=${width}&height=${height}&quality=${quality}&percent=${percent}`;
    };

    funcs.UpdateMyProfilePics = function (link) {

        lib._looper_challenge(lib.query_selector_all(".iiiiii"), function (element) {
            if (element.src !== funcs.addImage(link, 50, 50, 60, 1)) {
                element.src = funcs.addImage(link, 50, 50, 60, 1);
            }
        });
    };

    funcs.update_profile_bio = function (obj) {

        lib._looper_challenge(lib.query_selector_all(".info_my_profile_main"), function (element) {

            element.innerHTML = `
           
                <section class="display-flex justify-content-center">${funcs.return_status(obj, '')}</section>
        
                <section class="border-box width-100-cent">${funcs.address_prof(obj, '')}</section>
                 
                <section class="border-box width-100-cent padding-5-px"> <i class="fa fa-palette"></i> ${obj.info.theme}</section>

            `;

        });

    };


    funcs.UpdateMycover = function (link) {

        lib._looper_challenge(lib.query_selector_all(".cover_may_coulkd_wash_is_me"), function (element) {

            if (element.src !== funcs.addImage(link, 50, 50, 60, 1)) {
                element.src = funcs.addImage(link, 50, 50, 60, 1);
            }

        });
    };


})();
const device = funcs.getDeviceType();
(function () {

    funcs.make_spinner_ajax = function (element_id, start, svg = funcs.loader_svg__lof) {
        if ($(element_id) !== null) {

            if (start === true) {

                funcs.inc_html(`<section class='display-flex justify-content-center'>${svg}</section>`, $(element_id));

            } else if (start === '404') {

                funcs.inc_html(`<section>Sorry we are working on the problem, try again later</section>`, $(element_id));

            } else if (start === 'offline') {

                funcs.inc_html(`<section>Poor network, connect to stable network and try again</section>`, $(element_id));

            } else if (start === false) {

                if ($(element_id).dataset.after_spin !== undefined) {

                    funcs.inc_html($(element_id).dataset.after_spin, $(element_id));
                } else {

                    funcs.inc_html(``, $(element_id));
                }

            }
        }
    };
    funcs.formmaker = function (obj_content = {}, form__ = false) {

        let form = ``;
        if (form__ !== false) {

            form = new FormData($(form__));
        } else if (form__ === false) {

            form = new FormData();
        }

        for (const key in obj_content) {
            if (obj_content.hasOwnProperty(key)) {
                const element = obj_content[key];
                form.append(`${key}`, `${element}`);
            }

        }

        return form;
    };

    funcs.file_upload_kick = async function (prove, url, form, indic_id = null, indic_func = null, extra_info = {}, header = {}) {

        let woop = { recognize: prove, url: url, indic_id: indic_id, form: form, extra_info: extra_info, header: header };

        try {

            let form__ = funcs.formmaker(extra_info, form);

            $(form).setAttribute('disabled', true);

            let e = await funcs.ajax_trigger(url, indic_id, indic_func, form__, "POST", header);

            $(form).removeAttribute('disabled');

            woop.success = e;

            funcs.divide_to_suit_job(woop);

        } catch (e) {

            $(form).removeAttribute('disabled');

            woop.failed = e;

            funcs.divide_to_suit_job(woop);

        }

    };

    funcs.obj_stringif_parse = function (obj_unformatted, stringify = false) {

        if (stringify === false) {
            return JSON.parse(obj_unformatted);
        } else if (stringify === true) {
            return JSON.stringify(obj_unformatted);
        }

    };
    lib.event_attach = function (element, type, funcss, capture) {

        element.addEventListener(type, funcss, capture);
    };

    funcs.upload_puff_symbol = function (container_id, percent) {

        console.log(percent);

        console.log(typeof (percent));

        if (typeof (percent) === "string") {

            funcs.inc_html(`<section class="__header__header_below_reloader_show" style="width:${percent}"></section>`, $(container_id));

        } else if (typeof (percent) === "boolean") {

            funcs.inc_html(``, $(container_id));

        }

    };

    funcs.ajax_trigger = function (url, indic_id = null, indic_func = null, body = funcs.obj_stringif_parse({}, true), method = "POST", header = {}) {

        return new Promise(function (resolve, reject) {

            try {

                var xml_http_req = new XMLHttpRequest();
                xml_http_req.addEventListener('readystatechange', function () {

                    if (xml_http_req.readyState === 4 && xml_http_req.status === 200) {

                        resolve(funcs.obj_stringif_parse(xml_http_req.responseText));
                    } else if (xml_http_req.status === 404 && xml_http_req.readyState === 4) {

                        reject('{ "net_err": 2 }');
                    } else if (xml_http_req.status === 0 && xml_http_req.readyState === 4) {

                        reject('{ "net_err": 1 }');
                    }

                }, 1);
                if (indic_id !== null && indic_func !== null) {

                    xml_http_req.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {

                            indic_func(indic_id, (parseInt((e.loaded / e.total) * 100) + "%"));
                        }
                    }, 1);
                    xml_http_req.addEventListener('loadstart', function (e) {

                        indic_func(indic_id, true);
                    }, 1);
                    xml_http_req.addEventListener('loadend', function (e) {

                        if (xml_http_req.readyState === 4 && xml_http_req.status === 200) {

                            indic_func(indic_id, false);

                        } else if (xml_http_req.status === 0 && xml_http_req.readyState === 4) {

                            indic_func(indic_id, 'offline');

                        } else if (xml_http_req.status === 404 && xml_http_req.readyState === 4) {

                            indic_func(indic_id, '404');

                        }


                    }, 1);
                }

                xml_http_req.open(method, url, true);
                for (const key in header) {

                    if (header.hasOwnProperty(key)) {

                        const element = header[key];
                        xml_http_req.setRequestHeader(`${key}`, `${element}`);
                    }

                }

                xml_http_req.send(body);
            } catch (e) {

                reject(e);
            }

        });
    };
})();

(function () {

    funcs.all_catches_ = function (error) {

        console.log(error);
    };

})();

(function () {
    document.addEventListener("keydown", function (e) {

        if (e.keyCode === 85 && e.ctrlKey) {
            e.preventDefault();
        } else if (e.keyCode === 83 && e.ctrlKey) {
            e.preventDefault();
        } else if (e.ctrlKey && e.altKey && e.keyCode === 67) {
            e.preventDefault();
        } else if (e.ctrlKey && e.keyCode === 75) {
            e.preventDefault();
        }

    }, 1);
    document.addEventListener("contextmenu", function (e) {

        if (e.target.tagName === "IMG" || e.target.tagName === "VIDEO") {

            e.preventDefault();

        }

    }, 1);
})();
!function () {
    lib.get_current_word = function (el, position) {

        var content = el.textContent;
        position = content[position] === ' ' ? position - 1 : position;
        var startPosition = content.lastIndexOf(' ', position);
        var endPosition = content.indexOf(' ', position);
        startPosition = startPosition === content.length ? 0 : startPosition;
        endPosition = endPosition === -1 ? content.length : endPosition;
        return content.substring(startPosition + 1, endPosition);
    };
    lib.get_caret_position = function (el) {
        var caretOffset = 0;
        if (typeof window.getSelection !== "undefined") {
            var range = window.getSelection().getRangeAt(0);
            var selected = range.toString().length;
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(el);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length - selected;
        }
        return caretOffset;
    };
    lib.getSelectionElement = function () {
        var selection = window.getSelection();
        var container = selection.anchorNode;
        if (container.nodeType !== 3) {

            return container;
        } else {

            return container.parentNode;
        }
    };
    lib.obj_looper_challenge = function (arrays, funcs_tion_) {

        let num_prop_done = 0;

        for (const key in arrays) {
            if (arrays.hasOwnProperty(key)) {

                funcs_tion_(key, arrays[key], { key: arrays[key] }, arrays, num_prop_done);

                ++num_prop_done;
            }

        }

    };

}();


!function () {

    funcs.all_three_validator = function (file__) {

        return (funcs.image_validator(file__) || funcs.video_validator(file__) || funcs.audio_validator(file__));

    };

    funcs.image_validator = function (file__) {

        return ((file__.type === "image/jpeg" || file__.type === "image/png") && file__.size <= 50000000);

    };

    funcs.video_validator = function (file__) {

        return (file__.type === "video/mp4" && file__.size <= 500000000);

    };

    funcs.audio_validator = function (file__) {

        return (((file__.type === "audio/mpeg") || (file__.type === "audio/mp3")) && file__.size <= 300000000);

    };

    funcs.return_form_to_option = function (form) {

        let form_obj = {};

        lib._looper_challenge(form, function (element) {

            form_obj[element.name] = element.value;

        });

        return form_obj;

    };

    funcs.obj_to_url_query = function (obj) {

        let queryy = ``;

        lib.obj_looper_challenge(obj, function (key, value, element, arrays, num) {

            if (num > 0) {

                queryy += `&`;

            }

            queryy += `${key}=${value}`;

        });

        return queryy;

    };

}();

!function () {

    funcs.loop_changer = function (element) {

        if (element.loop === false) {

            element.loop = true;

        } else if (element.loop === true) {

            element.loop = false;

        }

        lib.host_event_execute_now('loopchange', element);

    };


    funcs.componentToHex = function (c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    funcs.rgbToHex = function (r, g, b) {

        return {

            color: "#" + funcs.componentToHex(r) + funcs.componentToHex(g) + funcs.componentToHex(b),

            r_comp: funcs.componentToHex(r),

            g_comp: funcs.componentToHex(g),

            b_comp: funcs.componentToHex(b),

        };
    };

    funcs.hexToRgb = function (hex) {

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return (result) ? {

            r_comp: parseInt(result[1], 16),

            g_comp: parseInt(result[2], 16),

            b_comp: parseInt(result[3], 16),

            color: `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`,

        } : null;

    };

}();

(function () {

    lib.create_element = function (tag) {

        return document.createElement(tag);

    };

    lib.append_child = function (container_id, element) {

        $(container_id).appendChild(element);

    };

    lib.ele_append_child = function (element_parent, element) {

        element_parent.appendChild(element);

    };

    lib.get_element_tag_name = function (tag) {

        return document.getElementsByTagName(tag);

    };

    lib.get_element_class_name = function (class_name) {

        return document.getElementsByClassName(class_name);

    };

    lib.get_element_name = function (name) {

        return document.getElementsByName(name);

    };

    lib.query_selector_all = function (tag_class_id) {

        return document.querySelectorAll(tag_class_id);

    };

    lib.get_iframe_window = function (element) {

        return element.contentWindow;

    }

    lib.post_message = function (to, message, to_origin = "*") {

        to.postMessage(message, to_origin);

    }

})();

(function () {

    funcs.log_iframe_id = "";

    funcs.user_login_token = "";

    funcs.loger_start_oauth = function (loggin_string) {

        let userinfo = JSON.parse(loggin_string);

        if (userinfo.hasOwnProperty("login_token")) {

            funcs.user_login_token = userinfo.login_token;

        }

        if (userinfo.hasOwnProperty(`logged_user`)) {

            let logout_starter_ = funcs.logout_starter;

            logout_starter_.log_me_in_now(userinfo);

            funcs.start_afresh();

            funcs.every_observer_ajax({ logged_in: false });

        } else {

            funcs.start_afresh();

        }

    };

    funcs.prompt_trigger_all_login = function (url, user_info = {}, iframe = false, width = 500, height = (window.innerHeight - 50)) {

        user_info.from_asker = true;

        let logged_in = JSON.stringify(user_info);

        let link_log = `${funcs.app}all_oauth/?asker=${funcs.encode_url(url)}#logged=${logged_in}`;

        if (iframe === true) {

            let new_section = lib.create_element('section');

            new_section.className = "position-fixed width-100-cent height-100-cent light-over-hang";

            new_section.style.top = 0;

            new_section.style.left = 0;

            new_section.style.zIndex = 10000;

            funcs.log_iframe_id = lib.rand_string_gen(1);

            new_section.id = funcs.log_iframe_id;

            new_section.innerHTML = `
            
            <section class="width-100-cent border-box display-flex padding-5-px position-relative z-index-1 margin-bottom--40-px"><section class="flex-1"></section>
            
                <section class="light-over-hang round-border cursor-pointer display-flex align-items-center justify-content-center icon-mager-xxx-small hover-color-fb-blue fb-shadow-shadow-2" onclick="this.parentNode.parentNode.remove();funcs.log_iframe_id='';"><i class="fa fa-times"></i></section>
            
            </section>

            <section class="height-100-cent width-100-cent display-flex justify-content-center align-items-center">
            
                <iframe id="${funcs.log_iframe_id}_iframe" class="max-width-98-cent border-radius-10px friends-shadow-shadow border-1px-solid" height=${height} width=${width} src='${link_log}'></iframe>
            
            </section>
            
            `;

            lib.ele_append_child(lib.get_element_tag_name('body')[0], new_section);

            funcs.log_window = lib.get_iframe_window($(`${funcs.log_iframe_id}_iframe`));

        } else if (iframe === false) {

            funcs.log_window = funcs.open_window(`${link_log}`, '', `height=${height},width=${width},left=${(window.innerWidth - width) / 2},top=${(window.outerHeight - height) / 2}`);

        } else {

            window.location.href = `${link_log}`;

        }

    };

})();

(function () {

    funcs.trigger_login = function () {

        funcs.prompt_trigger_all_login(window.location.href, funcs.userinfo, funcs.log_frame);

    };

    funcs.lets_log_in_event = lib.create_new_event('lets_log_in');

    window.addEventListener('lets_log_in', function (e) {

        funcs.trigger_login();

    }, 1);

    funcs.loger_recieve_oauth = function (str_logged_info) {

        if (str_logged_info !== "false" && str_logged_info !== false) {

            let logged_info = JSON.parse(str_logged_info);

            funcs.enroll_session(logged_info);

            if (logged_info.hasOwnProperty('updated_login_token') && logged_info.updated_login_token === true) {

                if ($(`${funcs.log_iframe_id}_iframe`) !== null) {

                    $(`${funcs.log_iframe_id}_iframe`).parentElement.parentElement.remove();

                    funcs.log_iframe_id = "";

                }

            }

        } else {

            if ($(funcs.log_iframe_id) === null) {

                lib.dispatch_event(window, funcs.lets_log_in_event);

            }

        }

    };

    funcs.enroll_session = function (logged_info) {

        if (logged_info.hasOwnProperty('logged_user') && logged_info.hasOwnProperty('login_token') && logged_info.hasOwnProperty('account_ist') && logged_info.hasOwnProperty('updated_login_token')) {

            funcs.userinfo = logged_info;

            sessionStorage.setItem('login_info', JSON.stringify(logged_info));

            console.log(funcs.userinfo);

            funcs.start_main_profile_update();

            funcs.post_login_handler();

        }

    }

    funcs.start_log_waiter = function () {

        window.addEventListener('message', function (e) {

            if (e.data.hasOwnProperty('logged')) {

                funcs.loger_recieve_oauth(e.data.logged);

            }

        }, 1);

        let url_info = lib.url_info_extractor(window.location);

        if (url_info.hasOwnProperty('hash_array') && url_info.hash_array.hasOwnProperty('logged')) {

            let logged = JSON.stringify({});

            logged = funcs.decode_url(url_info.hash_array.logged);

            funcs.loger_recieve_oauth(logged);

            lib.url_remove_search_hash(window.location.href);

        }

    };

})();


(function () {

    funcs.input_hollar_error = function (type = '', max = 4) {

        let error_ = ``;

        if (type === `max`) {

            error_ = ` <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> max upload exceeded </section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> max file upload for this content is ${max} and its exceeded</section>`;

        } else if (type === `audio`) {

            error_ = ` <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Only audio (mp3) files are accepted</section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Audio file must be of maxsize 300mb</section>`;

        } else if (type === `video`) {

            error_ = ` <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Only video (mp4) files are accepted</section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Video file must be of maxsize 500mb</section>`;

        } else if (type === `image`) {

            error_ = ` <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Only image (png, jpeg) files are accepted</section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Image file must be of maxsize 50mb</section>`;

        } else {
            error_ = `

                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Only image (png, jpeg), audio (mp3), video (mp4) files are accepted</section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Image file must be of maxsize 50mb</section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Audio file must be of maxsize 300mb</section>
        
                        <section class='padding-5-px'><i class="fa fa-angle-double-right"></i> Video file must be of maxsize 500mb</section>

            `;
        }

        return error_;

    };

    funcs.reenroll_ajax_no_repeat = function (obj) {

        if (!obj.hasOwnProperty("progress")) {

            if (obj.form.hasOwnProperty('4friendss_user') && funcs.userinfo.hasOwnProperty('login_token')) {

                obj.form['4friendss_user'] = funcs.userinfo.login_token;

            }

            funcs.send_get_me_something(obj.recognize, obj.form, obj.url);

        }
    };

    funcs.reenroll_ajax = function (obj, store_obj, key) {
        if (typeof (obj.recognize.repeat) === 'number' && !obj.hasOwnProperty("progress")) {

            store_obj[key] = setTimeout(function () {

                if (obj.form.hasOwnProperty('4friendss_user') && funcs.userinfo.hasOwnProperty('login_token')) {

                    obj.form['4friendss_user'] = funcs.userinfo.login_token;

                }

                funcs.send_get_me_something(obj.recognize, obj.form, obj.url);

            }, obj.recognize.repeat * 1000);

        }
    };

    funcs.uppdate_theme = function (element_css_id, theme) {
        if ($(element_css_id).href !== `${api}extra_script/theme_selector.php?theme=${theme}`) {

            lib.change_attribute($(element_css_id), 'href', `${api}extra_script/theme_selector.php?theme=${theme}`);
        }
    };

    funcs.is_session = function () {
        let login_info = sessionStorage.getItem('login_info');
        if (login_info === null) {
            return false;
        } else {
            return true;
        }

    };

    funcs.start_main_profile_update = function () {

        funcs.uppdate_theme('theme_css_great', funcs.userinfo.logged_user.info.theme);

        funcs.add_main_effect_to_yall(funcs.userinfo.logged_user.prof_styler, 'profile');

        funcs.add_main_effect_to_yall(funcs.userinfo.logged_user.cover_styler, 'cover');

        funcs.UpdateMycover(funcs.userinfo.logged_user.info.cover);

        funcs.UpdateMyProfilePics(funcs.userinfo.logged_user.info.prof_pix);

        funcs.update_profile_bio(funcs.userinfo.logged_user);

        lib._looper_challenge(lib.query_selector_all(".iiiiii"), function (element) {
            element.style.background = funcs.userinfo.logged_user.info.prof_pix_backgrund;
        });

        lib._looper_challenge(lib.query_selector_all(".cover_may_coulkd_wash_is_me"), function (element) {
            element.style.background = funcs.userinfo.logged_user.info.cover_backgrund;
        });

    };

    funcs.create_ext_info_link = function (url, user_info = {}) {

        user_info.from_asker = true;

        let logged_in = JSON.stringify(user_info);

        return `${funcs.app}all_oauth/?asker=${funcs.encode_url(url)}#logged=${logged_in}`;
    }

    funcs.story_release_border = function (obj) {

        let story_ring_class = ``;

        if (funcs.is_story(obj) === true) {

            story_ring_class = `story-redlist`;

        }

        return story_ring_class;

    };

    funcs.is_story = function (obj) {
        let story_ring_class = false;

        if (obj.info.un_ex_time > 0) {

            story_ring_class = true;

        }

        return story_ring_class;

    };

    funcs.sentiment_analysis_templater = function (senti_obj) {

        let template = `<section class="display-flex min-width-100-cent max-width-100-cent border-box align-items-center padding-2-px">
           
                <section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-2-px margin-left-5-px"> compound : ${(parseInt(senti_obj.compound)) * 100}% </section>
           
                <section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-2-px margin-left-5-px"> postive : ${(parseInt(senti_obj.pos)) * 100}% </section>
           
                <section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-2-px margin-left-5-px"> negative : ${(parseInt(senti_obj.neg)) * 100}% </section>
           
                <section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-2-px margin-left-5-px"> neutral : ${(parseInt(senti_obj.neu)) * 100}% </section>

        </section> 
        
        `;

        return `<section class="">
       
        <section class="padding-5-px border-box">

        <!--<section class="padding-5-px font-weight-bold"> Sentiment analysis </section>-->
        
            ${funcs.scroll_amber_wawerteer_fdtg(template, true, 'smaller_scroll_butt', 10, '', `flex-1 max-width-100-cent`)} 

        </section>
        
        </section>`;

        /* (contents, scroll = true, class_mirror_kish = '', alltitude = 10, id = '', classes = '') */

    };

    funcs.display_hashtags_tags = function (hashtag, tag, hash_first = true) {

        let tag_template = ``;

        let hashtag_list = ``;

        let tag_list = ``;

        if (!hashtag.hasOwnProperty('none') || !tag.hasOwnProperty('none')) {

            if (!hashtag.hasOwnProperty('none')) {

                lib._looper_challenge(hashtag, function (element) {

                    hashtag_list += `<section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-2-px margin-left-5-px cursor-pointer hover-text-decoration-underline color-fb-blue hover-background-twitter" onclick="trigger_search('search_holder', '${element}','post');"> #${element} </section>`;

                });

            }

            if (!tag.hasOwnProperty('none')) {

                lib._looper_challenge(tag, function (element) {

                    tag_list += `<section class="width-fit-content display-flex line-height-initial align-items-center border-radius-5px padding-2-px margin-left-5-px cursor-pointer hover-text-decoration-underline color-fb-blue hover-background-twitter" onclick="trigger_anchor('${element}')"> @${element} </section>`;

                });

            }

            let hashtag_tag_template = `${hashtag_list}${tag_list}`;

            if (hash_first === false) {

                hashtag_tag_template = `${tag_list}${hashtag_list}`;

            }

            tag_template = `<section class="">
       
       <section class="padding-5-px border-box">

       <!--<section class="padding-5-px font-weight-bold"> Hashtags and Mentions list </section>-->
       
        <section> ${funcs.scroll_amber_wawerteer_fdtg(`<section class="display-flex min-width-100-cent max-width-100-cent">${hashtag_tag_template}</section>`, true, 'smaller_scroll_butt')}</section>
       
       </section>
       
       </section>`;

        }

        return tag_template;

    };

    funcs.large_prof_pix_display = function (container_id, img_path, suffix, effect, background_color) {

        if (img_path === 'me') {

            img_path = funcs.userinfo.logged_user.info.prof_pix;

        }

        $(container_id).innerHTML = `<img draggable="false" class='object-fit-contain width-100-cent height-100-cent' style='filter:${effect};background:${background_color};' src="${funcs.addImage(img_path, 80, 80, 80, 1)}"/>`;

    };

})();
