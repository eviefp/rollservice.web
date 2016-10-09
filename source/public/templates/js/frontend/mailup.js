$(document).ready(function () {
	$('.mailup-list input').click(function () {
		var list = new Array();
		var group = new Array();
		$.each($('.mailup-list input'), function (i, item) {
			item = $(item);
			if (item.is(':checked'))
			{
				list.push(item.attr('data-list'));
				group.push(item.attr('data-group'));
			}
		});
		$('#mail-up [name="list"]').val(list.join(','));
		$('#mail-up [name="group"]').val(group.join(','));
	});

	$('#mail-up').submit(function (e) {
		if ($('.mailup-list input:checked').size() == 0)
		{
			messenger.infoHtml(mailup_list_required_message);
			e.preventDefault();
		}

		if (!$('#box1').is(':checked'))
		{
			messenger.info(mailup_privacy_required_message);
			e.preventDefault();
		}
	});

	$('#list-mail-up-btn').click(function () {
		$('#list-mail-up').toggle();
	});




});
