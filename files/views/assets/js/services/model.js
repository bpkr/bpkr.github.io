/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Page": {
        "type": "object",
        "properties": {}
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "gameResults": new $a.LocalStorage("gameResults", "String"),

    "checksum": new $a.LocalStorage("checksum", "String"),

    "comments": new $a.LocalStorage("comments", "String"),

    "gameDate": new $a.LocalStorage("gameDate", "String"),

    "gameFlag": new $a.LocalStorage("gameFlag", "Boolean"),

    "hostTransaction": new $a.LocalStorage("hostTransaction", "String"),

    "transactionType": new $a.LocalStorage("transactionType", "String"),

    "hostPlayer": new $a.LocalStorage("hostPlayer", "String"),

    "hostComments": new $a.LocalStorage("hostComments", "String"),

    "userSessionToken": new $a.LocalStorage("userSessionToken", "String"),

    "user": new $a.LocalStorage("user", "String"),

    "password": new $a.LocalStorage("password", "String"),

    "updateGameResults": new $a.LocalStorage("updateGameResults", "Boolean")
};