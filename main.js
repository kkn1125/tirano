const user = document.querySelector("#user");

// function move(e) {
//   const { clientX, clientY } = e;

//   user.style.cssText = `
//     top: ${clientY}px;
//     left: ${clientX}px;
//   `;
// }

let start = 0;

const place = [
  document.querySelector(".naver"),
  document.querySelector(".google"),
  document.querySelector(".daum"),
];
const max = place.length;

let array = new Array(max).fill(0);

function move(e) {
  switch (e.key.toLowerCase()) {
    case "arrowleft":
      start -= 1;
      if (start < 0) start = max - 1;
      array = array.map((i) => 0);
      array[start] = 1;

      user.style.cssText = `
        left: ${place[start].offsetLeft}px;
        top: ${place[start].offsetTop}px;
        transform: rotateY(180deg);
      `;
      break;
    case "arrowright":
      start += 1;
      if (start > max - 1) start = 0;
      array = array.map((i) => 0);
      array[start] = 1;

      user.style.cssText = `
        left: ${place[start].offsetLeft}px;
        top: ${place[start].offsetTop}px;
      `;
      break;
    case "enter":
      place[start].click();
      break;
  }
}

window.addEventListener("keydown", move);
