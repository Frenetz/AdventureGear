// Переменные для формы
const form = document.querySelector(".form");
const button1 = document.getElementById("button1");
const shadow = document.querySelector(".shadow");

// Переменные для навигационного меню
// const firstLink = document.getElementById("introduction-first-link");
const firstLine = document.getElementById("first-line-svg");
const firstPoint = document.getElementById("first-point");
const secondLine = document.getElementById("second-line-svg");
const secondPoint = document.getElementById("second-point");
const thirdLine = document.getElementById("third-line-svg");
const thirdPoint = document.getElementById("third-point");
const fourthLine = document.getElementById("fourth-line-svg");
const fourthPoint = document.getElementById("fourth-point");

//Логика работы формы
form.style.display = "none";

button1.addEventListener("click", function (event) {
  event.stopPropagation();
  form.style.display = "flex";
  form.classList.toggle("form-active");
  shadow.classList.toggle("shadow-active");
});

document.addEventListener("click", function (event) {
  if (form.style.display === "none") {
  } else {
    const targetElement = event.target;
    if (!form.contains(targetElement)) {
      form.style.display = "none";
      form.classList.toggle("form-active");
      shadow.classList.toggle("shadow-active");
    }
  }
});

var phoneMask = IMask(document.getElementById("form-input"), {
  mask: "+{7}(000)000-00-00",
});

//Логика работы навигационного меню
let flag1;
let flag2;
let flag3;
let flag4;

function ChangeFirstLine() {
  flag1 = false;
  firstPoint.style.fill = "white";
  firstLine.style.strokeDashoffset = 0;
}

function RechangeFirstLine() {
  flag1 = true;
  firstLine.style.strokeDashoffset = -90;
  firstLine.addEventListener("transitionend", function () {
    if (flag1 === true) {
      firstPoint.style.fill = "transparent";
    }
  });
}

function ChangeSecondLine() {
  flag2 = false;
  secondPoint.style.fill = "white";
  secondLine.style.strokeDashoffset = 0;
}

function RechangeSecondLine() {
  flag2 = true;
  secondLine.style.strokeDashoffset = -170;
  secondLine.addEventListener("transitionend", function () {
    if (flag2 === true) {
      secondPoint.style.fill = "transparent";
    }
  });
}

function ChangeThirdLine() {
  flag3 = false;
  thirdPoint.style.fill = "white";
  thirdLine.style.strokeDashoffset = 0;
}

function RechangeThirdLine() {
  flag3 = true;
  thirdLine.style.strokeDashoffset = -90;
  thirdLine.addEventListener("transitionend", function () {
    if (flag3 === true) {
      thirdPoint.style.fill = "transparent";
    }
  });
}

function ChangeFourthLine() {
  flag4 = false;
  fourthPoint.style.fill = "white";
  fourthLine.style.strokeDashoffset = 0;
}

function RechangeFourthLine() {
  flag4 = true;
  fourthLine.style.strokeDashoffset = -90;
  fourthLine.addEventListener("transitionend", function () {
    if (flag4 === true) {
      fourthPoint.style.fill = "transparent";
    }
  });
}

//Логика для анимации border'а у зеленых кнопок
//Кнопка "Заказать звонок"
document.getElementById("button1").addEventListener("mouseover", function () {
  document.getElementById("line").style.strokeDashoffset = 0;
  document.getElementById("line2").style.strokeDashoffset = 0;
});

document.getElementById("button1").addEventListener("mouseleave", function () {
  document.getElementById("line").style.strokeDashoffset = 255;
  document.getElementById("line2").style.strokeDashoffset = 255;
});

//Кнопка "Купить сейчас"
document.getElementById("button2").addEventListener("mouseover", function () {
  document.getElementById("line3").style.strokeDashoffset = 0;
  document.getElementById("line4").style.strokeDashoffset = 0;
});

document.getElementById("button2").addEventListener("mouseleave", function () {
  document.getElementById("line3").style.strokeDashoffset = 255;
  document.getElementById("line4").style.strokeDashoffset = 255;
});

//Кнопка "Отправить"
document.getElementById("button3").addEventListener("mouseover", function () {
  document.getElementById("line5").style.strokeDashoffset = 0;
  document.getElementById("line6").style.strokeDashoffset = 0;
});

