function skillsmember() {
    var skills = document.getElementById("skills").value;
    if (skills == "") {
        document.getElementById("skillsspan").innerHTML = "Please enter your skills";
        return false;
    }
    if (!isNaN(skills)) {
        document.getElementById("skillsspan").innerHTML = "Please enter only characters";
        return false;
    }
    if ((skills.length <= 2) || (skills.length > 20)) {
        document.getElementById("skillsspan").innerHTML = "Please enter between 2 to 20 characters";
        return false;
    }
    document.getElementById("skillsspan").innerHTML = " ";
    return true;
}