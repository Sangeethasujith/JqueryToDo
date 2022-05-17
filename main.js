$(document).ready(function(){
    $('input').keypress(function(event){
        if(event.which===13){
            var todotext=$(this).val();
            $(this).val("");
            $('.todolist').append('<li><input type="checkbox" class="checker">'+todotext+'<span><i class="fa fa-trash" aria-hidden="true"></i></span></li>');
        }
    });
    $('.todolist').on('click', "span" , function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		
	});
    $('.todolist').on('click', ".checker" , function(event){
        $(this).parent().toggleClass('done');
        $('.completed-tasks').append($(this).parent());
        $('.completed-tasks').hide();
    });
    $('.todo-nav .completed-task').click(function(){
        $('.completed-tasks').show();
        $('.todolist').hide();
    });

    $('.todo-nav .active-task').click(function(){
        $('.completed-tasks').hide();
		$('.todolist').show();
    });

    $('.todo-nav .all-task').click(function(){
        $('.completed-tasks').show();
        $('.todolist').show();
    });

    
});