function checkLogin()
{
    console.log("Checking form");
    var username = document.forms["login-form"]["loginUsername"].value;
    var password = document.forms["login-form"]["loginPassword"].value;

    if (username == null || username == "", password == null || password == "")
    {
        alert("Please fill up the neccessary fields");
        $('[name="registerEmail"]').css("border-color", "");
        $('[name="registerName"]').css("border-color", "");
        $('[name="registerUsername"]').css("border-color", "");
        $('[name="registerPassword1"]').css("border-color", "");
        $('[name="registerPassword2"]').css("border-color", "");
        $('[name="registerDescription"]').css("border-color", "");

        
        if(username == "" || username == null)
        {
            $('[name="loginUsername"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="loginUsername"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="loginUsername"]').css("border-color", "");
        }
        
        if(password == "" || password == null)
        {
            $('[name="loginPassword"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="loginPassword"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="loginPassword"]').css("border-color", "");
        }
        
        return false;
    }

    alert("Welcome back!");
    // TODO: Insert function where it will find and match to the database
    window.location.href = "../../profile";   
    return true;
}

function checkRegister()
{
    console.log("Checking form");
    var email = document.forms["registration-form"]["registerEmail"].value;
    var name = document.forms["registration-form"]["registerName"].value;
    // var username = document.forms["registration-form"]["registerImage"].value;
    var username = document.forms["registration-form"]["registerUsername"].value;
    var pass1 = document.forms["registration-form"]["registerPassword1"].value;
    var pass2 = document.forms["registration-form"]["registerPassword2"].value;
    var description = document.forms["registration-form"]["registerDescription"].value;
    var checkbox = document.getElementById("registerCheckbox");

    if (username == null || username == "",email == null || email == "",name == null || name == "",
        pass1 == null || pass1 == "",pass2 == null || pass2 == "",description == null || description == "")
    {
        alert("Fill in the registration form")
        $('[name="loginUsername"]').css("border-color", "");
        $('[name="loginPassword"]').css("border-color", "");

        if(username == "" || username == null)
        {
            $('[name="registerEmail"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="registerEmail"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="registerEmail"]').css("border-color", "");
        }
        
        if(email == "" || email == null)
        {
            $('[name="registerName"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="registerName"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="registerName"]').css("border-color", "");
        }

        if(name == "" || name == null)
        {
            $('[name="registerUsername"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="registerUsername"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="registerUsername"]').css("border-color", "");
        }

        if(pass1 == "" || pass1 == null)
        {
            $('[name="registerPassword1"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="registerPassword1"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="registerPassword1"]').css("border-color", "");
        }

        if(pass2 == "" || pass2 == null)
        {
            $('[name="registerPassword2"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="registerPassword2"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="registerPassword2"]').css("border-color", "");
        }

        if(description == "" || description == null)
        {
            $('[name="registerDescription"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="registerDescription"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="registerDescription"]').css("border-color", "");
        }
        
        return false;
    }

    if(checkbox.checked==false)
    {
        alert("Please accept the terms and conditions");
        return false;
    }

    if(pass1!=pass2)
    {
        alert("Passwords do not match");
        
        if(pass1!=pass2)
        {
            $('[name="registerPassword2"]').css("border-color", "#B00000").css("border-width", "1.5px");
        }
        else{
            $('[name="registerPassword2"]').css("border-color", "");
        }

        return false;
    }
    window.location.href = "../../profile";     
    return true;
}
