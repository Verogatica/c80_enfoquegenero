const palabras = [
  { name: "derechos", vez: 28 },
  { name: "derecho", vez: 76 },
  { name: "familia", vez: 3 },
  { name: "familias", vez: 0 },
  { name: "género", vez: 1 },
  { name: "hombre", vez: 0 },
  { name: "hombres", vez: 7 },
  { name: "mujer", vez: 0 },
  { name: "mujeres", vez: 1 },
  { name: "niña", vez: 0 },
  { name: "niñas", vez: 0 },
  { name: "niño", vez: 0 },
  { name: "niños", vez: 0 },
  { name: "niñez", vez: 0 },
  { name: "sexo", vez: 13 },
  { name: "sexos", vez: 2 },
  { name: "persona", vez: 31 },
  { name: "personas", vez: 48 },
  { name: "senador", vez: 21 },
  { name: "senadora", vez: 0 },
  { name: "diputado", vez: 25 },
  { name: "diputada", vez: 0 },
  { name: "ministro", vez: 28 },
  { name: "ministra", vez: 0 },
  { name: "ministros", vez: 41 },
  { name: "presidente", vez: 183 },
  { name: "presidenta", vez: 0 },
];

const slctPalabra = document.getElementById("slctPalabra");
const result = document.getElementById("result");
const nombre = document.getElementById("nombre");

palabras.forEach((palabra) => {
  let o = document.createElement("option");
  o.text = palabra.name;
  o.value = palabra.vez;
  slctPalabra.appendChild(o);
});

slctPalabra.selectedIndex = 7;
nombre.innerText = palabras[7].name;
result.innerText =
  palabras[7].vez + (palabras[7].vez === 1 ? " vez" : " veces");

slctPalabra.onchange = function () {
  if (slctPalabra.value === "") {
    result.innerText = "";
    nombre.innerText = palabras[slctPalabra.selectedIndex - 1].name;
  } else {
    if (slctPalabra.value === "1") {
      result.innerText = slctPalabra.value + " vez";
    } else {
      result.innerText = slctPalabra.value + " veces";
    }
    nombre.innerText = palabras[slctPalabra.selectedIndex].name;
  }
};

//uno

$(document).ready(function () {
  var wrap = $(".zapwrap");

  var images = wrap.find("img");

  images.css("opacity", 0.3);

  var numeroGrande = $(".numero-grande");

  var lastScrollTop = 0;

  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    var windowHeight = $(this).height();

    if (scrollPosition > lastScrollTop) {
      var halfWindowTop = scrollPosition + windowHeight / 2;

      images.each(function (index) {
        if ($(this).offset().top < halfWindowTop) {
          $(this).css("opacity", 1);

          if (images.eq(index + 1).length) {
            images.eq(index + 1).css("opacity", 0.6);
          }

          if (images.eq(index + 2).length) {
            images.eq(index + 2).css("opacity", 0.4);
          }

          var numero;
          if (index === images.length - 1) {
            numero = (index + 1) * 25 - 16;
          } else {
            numero = (index + 1) * 25;
          }
          numeroGrande.text(numero);
        }
      });
    }

    lastScrollTop = scrollPosition;
  });
});

$(document).ready(function () {
  var header = $(".violenciagenero");
  var headerHeight = header.outerHeight();

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    var imagePosition = $(".img1").offset().top;

    if (scrollPosition > imagePosition) {
      header.addClass("sticky").css("top", 0);
    } else {
      header.removeClass("sticky");
    }
  });
});

//aca nueva linea 

$(document).ready(function () {
    var wrap = $(".wrap1");
  
    var images = wrap.find("img");
  
    images.css("opacity", 0.3);
  
    var numeroGrande = $(".numerogrande");
  
    var lastScrollTop = 0;
  
    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var windowHeight = $(this).height();
  
      if (scrollPosition > lastScrollTop) {
        var halfWindowTop = scrollPosition + windowHeight / 2;
  
        images.each(function (index) {
          if ($(this).offset().top < halfWindowTop) {
            $(this).css("opacity", 1);
  
            if (images.eq(index + 1).length) {
              images.eq(index + 1).css("opacity", 0.6);
            }
  
            if (images.eq(index + 2).length) {
              images.eq(index + 2).css("opacity", 0.4);
            }
  
            var numero;
            if (index === images.length - 1) {
              numero = (index + 1) * 25 - 13;
            } else {
              numero = (index + 1) * 25;
            }
            numeroGrande.text(numero);
          }
        });
      }
  
      lastScrollTop = scrollPosition;
    });
  });
  
  $(document).ready(function () {
    var header = $(".a1");
    var headerHeight = header.outerHeight();
  
    $(window).scroll(function () {
      var scrollPosition = $(window).scrollTop();
      var imagePosition = $(".img1").offset().top;
  
      if (scrollPosition > imagePosition) {
        header.addClass("sticky").css("top", 0);
      } else {
        header.removeClass("sticky");
      }
    });
  });

//aca nueva linea 

$(document).ready(function () {
    var wrap = $(".wrap2");
  
    var images = wrap.find("img");
  
    images.css("opacity", 0.2);
  
    var numeroGrande = $(".numerogrande2");
  
    var lastScrollTop = 0;
  
    $(window).scroll(function () {
      var scrollPosition = $(this).scrollTop();
      var windowHeight = $(this).height();
  
      if (scrollPosition > lastScrollTop) {
        var halfWindowTop = scrollPosition + windowHeight / 2;
  
        images.each(function (index) {
          if ($(this).offset().top < halfWindowTop) {
            $(this).css("opacity", 1);
  
            if (images.eq(index + 1).length) {
              images.eq(index + 1).css("opacity", 0.5);
            }
  
            if (images.eq(index + 2).length) {
              images.eq(index + 2).css("opacity", 0.3);
            }
  
            var numero;
            if (index === images.length - 1) {
              numero = (index + 1) * 10 - 7;
            } else {
              numero = (index + 1) * 10;
            }
            numeroGrande.text(numero);
          }
        });
      }
  
      lastScrollTop = scrollPosition;
    });
  });
  
  $(document).ready(function () {
    var header = $(".diversidades");
    var headerHeight = header.outerHeight();
  
    $(window).scroll(function () {
      var scrollPosition = $(window).scrollTop();
      var imagePosition = $(".img1").offset().top;
  
      if (scrollPosition > imagePosition) {
        header.addClass("sticky").css("top", 0);
      } else {
        header.removeClass("sticky");
      }
    });
  });
