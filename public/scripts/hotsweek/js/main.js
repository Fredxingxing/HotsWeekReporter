var presets
var dataGlobal
var dataPersonal
var playerInfo
var dataherolist
var datamaplist
// var timestamp = Math.round(new Date().getTime() / 1000)
// var weekNumber = Math.trunc((timestamp + 345600) / 604800) + 1;
var urlPresets = 'https://www.bphots.com/week/api/report/presets'
var urlGlobal = 'https://www.bphots.com/week/api/report/global/' + weekNumber
var urlPersonal = 'https://www.bphots.com/week/api/report/personal/' + weekNumber + '/' + playerID

var fetchData = function (url, params = null) {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json()).then((data) => {
            resolve(data)
        }, (error) => {
            reject(error)
        })
    })
}
//将Level_count等字段中的对象转为数组
var object_to_array=function(object) {
    var arr=[];
    for(var i in Object.keys(object)){
        arr.push(Object.keys(object)[i]);
    }
    return arr;
}
//依次为被除数，除数，精确度，是否为百分比，错误信息，单位。其中单位是一个长度为2的数组，形如["times","次"]；percentage_flag为1时表示计算结果为百分比
var divide=function (dividend,divisor,accuracy,percentage_flag,error_num,unit) {
    dividend=parseInt(dividend);
    divisor=parseInt(divisor);
    accuracy=parseInt(accuracy);
    if (percentage_flag){
        return divisor?[
            (dividend/divisor).toFixed(accuracy) * 100 + "%",
            (dividend/divisor).toFixed(accuracy) * 100 + "%",
        ]:errorInfo[error_num]
    }
    else{
        return divisor?[
            (dividend/divisor).toFixed(accuracy) + unit[0],
            (dividend/divisor).toFixed(accuracy) + unit[1],
        ]:errorInfo[error_num]
    }
}
var parseFields = function (data) {
    var parsedObj = {}
    for (var i in data) {
		if (i === 'PlayerBase') {
			parsedObj[i] = matchPresets(data[i])
		} else {
			parsedObj[i] = {}
			var _sumMax = {}
			for (var j in data[i]) {
				parsedObj[i][j] = matchPresets(data[i][j])
				_sumMax = findMax(_sumMax, j, data[i][j])
			}
			parsedObj[i]['_sumMax'] = _sumMax
            //console.log(parsedObj[i]['_sumMax'])
            //console.log(parsedObj[i])
		}
    }
    return parsedObj
}

var findMax = function (_sumMax, index, _data) {
	for (var i in presets) {
		var field = presets[i]
		if (_data[i] !== undefined && (_sumMax[field] === undefined || _sumMax[field][1] < _data[i].sum)) {
			_sumMax[field] = [index, _data[i].sum]
			//console.log(_sumMax)
		}
	}
	return _sumMax
}

var matchPresets = function (_data) {
	var _parsedObj = {}
	for (var i in presets) {
		if (_data[i] !== undefined) {
			_parsedObj[presets[i]] = _data[i]
		}
	}
	return _parsedObj
}

Promise.all([
    fetchData(urlPresets),
    fetchData(urlGlobal),
    fetchData(urlPersonal),
]).then(function ({
    0: presets,
    1: dataGlobal,
    2: dataPersonal,
}) {
	window.playerInfo = dataPersonal.PlayerInfo
    window.presets = presets
    window.dataGlobal = parseFields(dataGlobal)
	window.dataPersonal = parseFields(dataPersonal)
	window.dataherolist=dataherolist
	window.datamaplist=datamaplist
    console.log('dataGlobal:')
    console.log(window.dataGlobal)
    console.log('dataPersonal:')
    console.log(window.dataPersonal)
    main()
})

var main = function () {
    // do someting
	counter = window.counter
	events = window.events
    document.write('<h2>Player: ' + playerInfo.name + ' (from region ' + playerInfo.region + ')</h2>' + "<br />")
    for (var i in counter) {
        var item = counter[i]
		var title = item[0]
		var content = item[1]()
        document.write(title[lang] + ': ' + content[lang] + "<br />")
    }
	for (var i in events) {
        var item = events[i]
		var title = item[0]
		var content = item[1]()
		if (content !== false) {
			document.write(title[lang] + ': ' + content[lang] + "<br />")
		}
	}
}