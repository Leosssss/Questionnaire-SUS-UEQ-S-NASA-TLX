function openNext(headingID){
    let heading = document.getElementById(headingID);
    let headingBtn = heading.getElementsByClassName("accordion-button")[0];
    let body = heading.nextElementSibling;

    headingBtn.setAttribute("aria-expanded","true");
    headingBtn.classList.remove("collapsed");
    body.classList.add("show");
}

$(document).ready(function() {
    $('button[type=submit]').click(function(e){

        let data = [];


        let IDdata = [];
        let ID = document.getElementById("testID").value;
        if(!!ID){
            IDdata['experimentID'] = ID;
            data.push(IDdata);
        }else{
            alert("Bitte Aufgabe ID hinzufügen!");
            //return false;
        }
        

        let SUSQuestions = document.getElementById("SUSForm").getElementsByClassName("mb-3");
        let SUSData = [];
        for(let i=0; i<SUSQuestions.length; i++){
           let SUSID = SUSQuestions[i].id;
           let checkedItem = SUSQuestions[i].querySelector('.form-check-input:checked');
           if(!!checkedItem){
            let checkedValue = checkedItem.value;
            SUSData[SUSID] = checkedValue;
           }else{
            alert("Bitte alle SUS eingeben!");
            return false;
           }       
        }
        data.push(SUSData);
        

        let UEQSQuestions = document.getElementById("UEQForm").getElementsByClassName("mb-3");
        let UEQData = [];
        for(let j=0; j<UEQSQuestions.length; j++){
            let UEQID = UEQSQuestions[j].id;
            let checkedItem = UEQSQuestions[j].querySelector('.form-check-input:checked');
            if(!!checkedItem){
                let checkedValue = checkedItem.value;
                UEQData[UEQID] = checkedValue;
            }else{
                alert("Bitte alle UEQ-S eingeben!");
                return false;
            }    
        }
        data.push(UEQData);


        let NASA_TLXQuestions = document.getElementById("NASA_TLXForm").getElementsByClassName("mb-3");
        let NASA_TLXData = [];
        for(let l=0; l<NASA_TLXQuestions.length; l++){
            let NASA_TLXID = NASA_TLXQuestions[l].id;
            let rangeValue = NASA_TLXQuestions[l].querySelector('input').value;
            NASA_TLXData[NASA_TLXID] = rangeValue;
        }
        data.push(NASA_TLXData);
        

        console.log(data);
    })
})