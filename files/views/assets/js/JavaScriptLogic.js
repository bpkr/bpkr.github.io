function onLoad() {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        Samsung: function() {
            return navigator.userAgent.match(/Samsung/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    
    var gamedate = formattedDate();
    $('[tabindex="1"]').val(gamedate); //set the input value
    localStorage.setItem('gameDate', gamedate);
    localStorage.setItem('gameFlag', true);
    localStorage.setItem('playersLoaded', false);
    localStorage.removeItem('comments'); 
    
    
    //set the default date
    Main_mobiledatepicker_5_dataPickerOptions.defaultDate = gamedate;
    
    localStorage.removeItem('playersList');
    
   /* Apperyio('basicloginpopup').popup("open", {
                    transition: "popup"
                });
    */   
   if( isMobile.Android())
    {
        var inputField = document.getElementById("Main_mobiletextinput_17");
        if (inputField)
        {
            inputField.setAttribute("type","tel");
        }
    }
}

function onDateValueChanged() {
    
    var gamedate = $('[tabindex="1"]').val();
    
    localStorage.setItem('gameDate', gamedate);
    
}

function onPlayersLoaded() {
   // var playersLoaded = localStorage.getItem('playersLoaded');
    
    //if (playersLoaded) return;
    
   // localStorage.setItem('playersLoaded', true);
   onValueChanged();
   onPlayersListChange();
  
}


function onPlayersListChange() {
    var newData = localStorage.getItem('playersList');
    
    if (!newData) return;   
    newData = newData.split(',');
    
    var dropDown = $('[name=mobileselectmenu_150]');
    dropDown.html('');
    
    var selected = ''; 
    
    var host = 'None';

    if(newData.length > 0)
        host = newData[0]; //set the first player in list as host

    for (i = 0; i < newData.length; i++) {
        if (newData[i] === 'David'){
            selected = 'selected="selected"';
            host = newData[i];
        }
        else 
            selected = '';
        dropDown.append('<option value="' + newData[i] + '" ' + selected + '>' + newData[i] + '</option>');
    }

    localStorage.setItem('hostPlayer', host);
    dropDown.selectmenu('refresh');
    onHostChanged();
}

function onHostChanged() {
    
    var newHost = localStorage.getItem('hostPlayer');
    
    if(newHost === "None")
    {
        localStorage.removeItem('hostComments');   
        localStorage.removeItem('hostTransaction');
        return;
    }
    
    var myArray = [];
    var playersList = [];
    
    var checksum = 0;
    var PAY_TO_HOST = -10;
    
    var t = $("[name=mobiletextinput_17]");
    
    var playersExist = false;
    
    t.each(function(index) {
        checked = $("[name=mobilecheckbox_40]:eq(" + index + ")").find("input").prop('checked');
        if (checked) {
            playersExist = true;
            $("[name=mobiletextinput_17]:eq(" + index + ")").show();
            playerName = $("[name=mobilecheckbox_40]:eq(" + index + ")").prop('textContent');
            playerName = playerName.trim();
            
			
            if(playerName !== newHost)
            {          
                checksum += PAY_TO_HOST;                      
                myArray.push(playerName + ": " + PAY_TO_HOST);
                playersList.push(playerName);
            }
            
        } 
    });
    
    var totalForHost = 0-checksum;
    checksum += totalForHost;
    
    myArray.push(newHost + ": " + totalForHost); 
    
    localStorage.setItem('hostComments', "Host "+newHost + " recieved " + totalForHost + " for hosting");
    
    localStorage.setItem('hostTransaction', myArray.join(","));

    var l = $("[name=mobilelabel_19]");
    
    if (isNaN(checksum)) {
        l.text("Host Error");
    }    
}


function onValueChanged() {
    
    var myArray = [];
    var playersList = [];
    
    var checksum = 0;
    var pResult;
    var t = $("[name=mobiletextinput_17]");
    
    var playersExist = false;
    
    // for(var index=0; index < t.length;index++) {
    t.each(function(index) {
        checked = $("[name=mobilecheckbox_40]:eq(" + index + ")").find("input").prop('checked');
        if (checked) {
            playersExist = true;
            //$("[name=mobilecheckboxgroup_39]:eq("+index+")").prop('disabled',false).refresh(); 
            //$("[name=mobiletextinput_17]:eq("+index+")").prop('disabled',false).show().refresh();   
            //$("[name=mobiletextinput_17]:eq("+index+")").removeAttr("disabled");
            //$("[name=mobiletextinput_17]:eq("+index+")").textinput('enable');
            $("[name=mobiletextinput_17]:eq(" + index + ")").show();
            playerName = $("[name=mobilecheckbox_40]:eq(" + index + ")").prop('textContent');
            playerName = playerName.trim();
            showPlayerInList(playerName);
            pResult = parseFloat(t[index].value);
            checksum += pResult;
            
            //myArray.push("<tr><td>"+playerName+"</td><td>"+ pResult+"</td></tr>");
            myArray.push(playerName + ": " + pResult);
            playersList.push(playerName);
            
        } else {
            //$("[name=mobilecheckboxgroup_39]:eq("+index+")").prop('disabled',true).refresh(); 
            //$("[name=mobiletextinput_17]:eq("+index+")").prop('disabled',true).refresh(); 
            //$("[name=mobiletextinput_17]:eq("+index+")").attr('disabled', true);
            
            $("[name=mobiletextinput_17]:eq(" + index + ")").hide();
            $("[name=mobiletextinput_17]:eq(" + index + ")").val("");
            //t[index].value = "";
        }
    });
    //}
    
    localStorage.setItem('checksum', checksum);
    

    
    //localStorage.setItem('gameResults', "<table>"+myArray.join(" ")+"</table>");
    localStorage.setItem('gameResults', myArray.join(","));
    
    var l = $("[name=mobilelabel_19]");
    
    l.text(checksum);
    if (isNaN(checksum)) {
        l.text("Error");
    }
    
    if (checksum === 0 && playersExist) {
        $("[name=mobilebutton_25]").removeAttr("disabled");
        $("[name=mobilebutton_125]").removeAttr("disabled");
    } else {
        //$("[name=mobilebutton_25]").attr("disabled", "disabled");
        $("[name=mobilebutton_25]").attr("disabled", true);
        $("[name=mobilebutton_125]").attr("disabled", true);
    }
    
    playersList.push("None"); 
    playersList= playersList.join();
    
    var oldPlayersList = localStorage.getItem('playersList');
    
    if(playersList !== oldPlayersList)
    {
        localStorage.setItem('playersList', playersList);
        onPlayersListChange();
    }
    
}

function addPlayers() {
    var p2 = $("[name=mobilecheckbox_65]");
    //p2 = p2.slice(1);
    
    p2.each(function(index) {
        checked = $("[name=mobilecheckbox_65]:eq(" + index + ")").find("input").prop('checked');
        
        if (checked) {
            var playerName = p2[index].textContent.trim();
            showPlayerInList(playerName);
            
        }
    });
}


function showPlayerInList(player) {
    
    var p3 = $("[name=mobilecheckbox_40]");
    
    p3.each(function(index) {
        var playerName = p3[index].textContent.trim();
        if (player == playerName) {
            $("[name^=mobilecheckboxgroup_39]:eq(" + index + ")").prop('checked', true).refresh();
            $("[dsrefid=mobilecheckboxgroup_39]:eq(" + index + ")").show();
            
            $("[name=mobilecheckbox_40]:eq(" + index + ")").prop('checked', true).refresh();
            $("[name=mobilecheckbox_40]:eq(" + index + ")").show();
            
            $("[name=mobiletextinput_17]:eq(" + index + ")").prop('disabled', false).refresh();
            $("[name=mobiletextinput_17]:eq(" + index + ")").show();
            
            //$("[name^=mobilecheckboxgroup_39]:eq("+index+")").click();   
            // $("[name=mobilegrid_6]:eq("+index+")").show();            
        }
    });
}


function formattedDate() {
    var d = new Date(Date.now()),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    
    return [day, month, year].join('/');
}

function onPizzaClick() {
    var myArray = [];
    var playersList = [];
    
    var checksum = 0;
    var pResult;
    var t = $("[name=mobiletextinput_17]");
    
    var pizzaValid = 0; // 0: not valid, 1: valid, 2 or more: not valid
    //need exactly 1 person to have money to be valid for pizza
    
    var pizzaPlayer;
    var pizzaCost;
    
    // for(var index=0; index < t.length;index++) {
    t.each(function(index) {
        checked = $("[name=mobilecheckbox_40]:eq(" + index + ")").find("input").prop('checked');
        if (checked) {
            $("[name=mobiletextinput_17]:eq(" + index + ")").show();
            playerName = $("[name=mobilecheckbox_40]:eq(" + index + ")").prop('textContent');
            playerName = playerName.trim();
            pResult = parseFloat(t[index].value);
            if(!isNaN(pResult))
            {
                pizzaValid++;
                pizzaPlayer = playerName;
                pizzaCost = pResult;
            }
            checksum += pResult;
            myArray.push(playerName + ": " + pResult);          
        }
    });

    console.log("Pizza" + myArray);
    

    if(pizzaValid ===1)
    {
        var pizzaCostForPerson =  -pizzaCost/myArray.length;
        
        t.each(function(index) {
          checked = $("[name=mobilecheckbox_40]:eq(" + index + ")").find("input").prop('checked');
          if (checked) {
            $("[name=mobiletextinput_17]:eq(" + index + ")").show();
            playerName = $("[name=mobilecheckbox_40]:eq(" + index + ")").prop('textContent');
            playerName = playerName.trim();
            
            if(playerName === pizzaPlayer)
            {
               t[index].value = pizzaCost + pizzaCostForPerson;
            }
            else
            {
               t[index].value = pizzaCostForPerson;
            }          
         }
        });
        
        onValueChanged();
    }
    
}

function copyTextToClipboard(text) {
  var clipboardInput = document.getElementById('clipboardInput');
  if (!clipboardInput) {
    clipboardInput = document.createElement("input");
    clipboardInput.id = 'clipboardInput';
    clipboardInput.type = "text";
	  
	clipboardInput.contentEditable = true;
	clipboardInput.readOnly = true;
	  
    document.body.appendChild(clipboardInput); 
  }
  clipboardInput.setAttribute('value', text);
  clipboardInput.removeAttribute('hidden');
        // create a selectable range
        var range = document.createRange();
        range.selectNodeContents(clipboardInput);
	        // select the range
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        clipboardInput.setSelectionRange(0, 999999);
	
  //clipboardInput.select();
  document.execCommand('copy');
  clipboardInput.setAttribute('hidden', true);
	
}

function sendResultsToWhatsApp() {
   var text = "Poker  ";
   text+= localStorage.getItem('gameDate')+ "  Host "+localStorage.getItem('hostPlayer') +"%0A";	
   text+= localStorage.getItem('gameResults').replace(/,/g, "%0A");
   var comments = localStorage.getItem('comments');		
   if (comments)
	   text+="%0A%0A" + comments
   
  window.open("whatsapp://send?text="+text,"_self")
}

function sendBankToWhatsApp() {
   var text = "Bank  ";
   text+= localStorage.getItem('gameDate') + "%0A";	
   text+= localStorage.getItem('gameResults').replace(/,/g, "%0A");
   var comments = localStorage.getItem('comments');		
   if (comments)
	   text+="%0A%0A" + comments
   
  window.open("whatsapp://send?text="+text,"_self")
}
function copyResultsToClipboard() {
   var text = "W1 Poker %0A ";
   text+= localStorage.getItem('gameDate')+ "  Host "+localStorage.getItem('hostPlayer') +"\r\n";	
   text+= localStorage.getItem('gameResults').replace(/,/g, "\r\n");
   var comments = localStorage.getItem('comments');		
   if (comments)
	   text+="%0A" + comments
   copyTextToClipboard(text);
}

