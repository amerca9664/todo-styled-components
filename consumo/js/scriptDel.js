const buttonElement = document.getElementById("crear");
const bodySendElement = document.getElementById("titulo");
const textShowElement = document.getElementById("mensaje");

buttonElement.addEventListener("click", async () => {
  const sendMes = { id: bodySendElement.value };
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sendMes),
  };

  try {
    const respond = await fetch("http://localhost:3000/delete", request);
    const dataRes = await respond.json();
    textShowElement.innerText = "Tarea borrada: " + dataRes.id;
    bodySendElement.value = "";
  } catch {
    textShowElement.innerText = "Error al crear la tarea.";
  }
});
