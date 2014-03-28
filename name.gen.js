function Name_Generator(){

	this.getName = function(race, gender){
		
		/*
			Currently supports only the generation of a 'Common' or 'First' name.
			Does not handle generation of 'Family' or 'Last' names.
			Names will always include a first part and a last part. 
			Inclusion of a middle part is random. (Currently 50/50 but a weighted parameter could easily be added)
		*/
		
		//Build the name components:
		
		var thisPart;
		var firstPart = "";
		var middlePart = "";
		var lastPart = "";
		
		//First Part
		thisPart = nameSeed[race][gender]["ComFirst"];
			firstPart = thisPart[Math.floor((Math.random() * thisPart.length))];

		//Middle Part
		if(Math.floor((Math.random()*2))){
			thisPart = nameSeed[race][gender]["ComMiddle"];
				middlePart = thisPart[Math.floor((Math.random() * thisPart.length))];
		}
			
		//Last Part
		thisPart = nameSeed[race][gender]["ComLast"];
			lastPart = thisPart[Math.floor((Math.random() * thisPart.length))];
		
		
		return firstPart + middlePart + lastPart;
	}

}