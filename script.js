function sent(){
    
    var i=document.querySelector("input[type=text]");
    console.log(i.value);
    if(i.value!=''){
    document.getElementById('sent').innerHTML="Last Message Delivered";
    document.querySelector("input[type=text]").value='';
    }
    else{

        document.getElementById('sent').innerHTML="Enter your Message";
        document.getElementById('sent').style.color="red";
    }
}
document.getElementById('btn').addEventListener('click',sent);