/*
 * JS for BankBalance generated by Appery.io
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

function BankBalance_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilenavbar_179': 'BankBalance_mobilenavbar_179',
        'mobilenavbaritem_180': 'BankBalance_mobilenavbaritem_180',
        'mobilenavbaritem_181': 'BankBalance_mobilenavbaritem_181',
        'mobilelist_57': 'BankBalance_mobilelist_57',
        'mobilelistitem_58': 'BankBalance_mobilelistitem_58',
        'mobilelistitembutton_59': 'BankBalance_mobilelistitembutton_59',
        'mobilelist_135': 'BankBalance_mobilelist_135',
        'mobilelistitem_136': 'BankBalance_mobilelistitem_136',
        'mobilelistitembutton_137': 'BankBalance_mobilelistitembutton_137',
        'mobilecollapsibleset_161': 'BankBalance_mobilecollapsibleset_161',
        'mobilecollapsblock_162': 'BankBalance_mobilecollapsblock_162',
        'mobilecollapsblockheader_163': 'BankBalance_mobilecollapsblockheader_163',
        'mobilegrid_173': 'BankBalance_mobilegrid_173',
        'mobilegridcell_174': 'BankBalance_mobilegridcell_174',
        'mobilelabel_178': 'BankBalance_mobilelabel_178',
        'mobilegridcell_175': 'BankBalance_mobilegridcell_175',
        'mobilelabel_171': 'BankBalance_mobilelabel_171',
        'mobilecollapsblockcontent_164': 'BankBalance_mobilecollapsblockcontent_164',
        'html_165': 'BankBalance_html_165',
        'mobilelabel_166': 'BankBalance_mobilelabel_166',
        'CustomNavFooter_79': 'BankBalance_CustomNavFooter_79',
        'CustomNavFooter_79_mobilenavbar_1': 'BankBalance_CustomNavFooter_79_mobilenavbar_1',
        'CustomNavFooter_79_mobilenavbaritem_2': 'BankBalance_CustomNavFooter_79_mobilenavbaritem_2',
        'CustomNavFooter_79_mobilenavbaritem_3': 'BankBalance_CustomNavFooter_79_mobilenavbaritem_3',
        'CustomNavFooter_79_mobilenavbaritem_42': 'BankBalance_CustomNavFooter_79_mobilenavbaritem_42'
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

    Apperyio.mappings["BankBalance_BankBalance_list_service_onbeforesend_mapping_0"] = {
        "homeScreen": "BankBalance",
        "directions": [

        {
            "from_name": "userSessionToken",
            "from_type": "LOCAL_STORAGE",

            "to_name": "BankBalance_list_service",
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

    Apperyio.mappings["BankBalance_BankBalance_list_service_onsuccess_mapping_0"] = {
        "homeScreen": "BankBalance",
        "directions": [

        {
            "from_name": "BankBalance_list_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "BankBalance",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]['PlayerName']",
                "target": "$['mobilelistitem_58:text']"

            },

            {

                "source": "$['body'][i]['Balance']",
                "target": "$['mobilelistitem_58:counter_value']"

            },

            {

                "source": "$['body'][i]",
                "target": "$['mobilelistitem_58']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["BankBalance_Transactions_list_service_onsuccess_mapping_0"] = {
        "homeScreen": "BankBalance",
        "directions": [

        {
            "from_name": "Transactions_list_service",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "BankBalance",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['mobilelistitem_136']"

            },

            {

                "source": "$['body'][i]['transaction_string']",
                "target_transformation": function(value, element) {
                    str = value.replace(/: -/g, "</td><td>&nbsp;-");
                    str = str.replace(/: /g, "</td><td>&nbsp;+");
                    str = str.replace(/,/g, "</td></tr><tr><td>");
                    return "<table><tr><td>" + str + "</td></tr></table>";
                },
                "target": "$['mobilelistitem_136']['html_165:rawHtml']"

            },

            {

                "source": "$['body'][i]['comments']",
                "target": "$['mobilelistitem_136']['mobilelabel_166:text']"

            },

            {

                "source": "$['body'][i]['date_string']",
                "target": "$['mobilelistitem_136']['mobilelabel_171:text']"

            },

            {

                "source": "$['body'][i]['type']",
                "target_transformation": function(value, element) {
                    if (value) return value.charAt(0).toUpperCase() + value.slice(1);
                },
                "target": "$['mobilelistitem_136']['mobilelabel_178:text']"

            },

            {

                "source": "$['body'][i]['comments']",
                "target_transformation": function(value, element) {
                    if (value) return true;
                    else return false;
                },
                "target": "$['mobilelistitem_136']['mobilelabel_166:visible']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["BankBalance_Transactions_list_service_onbeforesend_mapping_0"] = {
        "homeScreen": "BankBalance",
        "directions": [

        {
            "from_name": "userSessionToken",
            "from_type": "LOCAL_STORAGE",

            "to_name": "Transactions_list_service",
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

    Apperyio.mappings["BankBalance_updateBankBalance_onbeforesend_mapping_0"] = {
        "homeScreen": "BankBalance",
        "directions": [

        {
            "from_name": "userSessionToken",
            "from_type": "LOCAL_STORAGE",

            "to_name": "updateBankBalance",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {},
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

    Apperyio.mappings["BankBalance_updateBankBalance_onsuccess_mapping_0"] = {
        "homeScreen": "BankBalance",
        "directions": []
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.BankBalance_list_service = Apperyio.datasources.BankBalance_list_service = new Apperyio.DataSource(pkrDB_BankBalance_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["BankBalance_BankBalance_list_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            data = sortResultsByBalance(data);
            Apperyio.processMappingAction(Apperyio.mappings["BankBalance_BankBalance_list_service_onsuccess_mapping_0"]);

        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    function sortResultsByBalance(array) {
    
        compare = function compare(a,b) {
            var x = b.Balance;
            var y = a.Balance;
            if (x==0)
                return -1;
            if (y==0)
                return 1;
            if (x < y)
              return -1;
            if (x > y)
              return 1;
            return 0;
          };
        return array.sort(compare);
    }

    window.Transactions_list_service = Apperyio.datasources.Transactions_list_service = new Apperyio.DataSource(pkrDB_Transactions_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["BankBalance_Transactions_list_service_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            data=sortByDate(data);
            Apperyio.processMappingAction(Apperyio.mappings["BankBalance_Transactions_list_service_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    function stringToDate(date_string) {
        var from = date_string.split("/");
        var to = new Date(from[2], from[1] - 1, from[0]);
        return to;
    }

    function sortByDate(array) {
        compare = function compare(a,b) {
            var x = stringToDate(b.date_string);
            var y = stringToDate(a.date_string);
            
            if (x < y)
              return -1;
            if (x > y)
              return 1;
            return 0;
          };
        return array.sort(compare);
    }

    window.updateBankBalance = Apperyio.datasources.updateBankBalance = new Apperyio.DataSource(updateBankBalance_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["BankBalance_updateBankBalance_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["BankBalance_updateBankBalance_onsuccess_mapping_0"]);
            try {
                BankBalance_list_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
            try {
                Transactions_list_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'BankBalance';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var BankBalance_onLoad = function() {
            BankBalance_elementsExtraJS();

            try {
                BankBalance_list_service.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
            //hide the filter of the second list
            Appery('mobilelist_135').prev().hide();

            BankBalance_deviceEvents();
            BankBalance_windowEvents();
            BankBalance_elementsEvents();
        };

    // screen window events


    function BankBalance_windowEvents() {

        $('#BankBalance').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function BankBalance_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function BankBalance_elementsExtraJS() {
        // screen (BankBalance) extra code

        /* mobilelist_57 */

        listView = $("#BankBalance_mobilelist_57");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#BankBalance_mobilelist_57 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_58 */

        /* mobilelist_135 */

        listView = $("#BankBalance_mobilelist_135");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#BankBalance_mobilelist_135 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_136 */

        /* mobilecollapsblock_162 */

        $("#BankBalance_mobilecollapsblock_162 .ui-collapsible-heading-toggle").attr("tabindex", "24");

    };

    // screen elements handler


    function BankBalance_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#BankBalance_mobileheader [name="mobilenavbaritem_180"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('BankBalance_mobilelist_135', 'mob', 'false');
                    toggle('BankBalance_mobilelist_57', 'mob', 'true');
                    Appery('mobilelist_57').prev().show();
                    Appery('mobilelist_135').prev().hide();
                }
            },
        }, '#BankBalance_mobileheader [name="mobilenavbaritem_180"]');
        $(document).off("click", '#BankBalance_mobileheader [name="mobilenavbaritem_181"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    toggle('BankBalance_mobilelist_57', 'mob', 'false');
                    toggle('BankBalance_mobilelist_135', 'mob', 'true');
                    try {
                        Transactions_list_service.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };
                    Appery('mobilelist_135').prev().show();
                    Appery('mobilelist_57').prev().hide();

                }
            },
        }, '#BankBalance_mobileheader [name="mobilenavbaritem_181"]');

        $(document).off("click", '#BankBalance_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Main', {
                        reverse: false
                    });

                }
            },
        }, '#BankBalance_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_2"]');
        $(document).off("click", '#BankBalance_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Results', {
                        reverse: false
                    });

                }
            },
        }, '#BankBalance_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_3"]');
        $(document).off("click", '#BankBalance_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_42"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('BankBalance', {
                        reverse: false
                    });

                }
                try {
                    updateBankBalance.execute({});
                    //BankBalance_list_service.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };

            },
        }, '#BankBalance_mobilefooter [name="CustomNavFooter_79_mobilenavbaritem_42"]');

    };

    $(document).off("pagebeforeshow", "#BankBalance").on("pagebeforeshow", "#BankBalance", function(event, ui) {
        Apperyio.CurrentScreen = "BankBalance";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    BankBalance_onLoad();
};

$(document).off("pagecreate", "#BankBalance").on("pagecreate", "#BankBalance", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    BankBalance_js();
});
