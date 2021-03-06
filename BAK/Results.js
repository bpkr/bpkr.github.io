/*
 * JS for Results generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'aa0880bc-f53f-47a7-8a6e-9f4385a7b3ac';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Main",
    "location": "Main.html"
}, {
    "name": "BankBalance",
    "location": "BankBalance.html"
}, {
    "name": "Results",
    "location": "Results.html"
}];

function Results_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_57': 'Results_mobilelist_57',
        'mobilelistitem_58': 'Results_mobilelistitem_58',
        'mobilelistitembutton_59': 'Results_mobilelistitembutton_59',
        'mobilebutton_74': 'Results_mobilebutton_74',
        'mobilecollapsibleset_46': 'Results_mobilecollapsibleset_46',
        'mobilecollapsblock_53': 'Results_mobilecollapsblock_53',
        'mobilecollapsblockheader_54': 'Results_mobilecollapsblockheader_54',
        'mobilecollapsblockcontent_55': 'Results_mobilecollapsblockcontent_55',
        'html_81': 'Results_html_81',
        'mobilelabel_78': 'Results_mobilelabel_78',
        'CustomNavFooter_79': 'Results_CustomNavFooter_79',
        'CustomNavFooter_79_mobilenavbar_1': 'Results_CustomNavFooter_79_mobilenavbar_1',
        'CustomNavFooter_79_mobilenavbaritem_2': 'Results_CustomNavFooter_79_mobilenavbaritem_2',
        'CustomNavFooter_79_mobilenavbaritem_3': 'Results_CustomNavFooter_79_mobilenavbaritem_3',
        'CustomNavFooter_79_mobilenavbaritem_42': 'Results_CustomNavFooter_79_mobilenavbaritem_42'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["Results_GamesResults_list_service_onsuccess_mapping_0"] = {
        "homeScreen": "Results",
        "directions": [

        {
            "from_name": "GamesResults_list_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Results",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['mobilecollapsblock_53']"

            },

            {

                "source": "$['body'][i]['date_string']",
                "target": "$['mobilecollapsblock_53']['mobilecollapsblockheader_54:text']"

            },

            {

                "source": "$['body'][i]['comments']",
                "target": "$['mobilecollapsblock_53']['mobilelabel_78:text']"

            },

            {

                "source": "$['body'][i]['comments']",
                "target_transformation": function(value, element) {
                    if (value) return true;
                    else return false;
                },
                "target": "$['mobilecollapsblock_53']['mobilelabel_78:visible']"

            },

            {

                "source": "$['body'][i]['results_string']",
                "target_transformation": function(value, element) {
                    str = value.replace(/: -/g, "</td><td>&nbsp;-");
                    str = str.replace(/: /g, "</td><td>&nbsp;+");
                    str = str.replace(/,/g, "</td></tr><tr><td>");
                    return "<table><tr><td>" + str + "</td></tr></table>";

/*

str = value.replace(/:/g,"</td><td>");
str = str.replace(/,/g,"</td></tr><tr><td>");
return "<table><tr><td>" + str + "</td></tr></table>";
*/

                    //return value.replace(/,/g,"\n").replace(/:/g,"\t: ").replace(/:  -/g, ": -");

                    //var array = str.split(",");
                    //return "<table><tr><td>" + array.join("</td></tr><tr><td>") + "</td></tr></table>";
                },
                "target": "$['mobilecollapsblock_53']['html_81:rawHtml']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Results_GamesResults_list_service_onbeforesend_mapping_0"] = {
        "homeScreen": "Results",
        "directions": [

        {
            "from_name": "userSessionToken",
            "from_type": "LOCAL_STORAGE",

            "to_name": "GamesResults_list_service",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['headers']['Authorization']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Results_PlayersStats_list_service_onsuccess_mapping_0"] = {
        "homeScreen": "Results",
        "directions": [

        {
            "from_name": "PlayersStats_list_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Results",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['mobilelistitem_58']"

            },

            {

                "source": "$['body'][i]['PlayerName']",
                "target": "$['mobilelistitem_58:text']"

            },

            {

                "source": "$['body'][i]['TotalWinnings']",
                "target": "$['mobilelistitem_58:counter_value']"

            },

            {

                "source": "$['body'][i]['Ranked']",
                "target": "$['mobilelistitem_58:visible']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Results_PlayersStats_list_service_onbeforesend_mapping_0"] = {
        "homeScreen": "Results",
        "directions": [
        {
            "from_name": "userSessionToken",
            "from_type": "LOCAL_STORAGE",

            "to_name": "PlayersStats_list_service",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['headers']['Authorization']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Results_restupdatePlayersStats_onbeforesend_mapping_0"] = {
        "homeScreen": "Results",
        "directions": [

        {
            "from_name": "userSessionToken",
            "from_type": "LOCAL_STORAGE",

            "to_name": "restupdatePlayersStats",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "Content-Type": "text/plain"
                },
                "parameters": {},
                "body": null
            },

            "mappings": [

            {

                "source": "$",
                "target": "$['headers']['Authorization']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Results_restupdatePlayersStats_onsuccess_mapping_0"] = {
        "homeScreen": "Results",
        "directions": []
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.GamesResults_list_service = Apperyio.datasources.GamesResults_list_service = new Apperyio.DataSource(pkrDB_GamesResults_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Results_GamesResults_list_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Results_GamesResults_list_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.PlayersStats_list_service = Apperyio.datasources.PlayersStats_list_service = new Apperyio.DataSource(pkrDB_PlayersStats_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Results_PlayersStats_list_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Results_PlayersStats_list_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.restupdatePlayersStats = Apperyio.datasources.restupdatePlayersStats = new Apperyio.DataSource(updatePlayersStats_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Results_restupdatePlayersStats_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Results_restupdatePlayersStats_onsuccess_mapping_0"]);
            try {
                PlayersStats_list_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Results';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Results_onLoad = function() {
            Results_elementsExtraJS();

            try {
                PlayersStats_list_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            Results_deviceEvents();
            Results_windowEvents();
            Results_elementsEvents();
        };

    // screen window events


    function Results_windowEvents() {

        $('#Results').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Results_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Results_elementsExtraJS() {
        // screen (Results) extra code

        /* mobilelist_57 */

        listView = $("#Results_mobilelist_57");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Results_mobilelist_57 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_58 */

        /* mobilecollapsblock_53 */

        $("#Results_mobilecollapsblock_53 .ui-collapsible-heading-toggle").attr("tabindex", "6");

    };

    // screen elements handler


    function Results_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Results_mobilecontainer [name="mobilebutton_74"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        GamesResults_list_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#Results_mobilecontainer [name="mobilebutton_74"]');

        $(document).off("click", '#Results_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Main', {
                        reverse: false
                    });

                }
            },
        }, '#Results_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_2"]');
        $(document).off("click", '#Results_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Results', {
                        reverse: false
                    });
                }
                try {
                    restupdatePlayersStats.execute({});
                    //PlayersStats_list_service.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };


            },
        }, '#Results_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_3"]');
        $(document).off("click", '#Results_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_42"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('BankBalance', {
                        reverse: false
                    });

                }
            },
        }, '#Results_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_42"]');

    };

    $(document).off("pagebeforeshow", "#Results").on("pagebeforeshow", "#Results", function(event, ui) {
        Apperyio.CurrentScreen = "Results";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Results_onLoad();
};

$(document).off("pagecreate", "#Results").on("pagecreate", "#Results", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Results_js();
});
