const buttonElement = document.getElementById("crear");
const bodySendElement = document.getElementById("titulo");
const textShowElement = document.getElementById("mensaje");

buttonElement.addEventListener("click", async (event) => {
  const send = { mensaje: bodySendElement.value };
  /*try {
    const response = await fetch("http://localhost:3000/add", {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respondData = await response.json();
    console.log(respondData);
  } catch {} */

  /* const respond = fetch("http://localhost:3000/tareas");

  respond
    .then((respondData) => respondData.json())
    .then((parceData) => console.log(parceData)); */

  try {
    const respond = await fetch("http://localhost:3000/tareas");
    dataConvert = await respond.json();
    console.log(dataConvert);
  } catch (error) {
    console.log(error);
  }
});
