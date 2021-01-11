const popup = document.querySelector(".popup");

const sendBtn = document.querySelector("#sendBtn");
sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkInput()) {
        fillFields();
        displayPopup();
    }
});

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    const error = document.querySelector("#name__error");
    error.style.display = "none";
    const name = document.querySelector("#name");
    name.style.border = "1px solid #ccc";
});

function checkInput() {
    const name = document.querySelector("#name");
    if (name.value === " " || name.value === "") {
        name.style.border = "1px solid red";
        const error = document.querySelector("#name__error");

        error.style.display = "block";

        return false;
    }

    return true;
}

function displayPopup() {
    popup.style.display = "block";
}

function fillFields() {
    const name = document.querySelector("#name").value;
    document.querySelector("#result__name").innerHTML = name;

    const birthDate = document.querySelector("#birthDate").value;
    document.querySelector("#result__date").innerHTML = birthDate;

    const age = document.querySelector("#age").value;
    document.querySelector("#result__age").innerHTML = age;

    const educationSelect = document.querySelector("#education");
    const education = educationSelect.options[educationSelect.selectedIndex].text;
    document.querySelector("#result__education").innerHTML = education;

    const genderRadio = document.getElementsByName("gender");
    let gender;
    for (let i = 0; i < genderRadio.length; i++) {
        if (genderRadio[i].checked) {
            gender = genderRadio[i].value;
            break;
        }
    }
    document.querySelector("#result__gender").innerHTML = gender;
}