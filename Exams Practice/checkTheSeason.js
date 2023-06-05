

function checkTheSeason(){
	while(true){
		const readline = require('readline');
		const rl=readline.createInterface({
  		input: process.stdin,
  		output: process.stdout
		});
		let userInput='';
		rl.question('Enter a month number(1-12):',(+userInput)=>{
			console.log(+userInput);
			rl.close();
		});
		try{
			let monthNum=parseInt(month);
			if(monthNum<1 || monthNum>12){
				throw new
				Error("Invalid input.Please enter a valid month number");
			}
			break;
		}
		catch(error){
			console.log(error.message);
		}
	}
	switch(monthNum){
		case 2:
		case 3:
			console.log("The Season is Vasantha.");
			break;
		case 4:
		case 5:
			console.log("The Season is Grishma/Summer.");
			break;
		case 6:
		case 7:
			console.log("The Season is Monsoon/Rainy.");
			break;
		case 8:
		case 9:
			console.log("The Season is Sharada.");
			break;
		case 10:
		case 11:
			console.log("The Season is Hemanta.");
			break;
		default:
			console.log("The Season is Shishira/Winter.");
			break;
	}
}
checkTheSeason()