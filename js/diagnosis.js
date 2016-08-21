	$(document).raedy(function){}		

			$('li.symptom').click(function(event){
					var target = $(event.target);
					var id = $(target).attr('data-symptom-id');
					$.getJSON('symptoms.json', function(data) {
							for(g=0; g<data[id].symptoms.length;g++){
							$('ul.diagnosis').append('<li class="diagnos" data-diagnos-id="' + data[id].symptoms[g].id + '">' + data[id].symptoms[g].name + '</li>');}
            
    });
	});
	})