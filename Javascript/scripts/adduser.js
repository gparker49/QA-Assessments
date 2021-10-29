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
const removebutton = document.createElement("button")
const viewbutton = document.createElement("button")
const editbutton = document.createElement("button")
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

document.body.appendChild(br)
document.body.appendChild(removebutton)
removebutton.innerHTML = "Delete User"

document.body.appendChild(br)
document.body.appendChild(viewbutton)
viewbutton.innerHTML = "View Entries"

document.body.appendChild(br)
document.body.appendChild(editbutton)
editbutton.innerHTML = "Edit Entries"

var database = []

addbutton.onclick = function(){
    var myJSON = [document.getElementById("ninumber").value, document.getElementById("fullname").value, document.getElementById("phonenumber").value, document.getElementById("address").value, document.getElementById("department").value]
    database.push(myJSON)
    window.alert("Data successfully added")
}

removebutton.onclick = function(){
    for(var i = 0; i < database.length; i++){
        if(database[i][0] == document.getElementById("ninumber").value){
            database.splice(i, 1)
        }
    }

    database.forEach(element => {
        document.createElement("label").innerHTML = element[0]
    });
}

viewbutton.onclick = function(){
    document.write(database)

    const backbutton = document.createElement("button")
    document.body.appendChild(br)
    document.body.appendChild(backbutton)
    backbutton.innerHTML = "back"
}


//Have to have the national insurance entered in order to edit the value in the database
editbutton.onclick = function(){
    var userentry = document.getElementById("ninumber").value
    for (i = 0; i < database.length; i++) {
        console.log(database[i][0])
        if (userentry == database[i][0]) {
            database[i][1] = document.getElementById("fullname").value
            database[i][2] = document.getElementById("phonenumber").value
            database[i][3] = document.getElementById("address").value
            database[i][4] = document.getElementById("department").value
        }
    }
}




