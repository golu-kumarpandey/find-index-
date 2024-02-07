let arry = [77, 31, 17, 20, 63]
let strinifiedarry = JSON.stringify(arry)
let arry_container = document.getElementById("para")
arry_container.textContent = strinifiedarry

let input = document.getElementById("userInput")
console.log(input)


let findBtn = document.getElementById("findBtn")
findBtn.onclick = function() {

    if (input.value === "") {
        alert("Enter the Number")
    } else {
        let inputvalue = parseInt(input.value)
        let arry1 = arry
        let result = arry1.findIndex(function(each) {
            if (inputvalue === each) {
                return true
            } else {
                return false
            }
        })
        document.getElementById("finalresult").textContent = result
        document.getElementById("finalresult").classList.add("result")
    }
    input.value = ""

}
