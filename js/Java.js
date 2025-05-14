 <script>
        document.querySelectorAll('.titulo-serie').forEach(titulo => {
            titulo.addEventListener('click', () => {
                const descripcion = titulo.parentElement;
                descripcion.classList.toggle('active');

                const flecha = titulo.querySelector('.flecha');
                flecha.classList.toggle('abierta');
            });
        });
    </script>
</body>
</html>