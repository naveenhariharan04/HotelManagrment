$(document).ready(function () {
  // 🔘 1. Button click prevention
  $(".input-button").click(function (event) {
    event.preventDefault();
  });

  // 📅 2. Check-in date picker
  $("#check-in").datepicker({
    minDate: 0,
    numberOfMonths: [1, 2],
    onSelect: function () {
      $("#check-in-button").html($("#check-in").val());
    },
  });

  $(".form-group:eq(0), #check-in-button").click(function () {
    $("#check-in").datepicker("show");
  });

  // 📅 3. Check-out date picker
  $("#check-out").datepicker({
    minDate: 0,
    numberOfMonths: [1, 2],
    onSelect: function () {
      $("#check-out-button").html($("#check-out").val());
    },
  });

  $(".form-group:eq(1), #check-out-button").click(function () {
    $("#check-out").datepicker("show");
  });

  // 🌄 4. (Optional) Parallax Scroll Stub
  parallaxScroll = () => {
    let offset = window.pageYOffset;
    try {
      console.log("Scroll offset:", offset);
      // You can implement background movement here
    } catch (e) {
      console.error(e);
    }
  };

  // 🏨 5. Load Room Cards from Backend
  $.get("http://localhost:5000/api/rooms", function (rooms) {
    let html = "";

    rooms.forEach(room => {
      html += `
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${room.image}" class="card-img" alt="${room.title}" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${room.title}</h5>
                <p class="card-text">${room.description}</p>
                <p class="card-text"><strong>₹${room.price}</strong></p>
                <a href="roomdetails.html?id=${room._id}" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    $("#home-room-list").html(html);
  }).fail(function () {
    $("#home-room-list").html("<p>Unable to load rooms. Please try again later.</p>");
  });
});
