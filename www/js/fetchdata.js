var url="http://realmediaworks.com/EsselWorld/scripts.php";

var eventsimageurl="http://realmediaworks.com/EsselWorld/uploads/events/";
var eventsthumbimageurl="http://realmediaworks.com/EsselWorld/uploads/events/thumbnailed/thumbnailed";

var offersimageurl="http://realmediaworks.com/EsselWorld/uploads/offers/";
var offersthumbimageurl="http://realmediaworks.com/EsselWorld/uploads/offers/thumbnailed/thumbnailed";

function getevents(url,successfunction)
{ 
	var eventsurl=url+'?id=events&park=EsselWorld';
	//alert(eventsurl);
	$.ajax({
            type:"POST",
            url:eventsurl,
	   		dataType:"json",
            success:successfunction,
            error: function() {
				
                  //alert("AJAX call an epic failure");
            }
    });
}

function get_each_event(url,i,successfunction)
{
	var eacheventsurl=url+'?id=eventdetails&eventsid='+i+'';
	//alert(eacheventsurl);
	$.ajax({
            type:"POST",
            url:eacheventsurl,
	   		dataType:"json",
            success:successfunction,
            error: function() {
                 // alert("AJAX call an epic failure");
            }
        });
}

function getindividualevent(eventid)
{
	$('#eachevents').empty();
	get_each_event(url,eventid,function(data)
	{
		//'hi');
		//alert(JSON.stringify(data));
		//console.log("events wise listing success, data=" + data);
        eventonedata= data;
 		var outputdet = '';
		if(eventonedata!=null)
		{
			//alert('dd');
			$('#eachevents').empty();
    		$.each(eventonedata,function(index, value)
			{
				//alert(value.events_description);
				
				var res = value.events_description.replace("&lt;p&gt;",""); 
				var dkb =res.replace("&lt;/p&gt;",""); 
				
				var temp = document.createElement("div");
				temp.innerHTML = dkb;
				var dhakbij = temp.textContent || temp.innerText;
				
        		outputdet ='<h1>'+value.events_title+'</h1><span>'+value.events_date_and_time+'</span><p><img src="'+eventsimageurl+value.events_image+'" width="602" height="320" /></p><p>'+dhakbij+'</p>';
				//alert(outputdet);
				$('#eachevents').append(outputdet); 	
    		});
		}
	});
	$.mobile.changePage( "#page4", { transition: "flip"} );
}

function get_each_eventd(url,i,successfunction)
{
	var eacheventsurld=url+'?id=eventdetails&eventsid='+i+'';
	//alert(eacheventsurl);
	$.ajax({
            type:"POST",
            url:eacheventsurld,
	   		dataType:"json",
            success:successfunction,
            error: function() {
                 // alert("AJAX call an epic failure");
            }
        });
}



function getindividualeventd(eventid)
{
	$('#eacheventsd').empty();
	get_each_eventd(url,eventid,function(data)
	{
		//'hi');
		//alert(JSON.stringify(data));
		//console.log("events wise listing success, data=" + data);
        eventonedatad= data;
 		var outputdet = '';
		if(eventonedatad!=null)
		{
			$('#eacheventsd').empty();
    		$.each(eventonedatad,function(index, value)
			{
        		outputdet ='<h1>'+value.events_title+'</h1>';
				$('#eacheventsd').append(outputdet); 	
    		});
		}
	});
	$.mobile.changePage( "#page4", { transition: "flip"} );
}

/****************************************************************/

function getoffers(url,successfunction)
{ 
	var offersurl=url+'?id=offers&park=EsselWorld';
	
	$.ajax({
            type:"POST",
            url:offersurl,
	   		dataType:"json",
            success:successfunction,
            error: function() {
				
                  //alert("AJAX call an epic failure");
            }
    });
}

function get_each_offer(url,i,successfunction)
{
	var eachoffersurl=url+'?id=offerdetails&offersid='+i+'';
	//alert(eachoffersurl);
	$.ajax({
            type:"POST",
            url:eachoffersurl,
	   		dataType:"json",
            success:successfunction,
            error: function() {
                 alert("AJAX call an epic failure");
				 
            }
        });
}

function getindividualoffer(offerid)
{
	//alert('dd');
	$('#eachoffers').empty();
	get_each_offer(url,offerid,function(data)
	{
		//alert('ddddd');
		//alert(JSON.stringify(data));
		//exit;
		//console.log("offers wise listing success, data=" + data);
    	offeronedata= data;
 		var outputdet = '';
		if(offeronedata!=null)
		{
			$('#eachoffers').empty();
    		$.each(offeronedata,function(index, value)
			{
				var res = value.offers_description.replace("&lt;p&gt;",""); 
				var dkb = res.replace("&lt;/p&gt;",""); 
				
				var temp = document.createElement("div");
				temp.innerHTML = dkb;
				var dhakbij = temp.textContent || temp.innerText;
				
        		outputdet ='<div style="margin-bottom:10px !important;"><h1>'+value.offers_title+'</h1><p><img src="'+offersimageurl+value.offers_image+'" width="602" height="320" /></p><p>'+dhakbij+'</p></div>';
				
				$('#eachoffers').append(outputdet); 	
    		});
		}
	});
	$.mobile.changePage( "#page22", { transition: "flip"} );
}

function get_each_offerd(url,i,successfunction)
{
	var eachoffersurld=url+'?id=offerdetails&offersid='+i+'';
	//alert(eacheventsurl);
	$.ajax({
            type:"POST",
            url:eachoffersurld,
	   		dataType:"json",
            success:successfunction,
            error: function() {
                 // alert("AJAX call an epic failure");
            }
        });
}




function getindividualofferd(offerid)
{
	$('#eachoffersd').empty();
	get_each_offerd(url,offerid,function(data)
	{
		//'hi');
		//alert(JSON.stringify(data));
		//console.log("offers wise listing success, data=" + data);
        offeronedatad= data;
 		var outputdet = '';
		if(offeronedatad!=null)
		{
			$('#eachoffersd').empty();
    		$.each(offeronedatad,function(index, value)
			{
        		outputdet ='<h1>'+value.offers_title+'</h1>';
				$('#eachoffersd').append(outputdet); 	
    		});
		}
	});
	$.mobile.changePage( "#page22", { transition: "flip"} );
}