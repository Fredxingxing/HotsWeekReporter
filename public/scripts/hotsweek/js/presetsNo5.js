var counter = {
    'GamesOfSupport': [
        ['Plays Support in this week', '治疗英雄周局数'],
        function () {
            var games=Math.round(adataPersonal.PlayerBase.PlaysSupport.sum)
            return[
                games+'times',
                games+'局'
            ]
        }
    ],
    'GamesOfSpecialist': [
        ['Plays Specialist in this week', '专业英雄周局数'],
        function () {
            var games=dataPersonal.PlayerBase.PlaysSpecialist.sum
            return[
                games+'times',
                games+'局'
            ]
        }
    ],
    'GamesOfMale': [
        ['Plays Male in this week', '这周男性英雄周局数'],
        function () {
            var games=dataPersonal.PlayerBase.PlaysMale.sum
            return[
                games+'times',
                games+'局'
            ]
        }
    ],
    'GamesOfFemale': [
        ['Plays Female in this week', '女性英雄周局数'],
        function () {
            var games=dataPersonal.PlayerBase.PlaysFemale.sum
            return[
                games+'times',
                games+'局'
            ]
        }
    ],
    'TimesOfDtagon': [
        ['Take Dragons in this week', '开启龙骑士周次数'],
        function () {
            var games=dataPersonal.PlayerBase.DragonNumberOfDragonCaptures.sum
            return[
                games+'times',
                games+'次'
            ]
        }
    ],
    'TimesOfDtagonShrines': [
        ['Take Dragons in this week', '占领龙骑士祭坛周次数'],
        function () {
            var games=dataPersonal.PlayerBase.DragonShrinesCaptured.sum
            return[
                games+'times',
                games+'次'
            ]
        }
    ],
    'NumbersOfGardensSeeds': [
        ['Numbers Of GardensSeeds in this week', '收集花园种子周总数'],
        function () {
            var Numbers=dataPersonal.PlayerBase.GardensSeedsCollected.sum
            return[
                Numbers+'Seeds',
                Numbers+'个'
            ]
        }
    ],
    'DamageOfGardensPlant': [
        ['Damage Of GardensSeeds in this week', '恐魔周总伤害量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.GardensPlantDamage.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'DamageDoneOfAltar': [
        ['Damage Done Of Altar in this week', '占领天空殿祭坛造成的周总伤害量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.AltarDamageDone.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'DamageToImmortal': [
        ['Damage Done To Immortal in this week', '对不朽者周总伤害量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.DamageDoneToImmortal.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'GemsTurned': [
        ['Gems Turned In in this week', '上交宝石周总量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.GemsTurnedIn.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'RavenCollected': [
        ['Raven Tributes Collected in this week', '乌鸦诅咒收集周总量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.RavenTributesCollected.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'MinesCollected': [
        ['Mines Skulls Collected in this week', '鬼灵矿收集周总量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.MinesSkullsCollected.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'DoubloonsCollected': [
        ['Black heart Doubloons Collected In in this week', '达布隆币收集周总量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.BlackheartDoubloonsCollected.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'DoubloonsTurnedIn': [
        ['Black heart Doubloons Turned In in this week', '达布隆币上交周总量'],
        function () {
            var Numbers=dataPersonal.PlayerBase.BlackheartDoubloonsTurnedIn.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'TimesInTemple': [
        ['Time In Temple in this week', '天空殿占领祭坛周总时间'],
        function () {
            var Numbers=dataPersonal.PlayerBase.TimeInTemple.sum
            return[
                Numbers+'s',
                Numbers+'s'
            ]
        }
    ],
    'NukeDamage': [
        ['Nuke Damage Done in this week', '核弹头周总伤害'],
        function () {
            var Numbers=dataPersonal.PlayerBase.NukeDamageDone.sum
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    '2_WinRate': [
        ['The WinRate of 2 Premades in this week', '两人开黑胜率'],
        function () {
            var WinRate=(dataPersonal.PlayerBase.party_win_2.sum / dataPersonal.PlayerBase.party_win_2.sum * 100).toFixed(2)
            return[
                WinRate+'%',
                WinRate+'%'
            ]
        }
    ],
    '3_WinRate': [
        ['The WinRate of 3 Premades in this week', '三人开黑胜率'],
        function () {
            var WinRate=(dataPersonal.PlayerBase.party_win_3.sum / dataPersonal.PlayerBase.party_win_3.sum * 100).toFixed(2)
            return[
                WinRate+'%',
                WinRate+'%'
            ]
        }
    ],
    '4_WinRate': [
        ['The WinRate of 4 Premades in this week', '四人开黑胜率'],
        function () {
            var WinRate=(dataPersonal.PlayerBase.party_win_4.sum / dataPersonal.PlayerBase.party_win_4.sum * 100).toFixed(2)
            return[
                WinRate+'%',
                WinRate+'%'
            ]
        }
    ],
    '5_WinRate': [
        ['The WinRate of 5 Premades in this week', '五人开黑胜率'],
        function () {
            var WinRate=(dataPersonal.PlayerBase.party_win_5.sum / dataPersonal.PlayerBase.party_win_5.sum * 100).toFixed(2)
            return[
                WinRate+'%',
                WinRate+'%'
            ]
        }
    ],
    'LastGameTime': [
        ['Last Game Time in this week', '上一次游戏时间'],
        function () {
            var Numbers=timestamptotime(dataPersonal.PlayerBase.last_game_time.max)
            return[
                Numbers,
                Numbers
            ]
        }
    ],
    'LevelAchieve': [
        ['The level at the end of game', '游戏结束时的等级'],
        function () {
            for(var level in dataPersonal.PlayerBase.Level_count)
            return[
                level+':'+dataPersonal.PlayerBase.Level_count[level]+'times',
                level+':'+dataPersonal.PlayerBase.Level_count[level]+'次'
            ]
        }
    ],
}

var events = {
    'TheLightOfSupport': [
        ['TheLightOfSupport', '辅助之光'],
        function () {
            var Support=dataPersonal.PlayerBase.PlaysSupport.sum
            var SupportWin=dataPersonal.PlayerBase.WinsSupport.sum
            var gameTotal=dataPersonal.PlayerBase.game_total.sum
            var SupportRate=(Support/gameTotal*100).toFixed(2)
            var SupportWinRate=(SupportWin/Support*100).toFixed(2)
            var limit=SupportRate>0.5
            return limit ?
                [
                    'Last week you have played'+gameTotal+'times in '+SupportRate+' you have played '+Support+' Support with the '+SupportWinRate+' WinRate',
                    '上周你在'+gameTotal+'局里','玩了'+Support+'局辅助','占了总局数的'+SupportRate+'%'+'，您辅助的胜率是'+SupportWinRate
                ] : false
        }
        ],
    'DragonRider': [
        ['DragonRider', '龙骑士'],
        function () {
            var myDragon = Math.round(dataPersonal.PlayerBase.DragonNumberOfDragonCaptures.sum / dataPersonal.PlayerBase.maps_total.sum[7])
            var globalDragon = Math.round(dataGlobal.PlayerBase.DragonNumberOfDragonCaptures.sum / dataGlobal.PlayerBase.maps_total.sum[7])
            var limit = myDragon > 2 * globalDragon
            var times = Math.round(myDragon / globalDragon)
            return limit ?
                [
                    'You are a real DragonRider with the ' + times + ' times more than the global average' + globalDragon + 'times',
                    '你开龙的次数是全球平均水平的' + times + '倍呢}！真是个名副其实的龙骑士！'
                ] : false
        }
    ],
    'Premades': [
        ['The King of Premades', '开黑小能手'],
        function () {
                var rate_2=(dataPersonal.PlayerBase.party_win_2.sum / dataPersonal.PlayerBase.party_win_2.sum * 100).toFixed(2)
                var rate_3=(dataPersonal.PlayerBase.party_win_3.sum / dataPersonal.PlayerBase.party_win_3.sum * 100).toFixed(2)
                var rate_4=(dataPersonal.PlayerBase.party_win_4.sum / dataPersonal.PlayerBase.party_win_4.sum * 100).toFixed(2)
                var rate_5=(dataPersonal.PlayerBase.party_win_5.sum / dataPersonal.PlayerBase.party_win_5.sum * 100).toFixed(2)
              var limit=rate_2>0.5&&rate_3>0.5&&rate_4>0.5&&rate_5>0.5
            return limit ?
                [
                    'Your WinRate of Premades all beyond 50%,nice teamWork!',
                    '你和好友开黑的胜率都超过了50%，是个名副其实的开黑小能手呢'
                ] : false
        }
    ],
    'Miser': [
        ['Miser', '吝啬鬼'],
        function () {
            var Collected=dataPersonal.PlayerBase.BlackheartDoubloonsCollected.sum
            var TurnedIn=dataPersonal.PlayerBase.BlackheartDoubloonsTurnedIn.sum
            var limit=TurnedIn<0.5*Collected
            return limit ?
                [
                    'In the map of the Black Heart Bay, you should look for the opportunity to turn In the Doubloons instead of squatting in your hands and finally losing them.',
                    '黑心湾地图中，你应该找机会把收集到的达布隆币上交，而不是攥在手中到最后失去。'
                ] : false
        }
    ],
    'UselessRavenTributes': [
        ['UselessRavenTributes', '无用的乌鸦诅咒'],
        function () {
            var Collected=dataPersonal.PlayerBase.RavenTributesCollected.sum
            var Damage=dataPersonal.PlayerBase.CurseDamageDone.sum
            var Collected_gol=dataGlobal.PlayerBase.RavenTributesCollected.sum
            var Damage_gol=dataPersonal.PlayerBase.CurseDamageDone.sum
            var limit=Collected>0.8*Collected_gol&&Damage<0.5*Damage_gol
            return limit ?
                [
                    'In the Curse Valley map, you should use the curse time to get the most benefits, such as pushing the line, pushing the tower, and so on..',
                    '诅咒谷地图中，要善用诅咒时间来获取最大的诅咒伤害，比如跟推吃线、推塔等等。'
                ] : false
        }
    ]
}
//时间戳转换时间
function timestamptotime(time){
    var date = new Date(time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = (date.getHours()<10 ? '0'+date.getHours():date.getHours()) + ':';
    var m = (date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
    var s = date.getSeconds()<10 ? '0'+date.getSeconds():date.getSeconds();
    return Y+M+D+h+m+s;
}

// Todo: 排行榜，等待接口支持
var ranking = {}
