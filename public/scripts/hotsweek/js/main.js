var presets
var dataGlobal
var dataPersonal
var playerInfo
// var timestamp = Math.round(new Date().getTime() / 1000)
// var weekNumber = Math.trunc((timestamp + 345600) / 604800) + 1;
var urlPresets = '/week/api/report/presets'
var urlGlobal = '/week/api/report/global/' + weekNumber
var urlPersonal = '/week/api/report/personal/' + weekNumber + '/' + playerID

var fetchData = function (url, params = null) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json()).then((data) => {
            resolve(data)
        }, (error) => {
            reject(error)
        })
    })
}

var parseFields = function (data) {
    var parsedObj = {}
    for (var i in data) {
        parsedObj[i] = {}
        for (var j in presets) {
            if (data[i][j] !== undefined) {
                parsedObj[i][presets[j]] = data[i][j]
            }
        }
    }
    return parsedObj
}

Promise.all([
    fetchData(urlPresets),
    fetchData(urlGlobal),
    fetchData(urlPersonal),
]).then(function ({
    0: presets,
    1: dataGlobal,
    2: dataPersonal
}) {
    window.presets = presets
    window.dataGlobal = parseFields(dataGlobal)
    window.playerInfo = dataPersonal.PlayerInfo
    window.dataPersonal = parseFields(dataPersonal)
    console.log(dataGlobal)
    console.log(dataPersonal)
    main()
})

var main = function () {
    // do someting
    document.write('<h2>Player: ' + playerInfo.name + ' (from region ' + playerInfo.region + ')</h2>' + "<br />")
    for (var i in functions) {
        var item = functions[i]
        document.write(item[0][lang] + ': ' + item[1]() + "<br />"); 
    }
}