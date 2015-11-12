(function($){
  $(function(){
    Parse.initialize("0LMrk1OPZPyWjo5Y4wShFIOOUbuZUmJU8pXQERoF", "ve3WSaG2pcivyycIbdwKWt25LD4rJdhwnRsjWS6G");
    loadPostDetails();
    loadAllEvents();
    loadAllImages();
    $('.button-collapse').sideNav({
      menuWidth: 300
    });
    $('.parallax').parallax();
    $('select').material_select();

  $('.OrinocoSlider').slick({
     autoplay:true,
     autoplaySpeed:3000,
     arrows:false,
     infinite: true,
     mobileFirst:true,
   });

   $("#inquiryForm").hide();
   $("#shopDetailsForm").hide();

   $("#createNewEventTemplate").hide();
   $("#EditEventTemplate").hide();
   $("#allEventsTemplate").show();
   $("#btnViewAllEvents").hide();
   $("#btnEditEvent").hide();
   $("#btnSaveEvent").hide()
    $('#allCigarSlider').slick({
  dots: false,
  infinite: true,
  arrows:false,



  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



  }); // end of document ready
})(jQuery); // end of jQuery name space



function loadPostDetails(){

  var NewsPost = Parse.Object.extend("newsPost");
  var query = new Parse.Query(NewsPost);
  query.get("LquHdGsMGc", {
    success: function(newsPost) {
      // The object was retrieved successfully.
      var posttitle = newsPost.get("postTitle");
      var postHTML = newsPost.get("postHTML");
      var editor = new wysihtml5.Editor(document.getElementById('editor'));
          editor.setValue(postHTML);
          $("#postTitle").val(posttitle);
    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    }
  });

}

$("#btnSavePost").click(function(){

  var postTitle = $("#postTitle").val();
  var editor = new wysihtml5.Editor(document.getElementById('editor'));
  var html = editor.getValue();
  // Create the object.
  var NewsPost = Parse.Object.extend("newsPost");
  var newspost = new NewsPost();
  newspost.id = "LquHdGsMGc";
  newspost.save(null, {
    success: function(newspost) {
    // Now let's update it with some new data. In this case, only cheatMode and score
    // will get sent to the cloud. playerName hasn't changed.
      newspost.set("postTitle", postTitle);
      newspost.set("postHTML", html);
      newspost.save();
      swal("Saved!", "Successfully updated news post.", "success")
    }
  });
})


$("#previousSlide").click(function(e){
  e.preventDefault();
  $("#allCigarSlider").slick('slickPrev');
})
$("#nextSlide").click(function(e){
  e.preventDefault();
  $("#allCigarSlider").slick('slickNext');
})
$("#previousSlideHome").click(function(e){
  e.preventDefault();
  $(".OrinocoSlider").slick('slickPrev');
})
$("#nextSlideHome").click(function(e){
  e.preventDefault();
  $(".OrinocoSlider").slick('slickNext');
})

$(".anOrinocoCigar").mouseover(function(){
  $(this).css("cursor","pointer");
  $(this).css("background-color","rgba(255,255,255,0.3)");
})
$(".anOrinocoCigar").mouseout(function(){
  $(this).css("cursor","pointer");
  $(this).css("background-color","rgba(255,255,255,0.0)");
})

$(".anOrinocoCigar").click(function(e){
  e.preventDefault();
  var goTo = $(this).attr('data-page');
  window.location.href = goTo;

})

$(".stateImg").mouseover(function(){
  $(this).css("cursor","pointer");
})
$(".stateImg").click(function(){
  var theState = $(this).attr('data-state');
  var hasShop = $(this).attr('data-hasShop');

  if ( hasShop === 'No'){
    $("#inquiryForm").show();
    $("#shopDetailsForm").hide();
    $(".basicPageContent2").hide();
    $("#familyText").text(theState);
    $("#familySubText").text("Live in " + theState + " and own a cigar shop? Apply to partner with us!");
  }




})


function animate() {
      $('.mainicon').animate({marginTop:'25px'}, 500, function(){
          $('.mainicon').animate({marginTop:'35px'}, 700, function(){
            animate();
          });
      });
  }
 animate();

  $("#scrollDownIcon").click(function(){
    $('html, body').animate({
        scrollTop: $("#allTheContent").offset().top
    }, 700);
  })

  $(".tiles").mouseover(function(){
    $(".tiles").css({"cursor":"pointer"});
  })

  $(".tiles").click(function(){
    window.location.href = $(this).attr('data-page');
  })

  $('#menupoper').on('click', function(e) {

    e.preventDefault();
    var isShowing = $(this).attr('data-showingmain');
    if ( isShowing === 'true'){
        $(this).attr('data-showingmain','false');
        $("#maincontent").hide();
        $("#contentcolumn").css("background-color","black");
        $("#menuitem").removeClass("fa fa-bars");
        $("#menuitem").addClass("fa fa-times");
        $("#menucontent").show();
    } else {
        $(this).attr('data-showingmain','true');
        $("#maincontent").show();
        $("#contentcolumn").css("background-color","white");
        $("#menuitem").removeClass("fa fa-times");
        $("#menuitem").addClass("fa fa-bars");
        $("#menucontent").hide();
    }

});


//Event Methods

$("#btnCreateNewEvent").click(function(){
  $("#btnViewAllEvents").show();
  $("#createNewEventTemplate").show();
  $("#allEventsTemplate").hide();
  $("#btnSaveEvent").show();
  $("#btnCreateNewEvent").hide();

})

$("#btnViewAllEvents").click(function(){
  $("#btnViewAllEvents").hide();
  $("#createNewEventTemplate").hide();
  $("#allEventsTemplate").show();
  $("#btnSaveEvent").hide();
    $("#EditEventTemplate").hide();
    $("#btnEditEvent").hide();
  $("#btnCreateNewEvent").show();
  loadAllEvents();




})

$("#btnSaveEvent").click(function(){

  var eventName = $("#eventName_new").val();
  var eventVenue = $("#eventVenue_new").val();
  var eventAddress = $("#eventAddress_new").val();
  var eventDate = $("#eventDate_new").val();
  var eventTime = $("#eventTime_new").val();
  var eventDescription = $("#eventDescription_new").val();

  var dateStamp = new Date(eventDate);

  var EventPost = Parse.Object.extend("Events");
  var eventPost = new EventPost();
  eventPost.set("EventName", eventName);
  eventPost.set("eventVenue",eventVenue);
  eventPost.set("eventAddress",eventAddress);
  eventPost.set("eventDescription",eventDescription);
  eventPost.set("eventTime",eventTime);
  eventPost.set("eventDate",dateStamp);

  eventPost.save(null, {
    success: function(eventpost) {
      // Execute any logic that should take place after the object is saved.
      swal("Saved!", "Successfully saved event.", "success")
      clearEventForm();
      console.log('New object created with objectId: ' + eventPost.id);
    },
    error: function(eventpost, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      console.log('Failed to create new object, with error code: ' + error.message);
      swal("Error!", error.message, "error");
    }
  });
})

function clearEventForm(){
  $("#eventName_new").val('');
  $("#eventVenue_new").val('');
  $("#eventAddress_new").val('');
  $("#eventDate_new").val('');
  $("#eventTime_new").val('');
  $("#eventDescription_new").val('');
}

function loadAllEvents(){
  var Events = Parse.Object.extend("Events");
  var query = new Parse.Query(Events);
  query.ascending("eventDate");
  query.find({
    success: function(results) {

      $("#eventTableBody").empty();
      // Do something with the returned Parse.Object values
      var eventHTML;
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var eventName = object.get('EventName');
        var eventDate = object.get('eventDate');
        var eventLocation = object.get('eventVenue');

        var dateStamp = new Date(eventDate);
        var month = dateStamp.getMonth() + 1
        var day = dateStamp.getDate() + 1;
        var year = dateStamp.getFullYear();
        var formattedDate = month + "-" + day + "-" + year;

        //alert(object.id + ' - ' + object.get('EventName'));
        eventHTML += "<tr> <td>"+ formattedDate +"</td> " +
                     " <td>"+ eventName +"</td> " +
                     " <td>"+ eventLocation +"</td> " +
                     " <td><a style='color:black' href='#' data-event="+ object.id +" class='editpost'</a><i style='color:green' class='edit fa fa-edit'></i> Edit</td> " +
                     " <td><a style='color:black' href='#' data-event="+ object.id +" class='deletepost'</a><i style='color:red' class='delete fa fa-times'></i> Delete</td></tr>"
      }

      $('#eventTableBody').append(eventHTML);

  //    <tr>
  //      <td>11-04-2015</td>
  //      <td>Winstons Humidor</td>
  //      <td>Midlothian, Virginia</td>
  //      <td><a href="#" class="editpost"</a><i class="edit fa fa-edit"></i> Edit</td>
  //      <td><a href="#" class="deletepost"</a><i class="delete fa fa-times"></i> Delete</td>
  //    </tr>

    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

}

function loadAllImages(){

  var Photos = Parse.Object.extend("Photos");
  var query = new Parse.Query(Photos);
    query.descending("createdAt");
    query.find({
      success: function(results) {

        $("#photoTableBody").empty();
        // Do something with the returned Parse.Object values
        var photoHTML;
        for (var i = 0; i < results.length; i++) {
          var object = results[i];

          var Photo = object.get("Photo");
          var PhotoURL = Photo.url();
          var photoName = Photo.name().split("-").pop();
          var photoDate = object.get('createdAt');
          var photoCaption = object.get('Caption');

          var dateStamp = new Date(photoDate);
          var month = dateStamp.getMonth() + 1
          var day = dateStamp.getDate() + 1;
          var year = dateStamp.getFullYear();
          var formattedDate = month + "-" + day + "-" + year;

          //alert(object.id + ' - ' + object.get('EventName'));
          photoHTML += "<tr> <td>"+ formattedDate +"</td> " +
                       " <td>"+ photoName +"</td> " +
                       " <td><a style='color:black' href='#' data-photourl="+ PhotoURL +" data-photo="+ object.id +" class='viewimage'</a><i style='color:green' class='edit fa fa-eye'></i> View</td> "

        }

        $('#photoTableBody').append(photoHTML);

    //    <tr>
    //      <td>11-04-2015</td>
    //      <td>Winstons Humidor</td>
    //      <td>Midlothian, Virginia</td>
    //      <td><a href="#" class="editpost"</a><i class="edit fa fa-edit"></i> Edit</td>
    //      <td><a href="#" class="deletepost"</a><i class="delete fa fa-times"></i> Delete</td>
    //    </tr>

      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

}


$("#photoTableBody").delegate(".viewimage","click",function(e){
  e.preventDefault();
  var image = $(this).attr('data-photo');
  var imageURL = $(this).attr('data-photourl');
  $('#imgsrc2').attr('src', imageURL);
  $("#btnDeleteImage").attr('data-img',image);
  $("#btnUpdateImage").attr('data-img',image);
})

$("#btnDeleteImage").click(function(){
  var image = $(this).attr('data-img');
  alert(image);
})

$("#btnUpdateImage").click(function(){
  var image = $(this).attr('data-img');
  alert(image);
})

$("#eventTableBody").delegate(".editpost","click",function(){
  var post = $(this).attr('data-event');
  $("#btnEditEvent").attr('data-event',post);
  $("#createNewEventTemplate").hide();
  $("#allEventsTemplate").hide();
  $("#btnSaveEvent").hide()
  $("#btnCreateNewEvent").hide();
  $("#EditEventTemplate").show();
  $("#btnViewAllEvents").show();
  $("#btnEditEvent").show();

  var Event = Parse.Object.extend("Events");
  var query = new Parse.Query(Event);
  query.get(post, {
    success: function(event) {
      // The object was retrieved successfully.
      var eventName = event.get("EventName");
      var eventVenue = event.get("eventVenue");
      var eventAddress = event.get("eventAddress");
      var eventDescription = event.get("eventDescription");
      var eventTime = event.get("eventTime")
      var eventDate = event.get("eventDate");

      var theDate = new Date(eventDate);
      var day = ("0" + (theDate.getDate() + 1)).slice(-2);
      var month = ("0" + (theDate.getMonth() + 1)).slice(-2);
      var formattedDate = theDate.getFullYear()+"-"+(month)+"-"+(day) ;

      // load that posts data in fields
      $("#eventName_edit").val(eventName);
      $("#eventVenue_edit").val(eventVenue);
      $("#eventAddress_edit").val(eventAddress);
      $("#eventDate_edit").val(formattedDate);
      $("#eventTime_edit").val(eventTime);
      $("#eventDescription_edit").val(eventDescription);

    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    }
  });



})

$("#eventTableBody").delegate(".deletepost","click",function(){


  swal({   title: "Are you sure?",
           text: "You will not be able to undo this action!",
           type: "warning",
           showCancelButton: true,
           confirmButtonColor: "#DD6B55",
           confirmButtonText: "Yes, delete it!",
           closeOnConfirm: false }, function(){

             var EventPost = Parse.Object.extend("Events");
             var eventPost = new EventPost();
             eventPost.id = post;
             eventPost.destroy({
               success: function(eventPost) {
                 // The object was deleted from the Parse Cloud.
                 loadAllEvents();
                 swal("Deleted!", "Event has been deleted.", "success");
               },
               error: function(eventPost, error) {
                 // The delete failed.
                 // error is a Parse.Error with an error code and message.
               }
             });


              });
})

$("#btnEditEvent").click(function(){
    var postToUpdate = $(this).attr('data-event');
    var newDate = new Date($("#eventDate_edit").val());
    var Event = Parse.Object.extend("Events");
    var event = new Event();
    event.id = postToUpdate;
    event.save(null, {
      success: function(event) {
      // Now let's update it with some new data. In this case, only cheatMode and score
      // will get sent to the cloud. playerName hasn't changed.
        event.set("EventName", $("#eventName_edit").val());
        event.set("eventVenue", $("#eventVenue_edit").val());
        event.set("eventAddress", $("#eventAddress_edit").val());
        event.set("eventDescription", $("#eventDescription_edit").val());
        event.set("eventTime", $("#eventTime_edit").val());
        event.set("eventDate", newDate);
        event.save();

        swal("Saved!", "Successfully updated the event.", "success")

      }
    });

})
