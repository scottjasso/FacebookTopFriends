var script = document.createElement("SCRIPT");
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName("head")[0].appendChild(script);

	
function getNames(){
	var list =  $('script:contains("OrderedFriends")').html().split('OrderedFriendsListInitialData\",[],{"list":["')[1].split('"]}]],"require":[["ChatSidebar"')[0].split('","'); 
	var names = [];
	var ajaxs = [];
	for (var x=0;x<Math.min(list.length,25);x++){
		ajaxs[x]=$.Deferred();
		$.ajax(document.URL.split("://")[0]+"://www.facebook.com/"+list[x]).done((function(x){
			return function(data){
				names[x]="\n"+(x+1)+". "+data.split("pageTitle\">")[1].split("</title>")[0];
			}
		})(x)).always((function(x){
			return function(){
				ajaxs[x].resolve();
			}
		})(x));
	}
	$.when.apply($, ajaxs).always(function(){alert(names.toString());});
}

function checkJquery() {
    if (window.jQuery) {
        getNames();
    } else {
        window.setTimeout(checkJquery, 100);
    }
}

checkJquery();