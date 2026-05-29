var inp = document.querySelector("input")

var btn = document.getElementById("add-work")

var tasklist = document.getElementById("tasklist")


function addtask(){
    var inpvalue = inp.value.trim();

    if(inpvalue===""){
        alert("please write something")
        return
    }
    var li = document.createElement("li")
    li.textContent = inpvalue

    var btncontainer = document.createElement("div")
    btncontainer.classList.add("btn-container")

    var completedbtn = document.createElement("button")
    completedbtn.textContent = "✔️"
    completedbtn.classList.add("completed-btn")
    // li.appendChild(completedbtn)

    completedbtn.addEventListener("click",()=>{
        li.classList.toggle('completed');
    })

    var deletebtn = document.createElement("button")
    deletebtn.textContent = "delete"
    deletebtn.classList.add("btndelete")
    // li.appendChild(deletebtn)

    deletebtn.addEventListener("click",()=>{
        tasklist.removeChild(li)
    })


    btncontainer.appendChild(completedbtn)
    btncontainer.appendChild(deletebtn)
    li.appendChild(btncontainer)
    tasklist.appendChild(li)
    inp.value = '';

}

btn.addEventListener("click",addtask);

inp.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        addtask()
    }
})

