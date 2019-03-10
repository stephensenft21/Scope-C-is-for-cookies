
//Some software developers were contracted to build some code, but there weren't quite clear yet on how scope works. Your job is to fix their code to stop all the errors from being thrown.

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let i = 0                   

for (let i = 0; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)

}