const square = document.getElementById("square");

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      // Move the square to the left
      break;
    case "ArrowRight":
      // Move the square to the right
      break;
    case "ArrowUp":
      // Move the square up
      break;
    case "ArrowDown":
      // Move the square down
      break;
  }
}
function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
      square.style.left = (square.offsetLeft - 5) + "px";
      break;
    case "ArrowRight":
      square.style.left = (square.offsetLeft + 5) + "px";
      break;
    case "ArrowUp":
      square.style.top = (square.offsetTop - 5) + "px";
      break;
    case "ArrowDown":
      square.style.top = (square.offsetTop + 5) + "px";
      break;
  }
}

