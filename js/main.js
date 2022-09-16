function timeWatch(){
    let my_date = new Date();
    let hr,min = (my_date.getMinutes() < 10) ? "0" +  my_date.getMinutes() : my_date.getMinutes(),
    sec = (my_date.getSeconds() < 10) ? "0" + my_date.getSeconds() : my_date.getSeconds(),
    M = (my_date.getHours() >= 12) ? "PM" : "AM";  


    if(my_date.getHours() == 0){
        hr = 12;
    }

    else if(my_date.getHours() > 12){
        hr = my_date.getHours - 12;
    }
    
    else{
        hr = my_date.getHours();
    }

    let current_time = hr + ":" + min + ":" + sec + ":";

    document.querySelector("#H").innerHTML = current_time;
    document.querySelector("#M").innerHTML = M;

    let my_day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let my_month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let day = my_date.getDate();

    let current_date = my_day[my_date.getDay()] + "," + my_month[my_date.getMonth()] + day;

    document.querySelector("#date").innerHTML = current_date;
}

timeWatch();
setInterval(function(){
    timeWatch();
});

 