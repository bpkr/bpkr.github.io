/*
 * Service settings
 */
var pkrDB_settings = {
    "database_url": "https://baas.kinvey.com/appdata/kid_Sy59jI_Q",
    "database_id":"531f0bdde4b06b74b83548ad"
}

/*
 * Services
 */

var pkrDB_Players_list_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/Players',
    'dataType': 'json',
    'type': 'get'
});

var pkrDB_Transactions_list_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/Transactions',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var updateBankBalance_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/rpc/kid_Sy59jI_Q/custom/updateBankBalance',
    'dataType': 'json',
    'type': 'get',
});

var pkrDB_BankBalance_list_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/BankBalance',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var pkrDB_Transactions_create_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/Transactions',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': pkrDB_settings
});

var pkrDB_login_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/login',
    'dataType': 'json',
    'type': 'get'
});

var updatePlayersStats_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/rpc/kid_Sy59jI_Q/custom/updatePlayersStats',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': pkrDB_settings
});

var RESTMailService = new Apperyio.RestService({
    'url': 'https://bpoker2014.appspot.com/mail',
    'dataType': 'json',
    'type': 'get',
});

var pkrDB_GamesResults_create_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/GamesResults',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': pkrDB_settings
});

var pkrDB_GamesResults_list_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/GamesResults',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var pkrDB_PlayersStats_list_service = new Apperyio.RestService({
    'url': 'https://baas.kinvey.com/appdata/kid_Sy59jI_Q/PlayersStats',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});