document.getElementById("button3").addEventListener("mouseleave", function () {
  document.getElementById("line5").style.strokeDashoffset = 675;
  document.getElementById("line6").style.strokeDashoffset = 675;
});

//Кнопка "Рюкзаки"
document.getElementById("button4").addEventListener("mouseover", function () {
  document.getElementById("line7").style.strokeDashoffset = 0;
  document.getElementById("line8").style.strokeDashoffset = 0;
});

document.getElementById("button4").addEventListener("mouseleave", function () {
  document.getElementById("line7").style.strokeDashoffset = 255;
  document.getElementById("line8").style.strokeDashoffset = 255;
});

//Кнопка "Палатки"
document.getElementById("button5").addEventListener("mouseover", function () {
  document.getElementById("line9").style.strokeDashoffset = 0;
  document.getElementById("line10").style.strokeDashoffset = 0;
});

document.getElementById("button5").addEventListener("mouseleave", function () {
  document.getElementById("line9").style.strokeDashoffset = 255;
  document.getElementById("line10").style.strokeDashoffset = 255;
});

//Кнопка "Спальники"
document.getElementById("button6").addEventListener("mouseover", function () {
  document.getElementById("line11").style.strokeDashoffset = 0;
  document.getElementById("line12").style.strokeDashoffset = 0;
});

document.getElementById("button6").addEventListener("mouseleave", function () {
  document.getElementById("line11").style.strokeDashoffset = 255;
  document.getElementById("line12").style.strokeDashoffset = 255;
});

//Кнопка "Коврики"
document.getElementById("button7").addEventListener("mouseover", function () {
  document.getElementById("line13").style.strokeDashoffset = 0;
  document.getElementById("line14").style.strokeDashoffset = 0;
});

document.getElementById("button7").addEventListener("mouseleave", function () {
  document.getElementById("line13").style.strokeDashoffset = 255;
  document.getElementById("line14").style.strokeDashoffset = 255;
});

//Кнопка "Аксессуары"
document.getElementById("button8").addEventListener("mouseover", function () {
  document.getElementById("line15").style.strokeDashoffset = 0;
  document.getElementById("line16").style.strokeDashoffset = 0;
});

document.getElementById("button8").addEventListener("mouseleave", function () {
  document.getElementById("line15").style.strokeDashoffset = 255;
  document.getElementById("line16").style.strokeDashoffset = 255;
});

//Логика для второго навигационного меню
const firstAnotherLine = document.getElementById("first-another-line-svg");
const firstAnotherPoint = document.getElementById("first-another-point");
const secondAnotherLine = document.getElementById("second-another-line-svg");
const secondAnotherPoint = document.getElementById("second-another-point");
const thirdAnotherLine = document.getElementById("third-another-line-svg");
const thirdAnotherPoint = document.getElementById("third-another-point");
const fourthAnotherLine = document.getElementById("fourth-another-line-svg");
const fourthAnotherPoint = document.getElementById("fourth-another-point");

let flag1_2;
let flag2_2;
let flag3_2;
let flag4_2;

function ChangeFirstAnotherLine() {
  flag1_2 = false;
  firstAnotherPoint.style.fill = "white";
  firstAnotherLine.style.strokeDashoffset = 0;
}

function RechangeFirstAnotherLine() {
  flag1_2 = true;
  firstAnotherLine.style.strokeDashoffset = -90;
  firstAnotherLine.addEventListener("transitionend", function () {
    if (flag1_2 === true) {
      firstAnotherPoint.style.fill = "transparent";
    }
  });
}

function ChangeSecondAnotherLine() {
  flag2_2 = false;
  secondAnotherPoint.style.fill = "white";
  secondAnotherLine.style.strokeDashoffset = 0;
}

function RechangeSecondAnotherLine() {
  flag2_2 = true;
  secondAnotherLine.style.strokeDashoffset = -170;
  secondAnotherLine.addEventListener("transitionend", function () {
    if (flag2_2 === true) {
      secondAnotherPoint.style.fill = "transparent";
    }
  });
}

