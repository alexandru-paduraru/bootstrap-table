current_color = "orange";
full_color = true;

$().ready(function(){
    $fresh_table = $('.fresh-table');
    
    if($('.switch').length != 0){
         $('.switch')['bootstrapSwitch']();
    }
    

    $('.fixed-plugin a').click(function(event){
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if($(this).hasClass('switch-trigger')){
            if(event.stopPropagation){
                event.stopPropagation();
            }
            else if(window.event){
               window.event.cancelBubble = true;
            }     
        } else {
            slide_no = $(this).data('slide');
            $parent_list = $(this).closest('.dropdown-menu');
            $(this).parent().siblings('li').removeClass('active');
           
            $(this).parent().addClass('active');
           
            video_id = $(this).data('video');
       
            console.log('video:' + video_id);
            
            if(video_id !== undefined){
               var video = $('#' + video_id + ' video');
    
               if(video.length != 0){
                   video[0].play();
               }
            } else {                    
               $("video").each(function(){
                    $(this)[0].pause();
                });    
            }
           
            slider_plugin.goToSlide(slide_no);  
            
                         
       }
    });
    
    $('.fixed-plugin .badge').click(function(){
       
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
         
        var new_color = $(this).data('color');
    
        $fresh_table.fadeOut('fast', function(){
            if(full_color){
                $fresh_table.removeClass("full-color-" + current_color).addClass("full-color-" + new_color);
            } else {
                $fresh_table.removeClass("toolbar-color-" + current_color).addClass("toolbar-color-" + new_color);
            }  
            
            current_color = new_color;    
            $fresh_table.fadeIn('fast');     
        });
    }); 
    
    $('.switch input').change(function(){
        $input = $(this);
        target = $input.data('target');
        type = $input.data('type');
    
        $fresh_table.fadeOut('fast', function(){
            
            if($input.is(':checked')){       
                $fresh_table.removeClass("toolbar-color-" + current_color).addClass("full-color-" + current_color);
                full_color = true;
            } else {
                $fresh_table.removeClass("full-color-" + current_color).addClass("toolbar-color-" + current_color);
                full_color = false;
            }    
       
            $fresh_table.fadeIn('fast');     
        });        
    });
});





