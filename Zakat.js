import inquirer from "inquirer";
let zakat = 2.5;
let goldvalueinTola = 234800;
let goldWeightInTolaReq = 7.5;
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        {
            name: "goldweight",
            message: "Enter gold weight:",
            type: "number"
        }
    ]);
    let goldweight = answer.goldweight;
    if (goldweight >= goldWeightInTolaReq) {
        let calculatedzakat = (goldweight * goldvalueinTola) * (zakat / 100);
        console.log(`The total calculatedvalue of gold weighing ${goldweight} tola is ${calculatedzakat}`);
        // console.log ("The total calculatedvalue of gold weighing" goldweight + "tola is" + calculatedzakat); aese bhi likh skte hain
    }
    else {
        console.log("Zakat not applicable");
    }
}
// const answer = await inquirer.prompt([
//     {
//         name: "goldweight",
//         message: "Enter gold weight:",
//         type: "number"
// }
// ]);
// let goldweight = answer.goldweight;
// if (goldweight >= goldWeightInTolaReq){
//     let calculatedzakat = (goldweight * goldvalueinTola) * (zakat / 100);
//     console.log(`The total calculatedvalue of gold weighing ${goldweight} tola is ${calculatedzakat}`)
//     // console.log ("The total calculatedvalue of gold weighing" goldweight + "tola is" + calculatedzakat); aese bhi likh skte hain
//  } else {
//         console.log("Zakat not applicable");
//     }
