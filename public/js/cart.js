function checkCart()
{
    var name = document.forms["cart-form"]["inputName"].value;
    var address = document.forms["cart-form"]["inputAddress"].value;
    var checkbox = document.getElementById("inputCheckbox");
    if(name==""||name==null,address=="" || address==null)
    {
        alert("Please fill up the neccessary information");
        return false;
    }

    if(checkbox.checked==false)
    {
        alert("Please check the terms and conditions");
        return false;
    }
    window.location.href = "../../transactions";
    return true;
}