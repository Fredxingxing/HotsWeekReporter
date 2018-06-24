let weekNumber = 2527
let urlPresets = '/week/show/presets'
let urlGlobal = '/week/show/personal/' + weekNumber + '/0'
let urlPersonal = '/week/show/personal/' + weekNumber + '/46'
let presets = fetch(urlPresets).then(response => response.json())
// var global = fetch(urlGlobal).then(response => response.json())
let global
fetch(urlGlobal).then(response => response.json()).then(function (result) {
    global = result
})
console.log(global)
let personal = fetch(urlPersonal).then(response => response.json())
// console.log(global)
for (let i in presets) {
    for (let j in global) {
        if (j === i) {
            let field = presets[i]
            global[field] = golbal[j]
            delete global[j]
        }
    }
}
// console.log(global)
let functions = {
    'weekLength': [['Length', '周时长'], function () {
        return this.personal.PlayerBase.game_length.sum
    }],
    'weekTimes': [['Times', '周场次'], function () {
        return this.personal.PlayerBase.game_total.sum
    }],
    'weekWin': [['Win', '周胜场'], function () {
        return this.personal.PlayerBase.game_win.sum
    }],
    'weekWinRate': [['Win rate', '周胜率'], function () {
        var rate = this.personal.PlayerBase.game_win.sum / this.personal.PlayerBase.game_total.sum * 100
        return rate.toFixed(2) + '%'
    }],
}