$(document).ready(() => {
    $('#Datos').hide();

    $('#importarJson').click(function() {
        $.ajax({
            type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users',
            dataType: 'json'

        }).done((data) => {
            $.each(data, function(indice, persona) {
                let fila = $('<tr>');
                fila.append($(`<td>${persona.id}</td>`));
                fila.append($(`<td>${persona.name}</td>`));
                fila.append($(`<td>${persona.username}</td>`));
                fila.append($(`<td>${persona.email}</td>`));
                fila.append($(`<td>${"Calle: "+persona.address.street+" Suite: "+persona.address.suite+" Ciudad: "+persona.address.city+" Código Postal: "+persona.address.zipcode+" Coordenadas: Latitud: "+persona.address.geo.lat+" Longitud: "+persona.address.geo.lng}</td>`));
                fila.append($(`<td>${persona.phone}</td>`));
                fila.append($(`<td>${persona.website}</td>`));
                fila.append($(`<td>${"Nombre: "+persona.company.name+" Eslogan: "+persona.company.catchPhrase+" Profesión: "+persona.company.bs}</td>`));
                $('#Datos tbody').append(fila);
            });

            $('#Datos').show();
        });
    });
});
