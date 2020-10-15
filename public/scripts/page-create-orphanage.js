// create map
const map = L.map("mapid").setView([-27.2221491, -49.649536], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latIng.lat;
  const lng = event.latIng.lng;

  document.querySelector("[name=lat]"), (value = lat);
  document.querySelector("[name=lng]"), (value = lng);

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos
function addPhotoField() {
  //pegar container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo antes de add
  input.value = "";

  // add o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

// troca do SIM e NÃO
function toggleSelect(event) {
  //pegar o botão clicado

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou não
  input.value = button.dataset.value;

  //retirar a classe active dos botões
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  //colocar a classe active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
}
