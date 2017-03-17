$(document).ready(function(){
    $.ajax({
        url: 'https://randomuser.me/api/?page=3&results=30',
        dataType: 'json',
        success: function(data) {
            generate(data);
        }
    });
    function generate(data){
        for(var item=0;item<data.results.length;item++){
            var user=data.results[item];
            var templateScript = $('#users').html();
            var template = Handlebars.compile(templateScript);
            var compilTemplate =template(user);
            $('#user').append(compilTemplate);
            $(".tr-color:even").css("background-color", "rgba(108, 110, 112, 0.21)");
            $(".tr-color-first:even").css("background-color", "rgba(108, 110, 112, 0.21)");
            $(".collapse").on("show.bs.collapse", function(){
                $(".in").removeClass("in")
            });
        }
        plusMin();
    }
    function plusMin(){
        $('span').click(function (event) {
            $('span').removeClass('glyphicon glyphicon-minus').addClass('glyphicon glyphicon-plus');
            if($(event.target).hasClass('glyphicon glyphicon-plus')){
                $(event.target).removeClass('glyphicon glyphicon-plus').addClass('glyphicon glyphicon-minus')
            }
            $(event.target).toggleClass("glyphicon-plus glyphicon-minus");
        });
    }
});



