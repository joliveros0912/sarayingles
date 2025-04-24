function checkAnswervideo() {
    const respuestas = {
        s1: "circle",
        s2: "square",
        s3: "triangle",
        s4: "rectangle"
    };

    let correctas = 0;

    for (let key in respuestas) {
        const input = document.getElementById(key);
        if (input && input.value.trim().toLowerCase() === respuestas[key]) {
            correctas++;
        }
    }

    if (correctas === Object.keys(respuestas).length) {
        // Todo correcto → alerta especial
        Swal.fire({
            title: "Excellent!",
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
            html: `You answered all correctly! 🎉`,
            icon: "success"
        });
    } else {
        // Algunos errores → alerta normal
        Swal.fire({
            title: "Keep Practicing!",
            text: `You got ${correctas} out of ${Object.keys(respuestas).length} correct.`,
            icon: "warning",
            confirmButtonText: "Try Again"
        });
    }
}
