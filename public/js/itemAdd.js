function addItem()
{
    var iName = document.forms["item-form"]["itemName"].value;
    var iPrice = document.forms["item-form"]["itemPrice"].value;
    var iArtist = document.forms["item-form"]["itemArtist"].value;
    var iDesc = document.forms["item-form"]["itemDescription"].value;

    if(iName=="" || iName== null,iPrice=="" || iPrice== null, iArtist=="" || iArtist== null, iDesc=="" || iDesc== null)
    {
        alert("Please fill up the neccessary information");
        
        if(iName == "" || iName == null)
        {
            $("#itemName").css("border-color", "#B00000").css("border-width", "1.5px");
            $("#itemName").attr("placeholder", "Required*");
        }
        else{
            $("#itemName").css("border-color", "");
        }
        
        if(iPrice == "" || iPrice == null)
        {
            $("#itemPrice").css("border-color", "#B00000").css("border-width", "1.5px");
            $("#itemPrice").attr("placeholder", "Required*");
        }
        else{
            $("#itemPrice").css("border-color", "");
        }

        if(iArtist == "" || iArtist == null)
        {
            $("#itemArtist").css("border-color", "#B00000").css("border-width", "1.5px");
            $("#itemArtist").attr("placeholder", "Required*");
        }
        else{
            $("#itemArtist").css("border-color", "");
        }

        if(iDesc == "" || iDesc == null)
        {
            $("#itemDescription").css("border-color", "#B00000").css("border-width", "1.5px");
            $("#itemDescription").attr("placeholder", "Required*");
        }
        else{
            $("#itemDescription").css("border-color", "");
        }
        
        return false;
    }

    alert("Item added")
    window.location.href = "../../profile";
    return true;
}