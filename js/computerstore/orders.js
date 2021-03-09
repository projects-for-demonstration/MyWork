function inicialize(){
    var table = document.getElementById("ordid").getElementsByTagName('tbody')[0];
    for (var i=0; i<5; i++){
        
        var newrow = table.insertRow(table.length);
        cell1 = newrow.insertCell(0);
        cell1.innerHTML = document.getElementById("ordid").rows.length-1;//id
        cell2 = newrow.insertCell(1);
        cell2.innerHTML = Math.floor(getrandom(1,10));//state start
        cell3 = newrow.insertCell(2);
        cell3.innerHTML = Math.floor(getrandom(11,20));//state end
        cell4 = newrow.insertCell(3);
        cell4.innerHTML = Math.floor(getrandom(1,10));//id user account
        cell5 = newrow.insertCell(4);
        var c = getrandom(10,20);
        cell5.innerHTML = Math.floor(c);//count products
        cell6 = newrow.insertCell(5);
        cell6.innerHTML = Math.floor(getrandom(30,100));//cost
        cell7 = newrow.insertCell(6);
        cell7.innerHTML = Math.floor(getrandom(1,10));//delivrty method
        cell8 = newrow.insertCell(7);
        cell8.innerHTML = Math.floor(getrandom(1,10));//pay method
        cell9 = newrow.insertCell(8);
        cell9.innerHTML = "Иванов Ивван Иванович #"+i;//clientfullname
        cell10 = newrow.insertCell(9);
        cell10.innerHTML = "Адрес доставки №"+i;//address
        cell11 = newrow.insertCell(10);
        cell11.innerHTML = generatephonenumber();//phone number
        cell12 = newrow.insertCell(11);
        cell12.innerHTML = new Date();//orderdate
        cell13 = newrow.insertCell(12);
        cell13.innerHTML = Math.floor(getrandom(1,10));//orderstate
        cell14 = newrow.insertCell(13);
        cell14.innerHTML = "это хороший заказ";//comment
        cell15 = newrow.insertCell(14);
        cell15.innerHTML = true;
    }
    
}
function getrandom(max, min){
 return Math.random()*(max-min)+min;
}
function generatephonenumber(){
    var phonenumber = "+7(";
    for (var i=0; i<13; i++){
        switch (i){
            case 3:
                phonenumber+=")";
                break;
            case 8:
            case 11:
                phonenumber+="-"
                break;
           
            default:
                phonenumber+=getrandom(0,9);
                break;
        }
    }
}

document.addEventListener("DOMContentLoaded", inicialize);