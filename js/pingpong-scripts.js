$(document).ready(function(){
	$("#test-button").click(function(event){
		var num = parseInt(prompt("Please Enter Your Number"));
		if(num && num % 1 != 0){
			var arr = [];
			var i = 0;
			for(index=1; index<=num; index+=1){
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