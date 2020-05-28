/*This function checks to see if a user is logged in or out. 
It takes a callback function that takes in a user as a parameter.
Everytime someone logs in or logs out then this will start and runs
the if or else statements.*/
auth.onAuthStateChanged(user => {
    if (user) {

    /* Gets a handle of the guides collection. Then it gets the documents inside it. 
    "onSnapshot" listens if there is a change in the Firebase database to launch the loop*/
        db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user);
    });
    } else {
        setupUI();
        setupGuides([]);
    }
});

//This creates the new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(() => {
        //close menu and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
      }).catch(err => {
        console.log(err.message);
      });
    });


// Grabs the sign up form to track users that sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => { //submit is added an eventlistener
    e.preventDefault(); //doesn't refresh page after hitting a button

    //obtains user data
    const email = signupForm['signup-email'].value; //look in the signupForm and look for an input of singup-email.
    const password = signupForm['signup-password'].value;

    /*This will communicate with the firebase project 
    on the back-end project and it will create user accounts upon signup.
    This command is asynchronous so it returns a promise. So we attach a
    "then" method to launch a callback function when the command is complete.*/
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector('#modal-signup'); //Gets modal that's open
        M.Modal.getInstance(modal).close(); //closes form
        signupForm.reset(); //Resets form field.
    });
});

//Logs out a user
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => { //listens to when a user clicks on logout.
    e.preventDefault();
    //firebase authentication signs out the current user that is logged in.
    auth.signOut();
});

//Log in the user
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

//obtain user data
const email = loginForm['login-email'].value;
const password = loginForm['login-password'].value;

//log user in from Firebase Auth.
auth.signInWithEmailAndPassword(email, password).then(cred => {

    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close(); //closes form
    loginForm.reset(); //Resets form field
});
});