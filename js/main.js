function calculateprice(){
    var product=document.getElementById("product").value;
    var quantity=document.getElementById("quantity").value;
    var discount=document.getElementById("discount").value;
    var result=document.getElementById("result");

    result.setAttribute("class","alert theme-danger my-4 text-center")

    if(product==""){
        result.innerHTML="please select product";
    }
    else if(quantity==""){
        result.innerHTML="please enter quantity";
    }
    else if(discount==""){
        result.innerHTML="please enter discout";
    }
    else if(isNaN(quantity) || quantity<0 ){
        result.innerHTML="please enter avalid quantity";
    }
    else if(isNaN(discount)|| discount<0 ||discount>100){
        result.innerHTML="enter valid discount(valid discount not contain a text & betwen 0 and 100)"
    }
    else{
        var everquantity = quantity*product;
        var discountamount =(everquantity*discount)/100;
        var total= everquantity-discountamount;
        result.setAttribute("class","alert theme-success my-5")
        result.innerHTML=`total after discount is  ${total} discount is ${discountamount} total before discount is ${everquantity}`

    }
}