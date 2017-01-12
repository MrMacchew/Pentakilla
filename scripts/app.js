var players = [];

for(var x = 0; x < 100; x++)
{
    for(var z = 0; z < 10; z++)
    {
        var player = {};
        //player["summonerName"] = match.participantIdentities[0].player.summonerName;
        //player["sid"] = match.participantIdentities[0].player.summonerId;
        //var pid = match.participantIdentities[0].player.participantId;
        player["pentakills"] = matches[x].participants[1].stats["pentaKills"];
        console.log(player["pentakills"]);
        players.push(player);
    }
}