function ChangeThirdAnotherLine() {
  flag3_2 = false;
  thirdAnotherPoint.style.fill = "white";
  thirdAnotherLine.style.strokeDashoffset = 0;
}

function RechangeThirdAnotherLine() {
  flag3_2 = true;
  thirdAnotherLine.style.strokeDashoffset = -90;
  thirdAnotherLine.addEventListener("transitionend", function () {
    if (flag3_2 === true) {
      thirdAnotherPoint.style.fill = "transparent";
    }
  });
}

function ChangeFourthAnotherLine() {
  flag4_2 = false;
  fourthAnotherPoint.style.fill = "white";
  fourthAnotherLine.style.strokeDashoffset = 0;
}

function RechangeFourthAnotherLine() {
  flag4_2 = true;
  fourthAnotherLine.style.strokeDashoffset = -90;
  fourthAnotherLine.addEventListener("transitionend", function () {
    if (flag4_2 === true) {
      fourthAnotherPoint.style.fill = "transparent";
    }
  });
}

//Логика работы стрелок влево и вправо, а также нажатий на цифры
let navigationArr = [1, 2, 3, 4, 5]; // массив, содержащий цифры в навигации
let leftArr = document.getElementById("left-arrow"); // стрелка влево
let rightArr = document.getElementById("right-arrow"); // стрелка вправо
let firstNum = document.getElementById("first-number"); // первая цифра
let secondNum = document.getElementById("second-number"); // вторая цифра
let thirdNum = document.getElementById("third-number"); // третья цифра
let fourthNum = document.getElementById("fourth-number"); // четвертая цифра
let fifthNum = document.getElementById("fifth-number"); // пятая цифра

function clearChosen() {
  firstNum.classList.remove("product__page-link-chosen");
  secondNum.classList.remove("product__page-link-chosen");
  thirdNum.classList.remove("product__page-link-chosen");
  fourthNum.classList.remove("product__page-link-chosen");
  fifthNum.classList.remove("product__page-link-chosen");
}

function fillArr(num1, num2, num3, num4, num5) {
  navigationArr[0] = num1;
  navigationArr[1] = num2;
  navigationArr[2] = num3;
  navigationArr[3] = num4;
  navigationArr[4] = num5;
}

function fillNumbers(num1, num2, num3, num4, num5) {
  firstNum.textContent = num1;
  secondNum.textContent = num2;
  thirdNum.textContent = num3;
  fourthNum.textContent = num4;
  fifthNum.textContent = num5;
}

function increaseArr() {
  for (let i = 0; i < 5; i++) {
    navigationArr[i]++;
  }
  firstNum.textContent = navigationArr[0];
  secondNum.textContent = navigationArr[1];
  thirdNum.textContent = navigationArr[2];
  fourthNum.textContent = navigationArr[3];
  fifthNum.textContent = navigationArr[4];
}

function reduceArr() {
  if (navigationArr[0] !== 1) {
    for (let i = 0; i < 5; i++) {
      navigationArr[i]--;
    }
  }
  firstNum.textContent = navigationArr[0];
  secondNum.textContent = navigationArr[1];
  thirdNum.textContent = navigationArr[2];
  fourthNum.textContent = navigationArr[3];
  fifthNum.textContent = navigationArr[4];
}

leftArr.addEventListener("click", function () {
  if (!firstNum.classList.contains("product__page-link-chosen")) {
    if (navigationArr[0] == 1) {
      if (secondNum.classList.contains("product__page-link-chosen")) {
        firstNum.classList.add("product__page-link-chosen");
        secondNum.classList.remove("product__page-link-chosen");
      } else if (thirdNum.classList.contains("product__page-link-chosen")) {
        secondNum.classList.add("product__page-link-chosen");
        thirdNum.classList.remove("product__page-link-chosen");
      } else {
        reduceArr();
      }
    } else {
      reduceArr();
    }
    cardsAppearAnimation();
  }
});

rightArr.addEventListener("click", function () {
  if (navigationArr[0] == 1) {
    if (firstNum.classList.contains("product__page-link-chosen")) {
      firstNum.classList.remove("product__page-link-chosen");
      secondNum.classList.add("product__page-link-chosen");
    } else if (secondNum.classList.contains("product__page-link-chosen")) {
      secondNum.classList.remove("product__page-link-chosen");
      thirdNum.classList.add("product__page-link-chosen");
    } else {
      increaseArr();
    }
  } else {
    increaseArr();
  }
  cardsAppearAnimation();
});

