var functions = {
    'weekLength': [['Length', '周时长'], function () {
        return dataPersonal.PlayerBase.game_length.sum
    }],
    'weekTimes': [['Times', '周场次'], function () {
        return dataPersonal.PlayerBase.game_total.sum
    }],
    'weekWin': [['Win', '周胜场'], function () {
        return dataPersonal.PlayerBase.game_win.sum
    }],
    'weekWinRate': [['Win rate', '周胜率'], function () {
        var rate = dataPersonal.PlayerBase.game_win.sum / dataPersonal.PlayerBase.game_total.sum * 100
        return rate.toFixed(2) + '%'
    }],
}