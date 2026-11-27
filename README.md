# Registration-Form
Want to create a beautiful and responsive registration form using HTML, CSS, and JavaScript? In this short video, I'll show you how to design a modern registration form with a clean UI, stylish CSS, and simple JavaScript.

![image alt](https://github.com/Nawabsaba/Registration-Form/blob/0302374a56246cc48f27f808d743c8371e863e25/Youtube%20Video%20Img.png)

# HTML Program : -
     <!DOCTYPE html>
     <html>
     <head>
          <title>Registration Form</title>
          <link rel="stylesheet" href="style.css">
     </head>
     <body>

     <div class="container">
       <h1>Registration</h1>

       <form id="form">
           <label>Username</label>
           <input type="text" id="username" required>

           <label>Email</label>
           <input type="email" required>

           <label>Password</label>
           <input type="password" id="password" required>

           <label>Password again</label>
           <input type="password" id="confirm" required>

          <button type="submit">Sign Up</button>
      </form>
      </div>

     <script src="script.js"></script>
     </body>
    </html>

# CSS Program :- 

      * {
         box-sizing: border-box;
       }

     body {
        background: #123238;
        font-family: Arial;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        margin: 0;
    }

     .container {
        background: #fff;
        width: 90%;
        max-width: 450px;
        padding: 30px;
        border-radius: 10px;
    }

    h1 {
        text-align: center;
        color: #111;
    }

    label {
        display: block;
        margin: 20px 0 8px;
        font-size: 18px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }

    button {
         width: 100%;
         padding: 15px;
         margin-top: 30px;
         background: #3039c5;
         color: white;
         border: none;
         border-radius: 7px;
         font-size: 18px;
         cursor: pointer;
     }

    button:hover {
        background: #1725a5;
    }

# JavaScript Program
    document.getElementById("form").onsubmit = function(e) {
         e.preventDefault();
         
         let pass = document.getElementById("password").value;
         let confirm = document.getElementById("confirm").value;

       if (pass !== confirm) {
           alert("Passwords do not match!");
        } else {
           alert("Registration Successful!");
      }
    };
