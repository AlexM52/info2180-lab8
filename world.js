window.onload = function(){
    $$('#lookup')[0].onclick = lookupClick;
};

function lookupClick(){
    //window.alert("test");
    //new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?lookup=Jamaica",
    new Ajax.Request("https://2180dev-alexm52.c9.io/webgit/AlexM52.github.io/info2180lab8/world.php?lookup="+$$('#term')[0].value,
    {
        method: "get",
        onSuccess: alertInfo,
        onFailure: ajaxFailure,
        onException: ajaxFailure
    }
);
}

function alertInfo(ajax){
window.alert(ajax.responseText);
}

function updateInfo(ajax){
//insert text...innerhtml??
}

function ajaxFailure(ajax, exception){
alert("Ajax request error: \n\nServer status: " + ajax.status + " " + ajax.statusText +
"\n\nServer Response: " + ajax.responseText);
}