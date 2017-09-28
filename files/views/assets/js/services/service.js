/*
 * Service settings
 */
var pkrDB_settings = {
    "database_url": "https://baas.kinvey.com/appdata/kid_Sy59jI_Q",
    "database_id": "531f0bdde4b06b74b83548ad" //not sure if this is used in kinvey
}

/*
 * Services
 */

var pkrDB_Players_list_service = new Apperyio.RestService({
    'url': '{database_url}/Players',
    'dataType': 'json',
    'type': 'get'
});

var pkrDB_Transactions_list_service = new Apperyio.RestService({
    'url': '{database_url}/Transactions',
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
    'url': '{database_url}/updateBankBalance',
    'dataType': 'json',
    'type': 'get',
});

var pkrDB_BankBalance_list_service = new Apperyio.RestService({
    'url': '{database_url}/BankBalance',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var pkrDB_Transactions_create_service = new Apperyio.RestService({
    'url': '{database_url}/Transactions',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': pkrDB_settings
});

var pkrDB_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get'
});

var updatePlayersStats_service = new Apperyio.RestService({
    'url': '{database_url}/updatePlayersStats',
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
    'url': '{database_url}/GamesResults',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': pkrDB_settings
});

var pkrDB_GamesResults_list_service = new Apperyio.RestService({
    'url': '{database_url}/GamesResults',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});

var pkrDB_PlayersStats_list_service = new Apperyio.RestService({
    'url': '{database_url}/PlayersStats',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': pkrDB_settings
});
