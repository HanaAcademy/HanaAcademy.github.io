
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu=document.getElementById("sidemenu")
    function openmenu(){
        sidemenu.style.width = "100px";
    }
    function closemenu(){
        sidemenu.style.width = "0px";
    }
     const scriptURL = 'https://script.google.com/macros/s/AKfycbxhVbsQNp9jrvZC2s2JgLdqDi2CwMZNCAzaH34ulZIs71CzhYT2GNkf4oJC0p5Bi5De8Q/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg =document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML= "Message was sent succesfully"
                    setTimeout(function() {
                        msg.innerHTML=""
                    }, 5000);
                    form.reset()
                } )
                .catch(error => console.error('Error!', error.message))
        })
    