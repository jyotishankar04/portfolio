const smallMenu = document.querySelector(".smallMenu");
const menuBtn = document.querySelector(".menuBtn");

let flag = 0;

function openMenu() {
  if (flag === 0) {
    smallMenu.style.display = "block";
    flag = 1;
  } else {
    smallMenu.style.display = "none";
    flag = 0;
  }
}

menuBtn.addEventListener("click", () => {
  openMenu();
});

// typing animation
var typed = new Typed(".animeText", {
  strings: ["Jyotishankar", "Subham"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});




function send() {
  var name = document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var writearea = document.getElementById("writearea");
  var submit = document.getElementById("submit").value;


  var body = "Name: " + name + "<br/> Email: "+ email + "<br> Contact Number: " + phone  + "<br> Massage: " + writearea.value;
  const value3 = writearea.value;
//  console.log(body);
 
  Email.send({
    SecureToken:"89c62f7b-9a16-4f6d-a198-13879f9947b6",

    
    To: "jyotipatra.subham@gmail.com",
    From: "patrajyotishankarlearn@gmail.com",
    Subject: writearea,
    Body: body
  }).then((message) => {
    // console.log(message);
    if(message.includes("OK")){
      swal("Successful!", "Your Data Successfully Received!", "success");

    }else{
      swal("Something Wrong!","Your Data Not Received!", "error");
    }
  }).catch((error) => {
    console.error("Error occurred while sending email:", error);
    swal("Something Wrong!", "Your Data Not Received!", "error");
  });
}
