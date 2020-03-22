function editItem()
{
    var iName = document.forms["edit-form"]["itemName"].value;
    var iPrice = document.forms["edit-form"]["itemPrice"].value;
    var iArtist = document.forms["edit-form"]["itemArtist"].value;
    var iDesc = document.forms["edit-form"]["itemDescription"].value;

    if(iName=="" || iName== null,iPrice=="" || iPrice== null, iArtist=="" || iArtist== null, iDesc=="" || iDesc== null)
    {
        alert("Please fill up the neccessary information");
        
        if(iName == "" || iName == null)
        {
            $('[name="itemName"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="itemName"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="itemName"]').css("border-color", "");
        }
        
        if(iPrice == "" || iPrice == null)
        {
            $('[name="itemPrice"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="itemPrice"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="itemPrice"]').css("border-color", "");
        }

        if(iArtist == "" || iArtist == null)
        {
            $('[name="itemArtist"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="itemArtist"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="itemArtist"]').css("border-color", "");
        }

        if(iDesc == "" || iDesc == null)
        {
            $('[name="itemDescription"]').css("border-color", "#B00000").css("border-width", "1.5px");
            $('[name="itemDescription"]').attr("placeholder", "Required*");
        }
        else{
            $('[name="itemDescription"]').css("border-color", "");
        }
        
        return false;
    }

    alert("Item edited")
    window.location.href = "../../item";
    return true;
}