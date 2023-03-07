MainDiv = document.getElementById("MainDiv") 
function NewBox() {
  let InputField = document.createElement("input")
  InputField.setAttribute("type", "text")
  InputField.setAttribute("placeholder", "Andere allergeen")
  MainDiv.appendChild(InputField);

}
