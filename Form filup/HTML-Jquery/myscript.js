
var country=[{name:"Select Country",state:["Select State"]},{name:"India",state:['Select State','West Bengal','Uttar Pradesh','Madhya Pradesh','Gujrat']},{name:"USA",state:['Select State','Kansas','California','Missouri','Texas']},{name:"China",state:['Select State','Tibet','Inner Mongolia','Sichuan','Fujian']},{name:"Australia",state:['Select State','Queensland','Victoria','South Australia','Western Australia']}];
var india={wb:["Select City","Kolkata","Durgapur","Jalpaiguri"],up:["Select City","Varanasi","Agra","Lucknow"],mp:["Select City","Bhopal","Indore","Jabalpur"],gj:["Select City","Surat","Rajkot","Bhuj"]};



$(document).ready(function(){
					for(i=0;i<country.length;i++)
					{	$("#cities").empty();
						$("#countries").append("<option>"+country[i].name+"</option>");
					};
					$("#countries").change(function(){
						if(document.getElementById("countries").value=='Select Country')
								{	
									$("#states").empty();
									$("#cities").empty();
									$("#states").append("<option>Select States</option>");
									
								};
						if(document.getElementById("countries").value=='India')
								{
									$("#states").empty();
									$("#cities").empty();
									for(i=0;i<country[1].state.length;i++)
									{
										$("#states").append("<option>"+country[1].state[i]+"</option>");	
									};
									
								};
								
						if(document.getElementById("countries").value=='USA')
								{
									$("#states").empty();
									$("#cities").empty();
									for(i=0;i<country[2].state.length;i++)
									{
										$("#states").append("<option>"+country[2].state[i]+"</option>");	
									};
									
								};
						if(document.getElementById("countries").value=='China')
								{
									$("#states").empty();
									$("#cities").empty();
									for(i=0;i<country[3].state.length;i++)
									{
										$("#states").append("<option>"+country[3].state[i]+"</option>");	
									};
									
								};
						if(document.getElementById("countries").value=='Australia')
								{
									$("#states").empty();
									$("#cities").empty();
									for(i=0;i<country[4].state.length;i++)
									{
										$("#states").append("<option>"+country[4].state[i]+"</option>");	
									};
									
								};
					});
					
					$("#states").change(function(){
						if(document.getElementById("states").value=='Select States')
								{	
									$("#cities").empty();
									$("#cities").append("<option>Select City</option>");
									
								};
						if(document.getElementById("states").value=='West Bengal')
								{
									$("#cities").empty();
									for(i=0;i<india.wb.length;i++)
									{
										$("#cities").append("<option>"+india.wb[i]+"</option>");	
									};
									
								};
						if(document.getElementById("states").value=='Uttar Pradesh')
								{
									$("#cities").empty();
									for(i=0;i<india.up.length;i++)
									{
										$("#cities").append("<option>"+india.up[i]+"</option>");	
									};
									
								};
						if(document.getElementById("states").value=='Madhya Pradesh')
								{
									$("#cities").empty();
									for(i=0;i<india.mp.length;i++)
									{
										$("#cities").append("<option>"+india.mp[i]+"</option>");	
									};
									
								};
						if(document.getElementById("states").value=='Gujrat')
								{
									$("#cities").empty();
									for(i=0;i<india.gj.length;i++)
									{
										$("#cities").append("<option>"+india.gj[i]+"</option>");	
									};
									
								};
					});
				});





var hobby=[];
var address=[];
$(document).ready(function(){
				$("#fname").keyup(function(){
					var val=document.getElementById('fname').value;
					$("#fn").text(val);

				});
				
				$("#lname").keyup(function(){
					var val=document.getElementById('lname').value;
					$("#ln").text(" "+val);

				});
				
				$("#email").keyup(function(){
					var val=document.getElementById('email').value;
					$("#em").text(val);

				});
				
				$("#mobile").keyup(function(){
					var val=document.getElementById('mobile').value;
					$("#pn").text(val);

				});
				
				$("#color").change(function(){
					var val=document.getElementById('color').value;
					$("#cl").text(val);

				});
				
				$("#dob").change(function(){
					var val=document.getElementById('dob').value;
					$("#bd").text(val);

				});
				
				$("#genderm").click(function(){
					$("#sx").text('Male');

				});
				
				$("#genderf").click(function(){
					$("#sx").text('Female');

				});
				
				$("#crik").click(function(){
					if(document.getElementById('crik').checked) {
						hobby.push(document.getElementById('crik').value);
					$("#hby").text(hobby.join());
					}
					else{
						var i=hobby.indexOf('cricket');
						hobby.splice(i,1);
					$("#hby").text(hobby.join());
					}
					
				
				});
				
				$("#carm").click(function(){
					if(document.getElementById('carm').checked) {
						hobby.push(document.getElementById('carm').value);
					$("#hby").text(hobby.join());
					}
					else{
						var i=hobby.indexOf('carroms');
						hobby.splice(i,1);
					$("#hby").text(hobby.join());
					}
					
				});
				
				$("#chess").click(function(){
					if(document.getElementById('chess').checked) {
						hobby.push(document.getElementById('chess').value);
					$("#hby").text(hobby.join());
					}
					else{
						var i=hobby.indexOf('chess');
						hobby.splice(i,1);
					$("#hby").text(hobby.join());
					}
					
				});
				
				$("#countries").change(function(){
					address=[];
					address.push(document.getElementById('countries').value);
					$("#ad").text(address);
					
				});
				
				$("#states").change(function(){
					address.splice(1,5);
					address.push(document.getElementById('states').value);
					$("#ad").text(address);
					
				});
				$("#cities").change(function(){
					address.splice(2,5);
					address.push(document.getElementById('cities').value);
					$("#ad").text(address);
					
				});
				
				$("#major").change(function(){
					var val=document.getElementById('major').value;
					$("#mj").text(val);

				});
				
				
				$("#print").click(function(){
				var originalContents=document.body.innerHTML;
				document.body.innerHTML=document.getElementById('filledForm').innerHTML;
				window.print();
				document.body.innerHTML = originalContents;
				});
				$("#rfresh").click(function(){
					location.reload();
					
				});
				
			});
			



