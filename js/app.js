(function(){

	$.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="progress-bar" style="width: 100%;"></div></div></div>';

	$('#find_query').click(function(){
		$('body').modalmanager('loading').find('.modal-scrollable').off('click.modalmanager');
		qr = sendQuery(endpoint,$('#query_area').val().replace(/[\n\r]/g,""));
		qr.fail(
			function (xhr, textStatus, thrownError) {
				$('body').modalmanager('removeLoading');
				alert("Error: A '" + textStatus+ "' occurred.");
			}
		);
		qr.done(
			function (d) {
				$('body').modalmanager('removeLoading');
				$('body').removeClass('modal-open');
				result_table(d.results.bindings);
			}
		);
	});

	$('#result_div').hide();
}());

//結果表示用の関数
var result_table = function(data){
	var result_div = $('#result_div');
	var table = $('#result_list')[0];
	if (table == undefined) {
		result_div.append($('<table></table>').attr({
			'id' : 'result_list',
			'class' : 'table'
		}));
		table = $('#result_list')[0];
	}
	while (table.rows.length > 0) { table.deleteRow(0); }
	if (data instanceof Array) {
		result_div.show();
		// ヘッダ
		var header = table.createTHead(); // 行を追加
		var headerRow = header.insertRow(0);
		id = 1;
		for (var d = 0; d < data.length; d++) {
			var row1 = table.insertRow(d + 1); // 行を追加
			if (d == 0) {
				for ( var key in data[0]) {
					var th = document.createElement('th');
					var label = key;
					th.innerHTML = key;
					headerRow.appendChild(th);
				}
			}
			var i = 0;
			// ID
			for ( var key in data[d]) {
				var cell = row1.insertCell(i++); // ２つ目以降のセルを追加
				var value = data[d][key];
				if (value.value != undefined){value = value.value;}
				if (value == null) {value = '';}
				var link = true;
				if (link) {
					if (value != null && value.indexOf("http://") == 0) {
						value = '<a href="'+value+'" target="_blank">'+value+'</a>';
					}
				}
				cell.innerHTML = value;
			}
		}
	}
};
