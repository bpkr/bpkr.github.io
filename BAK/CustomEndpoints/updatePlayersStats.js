function onRequest(request, response, modules) {
    modules.logger.info("#0 Updating Players Statistics!");

    var collectionAccess = modules.collectionAccess;
    var logger = modules.logger;
    var body = request.body;

    var PlayersStats = collectionAccess.collection('PlayersStats');
    var Players = collectionAccess.collection('Players');
    var GamesResults = collectionAccess.collection('GamesResults');



    var players = null;
    var games = null;
    var results = null;
    var a = null;
    var player = null;
    var rank = [];
    var playerObject = null;

    var total = {}; //total winnings
    var playedGames = {}; //number of played games   



    var compare = function(a, b) {
        if (a.TotalWinnings > b.TotalWinnings)
            return -1;
        if (a.TotalWinnings < b.TotalWinnings)
            return 1;
        return 0;
    };

    var callback = function() {
        ///////////////////////////////////////////////////////////
        {

            for (var i = 0; i < players.length; i++) {
                total[players[i].Name] = 0;
                playedGames[players[i].Name] = 0;
            }

            //go over all games
            for (i = 0; i < games.length; i++) {
                results = games[i].results_string.split(",");
                for (var j = 0; j < results.length; j++) {
                    a = results[j].split(":");
                    player = a[0].trim();
                    total[player] += parseFloat(a[1].trim());
                    playedGames[player]++;
                }
            }

            //calculate rank
            for (var k in total) { //go over all players
                // use hasOwnProperty to filter out keys from the Object.prototype
                if (total.hasOwnProperty(k)) {
                    playerObject = {
                        PlayerName: k,
                        TotalWinnings: total[k],
                        GamesPlayed: playedGames[k],
                        Ranked: playedGames[k] > 0
                    };
                    if (playerObject.GamesPlayed > 0)
                        rank.push(playerObject);
                }
            }
            rank.sort(compare);

            logger.info("#4 Rank " + JSON.stringify(rank));
            logger.info("#5 Rank.length " + rank.length);

            for (i = 0; i < rank.length; i++) {
                logger.info("## Rank* " + i + ":" + JSON.stringify(rank[i]));
                rank[i].Rank = i + 1;
            }

            PlayersStats.insert(rank, function() {
                logger.info("#7 Added Rank Table");
                response.body = {
                    ranks: JSON.stringify(rank)
                };
                response.complete(200);
            });

        }
    };


    PlayersStats.remove({},
        function() {
            logger.info("#1 Cleared PlayersStats Table");
            Players.find({}, function(err, docs) {
                if (err) {
                    logger.error('!Query failed: ' + err);
                    response.body.debug = err;
                    response.complete(500);
                } else {
                    logger.info("#2 Players " + docs.length);
                    players = docs;
                    GamesResults.find({}, function(err, docs) {
                        if (err) {
                            logger.error('Query failed: ' + err);
                            response.body.debug = err;
                            response.complete(500);
                        } else {
                            logger.info("#3 GamesResults " + docs.length);
                            games = docs;
                            callback();
                        }
                    });
                }
            });
        });


    modules.logger.info("# DONE");
}