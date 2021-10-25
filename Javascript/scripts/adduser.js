const ninumber = document.createElement("INPUT")
const fullname = document.createElement("INPUT")
const phonenumber = document.createElement("INPUT")
const address = document.createElement("INPUT")
const department = document.createElement("INPUT")
const nilabel = document.createElement("label")
const namelabel = document.createElement("label")
const phonelabel = document.createElement("label")
const addresslabel = document.createElement("label")
const departmentlabel = document.createElement("label")
const addbutton = document.createElement("button")
const br = document.createElement("br")



ninumber.setAttribute("id", "ninumber")
ninumber.setAttribute('type', 'text')
nilabel.setAttribute("for", "ninumber")
nilabel.innerHTML = "National Insurance Number: "

fullname.setAttribute("id", "fullname")
fullname.setAttribute('type', 'text')
namelabel.setAttribute("for", "fullname")
namelabel.innerHTML = "<br/>Fullname: "

phonenumber.setAttribute("id", "phonenumber")
phonenumber.setAttribute('type', 'text')
phonelabel.setAttribute("for", "phonenumber")
phonelabel.innerHTML = "<br/>Phone Number: "

address.setAttribute("id", "address")
address.setAttribute('type', 'text')
addresslabel.setAttribute("for", "address")
addresslabel.innerHTML = "<br/>Address: "

department.setAttribute("id", "department")
department.setAttribute('type', 'text')
departmentlabel.setAttribute("for", "department")
departmentlabel.innerHTML = "<br/>Department: "

document.body.appendChild(nilabel)
document.body.appendChild(ninumber)

document.body.appendChild(namelabel)
document.body.appendChild(fullname)

document.body.appendChild(phonelabel)
document.body.appendChild(phonenumber)

document.body.appendChild(addresslabel)
document.body.appendChild(address)

document.body.appendChild(departmentlabel)
document.body.appendChild(department)

document.body.appendChild(br)
document.body.appendChild(addbutton)
addbutton.innerHTML = "Add User"

addbutton.onclick = function(){
    var myJSON = [document.getElementById("ninumber").value, document.getElementById("fullname").value, document.getElementById("phonenumber").value, document.getElementById("address").value, document.getElementById("department").value]
    console.log(myJSON)
}
