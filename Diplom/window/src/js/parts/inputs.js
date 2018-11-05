function inputs() {
  let inputNumber = document.querySelectorAll(".input-number");

  for(let i = 0; i < inputNumber.length; i++) {
      inputNumber[i].addEventListener("input", function() {
      this.value = `${this.value.replace(/\D|^0{1}/g, "")}`;
    })
  }
  
}
export default inputs;