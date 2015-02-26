	
	$(document).on('pageshow',"#page3", function(event) {
		
		$('#listevents').empty();
		var eventsstring="";
	
		getevents(url,function(data) {
			//console.log("events listing success, data=" + data);
			events = data;
			for(var index in events)
			{			
				var eventsindex = events[index];
				var eventstitle = eventsindex.events_title;
				var eventsdatetime = eventsindex.events_date_and_time;
				var eventsimage = eventsindex.events_image;
				var eventsthumbimage = eventsindex.events_thumb_image;
				
				var eventsdescription = eventsindex.events_description;
				//alert(eventsimageurl+eventsthumbimage);
				var eventsid = eventsindex.events_id;
				//alert(eventsid);
				var eventsstring = '<li><a href="#" data-transition="flip" onclick="getindividualevent('+eventsid+'),getindividualeventd('+eventsid+');" style="color: #383939 !important;"><br/ ><div class="ev-img"><img src="'+eventsimageurl+eventsthumbimage+'" width="176" height="82" /></div><p>'+eventstitle+'</p><p>'+eventsdatetime+'</p><span><img src="images/icon4.png" /></span></a></li>';
				
				$('#listevents').append(eventsstring).trigger("create");   
			}        
		});
	});

	
	$(document).on('pageshow',"#page21", function(event) {
		//alert('dkb');
		$('#listoffers').empty();
		var offersstring="";
	
		getoffers(url,function(data) {
			//console.log("offers listing success, data=" + data);
			offers = data;
			for(var index in offers)
			{			
				var offersindex = offers[index];
				var offerstitle = offersindex.offers_title;
				var offersimage = offersindex.offers_image;
				var offersdescription = offersindex.offers_description;
				var offersid = offersindex.offers_id;
				var offersstring = '<li><a href="#" data-transition="flip" onclick="getindividualoffer('+offersid+'),getindividualofferd('+offersid+');"  style="color: #383939 !important;">'+offerstitle+'<span><img src="images/icon4.png" /></span></a></li>';
				$('#listoffers').append(offersstring).trigger("create");   
				
				//<li> <a href="#page22" style="color: #383939 !important;"> Super-Saver Car Combo<span><img src="images/icon4.png"  alt=""/></span> </a> </li>
			}        
		});
	});


	$(document).on('pageshow',"#page29", function(event) {
		alert('Tap on a number in the map to view more details about the attraction/facility');
	});
