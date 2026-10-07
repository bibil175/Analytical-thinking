const studentName = "bibil";

const assignment = 80;
const midterm = 75;
const finalExam = 90;

const finalScore =
    (assignment * 30/100) + 
    (midterm * 30/100) + 
    (finalExam * 90/100);

const status = finalScore >= 70 ? "passed" : "failed";

const category = 
    finalScore >= 85 ?"Exellent" :
    finalScore <= 70 ?"Good" :
    "failed";

console.log(`Student:${studentName}`);
console.log(`Assignment:${assignment}`);
console.log(`midterm:${midterm}`);
console.log(`Final Exam:${finalExam}`);
console.log(`Final Score:${finalScore}`);
console.log(`Status: ${status}`);
console.log(`category:${category}`);
