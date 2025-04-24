function checkAnswerColors() {
    let correct = 0;

    if (document.getElementById('w1').value.trim().toLowerCase() === "yellow") correct++;
    if (document.getElementById('w2').value.trim().toLowerCase() === "green") correct++;
    if (document.getElementById('w3').value.trim().toLowerCase() === "blue") correct++;
    if (document.getElementById('w4').value.trim().toLowerCase() === "red") correct++;
    if (document.getElementById('w5').value.trim().toLowerCase() === "purple") correct++;
    if (document.getElementById('w6').value.trim().toLowerCase() === "white") correct++;
    if (document.getElementById('w7').value.trim().toLowerCase() === "violet") correct++;
    if (document.getElementById('w8').value.trim().toLowerCase() === "colors") correct++;
    if (document.getElementById('w9').value.trim().toLowerCase() === "color") correct++;

    if (correct === 9) {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'All answers are correct!'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: `You got ${correct} out of 9 correct. Try again!`
        });
    }
}
