import { isEmailValid, isPhoneValid } from "./regex-validation.js";

const form = document.querySelector("#form");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const messageInput = document.querySelector("#messageArea");
const nameSpan = document.querySelector(".name-required");
const emailSpan = document.querySelector(".email-required");
const phoneSpan = document.querySelector(".phone-required");
const messageSpan = document.querySelector(".message-required");
const fade = document.querySelector(".fade");
const modalErro = document.querySelector("#modal-erro");
const modalEnvio = document.querySelector("#modal-envio");
const closeModal = document.querySelector("#close-modal");
const closeModalEnvio = document.querySelector("#close-modal-envio");
const modalBody = document.querySelector(".modal-body");
const modalBodyEnvio = document.querySelector(".modal-body-envio");
let send = 0;

const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about-menu");
const servicos = document.querySelector(".servicos-menu");
const projects = document.querySelector(".projects-menu");
const contact = document.querySelector(".contact-menu");

// Formulario de contato
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkErros(nameInput, emailInput, phoneInput, messageInput);

  // Envia forms
  if (send === 0) {
    fade.classList.remove("hidden");
    modalEnvio.classList.remove("hidden");

    const p = createTag("p");
    p.innerHTML = "Entraremos em contato em breve";
    modalBodyEnvio.insertAdjacentElement("afterbegin", p);

    closeModalEnvio.addEventListener("click", () => {
      fade.classList.add("hidden");
      modalEnvio.classList.add("hidden");
      // p.remove()
      form.submit();
    });
  }
});

// Cria Modal
function createModal(erro) {
  fade.classList.remove("hidden");
  modalErro.classList.remove("hidden");

  // Cria tag p para especificar erro no modal
  const p = createTag("p");
  p.innerHTML = `Erro no campo ${erro}`;
  modalBody.insertAdjacentElement("afterbegin", p);

  closeModal.addEventListener("click", () => {
    fade.classList.add("hidden");
    modalErro.classList.add("hidden");
    p.remove();
    // return
  });
}

// Verifica erros do formulario
function checkErros(name, email, phone, message) {
  // Nome valido
  if (name.value < 3) {
    // Mostra Erro e Abre Modal
    nameSpan.classList.add("active");

    createModal("Nome");
    send = 1;
  } else {
    nameSpan.classList.remove("active");
    send = 0;
  }

  // Email valido
  if (email.value === "" || !isEmailValid(email.value)) {
    // Mostra Erro e Abre Modal
    emailSpan.classList.add("active");
    createModal("Email");
    send = 1;
  } else {
    emailSpan.classList.remove("active");
    send = 0;
  }

  // Telefone valido
  if (phone.value === "" || !isPhoneValid(phone.value)) {
    // Mostra Erro e Abre Modal
    phoneSpan.classList.add("active");
    createModal("Telefone");
    send = 1;
  } else {
    phoneSpan.classList.remove("active");
    send = 0;
  }

  // Mensagem vazio
  if (message.value === "") {
    // Mostra Erro e Abre Modal
    messageSpan.classList.add("active");
    createModal("Mensagem");
    send = 1;
  } else {
    messageSpan.classList.remove("active");
    send = 0;
  }

  return send;
}

// Cria uma Tag
function createTag(element) {
  const tag = document.createElement(element);
  return tag;
}

// Menu Responsivo
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.add("disable");
  closeMenu.classList.add("active");
  closeMenu.classList.remove("disable");
  menu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  toggleMenu.classList.remove("disable");
  closeMenu.classList.add("disable");
  closeMenu.classList.remove("active");
  menu.classList.remove("active");
});

about.addEventListener("click", () => {
  toggleMenu.classList.remove("disable");
  closeMenu.classList.add("disable");
  closeMenu.classList.remove("active");
  menu.classList.remove("active");
});

servicos.addEventListener("click", () => {
  toggleMenu.classList.remove("disable");
  closeMenu.classList.add("disable");
  closeMenu.classList.remove("active");
  menu.classList.remove("active");
});

projects.addEventListener("click", () => {
  toggleMenu.classList.remove("disable");
  closeMenu.classList.add("disable");
  closeMenu.classList.remove("active");
  menu.classList.remove("active");
});

contact.addEventListener("click", () => {
  toggleMenu.classList.remove("disable");
  closeMenu.classList.add("disable");
  closeMenu.classList.remove("active");
  menu.classList.remove("active");
});
