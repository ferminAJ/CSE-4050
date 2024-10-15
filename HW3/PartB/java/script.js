function madlib(){
    var holiday = document.getElementById('holiday').value;
    var defaultholiday = "Christmas";
    var inputholiday = (holiday || defaultholiday);

    var noun = document.getElementById('noun').value;
    var defaultnoun = "house";
    var inputnoun = (noun || defaultnoun);

    var presenttenseverb = document.getElementById('presenttenseverb').value;
    var defaultpresenttenseverb = "stirring";
    var inputnoun = (presenttenseverb || defaultpresenttenseverb);    

    var animal = document.getElementById('animal').value;
    var defaultanimal = "mouse";
    var inputanimal = (animal || defaultanimal);  
    
    var pluralnoun = document.getElementById('pluralnoun').value;
    var defaultpluralnoun = "stockings";
    var inputpluralnoun = (pluralnoun || defaultpluralnoun); 
    
    var noun2 = document.getElementById('noun2').value;
    var defaultnoun2 = "chimney";
    var inputnoun2 = (noun2 || defaultnoun2);   

    var person = document.getElementById('person').value;
    var defaultperson = "St. Nicholas";
    var inputperson = (person || defaultperson);
    
    document.getElementById('madlib').innerText = "’Twas the night before " + inputholiday + ","
    "when all through the " +inputnoun+  
    "Not a creature was " + presenttenseverb+ "," 
    "Not even a/n " + inputanimal + " ;"
    "The " +inputpluralnoun+ " were hung by the "+inputnoun2+ " with care"
    "In hopes that "+ inputperson+ " soon would be there!"

}