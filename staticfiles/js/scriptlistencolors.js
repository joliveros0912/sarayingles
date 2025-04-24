function checkListenColors() {
    let correct = 0;

    if (document.getElementById('q1').value === "purple") correct++;
    if (document.getElementById('q2').value === "green") correct++;
    if (document.getElementById('q3').value === "orange") correct++;

    if (correct === 3) {
        Swal.fire({
            icon: 'success',
            title: 'Excellent!',
            text: 'All answers are correct!'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Keep trying!',
            text: `You got ${correct} out of 3 correct.`
        });
    }
}
