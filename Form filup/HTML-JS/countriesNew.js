function addOption(select,text,value)
{
	var obj=document.createElement("option");
	
	obj.text=text;
	obj.value=value;
	select.options.add(obj);
}

var country=[{name:"Select Country",state:["Select State"]},{name:"India",state:['Select State','West Bengal','Uttar Pradesh','Madhya Pradesh','Gujrat']},{name:"USA",state:['Select State','Kansas','California','Missouri','Texas']},{name:"China",state:['Select State','Tibet','Inner Mongolia','Sichuan','Fujian']},{name:"Australia",state:['Select State','Queensland','Victoria','South Australia','Western Australia']}];
var india={wb:["Select City","Kolkata","Durgapur","Jalpaiguri"],up:["Select City","Varanasi","Agra","Lucknow"],mp:["Select City","Bhopal","Indore","Jabalpur"],gj:["Select City","Surat","Rajkot","Bhuj"]};
function selCountry(){
	addOption(document.getElementById("countries"),country[0].name,"");
	for(i=1;i<country.length;i++)
	{
		addOption(document.getElementById("countries"),country[i].name,country[i].name);
		
	}
}


function selState()
{
	document.getElementById("states").options.length=0;
	if(document.getElementById("countries").value=='Select Country')
	{
		document.getElementById("states").value=' ';
		
	}
	if(document.getElementById("countries").value=='India')
	{
		for(i=0;i<country[1].state.length;i++)
		{
			addOption(document.getElementById("states"),country[1].state[i],country[1].state[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='USA')
	{
		for(i=0;i<country[2].state.length;i++)
		{
			addOption(document.getElementById("states"),country[2].state[i],country[2].state[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='China')
	{
		for(i=0;i<country[3].state.length;i++)
		{
			addOption(document.getElementById("states"),country[3].state[i],country[3].state[i]);
			
		}
		
	}
	if(document.getElementById("countries").value=='Australia')
	{
		for(i=0;i<country[4].state.length;i++)
		{
			addOption(document.getElementById("states"),country[4].state[i],country[4].state[i]);
			
		}
		
	}
	
}

function selCities()
{
	document.getElementById("cities").options.length=0;
	if(document.getElementById("states").value=='Select State')
	{
		document.getElementById("cities").value='';
		
	}
	if(document.getElementById("states").value=='West Bengal')
	{
		for(i=0;i<india.wb.length;i++)
		{
			addOption(document.getElementById("cities"),india.wb[i],india.wb[i]);
			
		}
		
	}
	if(document.getElementById("states").value=='Uttar Pradesh')
	{
		for(i=0;i<india.up.length;i++)
		{
			addOption(document.getElementById("cities"),india.up[i],india.up[i]);
			
		}
		
	}
	
	if(document.getElementById("states").value=='Madhya Pradesh')
	{
		for(i=0;i<india.mp.length;i++)
		{
			addOption(document.getElementById("cities"),india.mp[i],india.mp[i]);
			
		}
		
	}
	
	if(document.getElementById("states").value=='Gujrat')
	{
		for(i=0;i<india.gj.length;i++)
		{
			addOption(document.getElementById("cities"),india.gj[i],india.gj[i]);
			
		}
		
	}
	
	
}
var hobby=[];
var address=[];
function disp(val){
	switch(val){
		case 'fname':
        	document.getElementById('fn').innerHTML=document.getElementById('fname').value;
        	break;

		case 'lname':
			document.getElementById('ln').innerHTML=' '+document.getElementById('lname').value;
			break;

		case 'email':
			document.getElementById('em').innerHTML=document.getElementById('email').value;
			break;

		case 'mobile':
			document.getElementById('pn').innerHTML=document.getElementById('mobile').value;
			break;

		case 'color':
			document.getElementById('cl').innerHTML=document.getElementById('color').value;
			break;
		
		case 'dob':
			document.getElementById('bd').innerHTML=document.getElementById('dob').value;
			break;

		case 'genderm':
			document.getElementById('sx').innerHTML=document.getElementById('genderm').value;
			break;

		case 'genderf':
			document.getElementById('sx').innerHTML=document.getElementById('genderf').value;
			break;

		case 'crik':
			{
				if(document.getElementById('crik').checked) {
				hobby.push(document.getElementById('crik').value);
				document.getElementById('hby').innerHTML=hobby;
				}
				else{
						var i=hobby.indexOf('cricket');
						hobby.splice(i,1);
						document.getElementById('hby').innerHTML=hobby;
				}
				break;
			}
			
		case 'carm':
			{
				if(document.getElementById('carm').checked) {
				hobby.push(document.getElementById('carm').value);
				document.getElementById('hby').innerHTML=hobby;
				}
				else{
						var i=hobby.indexOf('carroms');
						hobby.splice(i,1);
						document.getElementById('hby').innerHTML=hobby;
				}
				break;
			}
		case 'chess':
			{
				if(document.getElementById('chess').checked) {
				hobby.push(document.getElementById('chess').value);
				document.getElementById('hby').innerHTML=hobby;
				}
				else{
						var i=hobby.indexOf('chess');
						hobby.splice(i,1);
						document.getElementById('hby').innerHTML=hobby;
				}
				break;
			}
		case 'major':
			document.getElementById('mj').innerHTML=document.getElementById('major').value;
			break;
		case 'countries':
			address=[];
			address.push(document.getElementById('countries').value);
			document.getElementById('ad').innerHTML=address;
			break;
		case 'states':
			address.splice(1,5);
			address.push(document.getElementById('states').value);
			document.getElementById('ad').innerHTML=address;
			break;
		case 'cities':
			address.splice(2,5);
			address.push(document.getElementById('cities').value);
			document.getElementById('ad').innerHTML=address;
			break;
	}
	


}

function areaPrint(){
	var originalContents=document.body.innerHTML;
	document.body.innerHTML=document.getElementById('filledForm').innerHTML;
	window.print();
	document.body.innerHTML = originalContents;
}
function refreshField(){
	location.reload();
	
	
}