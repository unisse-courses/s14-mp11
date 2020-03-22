function editItem()
{
    var iName = document.forms["edit-form"]["itemName"].value;
    var iPrice = document.forms["edit-form"]["itemPrice"].value;
    var iArtist = document.forms["edit-form"]["itemArtist"].value;
    var iDesc = document.forms["edit-form"]["itemDescription"].value;

    if(iName=="" || iName== null,iPrice=="" || iPrice== null, iArtist=="" || iArtist== null, iDesc=="" || iDesc== null)
    {
        alert("Please fill up the neccessary information");
        return false;
    }
    alert("Item edited")
    window.location.href = "../../item";
    return true;
}