function apiCall(){
	$.ajax({
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
	  headers: {'X-Mashape-Key': 'Q8PMpQwAUdmshibUzm0jr9XGOhlsp1YIVxojsnH5MQmnQCJJny'},
	  success: function(data){
		 var parsed = jQuery.parseJSON(data);
		 $('#quote').text(parsed.quote);
		 $('#title').text("~ " + parsed.author);
	  },

	});
}
