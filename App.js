let calculateBtn = document.getElementById('calculateBtn');
let calculate = function(){

    /// Getting Element By Id
    let totalBill   = document.getElementById('totalBill');
    let servicePerc = document.getElementById('servicePerc');
    let numPeople   = document.getElementById('numPeople');
    let result      = document.getElementById('result');
    
    /// Validate Input
    let error = 0;

    /// check if the totalBill is empty
    if(totalBill.value == ""){
        totalBill.style.borderColor = "#87010c";
        let error = 1;
    }
    else{
        totalBill.style.borderColor = "#87010c";
        let error = 0;
    }

    ///check if the service percentage is 0

    if(servicePerc.value == 0){
        servicePerc.style.borderColor = " #00666c";
        let error = 1;
    }
    else{
        servicePerc.style.borderColor = " #00666c";
        let error = 0;
    }

     ///check if the number of people is none

     if(numPeople.value == ""){
        numPeople.style.borderColor = "#87010c";
        let error = 1;
    }
    else{
        numPeople.style.borderColor = "#87010c";
        let error = 0;
    }


    /// cjeck if there is no error
    if(!error){
        let tip = 0;
        // calculate tip
        let tipInit = totalBill.value * servicePerc.value;
        
        // if more than one people are sharing the bill
        // and not empty
        if(numPeople.value  !=1 && numPeople.value  !=""){
            let tipEach = tipInit / numPeople.value;

            // round to two decimal places
            let tipEachRounded = Math.round(tipEach * 100)/100;

           // the next line allows us to always
           // have two digits after decimal point
           
           tipEachRounded = tipEachRounded.toFixed(2);

           // if the tip rounded to 0 assign tipEach
           // else assign tipEachRounded and 'each' string

           tip = tipEachRounded == 0? tipEach + 'each': tipEachRounded + 'each';
           
        }
        else{
            let tipRounded = Math.round(tipEach * 100)/100;

            /// the next linr allows us to always
            // have two digits after decimal point
            tipRounded = tipRounded.toFixed(2);

            // if tip rounded to 0 assingn tipInit
            // else assign tipRounded
            tip = tipRounded = 0 ? tipInit : tipRounded;
        }
        result.innerText = tip;
    }
    else{
        return ;
    }
}
/// adding click Event to the calculate Button
calculateBtn.addEventListener('click',calculate);

///// alert when clicking directly on calculate button 
