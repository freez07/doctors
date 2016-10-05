/**
  * Symptoms loader by Constantins Solovyov aka Source888
  *
  *
  */




$(document).ready(function(){
	
	$('button.show-simptoms-list').click(function(){
		$('li.symptom').each(function(){$(this).remove();});
		$('li.letter').each(function(){$(this).remove();});
		$('ul.alphabet').fadeIn("slow");
		$('ul.simptoms-list').fadeIn("slow");
		showSymptomsH4();
	for (var i=65; i<90; i++){
	$("ul.alphabet").append('<li class="letter" data-char="'+ String.fromCharCode(i) +'">'+String.fromCharCode(i)+'</li>');
 
}








	 $.getJSON('symptoms.json', function(data) {
                for(var i=0;i<data.length;i++){
                $('ul.simptoms-list').append('<li class="symptom" data-symptom-id="' + data[i].id + '"><span data-symptom-id="' + data[i].id + '">' + data[i].name + '</span></li>');

            }
			$('li.symptom').click(function(event){
					showDiagnosH4();
					$('li.symptom').each(function(){$(this).removeClass('selected');});
					$('ul.diagnosis').fadeIn("slow");
					
					var target = $(event.target);
					var simptText = target.text();
					$('h4#dignosh4').text("Causes for " + simptText);
					$(target).addClass('selected');	
					var id = $(target).attr('data-symptom-id');
					$('li.diagnos').each(function(){$(this).remove();});
					$.getJSON('symptoms.json', function(data) {
							for(g=0; g<data[id].symptoms.length;g++){
							
							$('ul.diagnosis').append('<li class="diagnos" data-diagnos-id="' + data[id].symptoms[g].id + '"><span>' + data[id].symptoms[g].name + '</span></li>');}
							
            
			$('li.diagnos').click(function(){
	
		showTabs();
	}); 
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
							showDiagnosH4();
							$('ul.diagnosis').fadeIn("slow");
					
					$('li.symptom').each(function(){$(this).removeClass('selected');});
					var target = $(event.target);
					$(target).addClass('selected');	
					var simptText = target.text();
					$('h4#dignosh4').text("Causes for " + simptText);
					var id = $(target).attr('data-symptom-id');
					$('li.diagnos').each(function(){$(this).remove();});
					$.getJSON('symptoms.json', function(data) {
							for(g=0; g<data[id].symptoms.length;g++){
							
							$('ul.diagnosis').append('<li class="diagnos" data-diagnos-id="' + data[id].symptoms[g].id + '"><span>' + data[id].symptoms[g].name + '</span></li>');}
							
       
$('li.diagnos').click(function(){
		
		showTabs();
	}); 	   
    });
	
	});
		
		
		});
	
	
	});
    });
	function showTabs(){
	$('.tabscontainer.modal').fadeIn("slow");;
	};
	function showSymptomsH4(){
	$('h4#symptoms4').fadeIn("slow");
	};
	function showDiagnosH4(){
	$('h4#dignosh4').fadeIn("slow");
	$('.close-cross').fadeIn("slow");
	};
	
	$(document).mouseup(function (e) {
    var container = $("#request-service-container");
    if (container.has(e.target).length === 0){
       $('.tabscontainer.modal').fadeOut("slow");
    }
	});
	$('span.cross').click(function(){
	$('.tabscontainer.modal').fadeOut("slow");
	});
	$('h4#symptoms4 > span').click(function(){
		hideSymptoms();
	});
	function hideSymptoms(){
	$('ul.simptoms-list').fadeOut("slow");
	$('ul.diagnosis').fadeOut("slow");
	$('ul.alphabet').fadeOut("slow");
	$('h4#symptoms4').fadeOut("slow");
	$('h4#dignosh4').fadeOut("slow");
	$('.close-cross').fadeOut("slow");
	};
	$('.close-cross').click(function(){
		hideDiagnos();
	});
	function hideDiagnos(){
	
	$('ul.diagnosis').fadeOut("slow");
	$('.close-cross').fadeOut("slow");
	$('h4#dignosh4').fadeOut("slow");
	};
	});

	
})