//Функция для обработки нажатия на первую позицию
function changeFirstNumber() {
  if (!firstNum.classList.contains("product__page-link-chosen")) {
    if (navigationArr[0] == 1) {
      if (secondNum.classList.contains("product__page-link-chosen")) {
        firstNum.classList.add("product__page-link-chosen");
        secondNum.classList.remove("product__page-link-chosen");
      } else if (thirdNum.classList.contains("product__page-link-chosen")) {
        firstNum.classList.add("product__page-link-chosen");
        thirdNum.classList.remove("product__page-link-chosen");
      }
    } else if (navigationArr[0] == 2) {
      fillArr(1, 2, 3, 4, 5);
      fillNumbers(
        navigationArr[0],
        navigationArr[1],
        navigationArr[2],
        navigationArr[3],
        navigationArr[4]
      );
      secondNum.classList.add("product__page-link-chosen");
      thirdNum.classList.remove("product__page-link-chosen");
    } else {
      fillArr(
        Number(navigationArr[0]) - 2,
        Number(navigationArr[1]) - 2,
        Number(navigationArr[2]) - 2,
        Number(navigationArr[3]) - 2,
        Number(navigationArr[4]) - 2
      );
      fillNumbers(
        navigationArr[0],
        navigationArr[1],
        navigationArr[2],
        navigationArr[3],
        navigationArr[4]
      );
    }
    cardsAppearAnimation();
  }
}

//Функция для обработки нажатия на вторую позицию
function changeSecondNumber() {
  if (!secondNum.classList.contains("product__page-link-chosen")) {
    if (
      navigationArr[0] == 1 &&
      firstNum.classList.contains("product__page-link-chosen")
    ) {
      if (firstNum.classList.contains("product__page-link-chosen")) {
        secondNum.classList.add("product__page-link-chosen");
        firstNum.classList.remove("product__page-link-chosen");
      }
    } else if (navigationArr[1] == 2) {
      secondNum.classList.add("product__page-link-chosen");
      thirdNum.classList.remove("product__page-link-chosen");
    } else {
      fillArr(
        Number(navigationArr[0]) - 1,
        Number(navigationArr[1]) - 1,
        Number(navigationArr[2]) - 1,
        Number(navigationArr[3]) - 1,
        Number(navigationArr[4]) - 1
      );
      fillNumbers(
        navigationArr[0],
        navigationArr[1],
        navigationArr[2],
        navigationArr[3],
        navigationArr[4]
      );
    }
    cardsAppearAnimation();
  }
}

//Функция для обработки нажатия на третью позицию
function changeThirdNumber() {
  if (!thirdNum.classList.contains("product__page-link-chosen")) {
    if (navigationArr[0] == 1) {
      if (firstNum.classList.contains("product__page-link-chosen")) {
        firstNum.classList.remove("product__page-link-chosen");
        thirdNum.classList.add("product__page-link-chosen");
      } else if (secondNum.classList.contains("product__page-link-chosen")) {
        secondNum.classList.remove("product__page-link-chosen");
        thirdNum.classList.add("product__page-link-chosen");
      }
    }
    cardsAppearAnimation();
  }
}

//Функция для обработки нажатия на четвертую позицию
function changeFourthNumber() {
  clearChosen();
  thirdNum.classList.add("product__page-link-chosen");
  fillArr(
    Number(navigationArr[0]) + 1,
    Number(navigationArr[1]) + 1,
    Number(navigationArr[2]) + 1,
    Number(navigationArr[3]) + 1,
    Number(navigationArr[4]) + 1
  );
  fillNumbers(
    navigationArr[0],
    navigationArr[1],
    navigationArr[2],
    navigationArr[3],
    navigationArr[4]
  );
  cardsAppearAnimation();
}

