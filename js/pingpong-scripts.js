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
					$("div #output").append("<li>"+unique1+"</li>");
				
				}

				else if(number%3===0){
					var unique2 = "Fizz";
					$("div #output").append("<li>"+unique2+"</li>");
					
				}

				else if(number%5===0){
					var unique3 = "Buzz";
					$("div #output").append("<li>"+unique3+"</li>");
					
				}

				else {
					$("div #output").append("<li>"+number+"</li>");
					
				}

			});
		}

		else{
			alert("Please Enter An Integer!")
		}


		event.preventDefault();



	});

	$("#clear-button").click(function(){
		$('#output').find("li").remove();

	});
});