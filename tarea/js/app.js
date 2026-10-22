async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // Dirección que NO existe → SÍ dará error
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    
    if (!res.ok) throw new Error("No se pudo cargar la información");
    
    const publicaciones = await res.json();
    lista.innerHTML = publicaciones
      .map(p => `<li>${p.title}</li>`)
      .join("");
      
  } catch (error) {
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPosts();