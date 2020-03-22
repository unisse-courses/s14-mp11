function editUser()
{
    var email = document.forms["edit-form"]["email"].value;
    var name = document.forms["edit-form"]["name"].value;
    var username = document.forms["edit-form"]["username"].value;
    var password1 = document.forms["edit-form"]["password1"].value;
    var password2 = document.forms["edit-form"]["password2"].value;
    var userDescription = document.forms["edit-form"]["userDescription"].value;

    if( email=="" || email==null, name=="" || name==null, username=="" || username==null, 
        password1=="" || password1==null, password2=="" || password2==null, userDescription=="" || userDescription==null)
    {
        alert("Please fill up the neccessary information");

        if(email == "" || email == null)
        {
            $('[name="email"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="email"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="email"]').css("border-color", "");
        }
        
        if(name == "" || name == null)
        {
            $('[name="name"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="name"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="name"]').css("border-color", "");
        }

        if(username == "" || username == null)
        {
            $('[name="username"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="username"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="username"]').css("border-color", "");
        }

        if(password1 == "" || password1 == null)
        {
            $('[name="password1"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="password1"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="password1"]').css("border-color", "");
        }

        if(password2 == "" || password2 == null)
        {
            $('[name="password2"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="password2"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="password2"]').css("border-color", "");
        }

        if(userDescription == "" || userDescription == null)
        {
            $('[name="userDescription"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="userDescription"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="userDescription"]').css("border-color", "");
        }
        
        return false;
    }

    if(password1!=password2)
    {
        alert("Passwords do not match");
        
        if(password1!=password2)
        {
            $('[name="password2"]').css("border-color", "#B00000").css("border-width", "1.5px");
        }
        else{
            $('[name="password2"]').css("border-color", "");
        }

        return false;
    }

    window.location.href = "../../profile";
    return true;
}