function onRequest(request, response, modules) {
    modules.logger.info("Calculating Bank Balance!");


    var collectionAccess = modules.collectionAccess;
    var logger = modules.logger;
    var body = request.body;
    var resultA = null;
    var resultB = null;

    var BankBalance = collectionAccess.collection('BankBalance');
    var Players = collectionAccess.collection('Players');
    var Transactions = collectionAccess.collection('Transactions');

    var total = {}; ////total balance

    var players = null;
    var transactions = null;
    var balance = null;

    var playedGames = {}; //number of played games   

    function compare(a, b) {
        if (a.PlayerName < b.PlayerName)
            return -1;
        if (a.PlayerName > b.PlayerName)
            return 1;
        return 0;
    }

    var calculateBalance = function() {

        if (players && transactions) {
            // Got both responses
            ///////////////////////////////////////////////////////////
            balance = [];

            for (var i = 0; i < players.length; i++) {
                total[players[i].Name] = 0;
            }

            //go over all transactions
            for (i = 0; i < transactions.length; i++) {
                console.log("transactions[" + i + "]=" + transactions[i]);
                console.log(transactions[i].transaction_string);
                if (!(transactions[i].transaction_string))
                    continue;

                var transaction = transactions[i].transaction_string.split(",");
                for (var j = 0; j < transaction.length; j++) {

                    var a = transaction[j].split(":");
                    var player = a[0].trim();
                    total[player] += parseFloat(a[1].trim());
                }
            }

            //build balance objects
            for (var k in total) { //go over all players
                // use hasOwnProperty to filter out keys from the Object.prototype
                if (total.hasOwnProperty(k)) {
                    var playerObject = {
                        PlayerName: k,
                        Balance: total[k]
                    };
                    balance.push(playerObject);
                }
            }

            balance.sort(compare);
            logger.info("Balance " + JSON.stringify(balance));
            for (i = 0; i < balance.length; i++) {
                logger.info("balance " + i + ":" + JSON.stringify(balance[i]));
            }

            BankBalance.remove({}, function() {
                logger.info("Cleared Bank Balance Table");

                BankBalance.insert(balance, function() {
                    logger.info("Updated Bank Balance Table");
                    response.body = {
                        things: players,
                        stuff: transactions
                    };
                    response.complete(200);
                });
            });


            //////////////////////////////////////////////////////////////////////

        } else {
            // Still waiting for the other response.
            //calculateBalance();
            return;
        }
    };

    Transactions.find({}, function(err, docs) {
        if (err) {
            logger.error('Query failed: ' + err);
            response.body.debug = err;
            response.complete(500);
        } else {
            logger.info("Transactions " + docs.length);
            transactions = docs;
            calculateBalance();
        }
    });

    Players.find({}, function(err, docs) {
        if (err) {
            logger.error('Query failed: ' + err);
            response.body.debug = err;
            response.complete(500);
        } else {
            logger.info("Players " + docs.length);
            players = docs;
            calculateBalance();
        }
    });

    if (!balance)
        calculateBalance();

    modules.logger.info("DONE ");

}