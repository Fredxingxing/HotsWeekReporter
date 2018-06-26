var counter = {
    'WeekLength': [
		['Length', '周时长'],
		function () {
			var data = Math.round(dataPersonal.PlayerBase.game_length.sum / 60)
			return [
				data + ' minutes',
				data + ' 分钟'
			]
		}
	],
    'WeekTimes': [
		['Times', '周场次'],
		function () {
			var data = Math.round(dataPersonal.PlayerBase.game_total.sum)
			return [
				data + ' times',
				data + ' 局'
			]
		}
	],
    'WeekWin': [
		['Win', '周胜场'],
		function () {
			var data = Math.round(dataPersonal.PlayerBase.game_win.sum)
			return [
				data + ' times',
				data + ' 局'
			]
		}
	],
    'WeekWinRate': [
		['Win rate', '周胜率'],
		function () {
			var rate = (dataPersonal.PlayerBase.game_win.sum / dataPersonal.PlayerBase.game_total.sum * 100).toFixed(2)
			return [
				rate + '%',
				rate + '%'
			]
		}
	],
}

var events = {
    'ZergKiller': [
		['Zerg Killer', '虫群杀手'],
		function () {
			var avgDamage = Math.round(dataPersonal.PlayerBase.DamageDoneToZerg.sum / dataPersonal.PlayerBase.maps_total.sum[12])
			var limit = avgDamage > 5000
			return limit ?
				[
					'You made ' + avgDamage + ' zerg damage on average in Braxis Holdout',
					'平均每场布莱克西斯禁区中，你对虫群造成 ' + avgDamage + ' 点伤害'
				] : false
		}
	],
    'WinRate': [
		['Amazing win rate', '令人惊讶的胜率'],
		function () {
			var myWinRate = (dataPersonal.PlayerBase.game_win.sum / dataPersonal.PlayerBase.game_total.sum * 100).toFixed(2)
			var globalWinRate = (dataGlobal.PlayerBase.game_win.sum / dataGlobal.PlayerBase.game_total.sum * 100).toFixed(2)
			var limit = myWinRate > 1.2 * globalWinRate
			return limit ?
				[
					'Your win rate(' + myWinRate + '%) is far higher than the global average(' + globalWinRate + '%)',
					'你的胜率(' + myWinRate + '%)远远高于全球平均水平(' + globalWinRate + '%)'
				] : false
		}
	],
}

// Todo: 排行榜，等待接口支持
var ranking = {}