//Функции для обработки нажатия на пятую позицию
function changeFifthNumber() {
  clearChosen();
  thirdNum.classList.add("product__page-link-chosen");
  fillArr(
    Number(navigationArr[0]) + 2,
    Number(navigationArr[1]) + 2,
    Number(navigationArr[2]) + 2,
    Number(navigationArr[3]) + 2,
    Number(navigationArr[4]) + 2
  );
  fillNumbers(
    navigationArr[0],
    navigationArr[1],
    navigationArr[2],
    navigationArr[3],
    navigationArr[4]
  );
  cardsAppearAnimation();
}

firstNum.addEventListener("click", changeFirstNumber);
secondNum.addEventListener("click", changeSecondNumber);
thirdNum.addEventListener("click", changeThirdNumber);
fourthNum.addEventListener("click", changeFourthNumber);
fifthNum.addEventListener("click", changeFifthNumber);

//Анимация появления карточек
const firstCard = document.getElementById("first-card");
const secondCard = document.getElementById("second-card");
const thirdCard = document.getElementById("third-card");
const fourthCard = document.getElementById("fourth-card");
const fifthCard = document.getElementById("fifth-card");
const sixthCard = document.getElementById("sixth-card");
const seventhCard = document.getElementById("seventh-card");
const eighthCard = document.getElementById("eighth-card");

function cardsAddHidden() {
  firstCard.classList.toggle("product__card-hidden");
  secondCard.classList.toggle("product__card-hidden");
  thirdCard.classList.toggle("product__card-hidden");
  fourthCard.classList.toggle("product__card-hidden");
  fifthCard.classList.toggle("product__card-hidden");
  sixthCard.classList.toggle("product__card-hidden");
  seventhCard.classList.toggle("product__card-hidden");
  eighthCard.classList.toggle("product__card-hidden");
}

function cardsAppearAnimation() {
  cardsAddHidden();
  setTimeout(function () {
    firstCard.classList.toggle("product__card-hidden");
    fifthCard.classList.toggle("product__card-hidden");
  }, 500);
  setTimeout(function () {
    secondCard.classList.toggle("product__card-hidden");
    sixthCard.classList.toggle("product__card-hidden");
  }, 750);
  setTimeout(function () {
    thirdCard.classList.toggle("product__card-hidden");
    seventhCard.classList.toggle("product__card-hidden");
  }, 1000);
  setTimeout(function () {
    fourthCard.classList.toggle("product__card-hidden");
    eighthCard.classList.toggle("product__card-hidden");
  }, 1250);
}

// Обработка левитации в карточках с товарами
const firstPurchase = document.getElementById("first-purchase");
const secondPurchase = document.getElementById("second-purchase");
const thirdPurchase = document.getElementById("third-purchase");
const fourthPurchase = document.getElementById("fourth-purchase");
const fifthPurchase = document.getElementById("fifth-purchase");
const sixthPurchase = document.getElementById("sixth-purchase");
const seventhPurchase = document.getElementById("seventh-purchase");
const eighthPurchase = document.getElementById("eighth-purchase");

firstCard.addEventListener("mouseover", function () {
  firstPurchase.style.transform = "translateY(-20px)";
});

firstCard.addEventListener("mouseleave", function () {
  firstPurchase.style.transform = "translateY(0px)";
});

secondCard.addEventListener("mouseover", function () {
  secondPurchase.style.transform = "translateY(-20px)";
});

secondCard.addEventListener("mouseleave", function () {
  secondPurchase.style.transform = "translateY(0px)";
});

thirdCard.addEventListener("mouseover", function () {
  thirdPurchase.style.transform = "translateY(-20px)";
});

thirdCard.addEventListener("mouseleave", function () {
  thirdPurchase.style.transform = "translateY(0px)";
});

fourthCard.addEventListener("mouseover", function () {
  fourthPurchase.style.transform = "translateY(-20px)";
});

fourthCard.addEventListener("mouseleave", function () {
  fourthPurchase.style.transform = "translateY(0px)";
});

fifthCard.addEventListener("mouseover", function () {
  fifthPurchase.style.transform = "translateY(-20px)";
});

fifthCard.addEventListener("mouseleave", function () {
  fifthPurchase.style.transform = "translateY(0px)";
});

sixthCard.addEventListener("mouseover", function () {
  sixthPurchase.style.transform = "translateY(-20px)";
});

