var presets
var dataGlobal
var dataPersonal
var timestamp = Math.round(new Date().getTime() / 1000)
// var weekNumber = Math.trunc((timestamp + 345600) / 604800) + 1;
var weekNumber = 2527
var urlPresets = '/week/show/presets'
var urlGlobal = '/week/show/personal/' + weekNumber + '/0'
var urlPersonal = '/week/show/personal/' + weekNumber + '/46'

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
    window.dataPersonal = parseFields(dataPersonal)
    main()
})

var main = function () {
    // do someting
    console.log(functions.weekWinRate[1]())
}