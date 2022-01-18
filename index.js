var toDoList=[];
var toDoListTrash=[];
var flag=0;
var count=0;


function showTime()
{
    var today = new Date();
    var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    document.querySelector(".time").innerHTML=time;
}
setInterval(showTime,0);



document.querySelector(".timeClock").addEventListener("click",
            function()
            {
                
                if(count % 2 === 0)
                {
                    document.querySelector("#timeId").classList.remove("time");
                    document.querySelector("#timeId").innerHTML="";
                    document.querySelector("#timeId").innerHTML="<iframe src='https://free.timeanddate.com/clock/i85t97z1/n1841/szw80/szh80/hoc333/hbw3/hfc111/cf100/hnc555/fan2/fnu2' frameborder='0' width='80' height='80' style='margin-left:40px'></iframe>";
                    
                    
                } 
                else
                {
                    document.querySelector("#timeId").classList.add("time");
                }  
                count++;
            }
);

document.querySelector(".btn").addEventListener("click",
    function()
    {
        if(date.value==='')
        {
            alert("Pick Date");
           
        }
        else
        {
           
            var data=document.querySelector("#input").value;
            document.querySelector("#input").value='';
    
            if(data=== "")
            {
                alert("Enter Work To Do");
               
            }
            else
            {
                if(flag===0)
                {
                    dateEntry();
                }
                
                toDoList.push(data);
                toDoListTrash.push(false);
                display1();
            }
            del();
        }
        
        
    }
);

function dateEntry()
{
   
    toDoList.push(date.value);
    
    // alert(d);
    flag=1;

   
}

function display1()
{
    document.querySelector(".list").innerHTML='';
    for(var i=1;i<toDoList.length;i++)
    {   
        var node=document.querySelector(".list");
        const item ="<li><input type='text' id ='el"+i+"' class='listText' placeholder="
                    +toDoList[i]+"><img src='images/delete.jpg' class='listTrash' id='"+i+"'></img></li>";
        node.insertAdjacentHTML("afterbegin",item);
    }
}

function del()
{
    var elToDelete = document.querySelectorAll(".listTrash");
    var flag=0;
    for(var i=0;i<elToDelete.length;i++)
    {
        elToDelete[i].addEventListener("click",
            function(evnt)
            {
                var index = evnt.target.id;
                toDoList.splice(index,1);
                toDoListTrash.splice(index,1);
                display1();
                del();
            }
        );
    }
}

function setMonth()
{
    var d=(date.value).substring(5,7);
    document.querySelector("#t").classList.remove("centered1");
    document.querySelector("#t").classList.add("centered2");
    switch (d)
    {
       
        case "01" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "02" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "03" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "04" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "05" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "06" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "07" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "08" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "09" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "10" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "11" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
        case "12" :var cls=document.querySelector("#m").classList;
                    document.querySelector("#m").classList.remove(cls[0]);
                    document.querySelector("#m").classList.add("month"+d); 
                    break;
            
    }

}
