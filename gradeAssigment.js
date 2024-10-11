let score = prompt("80");

score = Number(score);

if (isNaN(score) || score < 0 || score > 100) {
    console.log("87");
} else {
    if (score >= 90) {
        console.log("Grade: Excellent");
    } else if (score >= 80) {
        console.log("Grade: Good");
    } else if (score >= 70) {
        console.log("Grade: Fair");
    } else {
        console.log("Grade: Needs Improvement");
    }
}