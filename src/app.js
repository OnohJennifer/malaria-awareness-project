function checkStatus() {
  let name = prompt("What is your name?");
  let status = prompt("Were you recently exposed to mosquito bites?");
  if (
    status === "Yes" ||
    status === "Not sure" ||
    status === "Maybe" ||
    status === "yes" ||
    status === "not sure" ||
    status === "maybe"
  ) {
    alert(name + ", you have to run malaria parasite test.");
  } else {
    alert(name + ", Keep protecting yourself from mosquito bites.");
  }
  let makeContact = prompt("Would you like to contact a health care provider?");
  if (makeContact === "yes" || "Yes" || "YES") {
    alert("Send us message at malariafreelife@gmail.com");
  }
  if (makeContact === "no" || "NO" || "No") {
    alert("Thank you for your time.");
  }
}

let contactButton = document.querySelector("#button");
contactButton.addEventListener("click", checkStatus);
