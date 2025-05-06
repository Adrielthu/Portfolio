const proyectos = {
    "consumo-electrico": {
      titulo: "⚡ Análisis del Consumo Eléctrico en Paraná",
      subtitulo: "Modelado, ETL y visualización de datos energéticos residenciales mediante un Data Warehouse.",
      tecnologias: ["PostgreSQL", "Python", "Pentaho", "Power BI"],
      introduccion: `Este proyecto académico simula la infraestructura de datos de una empresa distribuidora...`,
      pipeline: [
        "Extracción de datos desde un dataset ficticio",
        "Limpieza y transformación con pandas",
        "Carga a un modelo en estrella en PostgreSQL",
        "Visualización con Power BI"
      ],
      visualizaciones: [
        "img/dashboard1.png",
        "img/modelo_estrella.png"
      ],
      resultados: [
        "Segmentación clara del consumo por usuario y zona.",
        "Consultas eficientes mediante el modelo dimensional.",
        "Visualización dinámica e intuitiva."
      ],
      github: "https://github.com/tuusuario/consumo-electrico-parana",
      autor: "Adriel Starchevich"
    },

    "gis-salta": {
      titulo: "🗺️ Desarrollo de la Capa GIS de Salta Capital",
      subtitulo: "Adaptación y generación de datos geográficos para el modelado de la tuberculosis mediante agentes.",
      tecnologias: ["QGIS", "Python", "GeoPandas", "GitHub"],
      introduccion: `Este proyecto consistió en generar una capa GIS de edificios para Salta Capital, como parte de un modelo basado en agentes para analizar la propagación de la tuberculosis. Se adaptó y mejoró un proyecto previo desarrollado para otra provincia, incorporando nuevas funciones y librerías.`,
      pipeline: [
        "Descarga de datos geográficos desde Google Places usando Python",
        "Procesamiento y limpieza con GeoPandas, Pandas y otras librerías",
        "Edición y validación de capas geográficas en QGIS",
        "Solución de errores mediante IA y mejora del rendimiento del modelo"
      ],
      visualizaciones: [
        "img/gis_salta1.png",
        "img/gis_salta2.png"
      ],
      resultados: [
        "Capa GIS optimizada y adaptada para Salta Capital.",
        "Integración exitosa de datos públicos con herramientas libres.",
        "Base sólida para la simulación de la propagación de enfermedades."
      ],
      github: "https://github.com/tuusuario/gis-salta-capital",
      autor: "Adriel Starchevich"
    }

    // Podés agregar más proyectos acá
  };