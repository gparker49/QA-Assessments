const ninumber = document.createElement("INPUT")
const fullname = document.createElement("INPUT")
const phonenumber = document.createElement("INPUT")
const address = document.createElement("INPUT")
const department = document.createElement("INPUT")
const nilabel = document.createElement("label")
const label = document.createElement("label")



ninumber.setAttribute("id", "ninumber")
ninumber.setAttribute('type', 'text')
nilabel.setAttribute("for", "ninumber")
nilabel.innerHTML = "National Insurance Number: "

ninumber.setAttribute("id", "fullname")
ninumber.setAttribute('type', 'text')
label.setAttribute("for", "fullname")
label.innerHTML = "Fullname: "

ninumber.setAttribute("id", "phonenumber")
ninumber.setAttribute('type', 'text')
label.setAttribute("for", "phonenumber")
label.innerHTML = "Phone Number: "

ninumber.setAttribute("id", "address")
ninumber.setAttribute('type', 'text')
label.setAttribute("for", "address")
label.innerHTML = "Address: "

ninumber.setAttribute("id", "department")
ninumber.setAttribute('type', 'text')
label.setAttribute("for", "department")
label.innerHTML = "Department: "

document.body.appendChild(nilabel)
document.body.appendChild(ninumber)
document.body.appendChild(fullname)
document.body.appendChild(phonenumber)
document.body.appendChild(address)
document.body.appendChild(department)

console.log("this is a test")