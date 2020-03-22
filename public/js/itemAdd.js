function addItem()
{
    var iName = document.forms["item-form"]["itemName"].value;
    var iPrice = document.forms["item-form"]["itemPrice"].value;
    var iArtist = document.forms["item-form"]["itemArtist"].value;
    var iDesc = document.forms["item-form"]["itemDescription"].value;

    if(iName=="" || iName== null,iPrice=="" || iPrice== null, iArtist=="" || iArtist== null, iDesc=="" || iDesc== null)
    {
        alert("Please fill up the neccessary information");
        return false;
    }
    alert("Item added")
    window.location.href = "../../profile";
    return true;
}