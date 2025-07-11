const buttonElement = document.getElementById("crear");
const bodySendElement = document.getElementById("titulo");
const textShowElement = document.getElementById("mensaje");

buttonElement.addEventListener("click", async () => {
  const sendMes = { mensaje: bodySendElement.value };
  try {
    const respond = await fetch("http://localhost:3000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendMes),
    });
    console.log(sendMes);
    const dataRes = await respond.json();
    textShowElement.innerText = "Tarea creada con ID: " + dataRes.id;
    bodySendElement.value = "";
  } catch {
    textShowElement.innerText = "Error al crear la tarea.";
  }
});
