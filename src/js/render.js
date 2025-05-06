// Obtener nombre del proyecto desde la URL
const params = new URLSearchParams(window.location.search);
const proyectoId = params.get("id");

const proyecto = proyectos[proyectoId];

if (proyecto) {
  document.getElementById("titulo").textContent = proyecto.titulo;
  document.getElementById("subtitulo").textContent = proyecto.subtitulo;
  document.getElementById("introduccion").textContent = proyecto.introduccion;

  // Tecnologías
  const ulTec = document.getElementById("tecnologias");
  proyecto.tecnologias.forEach(tec => {
    const li = document.createElement("li");
    li.textContent = tec;
    ulTec.appendChild(li);
  });

  // Pipeline
  const olPipe = document.getElementById("pipeline");
  proyecto.pipeline.forEach(paso => {
    const li = document.createElement("li");
    li.textContent = paso;
    olPipe.appendChild(li);
  });

  // Visualizaciones
  const contVis = document.getElementById("visualizaciones");
  proyecto.visualizaciones.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.width = "100%";
    contVis.appendChild(img);
  });

  // Resultados
  const ulRes = document.getElementById("resultados");
  proyecto.resultados.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    ulRes.appendChild(li);
  });

  document.getElementById("github").href = proyecto.github;
  document.getElementById("autor").textContent = proyecto.autor;
}
