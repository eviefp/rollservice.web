var messenger = {
	success: function (maintext, subtext) {
		swal(maintext, subtext, "success")
	},
	info: function (maintext, subtext) {
		swal(maintext, subtext, "info")
	},
	infoHtml: function (maintext, subtext) {
		swal({
			title: maintext, 
			text: subtext, 
			type: "info",
			html: true
		})
	},
	error: function (maintext, subtext) {
		swal(maintext, subtext, "error")
	},
	warning: function (maintext, subtext) {
		swal(maintext, subtext, "warning")
	},
	confirm: function (title, text, cancel_text, confirm_text, confirm_function) {
		swal({
			title: title,
			text: text,
			type: "warning",
			showCancelButton: true,
			cancelButtonText: cancel_text,
			confirmButtonText: confirm_text,
			closeOnConfirm: false
		},
		confirm_function);
	}
}