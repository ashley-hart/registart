# Registart
Appointment Manager  
COP 4331, Fall 2020

### Build Instructions

Registart will eventually be hosted via Heroku. When that is the case, all the user will have to do is go to the proper URL to access the software. This method is desired because it will remove the need for users to install local files on their system.  

However, for the time being, Registart can be installed locally by copying the GitHub repository to your local machine. This is done by opening the Git terminal or by installing Git into Windows PowerShell, Mac terminal or Linux command line and using the git clone command with the link from this project’s repository.   

`git clone https://github.com/ashley-hart/registart.git`  

This project was built with MERN stack technologies. Therefore, we will need to make sure our system is set up to support it. This project takes advantage of Node.js and several packages. Node.js can be installed like so: 
sudo apt-get install -y nodejs

Once Node.js is installed, ensure that you have access to the “npm” command. command will allow you to use the npm package manager to install dependencies/packages this project needs to function. More information about Node.js can be found here.

Packages should be installed with the following command:

`npm install <package-name>`  

The following packages should be installed in the root folder:  
•	cors  
•	json-server  
•	mongoose  

The following packages should be installed in the app folder:  
•	axios  
•	react  
•	react-datepicker  
•	react-dom  
•	react-hook-form  
•	react-icons  
•	react-scripts  
•	react-router-dom  
•	styled-components    

The following packages should be installed in the backend folder:  
•	bcrypt  
•	body-parser  
•	cors  
•	dotenv  
•	express  
•	jsonwebtoken  
•	mongodb  
•	mongoose  
•	nodemon    

You can refer to the package.json file in the root and subfolders mentioned above to be reminded of what dependencies are required. These instructions have also been replicated in the GitHub repository for clarity. 

Additional information on these dependencies can be found through the npm website found here. Individual packages can be looked up in the search bar and the pages for them tend to have links to further documentation.  

Once all these dependencies are installed, open two terminals, one in the front-end folder (“app”), and one for the back-end folder (“backend”). Now type the following command into both terminals:

`npm start`   

The project should now be hosted locally on your system and displayed in your default browser. Feel free to play around with it and edit the code. If you have any constructive feedback, I would love to hear it!
