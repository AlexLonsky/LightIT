$(document).ready(function(){
    $("#search").keyup(function(){
        var this_key = this;
        $.each($("#mytable tbody tr #firstName"), function() {
            if ($(this).text().toLowerCase().indexOf($(this_key).val().toLowerCase()) === -1) {
                $('.'+$(this).attr('name')).hide();
            } else {
                $('.'+$(this).attr('name')).show();
            }
        } )
    });
});