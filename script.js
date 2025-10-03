document.addEventListener('DOMContentLoaded', () => {
    // Aplicar el evento a los contenedores de noticias
    const itemsNoticia = document.querySelectorAll('.noticia-item');

    itemsNoticia.forEach(item => {
        // Seleccionamos el span oculto que contiene el enlace
        const spanOculto = item.querySelector('.oculto');
        
        if (spanOculto) {
            // 1. Ocultamos el texto extra al cargar la página
            spanOculto.style.display = 'none';
            // 2. Indicamos visualmente que hay algo más para ver
            item.style.cursor = 'pointer'; 
            
            // 3. Añadimos el evento de clic al artículo
            item.addEventListener('click', (event) => {
                // Previene que se dispare el evento si se hace clic en otro elemento interactivo dentro
                if (event.target.tagName.toLowerCase() === 'a') {
                    return; 
                }

                // Hacemos visible el contenido oculto
                spanOculto.style.display = 'inline';

                // Si el contenido oculto tiene un enlace, lo abrimos en una nueva pestaña
                const link = spanOculto.querySelector('a');
                if (link && link.href) {
                    window.open(link.href, '_blank');
                }
                
                // Quitamos el comportamiento de "clic para ver más"
                item.style.cursor = 'default';
                item.removeEventListener('click', item.handler); // Eliminamos el listener si es necesario
            });
        }
    });
});
