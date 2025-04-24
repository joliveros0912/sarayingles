function checkReadColors() {
    let correct = 0;

    if (document.getElementById('q1').value === "false") correct++;
    if (document.getElementById('q2').value === "true") correct++;
    if (document.getElementById('q3').value === "false") correct++;
    if (document.getElementById('q4').value === "true") correct++;
    if (document.getElementById('q5').value === "false") correct++;

    if (correct === 5) {
        Swal.fire({
            icon: 'success',
            title: 'Excellent!',
            text: 'All answers are correct!'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Keep trying!',
            text: `You got ${correct} out of 5 correct.`
        });
    }
}
