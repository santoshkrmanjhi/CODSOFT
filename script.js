var inputcenter = document.getElementById("input-center");
var listcontent = document.getElementById("list-content");


function Task(){
    if(inputcenter.value ===''){
        alert("YOU MUST ENTER SOME TASK.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputcenter.value;
        listcontent.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        span.className="close";
    }
    savedata();
    inputcenter.value="";
    
}

listcontent.addEventListener("click",function(p){
    if(p.target.tagName ==="LI"){
        p.target.classList.toggle("checked");
    }

   else if(p.target.tagName ==="SPAN"){
        p.target.parentElement.remove();
    }
    savedata();

})

function savedata(){
    localStorage.setItem("data",listcontent.innerHTML);
}

function showdata(){
    listcontent.innerHTML=localStorage.getItem("data");
}

showdata();