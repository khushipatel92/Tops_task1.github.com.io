// function for login
function lg()
{
    var mob=document.getElementById("mobile").value;
    var pass=document.getElementById("psw").value;

    if(mob==9537011883 && pass==9537011883)
    {
        alert("you are logged in sucessfully.")
        window.location="dashboard.html";
    }
    else
    {
        alert("Your mobile number and password are incorrect.")
        window.location="index.html";
    }
}

// function for loder
var load;
function mainFunction()
{

    load=setTimeout("display()",1000);

}
function display()
{
    document.getElementById("main-content").style="display:block !important";
    document.getElementById("loader").style="display:none !important";
}

//function for dropdown
function drop_down()
{
   document.getElementById("drop").classList.toggle("show");
}

// function for logout

function closeWin() 
{
    var currentUser = document.getElementById("lout");
    if (currentUser)
    {
        alert('Are you sure you want to logout?');
        window.location="index.html";
    } 
    else
    {
        alert('not logout');
        window.location="dashboard.html";
    }

}