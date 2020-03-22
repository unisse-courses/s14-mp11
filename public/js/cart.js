function checkCart()
{
    var name = document.forms["cart-form"]["inputName"].value;
    var address = document.forms["cart-form"]["inputAddress"].value;
    var checkbox = document.getElementById("inputCheckbox");


    if(name==""||name==null,address=="" || address==null)
    {
        alert("Please fill up the neccessary information");
        
        if(name == "" || name == null)
        {
            $('[name="inputName"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="inputName"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="inputName"]').css("border-color", "");
        }
        
        if(address == "" || address == null)
        {
            $('[name="inputAddress"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="inputAddress"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="inputAddress"]').css("border-color", "");
        }
        
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