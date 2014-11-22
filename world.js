window.onload = function(){
    $$('#lookup')[0].onclick = lookupClick;
};

function lookupClick(){
    //window.alert("test");
    //new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?lookup=Jamaica",
    new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?lookup="+$$('#term')[0].value,
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
window.alert(ajax.responseText);
}

// Inserts appropriate response content into 'results' div
function updateInfo(ajax){
$$("#result")[0].innerHTML = ajax.responseText;
}

function ajaxFailure(ajax, exception){
alert("Ajax request error: \n\nServer status: " + ajax.status + " " + ajax.statusText +
"\n\nServer Response: " + ajax.responseText);
}