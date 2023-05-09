// Init
var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
var startYear = 2010;
var endYear = 2025;




var currentMonth = document.getElementById('current-month'),
      currentYear = document.getElementById('current-year'),
      calDays = document.getElementById('cal-days');

var getUiMonths = document.getElementById('months'),
      getUiYears = document.getElementById('years');

var btnYear = document.querySelector('.btn-year');



var month,year;

var serverDays = new Date(),
month = serverDays.getMonth(),
// year = serverDays.getUTCFullYear();
year = serverDays.getFullYear();

// console.log(serverDays); // Tue May 09 2023 18:25:32 GMT+0630 (Myanmar Time)
// console.log(month);     // 4
// console.log(year);      // 2023


window.addEventListener('load',function(){

    currentMonth.textContent = months[month];
    currentYear.innerText = year;

    initMonths();
    initYears();
    initDays();

  
});


function initMonths(){
    getUiMonths.innerHTML = '';

    //  <div class="dropdown-item">Jan</div>

    for(var i = 0; i < months.length; i++){
        var newDiv = document.createElement('div');
        newDiv.textContent = months[i];
        newDiv.classList.add('dropdown-item');
       
       
        // newDiv.addEventListener('click',function(){
            // console.log(this);
            // console.log(this.textContent);
            // console.log(i); // 12
        // });

        newDiv.onclick = selectMonth(i);


        getUiMonths.appendChild(newDiv);
      
    }
}

function selectMonth(num){
    // console.log(num);

    var allIdx = num; // 0 to 11

    return function(){
        month = allIdx;
        currentMonth.textContent = months[month];
        initDays();
    }
}

function initYears(){
    getUiYears.innerHTML = '';

    // <div class="dropdown-item">2000</div>

    for(var x = startYear; x <= endYear; x++){
        // console.log(x);

        var newDiv = document.createElement('div');
        newDiv.innerText = x;
        newDiv.className = 'dropdown-item';

        //   console.log(newDiv);

         newDiv.onclick = (
            function(){
                // console.log(x);

                var allIdx = x;
                // console.log(allIdx); // 2010 to 2025

                return function(){
                    year = allIdx;
                    currentYear.innerText = year;
                    initDays();  
                }
               
            }
        )();


        getUiYears.appendChild(newDiv);
    }
}

function initDays(){
    calDays.innerHTML = '';

    var tmpDays = new Date(year,month,0);
    // console.log(tmpDays); // Sun Apr 30 2023 00:00:00 GMT+0630 (Myanmar Time)
    var getAllDays = allDays(year,month);
    // console.log(getAllDays);
    var getWeekDay = tmpDays.getDay(); 
    // console.log(getWeekDay);  

    for(var i = 0; i <= getWeekDay; i++){
        var newDiv = document.createComment('div');
        newDiv.className = 'day blank';

        calDays.appendChild(newDiv);
    }




    
    for(var j = 0; j < getAllDays; j++){
            // console.log(j);

            var addDay = j+1;

            // <div id="" class="day">1</div>

            var newDiv = document.createElement('div');
            newDiv.innerText = addDay;
            newDiv.classList.add('day');
            calDays.appendChild(newDiv);

        }

    
}



function allDays(year,month){
    // console.log(year,month);

    // console.log(new Date());   // Tue May 09 2023 19:00:43 GMT+0630 (Myanmar Time)

    //                  year month day
    // console.log(new Date(2023,1,10));  // Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,0));  // Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,0,0));  // Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,5,0));  // Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,0));  // Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,30));  // Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)

    var curentAllDays = new Date(year,month+1,0);
    // console.log(curentAllDays);
    curentAllDays = curentAllDays.getDate();
    // console.log(curentAllDays);
    return curentAllDays;
}

btnYear.addEventListener('click',function(){
   if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
   }else{   
        this.lastElementChild.classList.add('show');
   }
});





