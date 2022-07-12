const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session= localStorage.getItem("session");
let cachIn=[];
let cachOut=[];
let data ={
    transactions:[]
};

document.getElementById("button-logout").addEventListener("click", logout);

// Adicionar lançamento
document.getElementById("transaction-form").addEventListener("submit",function (event) {
   event.preventDefault();


   const value = document.getElementById("value-input").value;   
   const description = document.getElementById("description-input").value;
   const date = document.getElementById("date-input").value;
   const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, type: type, description, date: date
    });


    saveData(data);
    event.target.reset();
    myModal.hide();

    alert("Lançamento adicionado com sucesso,");

});

checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged",session);
        logged = session;
    }
    if(!logged){
        window.location.href = "index.html";
        return;
    }
    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }
    getCashin();
}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}
function getCashin(){
    const transaction = data.transactions
    const cachIn = transaction,filter((item)=> item.type ==="1");
    
    if(cachIn.length){
        let cachInHtml = ``;
        let limit = 0;

        if(cachIn.length > 5) {
            limit = 5;
        }else {
            limit= cashIn.length;
        }

        for (let index = 0; index < limit; index++) {
           cachInHtml += `
           <div class="row mb-4">
           <div class="col 12">
            <h3 class="fs-2">R$ ${cashIn[index].value.tofixed(2)}</h3>
            <div class="container p-0">
               <div class="row">
                   <div class="col-12 col-md-8">
                     <p>Aqui vai a descrição...</p>  
                   </div>
                   <div class="col-12 col-md-3 d-flex justify-content-end">
                       ${cachIn[index].date}
                   </div>
               </div>
            </div>
           </div>
       </div>`
        }
        document.getElementById("cash-in-list").innerHTML=cachInHtml;
        
    }
}
function saveData(data){
 localStorage.setItem(data.login, JSON.stringify(data));
}