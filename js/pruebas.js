function probarValidarNombre() {
    console.assert(
        validarNombre("") === "Este campo debe tener al menos 1 caracter",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(
        validarNombre(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 50 caracteres",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Debe seleccionar una ciudad",
        "Validar ciudad no valido que el campo no este vacio"
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Este campo no puede estar vacio",
        "Este campo no puede estar vacio"
    );
    console.assert(
        validarDescripcionRegalo(
            "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "La descripcion del regalo no debe superar los 100 caracteres",
        "Validar descripcion regalo no valido que la descripcion del regalo sea menor a 100 caracteres"
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
