$(document).on('submit','#post-form',function(e){   //Telling the browser that once the user submits the form with the id of post-form, the code in the function should happen.
    e.preventDefault();  //To make sure the page doesn't reload
  
    $.ajax({
      type:'POST',       //type which is also the method POST
      url:'/create',     //the url should be taken to /create.
      data:{
        link:$('#link').val(),    //the link entered in the form input
        csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
      },
      success: function(data){
        $('h2').html("localhost:8000/"+data)
      }
    });
  }); 




//To copy the shortened url automatically
function copyToClipboard(elementId) {

// Create a "hidden" input
var aux = document.createElement("input");

// Assign it the value of the specified element
aux.setAttribute("value", document.getElementById(elementId).innerHTML);

// Append it to the body
document.body.appendChild(aux);

// Highlight its content
aux.select();

// Copy the highlighted text
document.execCommand("copy");
alert("Your shortened link has been copied to clipboard");
// Remove it from the body
document.body.removeChild(aux);

}