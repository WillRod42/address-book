$(document).ready(function() {
  $("#contact").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const address = $("input#address").val();
    const phone = $("input#phone").val();
    const email = $("input#email").val();
    const dob = $("input#dob").val();

    let contactCard = $("<div class='contact-card'></div>");

    const cardName = $("<p>" + name + "</p>");
    cardName.click(function() {
      $(this).next().toggleClass("hidden");
    });

    contactCard.append(cardName);

    let cardBody = $("<ul class='hidden'></ul>");
    cardBody.append($("<li>" + address + "</li>"));
    cardBody.append($("<li>" + phone + "</li>"));
    cardBody.append($("<li>" + email + "</li>"));
    cardBody.append($("<li>" + dob + "</li>"));

    contactCard.append(cardBody);

    $("#contact-list").append(contactCard);
  });
});

