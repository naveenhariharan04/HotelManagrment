
$(document).ready(function () {
  $("#reservationForm").submit(async function (e) {
    e.preventDefault();

    const form = $(this);

    const data = {
      name: form.find("[name='name']").val(),
      phone: form.find("[name='phone']").val(),
      roomType: form.find("[name='roomType']").val(),
      checkIn: form.find("[name='checkIn']").val(),
      checkOut: form.find("[name='checkOut']").val(),
      rooms: form.find("[name='rooms']").val(),
      adults: form.find("[name='adults']").val(),
      children: form.find("[name='children']").val(),
    };

    try {
      const res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Booking successful!");
        form.trigger("reset");
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting reservation:", err);
      alert("Error occurred. Please try later.");
    }
  });
});
