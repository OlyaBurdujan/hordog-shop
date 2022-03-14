import * as flsFunctions from "./modules/functions.js";
import $ from 'jquery';

flsFunctions.isWebp();

//тут пиши скрпиты
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept current item
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
};

// 

// 

// $(document).ready(function() {
//   $('.minus').click(function () {
//     var $input = $(this).parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
//   $('.plus').click(function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
//   });
// });

// каунтер для всех счетчиков 

window.addEventListener('click', function (event) {
  if(event.target.dataset.action === 'plus') {
    const number = event.target.closest('.number');
    const counter = number.querySelector('[data-counter]');
    counter.innerText = ++counter.innerText;
  }

  if(event.target.dataset.action === 'minus') {
    const number = event.target.closest('.number');
    const counter = number.querySelector('[data-counter]');
    if(parseInt(counter.innerText) > 1 ) {
      counter.innerText = --counter.innerText;
    }
  }

});

//test
var inputs = document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].parentNode.tagName.toString().toLowerCase() == "div") {
    inputs[i].onfocus = function () {
      this.parentNode.style.border = "1px solid #FED700";
    };
    inputs[i].onblur = function () {
      this.parentNode.style.border = "1px solid #CFD8DC";
    };
  }
}