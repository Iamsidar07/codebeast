const submitForm = (subject,email,name,message) => {
    window.open(
      `mailto:${"ms8460149@gmail.com"}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
    let successTXT=document.getElementById("success");
    successTXT.innerText="Successfully sent your message❤️ !";
    successTXT.style.color="green";
    successTXT.style.padding="15px 5px";
    successTXT.style.backgroundColor="white";
    successTXT.style.margin="10px 0";
    successTXT.style.borderRadius="3px";
    successTXT.style.fontWeight="500";

  };

$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            submitForm(subject,email,name,message);

            name="";
            email="";
            subject="";
            message="";

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});


