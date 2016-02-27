function cargaPagina (url, contenedor) {
    $.ajax({
            url:url, 
            success: function (data) {
                $(contenedor).html(data);
            },
            cache:false
        }
    );
}
