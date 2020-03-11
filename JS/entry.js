function checkLogin()
{
    console.log("Checking form");
    var username = document.forms["login-form"]["loginUsername"].value;
    var password = document.forms["login-form"]["loginPassword"].value;
    if (username == null || username == "", password == null || password == "") {
        alert("Login details not filled")
        return false;
    }
    // TODO: Insert function where it will find and match to the database
    window.location.href = "../HTML/user.html";   
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
    // var username = document.forms["registration-form"]["loginUsername"].value;
    if (username == null || username == "",email == null || email == "",name == null || name == "",
        pass1 == null || pass1 == "",pass2 == null || pass2 == "",description == null || description == "") {
        alert("Fill in the registration form")
        return false;
    }
    window.location.href = "../HTML/user.html";   
    return true;
}
