function validate()
{
    // get variables from form
    var name = document.getElementById("initString").value;
    var lname = document.getElementById("str2").value; 
    var empNum = document.getElementById("firstNum").value;
    //concat name with a space in between
    var fullName = name+ " "  + lname;

    document.getElementById("inputStatus").innerHTML =fullName;
    // make sure string is long enough 
    if (fullName.length <=2)
    {   
        document.getElementById("inputStatus").innerHTML = "Name not long enough";
    }
    
    if    (empNum <100  || empNum >=1000)
    {
        document.getElementById("inputstatus").innerHTML = "number is not 3 digits";
    }
}