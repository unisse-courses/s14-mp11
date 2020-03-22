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
        return false;
    }
    if(password1!=password2)
    {
        alert("Password does not match");
        return false;
    }

    window.location.href = "../../profile";
    return true;
}