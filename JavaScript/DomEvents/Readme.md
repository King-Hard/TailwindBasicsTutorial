# Dom and Events

- Dom Manipulation

1, innerHTML = "Words"; - yung laman ng isang element natin is papalitan natin sya ng text using this method.

2, const variable = document.querySelector(". for class and # for id") - same funtion lang with get element by parehas lang sila na kumukuha ng element tag natin para imanipulate yung laman ng element tag natin.
 
2, variable.remove(); - ul or ol tapos may li tayo sa loob ng ul na yan or ol, then gusto natin na tanggalin yung mga li sa ul natin gagamit lang tayo ng .remove();

3, variable.first or lastElementChild.remove(); - heto naman kung isa lang tatanggalin natin na list na nakalagay sa loob ng ul natin.

4, variable.style.background = "red"; and all available design - heto naman mag select tayo ng element tapos, iibahin natin example yung design nung lement na yon using variable.style.design = "";


- Dom Events

1, variable.addEventListener("property", function(event){
    variabel.preventDefault();


} )

yung function variable natin is lalagyan natin sya ng variabel.preventDefault(); - para mapanatili natin na nakalagay kung ano man yung idi-display natin text ba ganon or maglalagat tayo ng color or what.

properties: click, and son on.


- Form Validation

1, gawa tayo ng conditional statement nakalagay don eh yung sa input type daw natin na email and pass eh kukunin natin yung variable.value.lenght para malaman natin kung may tinype na ba si user na mga inputs then kung wala pa maglalagay tayo ng inner.HTML na message

lagay lang tayo ng div sa taas ng email input natin tas lagay tayo ng id non then kunin natin yunng element na yon using query selector  ngayon sa if sa baba non ilagay nanatin yunng variable.innerHTML = "";

pano gawin:

1, kunin lang muna natin lahat ng element na need natin which are email, password, message, and botton. Using const variable = document;.querySelector(# or . variable);


2, ngayon kunin natin botton variable.addEventListener("click", funtion(variable){
    variable.preventDefault;

    if(email.value.length === 0 || password.value.legth === 0){
        msg.innerHTML = "Please complete details!";

        setTimeout(() => document.querySelector("#msg").remove(); 3000);
    }
});







