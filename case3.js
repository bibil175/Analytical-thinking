const studentName = "bibil"
const averageScore = 86;
const attendance = 92;
const familyIncome = 4000000;
const organizationMember = true;

const basicRequirement = averageScore >= 80 && attendance >= 90;
let scholarshipCatergory;

if (basicRequirement) {
    scholarshipCatergory = "Not Eligible";
} else if (
    familyIncome <= 3000000 && organizationMember) {
    scholarshipCatergory = "category A";
} else if (
    familyIncome <= 5000000 && organizationMember) {
        scholarshipCatergory = "category B";
}else{
    scholarshipCatergory = "Not Eligible";
}

console.log(`Student: ${studentName}`);
console.log(`Average Score: ${averageScore}`);
console.log(`Attendance: ${attendance}`);
console.log(`Family Income: ${familyIncome}`);
console.log(`Organization Member: ${organizationMember}`);
console.log("");
console.log(`Basic Requirement: ${basicRequirement ? "passed":"failed"}`);
console.log(`scholarship Category: ${scholarshipCatergory}`);