//guardar respuesta de api en json
const response = await axios.get("/names");
const names = response.data;
const nombreArchivo = "names.json";
const contenidoArchivo = JSON.stringify(names);
const enlace = document.createElement("a");
enlace.href = `data:text/json;charset=utf-8,${encodeURIComponent(
  contenidoArchivo
)}`;
enlace.download = nombreArchivo;
enlace.click();
console.log("Respuesta guardada en archivo JSON");

//simular petición leyendo un json
const responses = await fetch("/recipes.json");
const allRecipes = await responses.json();
console.log(allRecipes);
