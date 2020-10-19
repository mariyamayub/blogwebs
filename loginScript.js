/*function postArticleEventHandler()
{
    alert ("hello");
    var txtUserNameElement=document.getElementById("txtUserName");

    var txtEnterPasswordElement=document.getElementById("txtEnterPassword");

    var ErrorMessageElement=document.getElementById("ErrorMessage");

    var errorFlag=false;

    if (txtUserNameElement.value=="")
    {
        ErrorMessageElement.innerHTML+="User name can not be empty";
        errorFlag=true;
    }

    if (txtEnterPasswordElement.value=="")
    {
        ErrorMessageElement.innerHTML+="Password can not be empty";
        errorFlag=true;
    }
    if (errorFlag==false)
    {
        message="Thank you for Create an Account" +txtUserNameElement.value + "for submitting" +txtEnterPasswordElement.value;
        alert(message);
        location.href="file:///M:/Study/Projects/SimpleBlogWeb/home.html?#";
    }
}*/

function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }
      else {
        alert (message);
        location.href="file:///M:/Study/Projects/SimpleBlogWeb/slider.html";  
     
      }
       } 