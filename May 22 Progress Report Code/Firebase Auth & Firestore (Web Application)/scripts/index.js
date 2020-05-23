//DOM Elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');


//Makes sure the correct menus are displayed for when a user is logged in or out.
const setupUI = (user) => {
    //This is when we log in.
    if (user) {

        //account info
        const html = `
        <div>You are logged in as ${user.email}</div>
        `;
        accountDetails.innerHTML = html;


        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } 
    //For when you're logged out 
    else {
        //get rid of account info
        accountDetails.innerHTML = '';
        //toggle's UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};

//sets up the guides 
/*Takes in data  and while cycle through it. It will then output a guide for 
each element inside that data array.*/
const setupGuides = (data) => {

    //using length to determine whether to show guides or not.
    if (data.length) {

    let html = ''; //we will be appending to this string as we cycle through the data.
    data.forEach(doc => { //for each element in the array we will grab the data.
        const guide = doc.data();
        
        //use HTML to output the appropiate title and 
        const li = `
        <li>
        <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
        <div class="collapsible-body white"> ${guide.content} </div>
        </li>
        `;

        html += li //appended to this.

    });

    guideList.innerHTML = html;
    }
    else {
        guideList.innerHTML = '<h5 class="center-align"> Login or sign up to view the guides</h5>'
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() { 

    var modals = document.querySelectorAll('.modal'); //grabs all modal classes
    M.Modal.init(modals); //Modal Library in Materialize
  
    var items = document.querySelectorAll('.collapsible'); //grabs all collapsible classes
    M.Collapsible.init(items);
  
  });

