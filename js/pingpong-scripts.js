var verifyNumber = function(number){
	parseInt(number);
	if(isNaN(number)) {
		return false
	}
	else if( number%1 !=0) {
		return false;
	}

	else{
		return true;
	}
}




$(document).ready(function(){
	$("#test-button").click(function(event){
		$('#output').children("li").remove();
		var input = prompt("Please Enter Your Number");
		var num = verifyNumber(input);
		if (num){
			var numero = parseInt(input)
			var arr = [];
			var i = 0;
			var index;
			for(index=1; index<=numero; index+=1){
			  arr[i] = index;
			  i+=1;
			}

			arr.forEach(function(number){
				
				if(number%3===0 && number%5===0){

					var unique1 = "Fizz-Buzz";
					$('<li>'+unique1+'</li>').css('color','orange').appendTo("div #output").hide().slideDown();
					/*$("div #output").append("<li>"+unique1+"</li>")*/
				
				}

				else if(number%3===0){
					var unique2 = "Fizz";
					$('<li>'+unique2+'</li>').css('color','red').appendTo("div #output").hide().slideDown();
					/*$("div #output").append("<li>"+unique2+"</li>").css("color","red");*/
					
				}

				else if(number%5===0){
					var unique3 = "Buzz";
					$('<li>'+unique3+'</li>').css('color','blue').appendTo("div #output").hide().slideDown();
					
				}

				else {
					$('<li>'+number+'</li>').css('color','#9900CC').appendTo("div #output").hide().slideDown();
					
					
				}
				event.preventDefault();
			});
		}

		else{
			alert("Please Enter An Integer!")
		}


		



	});

	$("#clear-button").click(function(){
		$('#output').find("li").fadeOut(300, function() { $(this).remove().slideUp() });

	});
});