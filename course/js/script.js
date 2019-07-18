	var count = 0;
	    correct = 0;
	    incorrect = 0;
		audioCorrect = false; 
		
	const audio1 = new Audio('./audio/MCQ.mp3');
	const audio2 = new Audio('./audio/Click2-Sebastian-1.mp3');
	const audio3 = new Audio('./audio/Correct.mp3');
	const audio4 = new Audio('./audio/Incorrect.mp3');		
		 
	$('#iframe2, #iframe3').hide();
	$('#hideContainer').show();
	
	$('#mainStart').click(function(){
		$('#startContainer').hide();
		audio1.play();		
	})
	
	$('.option-buttons').mouseover(function(){
		audio2.play();
	})
		
	$('.option-buttons').click(function(){
		count++;
		if($(this).hasClass('correct')){
			correct++;
			corr();
			$(this).css({'background-image': 'linear-gradient(to bottom, rgb(216, 251, 74), rgb(212, 250, 72))', 'border': '1px solid #51c24a', 'box-shadow': 'none', 'cursor': 'default'})
			       .append('<img class="correct-img" src="images/correct.png" draggable="false"/>')
			       .prop('disabled', true);		
		}
		if($(this).hasClass('incorrect')){
			incorrect++;
			incorr();
			$(this).css({'background-image': 'linear-gradient(to bottom, rgb(249, 205, 72), rgb(249, 210, 73))', 'border': '1px solid #52a248', 'box-shadow': 'none', 'cursor': 'default'})
				   .append('<img class="incorrect-img" src="images/incorrect.png" draggable="false"/>')
			       .prop('disabled', true);
		}		
		if(correct == 3){
			$(audio3).on('ended', function(){
				$('#mainContainer').hide();
				$('#resultContainer').show();		
				$('#totalCount').text(count);
				$('#totalCorrect').text(correct);
				$('#totalIncorrect').text(incorrect);
			})
		}
		
		$('#show').mouseover(function(){ $('#show-img').attr('src','./images/show-2.png'); audio2.play();})
			      .mouseout(function(){ $('#show-img').attr('src','./images/show-1.png'); })
				  .css('cursor', 'pointer');
		$('#show').css('opacity', '1');
	});
	
	$(audio1).on('ended', function(){     
		$('#hideContainer').hide();
	});
		
	function corr(){
		audio3.play();
		$('#hideContainer').show();
		$('#iframe2').show();
		$('#iframe1, #iframe3').hide();
		setTimeout(function(){
			$('#iframe2').hide();
			$('#iframe1').show();
		}, 3500);
		$(audio3).on('ended', function(){
			$('#hideContainer').hide();
		});	
	}	
	
	function incorr(){
		audio4.play();
		$('#hideContainer').show();
		$('#iframe3').show();
		$('#iframe1, #iframe2').hide();
		setTimeout(function(){
			$('#iframe3').hide();
			$('#iframe1').show();
		}, 3000);
		$(audio4).on('ended', function(){     
			$('#hideContainer').hide();
		});
	}  
  	
	$('#answer-option1 .correct').click(function(){
		$('#answer-option1 .incorrect').prop('disabled', true);
		$('#answer-option1 .incorrect').css({'cursor': 'default','box-shadow': 'none'});
	});
	$('#answer-option2 .correct').click(function(){
		$('#answer-option2 .incorrect').prop('disabled', true);
		$('#answer-option2 .incorrect').css({'cursor': 'default','box-shadow': 'none'});
	});
	$('#answer-option3 .correct').click(function(){
		$('#answer-option3 .incorrect').prop('disabled', true);
		$('#answer-option3 .incorrect').css({'cursor': 'default','box-shadow': 'none'});
	});  
   
	$('#refresh, #result-refresh').click(function(){
		location.reload();
	});
	
	$('#refresh').mouseover(function(){ $('#refresh-img').attr('src','./images/refresh-2.png'); audio2.play(); })
			     .mouseout(function(){ $('#refresh-img').attr('src','./images/refresh-1.png'); })			   
	
	$('#show').click(function(){
		if(count > 0){
			$('.correct').css({'background-image': 'linear-gradient(to bottom, rgb(216, 251, 74), rgb(212, 250, 72))', 'border': '1px solid #51c24a', 'box-shadow': 'none', 'cursor': 'default'});
			if($('.correct, .incorrect').children().length != 0){			
				$('.correct-img, .incorrect-img').css('display', 'none');
				$('.correct').append('<img class="correct-img" src="images/correct.png" draggable="false"/>'); 
				$('.incorrect').append('<img class="incorrect-img" src="images/incorrect.png" draggable="false" />');		
			}
			if($('.correct, .incorrect').children().length == 0){			
				$('.correct').append('<img class="correct-img" src="images/correct.png" draggable="false"/>'); 
				$('.incorrect').append('<img class="incorrect-img" src="images/incorrect.png" draggable="false" />');		
			}		
			$('.incorrect').css({'background-image': 'linear-gradient(to bottom, rgb(249, 205, 72), rgb(249, 210, 73))', 'border': '1px solid #52a248','box-shadow': 'none', 'cursor': 'default', 'opacity': '0.4'});		
			$('.option-buttons').prop('disabled', true);
		}
		else{
			return;
		}
	});
