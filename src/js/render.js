// render.js
export function renderProyecto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  fetch("js/proyectos.json")
    .then(response => response.json())
    .then(data => {
      const proyecto = data[id];

      if (!proyecto) {
        document.body.innerHTML = "<h1>❌ Proyecto no encontrado</h1>";
        return;
      }

      document.title = proyecto.titulo;
      document.getElementById("titulo").textContent = proyecto.titulo;
      document.getElementById("contexto").textContent = proyecto.contexto;

      // 2. Texto narrativo
      document.getElementById("desafio").textContent = proyecto.desafio;
      document.getElementById("aporte").textContent = proyecto.aporte;
      document.getElementById("resultado").textContent = proyecto.resultado;
      document.getElementById("aprendizaje").textContent = proyecto.aprendizaje;

      // Tecnologías
      const ulTec = document.getElementById("tecnologias");
      proyecto.tecnologias.forEach(tec => {
        const span = document.createElement("span");
        span.textContent = tec;
        ulTec.appendChild(span);
      });

      // Visualizaciones - solo selección de miniaturas
      const divVis = document.getElementById("visualizaciones");

      // Función para cambiar imagen destacada
      const setFeaturedImage = (src, activeThumb) => {
        const featuredImg = divVis.querySelector(".featured img");
        featuredImg.src = src;

        // Actualizar miniatura activa
        divVis.querySelectorAll(".thumbnails img").forEach(img =>
          img.classList.toggle("active", img === activeThumb)
        );
      };

      // Renderizar visualizaciones
      divVis.innerHTML = `
        <div class="featured">
          <img src="${proyecto.visualizaciones[0]}"
              alt="Imagen destacada del proyecto">
        </div>
        ${proyecto.visualizaciones.length > 0 ? `
          <div class="thumbnails">
            ${proyecto.visualizaciones.map((src, index) =>
              `<img src="${src}"
                    alt="Miniatura del proyecto"
                    class="${index === 0 ? 'active' : ''}">`
            ).join('')}
          </div>
        ` : ''}
      `;

      // Event listener solo para cambiar imagen destacada
      divVis.addEventListener("click", (e) => {
        if (e.target.matches(".thumbnails img")) {
          setFeaturedImage(e.target.src, e.target);
        }
      });

      // GitHub link
      const enlaceGit = document.getElementById("github");
      if (proyecto.github) {
        enlaceGit.href = proyecto.github;
        enlaceGit.style.display = "inline-block";
      } else {
        enlaceGit.style.display = "none";
      }

    })
    .catch(error => {
      console.error("Error al cargar el proyecto:", error);
      document.body.innerHTML = "<h1>Error al cargar el proyecto</h1>";
    });
}
