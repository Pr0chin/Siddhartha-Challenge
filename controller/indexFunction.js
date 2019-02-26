/* Client Side Programming
    By :Sachin Maharjan
    White Hat Degital
*/


function downlaodAudio(fileUrl, fileName) {
    window.setTimeout(function () {

        // Move to a new location or you can do something else
        window.location.href = "view/thankyouPageDownload.html";

    }, 1000);
    var save = document.createElement('a');
    save.href = fileUrl;
    save.download = fileName;
    save.target = '_blank';
    document.body.appendChild(save);
    save.click();
    document.body.removeChild(save);
}

function privacy() {
    window.open('view/privacy.html', '_blank');
}

function registerCompitition() {
    var fName = $("#form-name").val();
    var lName = $("#form-lname").val();
    var phoneNum = $("#form-phone").val();
    var copyLink = $("#form-link").val();

    if (fName == "" || lName == "" || phoneNum == "" || copyLink == "") {
        console.log("Here is the name", fName + "", lName + "" + phoneNum + "" + "" + copyLink);
        alert("Please Fill The Form Properly");
        return false;
    } else {
        alert("Go To Thankyou Page");
        window.setTimeout(function () {
            // Move to a new location or you can do something else
            window.location.href = "view/thankyouPageRegistration.html";

        }, 3000);
    }
}