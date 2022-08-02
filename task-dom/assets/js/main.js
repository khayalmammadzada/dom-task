
let container=document.createElement("div")
container.className="container";
document.body.prepend(container)

let row=document.createElement("div")
row.className="row";
container.append(row);

let maindiv=document.createElement("div")
maindiv.className="maindiv";
maindiv.classList.add("col-lg-12")
row.append(maindiv);

let h2 = document.createElement("h2")
h2.className="960-360px"
maindiv.append(h2)
h2.innerHTML=("960 x 360px")


let littleboxes=document.createElement("div")
littleboxes.className="littleboxes"
littleboxes.classList.add("d-flex")
row.append(littleboxes)

let firstlittle=document.createElement("div")
firstlittle.className="little";
firstlittle.classList.add("col-lg-4")
littleboxes.append(firstlittle)

let txt = document.createElement("h4")
txt.className="290-180px"
firstlittle.append(txt)
txt.innerHTML=("290 x 180px")


let second=document.createElement("div")
second.className="little";
second.classList.add("col-lg-4")
littleboxes.append(second)

let txt2 = document.createElement("h4")
txt2.className="290-180px"
second.append(txt2)
txt2.innerHTML=("290 x 180px")

let third=document.createElement("div")
third.className="little";
third.classList.add("col-lg-4")
littleboxes.append(third)

let txt3 = document.createElement("h4")
txt3.className="290-180px"
third.append(txt3)
txt3.innerHTML=("290 x 180px")