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
});

function checkInput() {
    const name = document.querySelector("#name");
    if (name.value === " " || name.value === "") {
        name.style.border = "1px solid red";

        error = document.querySelector("#name__error");
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
    document.querySelector("#result__name").innerHTML += `<p>${name}<\p>`;
    const birthDate = document.querySelector("#birthDate").value;
    document.querySelector("#result__date").innerHTML += `<p>${birthDate}<\p>`;
    const age = document.querySelector("#age").value;
    document.querySelector("#result__age").innerHTML += `<p>${age}<\p>`;
    const educationSelect = document.querySelector("#education");
    const education = educationSelect.options[educationSelect.selectedIndex].text;
    document.querySelector(
        "#result__education"
    ).innerHTML += `<p>${education}<\p>`;
    const genderRadio = document.getElementsByName("gender");
    let gender;
    for (let i = 0; i < genderRadio.length; i++) {
        if (genderRadio[i].checked) {
            gender = genderRadio[i].value;
            break;
        }
    }
    document.querySelector("#result__gender").innerHTML += `<p>${gender}<\p>`;
}