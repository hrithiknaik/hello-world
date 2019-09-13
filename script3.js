validform=false;
function formValidation()
{	
	var name = document.getElementById("stdname");
	var add = document.getElementById("address");
	var eid = document.getElementById("emailid");
	var dob = new Date(document.getElementById("dob"));
	var branch = document.getElementByType("radio");
	var i;
	var radio_checked=false;
	for (i=0; i<branch.length; i++){
		if(branch[i].checked){
			radio_checked=true;
		}
	}
	var checkbox_checked;
	var hobby = document.getElementByTag("checkbox");
	for (i=0; i<hobby.length; i++){
		if(hobby[i].checked){
			checkbox_checked=true;
		}
	}

if(!(name.length == add.length == eid.length == dob.length == "") && checkbox_checked && radio_checked ){

			if(validName(name)){
				if(validEmail(eid))
				{
					if(validDob(dob))
					{	
						validform=true;			
					}
					else{
					alert("age must be above 22 years ");
					dob.focus();	
					}	
				}
				else{
					alert("You have entered an invalid email address!");
					eid.focus();
				} 
			}
			else{
				alert("You have entered an invalid Name");
				name.focus();	
			}
}
}

function validName(name){

      var letters = /^[A-Za-z ]+$/;
      if((name.match(letters).length > 0 )|| !(name.match(letters)==null))
      {
      return true;
      }
      else
      {
      return false;
      }
      
}

function validEmail(eid)
{
	var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
	if(eid.match(mailformat))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function validDob(dob){
	var present_date = new Date();
	if ((present_date.getFullYear() - dob.getFullYear()) >= 22 ){
		return true;
	}
}
if(validform){
	document.write("Welcome".name);
}