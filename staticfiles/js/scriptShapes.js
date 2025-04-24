function checkAnswers() {
    const respuestas = [
        "sun",
        "box",
        "shape",
        "square",
        "rectangle",
        "circle",
        "star",
        "shape",
        "shapes"
    ];

    let correctas = 0;
    let resultados = [];

    for (let i = 1; i <= respuestas.length; i++) {
        let respuestaUsuario = document.getElementById('s' + i).value.trim().toLowerCase();
        if (respuestaUsuario === respuestas[i - 1]) {
            correctas++;
            resultados.push(`✅ Question ${i}: Correct`);
        } else {
            resultados.push(`❌ Question ${i}: Incorrect (Correct: ${respuestas[i - 1]})`);
        }
    }

    if (correctas === respuestas.length) {
        // Todo correcto: usar la alerta especial
        Swal.fire({
            title: "Your Results",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://sweetalert2.github.io/images/nyan-cat.gif")
                left top
                no-repeat
            `,
            html: resultados.join("<br>"),
            icon: "info"
        });
    } else {
        // No todo correcto: alerta normal
        Swal.fire({
            title: "Keep Trying!",
            text: `You got ${correctas} out of ${respuestas.length} correct.`,
            icon: "warning",
            confirmButtonText: "Ok"
        });
    }
}
