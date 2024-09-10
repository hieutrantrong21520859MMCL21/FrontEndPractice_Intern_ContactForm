const form = document.querySelector(".container form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const rbtnEnquiry = document.getElementById("general-enquiry");
const rbtnRequest = document.getElementById("support-request");
const messageInput = document.getElementById("message");
const cbtnConfirm = document.getElementById("check");

const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

rbtnEnquiry.addEventListener('click', function() {
    rbtnRequest.parentElement.style.backgroundColor = "	#fff";
    rbtnEnquiry.parentElement.style.backgroundColor = "	#dff1e7";
})

rbtnRequest.addEventListener('click', function() {
    rbtnEnquiry.parentElement.style.backgroundColor = "	#fff";
    rbtnRequest.parentElement.style.backgroundColor = "	#dff1e7";
})

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isFormValid = true;

  if (!firstNameInput.value) {
    document
      .querySelector(".container form div.first-name-box p.error")
      .classList.remove("hidden");
    document
      .querySelector(".container form div.first-name-box input")
      .classList.add("invalid");

    isFormValid = false;
  } else {
    document
      .querySelector(".container form div.first-name-box p.error")
      .classList.add("hidden");
    document
      .querySelector(".container form div.first-name-box input")
      .classList.remove("invalid");
  }

  if (!lastNameInput.value) {
    document
      .querySelector(".container form div.last-name-box p.error")
      .classList.remove("hidden");
    document
      .querySelector(".container form div.last-name-box input")
      .classList.add("invalid");

    isFormValid = false;
  } else {
    document
      .querySelector(".container form div.last-name-box p.error")
      .classList.add("hidden");
    document
      .querySelector(".container form div.last-name-box input")
      .classList.remove("invalid");
  }

  if (!emailInput.value) {
    document.querySelector(
      ".container form div.email-box p.error"
    ).textContent = "This field is required";
    document
      .querySelector(".container form div.email-box p.error")
      .classList.remove("hidden");
    document
      .querySelector(".container form div.email-box input")
      .classList.add("invalid");

    isFormValid = false;
  } else if (!emailInput.value.match(pattern)) {
    document.querySelector(
      ".container form div.email-box p.error"
    ).textContent = "Please enter a valid email address";
    document
      .querySelector(".container form div.email-box p.error")
      .classList.remove("hidden");
    document
      .querySelector(".container form div.email-box input")
      .classList.add("invalid");

    isFormValid = false;
  } else {
    document
      .querySelector(".container form div.email-box p.error")
      .classList.add("hidden");
    document
      .querySelector(".container form div.email-box input")
      .classList.remove("invalid");
  }

  if (!rbtnEnquiry.checked && !rbtnRequest.checked) {
    document
      .querySelector(".container form div.query-type-box p.error")
      .classList.remove("hidden");

    isFormValid = false;
  } else {
    document
      .querySelector(".container form div.query-type-box p.error")
      .classList.add("hidden");
  }

  if (!messageInput.value) {
    document
      .querySelector(".container form div.message-box p.error")
      .classList.remove("hidden");
    document
      .querySelector(".container form div.message-box textarea")
      .classList.add("invalid");

    isFormValid = false;
  } else {
    document
      .querySelector(".container form div.message-box p.error")
      .classList.add("hidden");
    document
      .querySelector(".container form div.message-box textarea")
      .classList.remove("invalid");
  }

  if (!cbtnConfirm.checked) {
    document
      .querySelector(".container form div.confirmation-box p.error")
      .classList.remove("hidden");

    isFormValid = false;
  } else {
    document
      .querySelector(".container form div.confirmation-box p.error")
      .classList.add("hidden");
  }

  if (isFormValid) {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    rbtnEnquiry.checked = false;
    rbtnRequest.checked = false;
    messageInput.value = "";
    cbtnConfirm.checked = false;

    rbtnRequest.parentElement.style.backgroundColor = "	#fff";
    rbtnEnquiry.parentElement.style.backgroundColor = "	#fff";

    // Show dialog
    const dialog = document.querySelector('dialog');
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    // Close the dialog in 2 seconds
    setTimeout(() => {
      dialog.close();
      document.body.style.overflow = null;
    }, 2000);
  }
});
