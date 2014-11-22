window.onload = function(){
    $$('#lookup')[0].onclick = lookupClick;
};

function lookupClick(){
    //window.alert("test");
    //new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?lookup=Jamaica",
    var term = $$('#term')[0].value;
    var all = $$("#all")[0];
    var formatXML = $$("#format")[0];
    //console.log(all.checked);
    var requestString = "https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php";
    var optCnt = 0;
    if ((term !== '') || (all.checked===true || (formatXML.checked===true))){
        requestString += "?";
    }
    if (term !== ''){
        requestString += "lookup="+term;
        optCnt++;
    }
    if (all.checked===true){
        if(optCnt>0){
            requestString += "&";
        }
        requestString += "all="+all.checked;
        optCnt++;
    }
    if (formatXML.checked===true){
        if(optCnt>0){
            requestString += "&";
        }
        requestString += "format="+formatXML.value;
    }
    /*console.log(term!=="");
    if(term !== ""){
        new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?lookup="+term,
        {
            method: "get",
            onSuccess: updateInfo,          // NOTE: can switch to using alert box display by replacing with 'alertInfo' function.
            onFailure: ajaxFailure,
            onException: ajaxFailure
        }
        );
    }else{
        new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?all="+all.checked,
        {
            method: "get",
            onSuccess: updateInfo,          // NOTE: can switch to using alert box display by replacing with 'alertInfo' function.
            onFailure: ajaxFailure,
            onException: ajaxFailure
        }
        );
    }*/
    new Ajax.Request(requestString,
        {
            method: "get",
            onSuccess: updateInfo,          // NOTE: can switch to using alert box display by replacing with 'alertInfo' function.
            onFailure: ajaxFailure,
            onException: ajaxFailure
        }
        );
}

// Display response content in an alert dialog box
function alertInfo(ajax){
window.alert(ajax.responseXML);
}

// Inserts appropriate response content into 'results' div
function updateInfo(ajax){
    var formatXML = $$("#format")[0];
    if(formatXML.checked){
        $$("#result")[0].innerHTML = ajax.responseXML;
    }else{
        $$("#result")[0].innerHTML = ajax.responseText;
    }
}

function ajaxFailure(ajax, exception){
alert("Ajax request error: \n\nServer status: " + ajax.status + " " + ajax.statusText +
"\n\nServer Response: " + ajax.responseText);
}