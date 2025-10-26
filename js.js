// Animación de productos al aparecer al hacer scroll
const productos = document.querySelectorAll('.producto');

function mostrarProductos() {
    const triggerBottom = window.innerHeight * 0.85;

    productos.forEach(producto => {
        const productoTop = producto.getBoundingClientRect().top;

        if(productoTop < triggerBottom) {
            producto.classList.add('aparecer');
        }
    });
}

window.addEventListener('scroll', mostrarProductos);
window.addEventListener('load', mostrarProductos);

// Alerta al hacer clic en botón de pedido
const botonesPedido = document.querySelectorAll('.btn-pedido');
botonesPedido.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log('Redirigiendo a WhatsApp...');
    });
});
