const popup = document.querySelector(".popup");
const form = document.querySelector("#form");
const sendBtn = document.querySelector("#sendBtn");
const closeBtn = document.querySelector("#closeBtn");

const closePopup = () => {
    const nameField = document.querySelector("#name");
    const error = document.querySelector("#name__error");
    form.reset();
    error.style.display = "none";
    nameField.style.border = "1px solid #ccc";
    popup.style.display = "none";
};

const checkName = (nameInput) => {
    if (nameInput.value === " " || nameInput.value === "") {
        nameInput.style.border = "1px solid red";
        const error = document.querySelector("#name__error");

        error.style.display = "block";

        return false;
    }

    return true;
};

age.addEventListener("input", function(event) {
    if (/[^0-9]/.test(this.value)) {
        age.style.border = "1px solid red";
    } else {
        age.style.border = "1px solid green";
    }
});

const displayPopup = () => {
    popup.style.display = "block";
};

const fillFields = (age, name) => {
    document.querySelector("#result__name").innerHTML = name.value;

    const birthDate = document.querySelector("#birthDate"); // get birth value
    document.querySelector("#result__date").innerHTML = birthDate.value;

    document.querySelector("#result__age").innerHTML = age.value;

    const educationSelect = document.querySelector("#education"); // get education value
    const education = educationSelect.options[educationSelect.selectedIndex].text;
    document.querySelector("#result__education").innerHTML = education;

    const genderRadio = document.getElementsByName("gender"); // get checked gender
    let gender;
    for (let i = 0; i < genderRadio.length; i++) {
        if (genderRadio[i].checked) {
            gender = genderRadio[i].value;
            break;
        }
    }
    document.querySelector("#result__gender").innerHTML = gender;
};

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name"); // get name value
    const age = document.querySelector("#age"); // get age value

    if (
        checkName(name) &&
        age.style.border == "1px solid green" &&
        age.value != ""
    ) {
        age.style.border = "1px solid #ccc";
        fillFields(age, name);
        displayPopup();
    }
});

closeBtn.addEventListener("click", () => {
    closePopup();
});

popup.addEventListener("click", (event) => {
    if (!event.target.closest(".popup__content")) {
        closePopup();
    }
});