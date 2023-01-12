const submitButton = document.getElementById("submitButton");



submitButton.addEventListener("click", function () {
    const nemeFile = document.getElementById("contactName");
    const emailFile = document.getElementById("contactEmail");
    const messageFile = document.getElementById("contactMessage");

    const nameValu = nemeFile.value;
    const emailValu = emailFile.value;
    const messageValu = messageFile.value;

    const templateParams = {
        nameValu: nameValu,
        emailValu: emailValu,
        messageValu: messageValu,
    };

    if (nameValu && emailValu && messageValu) {
        console.log(nameValu, emailValu, messageValu);
        emailjs.send("service_text", "template_xos5szo", templateParams, "7FEJJiN0tqVsKymYd");
    }


})