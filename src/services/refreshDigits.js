import getRandom from "getRandom";

function refreshDigits(items) {
  for (let i = 0; i < items.length; i++) {
    items.id = getRandom();
  }
}
