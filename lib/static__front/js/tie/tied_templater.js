(function () {

    funcs.tied_list_hunted=function(obj){

        funcs.template_main_times(obj.recognize.container_id, obj.success.api_result.message.times, obj.recognize.suffix,true);

        funcs.template_post(obj.recognize.container_id, obj.success.api_result.message.post, obj.recognize.suffix);

        funcs.timeline_blog_display(obj.recognize.container_id, obj.success.api_result.message.blog, obj.recognize.suffix);

    };
    
})();