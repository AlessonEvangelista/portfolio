$(document).ready(function() {

	//$('.serror').hide(); //Hide error messages 
	//$('#sResult').hide(); //we will hide this right now
	//$('#sub-wrapper').show(); //show main form
	$("#gogo").click(function() { //User clicks on Submit button
	
	 // Fetch data from input fields.;
	 var js_email = $("#smail").val();

	 // Do a simple validation
	 if(js_email==""){
	 	 	 $("#MainResult1").test("Email is Requird");
		 return false;}
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (!(filter.test(js_email))) {
	 	//$("#MainResult1").text("Email is Invalid");
		$("#MainResult1").html('<p>'+"Email is Invalid"+'</p>');
		return false;
}
	
		//let's put all data together
	  var myData =  '&postEmail=' + js_email ;
	  
            jQuery.ajax({
                type: "POST",
                url: "subscribe.php",
                dataType:"html",
                data:myData,
                success:function(response){
				    $(".input-group").hide(); //hide form div slowly
                    $("#MainResult1").html('<p>'+response+'</p>');
                    //$("#MainResult1").html(response);
					//$("#MainResult1").text(response);					
					//$("#MainResult1").slideDown("slow"); //show Result 
					//$("#MainResult1").hide(); //hide form div slowly
                },
                error:function (xhr, ajaxOptions, thrownError){
					$("#MainResult1").html(thrownError);
                }    
            });
		return false;
	});
	
});