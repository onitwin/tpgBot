module.exports={
	rollDice:(entry=1)=>{
		const resultsArray=[]
	for(let i=0; i < entry; i++){
		resultsArray.push(Math.ceil(Math.random() * 6));
	}
	return resultsArray;
	}
}