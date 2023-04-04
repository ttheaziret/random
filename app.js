function generateNumbers() {
    var numbers = [];
    while (numbers.length < 6) {
      var newNumber = Math.floor(Math.random() * 99) + 1;
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
      }
    }
    var numberElements = document.getElementsByClassName("number");
    for (var i = 0; i < numberElements.length; i++) {
      numberElements[i].textContent = numbers[i];
    }
  }
  
  generateNumbers();
  
  