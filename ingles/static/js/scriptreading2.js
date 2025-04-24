function checkAnswerselect() {
    const respuestas = {
        q1: "False",
        q2: "False",
        q3: "True",
        q4: "False",
        q5: "False"
    };

    let correctas = 0;

    for (let key in respuestas) {
        const radios = document.getElementsByName(key);
        for (let radio of radios) {
            if (radio.checked && radio.value === respuestas[key]) {
                correctas++;
            }
        }
    }

    if (correctas === Object.keys(respuestas).length) {
        // Todo correcto → alerta especial
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
            html: `You answered all correctly! 🎉`,
            icon: "info"
        });
    } else {
        // Algunos errores → alerta normal
        Swal.fire({
            title: "Keep Trying!",
            text: `You got ${correctas} out of ${Object.keys(respuestas).length} correct.`,
            icon: "warning",
            confirmButtonText: "Ok"
        });
    }
}
