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

        let ID = document.getElementById("testID").value;
        if(!!ID){
            data['experimentID'] = ID;
        }else{
            alert("Bitte Aufgabe ID hinzufügen!");
        }


        let SUSQuestions = document.getElementById("SUSForm").getElementsByClassName("mb-3");
        for(let i=0; i<SUSQuestions.length; i++){
           let SUSID = SUSQuestions[i].id;
           let checkedItem = SUSQuestions[i].querySelector('.form-check-input:checked');
           if(!!checkedItem){
            let checkedValue = checkedItem.value;
            data[SUSID] = checkedValue;
           }else{
            alert("Bitte alle SUS eingeben!");
            return false;
           }       
        }
        

        let UEQSQuestions = document.getElementById("UEQForm").getElementsByClassName("mb-3");
        for(let j=0; j<UEQSQuestions.length; j++){
            let UEQID = UEQSQuestions[j].id;
            let checkedItem = UEQSQuestions[j].querySelector('.form-check-input:checked');
            if(!!checkedItem){
                let checkedValue = checkedItem.value;
                data[UEQID] = checkedValue;
            }else{
                alert("Bitte alle UEQ-S eingeben!");
                return false;
            }    
        }


        let NASA_TLXQuestions = document.getElementById("NASA_TLXForm").getElementsByClassName("mb-3");
        for(let l=0; l<NASA_TLXQuestions.length; l++){
            let NASA_TLXID = NASA_TLXQuestions[l].id;
            let rangeValue = NASA_TLXQuestions[l].querySelector('input').value;
            data[NASA_TLXID] = rangeValue;
        }
                
        const csvdata = csvmaker(data);
        download(csvdata, ID);
    })
});

//https://www.geeksforgeeks.org/how-to-create-and-download-csv-file-in-javascript/
const download = function (data, ID) {
 
    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([data], { type: 'text/csv' });
 
    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
 
    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')
 
    // Passing the blob downloading url
    a.setAttribute('href', url)
 
    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'tp_'+ID+'_data.csv');
 
    // Performing a download with click
    a.click()
}
 
const csvmaker = function (data) {
 
    // Empty array for storing the values
    csvRows = [];
 
    // Headers is basically a keys of an
    // object which is id, name, and
    // profession
    const headers = Object.keys(data);
 
    // As for making csv format, headers
    // must be separated by comma and
    // pushing it into array
    csvRows.push(headers.join(','));
 
    // Pushing Object values into array
    // with comma separation
    const values = Object.values(data).join(',');
    csvRows.push(values)
 
    // Returning the array joining with new line
    return csvRows.join('\n')
}