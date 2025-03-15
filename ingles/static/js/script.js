function checkAnswers() {
    let answers = {
        s1: "Kitchen",
        s2: "Bathroom",
        s3: "Living Room",
        s4: "Bedroom",
        s5: "Dining Room"
    };

    let resultados = [];
    let inputs = [];

    for (let id in answers) {
        let input = document.getElementById(id);
        inputs.push(input);
        let userAnswer = input.value.trim();

        if (userAnswer.toLowerCase() === answers[id].toLowerCase()) {
            resultados.push(`✅ ${answers[id]} is correct!`);
        } else {
            resultados.push(`❌ ${userAnswer || "Empty"} should be: ${answers[id]}`);
        }
    }

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
    }).then(() => {
        inputs.forEach(input => input.value = "");
    });
}

function checkAnswerselect() {
    let correctAnswers = {
        q1: "True",
        q2: "False",
        q3: "False",
        q4: "True",
        q5: "True"
    };

    let resultados = [];
    let allAnswered = true;

    for (let id in correctAnswers) {
        let selected = document.querySelector(`input[name="${id}"]:checked`);
        
        if (!selected) {
            allAnswered = false;
            resultados.push(`❌ Question ${id.charAt(1)}: No answer selected!`);
            continue;
        }

        if (selected.value === correctAnswers[id]) {
            resultados.push(`✅ Question ${id.charAt(1)}: Correct!`);
        } else {
            resultados.push(`❌ Question ${id.charAt(1)}: Incorrect!`);
        }
    }

    if (!allAnswered) {
        Swal.fire({
            title: "Incomplete Answers",
            text: "Please answer all questions before checking results.",
            icon: "warning",
            confirmButtonText: "OK"
        });
        return;
    }

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
}

function checkAnswervideo() {
    let answers = {
        s11: "Garage",
        s22: "Kitchen",
        s33: "Garden",
        s44: "Balcony"
    };

    let resultados = [];
    let inputs = [];

    for (let id in answers) {
        let input = document.getElementById(id);
        inputs.push(input);
        let userAnswer = input.value.trim();

        if (userAnswer.toLowerCase() === answers[id].toLowerCase()) {
            resultados.push(`✅ ${answers[id]} is correct!`);
        } else {
            resultados.push(`❌ ${userAnswer || "Empty"} should be: ${answers[id]}`);
        }
    }

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
    }).then(() => {
        inputs.forEach(input => input.value = "");
    });
}
