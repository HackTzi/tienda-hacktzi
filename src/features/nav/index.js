let itemHome = document.getElementById('icon-home');

itemHome.addEventListener('click', function (event) {
  if (itemHome.classList.contains('icon--active')) {
    itemHome.classList.remove('icon--active');
  } else {
    itemHome.classList.add('icon--active');
  }
})


let itemFavorite = document.getElementById('icon-favorite');

itemFavorite.addEventListener('click', function (event) {
  if (itemFavorite.classList.contains('icon--active')) {
    itemFavorite.classList.remove('icon--active');
  } else {
    itemFavorite.classList.add('icon--active');
  }
})


let itemCarrito = document.getElementById('icon-carrito');

itemCarrito.addEventListener('click', function (event) {
  if (itemCarrito.classList.contains('icon--active')) {
    itemCarrito.classList.remove('icon--active');
  } else {
    itemCarrito.classList.add('icon--active');
  }
})


let itemSwag = document.getElementById('icon-swag');

itemSwag.addEventListener('click', function (event) {
  if (itemSwag.classList.contains('icon--active')) {
    itemSwag.classList.remove('icon--active');
  } else {
    itemSwag.classList.add('icon--active');
  }
})


let itemCuenta = document.getElementById('icon-cuenta');

itemCuenta.addEventListener('click', function (event) {
  if (itemCuenta.classList.contains('icon--active')) {
    itemCuenta.classList.remove('icon--active');
  } else {
    itemCuenta.classList.add('icon--active');
  }
})

