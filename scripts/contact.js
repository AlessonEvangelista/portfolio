$(document).ready(function() {
 
	//$('#MainResult').hide(); //we will hide this right now
	$("#contact-btnn").click(function() { //User clicks on Submit button
	
	 // Fetch data from input fields.
	 var js_name = $("#name").val();
	 var js_email = $("#email").val();
	 var js_message = $("#message").val();
	 
// Do a simple validation
	 if(js_name==""){
		$("#MainResult").html('<fieldset class="response">'+"All Fields are Required"+'</fieldset>');			 
		 return false;}
	 if(js_email==""){
	 	 $("#MainResult").html('<fieldset class="response">'+"All Fields are Required"+'</fieldset>');
		 return false;}
	 if(js_message==""){
	 	$("#MainResult").html('<fieldset class="response">'+"All Fields are Required"+'</fieldset>');
		return false;}
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (!(filter.test(js_email))) {
	 	$("#MainResult").html('<fieldset class="response">'+"Email is not valid"+'</fieldset>');
		return false;
}
		//let's put all data together
	  var myData = 'postName='+ js_name + '&postEmail=' + js_email +  '&postMessage=' + js_message;
	  
            jQuery.ajax({
                type: "POST",
                url: "send_form_email.php",
                dataType:"html",
                data:myData,
                success:function(response){
				 
				     $("#contacto").hide();
                    $("#MainResult").html('<fieldset class="response">'+response+'</fieldset>');
					//$("#MainResult").slideDown("slow"); //show Result 
					
                },
                error:function (xhr, ajaxOptions, thrownError){
					$("#MainResult").html(thrownError);
                }    
            });
		return false;
	});
	
});