//var players = [];

for(var x = 0; x < 100; x++)
{
    for(var z = 0; z < 10; z++)
    {
        var player = {};
        player["summonerName"] = matches[x].participantIdentities[z].player.summonerName;
        //player["sid"] = match.participantIdentities[0].player.summonerId;
        player["pid"] = matches[x].participantIdentities[z].participantId;
        player["cid"] = matches[x].participants[z].championId;
        player["pentakills"] = matches[x].participants[z].stats["pentaKills"];
        if(player.pentakills > 0){
            console.log(player["pentakills"] + " | " + player["pid"] + " | " + player["summonerName"] + " | " + getChampById(player.cid));
        }
        //players.push(player);
    }
}

function createSummonerTable(){
    var players = {};
    for(var i = 0; i < matches.length; i++){
        for(var z = 0; z < matches[i].participantIdentities.length; )
        if(players[matches[i].participantIdentities[z].player.summonerName] == null)
        {
            players[matches[i].participantIdentities[z].player.summonerName] = 
            { "matchCount" : 0,"name" : matches[i].participantIdentities[z].player.summonerName};
        }
        player1[matches[i].participantIdentities[z].player.summonerName].matchCount += 1;        
    }
    return players;
}


var apiKey = "RGAPI-06a172cb-cf1f-4769-a269-06cf491f494b";
var nameHeader = "https://na.api.pvp.name";


