/*
$('#fabrics-search input').change(function () {
    var data = $('#fabrics-search').serialize();
    //alert(data);


    $.ajax({
        type: $('#fabrics-search').attr('method'),
        url: $('#fabrics-search').attr('action'),
        //dataType: 'json',
        data: data,
        error: function(jqXHR, textStatus, errorThrown) {
            messenger.error("Error", "There was an error while sending data");
        },
        success: function(json, textStatus, jqXHR) {
            alert(json);
            / *
            if (json.success)
            {
                messenger.success(json.message);
                form.find('#id').val(json.id);
            }
            else
            {
                //evidenzia la label con l'attributo for corrispondente
                form.find('label[for="'+json.wrong_name+'"]').addClass('has-error');
                messenger.error(json.wrong_label, json.message);
            }
            * /
        }
    });


});
*/


$('.color_option').click(function () {
    var input = $(this).parent().find('input');
    if (input.is(':checked'))
    {
        input.prop('checked', false);
        $(this).removeClass('selected');
    }
    else
    {
        input.prop('checked', true);
        $(this).addClass('selected');
    }
});

$.each($('.color_option'), function (i, v) {
    var input = $(v).parent().find('input');
    if (input.is(':checked'))
    {
        $(v).addClass('selected');
    }
    else
    {
        $(v).removeClass('selected');
    }
});

$('#reset').click(function () {
    $('#sku').val('');
    $('#fabrics-search input[type="checkbox"]').prop('checked', false);
    $('.color_option').removeClass('selected');
});