sixthCard.addEventListener("mouseleave", function () {
  sixthPurchase.style.transform = "translateY(0px)";
});

seventhCard.addEventListener("mouseover", function () {
  seventhPurchase.style.transform = "translateY(-20px)";
});

seventhCard.addEventListener("mouseleave", function () {
  seventhPurchase.style.transform = "translateY(0px)";
});

eighthCard.addEventListener("mouseover", function () {
  eighthPurchase.style.transform = "translateY(-20px)";
});

eighthCard.addEventListener("mouseleave", function () {
  eighthPurchase.style.transform = "translateY(0px)";
});

//Скрипт для появления навигационного меню
let flagAppear = 0;
pageReload();
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".deliviery");
  const header = document.getElementById("deliviery__menu");
  const rules = document.querySelector(".deliviery__rules");
  const products = document.querySelector(".products");
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let heroPosition = hero.offsetTop;
    if (scrollTop >= heroPosition) {
      if (flagAppear == 0) {
        header.classList.remove("deliviery__menu-disappear");
        header.classList.add("deliviery__menu-fixed");
        rules.style.paddingTop = "245px";
        flagAppear = 1;
      }
    } else {
      if (flagAppear == 1) {
        header.classList.remove("deliviery__menu-fixed");
        header.classList.add("deliviery__menu-disappear");
        rules.style.paddingTop = "163px";
        flagAppear = 0;
      }
    }

    let secondCircle = document.querySelector(
      ".deliviery__menu-element-second"
    );
    let thirdCircle = document.querySelector(".deliviery__menu-element-third");
    let fourthCircle = document.querySelector(
      ".deliviery__menu-element-fourth"
    );

    if (scrollTop >= products.offsetTop) {
      thirdCircle.classList.add("circle-appear");
      secondCircle.classList.add("circle-disappear");
    } else {
      thirdCircle.classList.remove("circle-appear");
      secondCircle.classList.remove("circle-disappear");
    }

    if (scrollTop >= products.offsetTop + products.offsetHeight * 0.7) {
      thirdCircle.classList.remove("circle-appear");
      fourthCircle.classList.add("circle-appear");
    } else if (
      scrollTop >= products.offsetTop &&
      scrollTop < products.offsetTop + products.offsetHeight * 0.7
    ) {
      thirdCircle.classList.add("circle-appear");
      fourthCircle.classList.remove("circle-appear");
    }
  });
});

function pageReload() {
  const hero = document.querySelector(".deliviery");
  const header = document.getElementById("deliviery__menu");
  const rules = document.querySelector(".deliviery__rules");
  const products = document.querySelector(".products");
  let scrollTop = window.scrollY;
  let heroPosition = hero.offsetTop;
  if (scrollTop >= heroPosition) {
    if (flagAppear == 0) {
      header.classList.remove("deliviery__menu-disappear");
      header.classList.add("deliviery__menu-fixed");
      rules.style.paddingTop = "245px";
      flagAppear = 1;
    }
  } else {
    if (flagAppear == 1) {
      header.classList.remove("deliviery__menu-fixed");
      header.classList.add("deliviery__menu-disappear");
      rules.style.paddingTop = "163px";
      flagAppear = 0;
    }
  }

  let secondCircle = document.querySelector(".deliviery__menu-element-second");
  let thirdCircle = document.querySelector(".deliviery__menu-element-third");
  let fourthCircle = document.querySelector(".deliviery__menu-element-fourth");

  if (scrollTop >= products.offsetTop) {
    thirdCircle.classList.add("circle-appear");
    secondCircle.classList.add("circle-disappear");
  } else {
    thirdCircle.classList.remove("circle-appear");
    secondCircle.classList.remove("circle-disappear");
  }

  if (scrollTop >= products.offsetTop + products.offsetHeight * 0.7) {
    thirdCircle.classList.remove("circle-appear");
    fourthCircle.classList.add("circle-appear");
  } else if (
    scrollTop >= products.offsetTop &&
    scrollTop < products.offsetTop + products.offsetHeight * 0.7
  ) {
    thirdCircle.classList.add("circle-appear");
    fourthCircle.classList.remove("circle-appear");
  }
}

//Слайдер с отзывами
$("comments__people-comment").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
