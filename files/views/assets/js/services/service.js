/*
 * Service settings
 */
var pkrDB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "531f0bdde4b06b74b83548ad"
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
    'url': '{database_url}/collections/Transactions',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var session_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/7860c795-f1e2-4a9c-b90b-64d92c7738d3/exec',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,
});

var updateBankBalance_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/code/111141e4-b64b-44ea-8e3e-e622459b4729/exec',
    'dataType': 'json',
    'type': 'get',
});

var pkrDB_BankBalance_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/BankBalance',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var pkrDB_Transactions_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/Transactions',
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
    'url': 'https://api.appery.io/rest/1/code/cf4d9f7a-78b3-44ff-95e4-09ec906e89cf/exec',
    'dataType': 'json',
    'type': 'get',
});

var RESTMailService = new Apperyio.RestService({
    'url': 'http://bpoker2014.appspot.com/mail',
    'dataType': 'json',
    'type': 'get',
});

var odataservice = new Apperyio.RestService({
    'url': 'http://services.odata.org/V3/OData/OData.svc/Categories',
    'dataType': 'json',
    'type': 'get',
});

var pkrDB_GamesResults_create_service = new Apperyio.RestService({
    'url': '{database_url}/collections/GamesResults',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': pkrDB_settings
});

var pkrDB_GamesResults_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/GamesResults',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var pkrDB_PlayersStats_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/PlayersStats',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});