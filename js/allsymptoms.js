/**
  * Symptoms loader by Constantins Solovyov aka Source888
  *
  *
  */




$(document).ready(function(){
	$('button.show-simptoms-list').click(function(){
		$('li.symptom').each(function(){$(this).remove();});
		$('li.letter').each(function(){$(this).remove();});
		$('ul.alphabet').removeClass('hidden');
		$('ul.simptoms-list').removeClass('hidden');
	for (var i=65; i<90; i++){
	$("ul.alphabet").append('<li class="letter" data-char="'+ String.fromCharCode(i) +'">'+String.fromCharCode(i)+'</li>');
 
}








	 $.getJSON('symptoms.json', function(data) {
                for(var i=0;i<data.length;i++){
                $('ul.simptoms-list').append('<li class="symptom" data-symptom-id="' + data[i].id + '"><span data-symptom-id="' + data[i].id + '">' + data[i].name + '</span></li>');

            }
			$('li.symptom').click(function(event){
					$('li.symptom').each(function(){$(this).removeClass('selected');});
					$('ul.diagnosis').removeClass('hidden');
					var target = $(event.target);
					$(target).addClass('selected');	
					var id = $(target).attr('data-symptom-id');
					$('li.diagnos').each(function(){$(this).remove();});
					$.getJSON('symptoms.json', function(data) {
							for(g=0; g<data[id].symptoms.length;g++){
							
							$('ul.diagnosis').append('<li class="diagnos" data-diagnos-id="' + data[id].symptoms[g].id + '"><span>' + data[id].symptoms[g].name + '</span></li>');}
							
            
    });
	});
	$("li.letter").click(function(event){
		$('li.letter').each(function(){$(this).removeClass('selected');});
		var chars = $(event.target);
		$(chars).addClass('selected');	
		var ch = $(chars).attr('data-char');
		$('li.symptom').each(function(){$(this).remove();});
		 $.getJSON('symptoms.json', function(data) {
                for(var i=0;i<data.length;i++){
				if(data[i].name.charAt(0) == ch)	{
                $('ul.simptoms-list').append('<li class="symptom" data-symptom-id="' + data[i].id + '"><span data-symptom-id="' + data[i].id + '">' + data[i].name + '</span></li>');
				}
				}
						$('li.symptom').click(function(event){
							$('ul.diagnosis').removeClass('hidden');
					$('li.symptom').each(function(){$(this).removeClass('selected');});
					var target = $(event.target);
					$(target).addClass('selected');	
					var id = $(target).attr('data-symptom-id');
					$('li.diagnos').each(function(){$(this).remove();});
					$.getJSON('symptoms.json', function(data) {
							for(g=0; g<data[id].symptoms.length;g++){
							
							$('ul.diagnosis').append('<li class="diagnos" data-diagnos-id="' + data[id].symptoms[g].id + '"><span>' + data[id].symptoms[g].name + '</span></li>');}
							
            
    });
	});
		
		
		});
	
	
	});
    });
	
	
	})
})