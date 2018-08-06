javascript:(function(){var players = {
'GKP': {'Starters' : [], 'Substitutes' : []},
'DEF': {'Starters' : [], 'Substitutes' : []},
'MID': {'Starters' : [], 'Substitutes' : []},
'FWD' : {'Starters' : [], 'Substitutes' : []}
};

var copyText = '';

$('.ism-table--team').each(function(){

var playerStatus = $(this).find('.ism-table--team__name').text();

$(this).find('.ism-table--el__primary-text > a.ism-table--el__name').each(function(){
	players[$(this).closest('tr').find('td:nth-child(3)').text()][playerStatus].push($(this).text());
})

});

$.each( players, function( key, value ) {

copyText += key + ': ';
$.each( players[key], function( key, value ) {
	if (key == 'Starters') {
		copyText += value.join(' , ');
	} else if (key === 'Substitutes' && value.length > 0) {
		copyText += ' (' + value.join(' , ') +  ')';
	}
});

copyText += '\n\n';
});

var dummyTeamContainer = document.createElement("div");
dummyTeamContainer.innerHTML = copyText;
dummyTeamContainer.setAttribute("style", "margin: 20px 0;font-size: 22px;background:#38003c;color: #00ff87; padding: 30px;white-space: pre;");

$('#ismr-main').prepend($(dummyTeamContainer));})();
