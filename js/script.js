
// -------------about----------

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


//contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyg2NbT1yA1YJY2g1jc8gPIIYX2ynAdXXSZs0V88Mu1_O5xkCVhUkoQik5a6gwJfNMb/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        message.innerHTML="Message Sent Successfully";
        message.classList.add("msg-style");

        setTimeout(()=>{
            message.innerHTML="";
            message.classList.remove("msg-style");
        }, 1000);
        
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
    
})