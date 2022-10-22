function NewAlert(state,text){
    if(state=='good'){
        document.getElementsByClassName('alert')[0].className='alert alert-info';
    }else{
        document.getElementsByClassName('alert')[0].className='alert alert-warning';
    }
    document.getElementsByClassName('alert')[0].style.display = 'block';
    document.getElementById('alertText').innerHTML = text;
    setTimeout(hideAlert,5000);
}function hideAlert(){
    document.getElementsByClassName('alert')[0].style.display='none'
}

function nombreFact() {
    var table = document.getElementById('table');
    var trs = table.getElementsByTagName('tr');
    var cmpPayee = 0;
    for(var i=1;i<trs.length;i++){
        var text = trs[i].children[5].innerHTML;
        if(text=='payee'){
            cmpPayee++;
        }
    }
    NewAlert('good',cmpPayee)
}

function calculTotal(){
    let qu1 = document.getElementById("qu1").value;
    let qu2 = document.getElementById("qu2").value;
    let qu3 = document.getElementById("qu3").value;
    let totale = 5000*qu1 + 6000*qu2 + 700*qu3 + " DH";
    document.getElementById('total').innerHTML = totale;
}

function ajouter() {
    var NU_C = document.getElementById("NU_C").value;
    var NO_C = document.getElementById("NO_C").value;
    const pattern = /C[0-9]{4}/;
    var x = NU_C.length;
    
    if (NU_C == '' || NO_C == ''){
        NewAlert('bad','Les champs numéro et nom du client sont obligatoires')
        return false;
    }else if(x != 5 || !pattern.test(NU_C)){
        NewAlert('bad','Le numéro du client doit commencer par la lettre C suivi par 4 chiffres')
        return false;
    }

    var email = document.getElementById("email").value;
    if (document.getElementById("oui").checked) {
        var fidele_ou_non = "Oui";
    }else if (document.getElementById("non").checked) {
        var fidele_ou_non = "non"
    }
    
    totale = document.getElementById('total').innerHTML;
    if (document.getElementById('fact').checked) {
        facture = "payee";
    }else if (document.getElementById('fact').checked == false) {
        facture = "Non payee";
    }
    var table = document.getElementById('table').getElementsByTagName('tbody')[0];
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + NU_C + "</td>" + "<td>" + NO_C + "</td>" + "<td>" + email + "</td>" + "<td>" + fidele_ou_non + "</td>" + "<td>" + totale + "</td>" + "<td>" + facture + "</td>";
    table.append(tr);
}

function stylepage() {
    document.querySelector('body').style.fontFamily = "tahoma";
    document.querySelectorAll('input[type="button"]').style.backgroundColor = "dimGray";
}