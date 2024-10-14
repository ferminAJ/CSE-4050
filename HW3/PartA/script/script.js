function displayGreeting(){
    var firststring = document.getElementById('firstname').value;
    var defaultfirstname= "John";
    var firstname = (firststring || defaultfirstname)
    
    var laststring = document.getElementById('lastname').value;
    var defaultlastname = "Doe";
    var lastname = (laststring || defaultlastname)

    document.getElementById("greetingMessage").innerText = "Hello " + firstname + " " + lastname + ", you are learning to apply JavaScript to HTML!";

}