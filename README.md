This file contains details on how to run the app.

After cloning the repository, open it in an IDE

# FRONTEND
For the front end, after cloning the repository, open it on an IDE and type ``cd client`` to access the client folder
Go to the src folder and locate the api folder. In the api folder, open the configurations folder and click on the index.ts file there.
You can change lines 19 and 20 from ``https://royal-spring-backend.onrender.com`` to the address of your local machine if you want to run the backend on your local machine.
OR you can leave it to display the hosted link for the backend.

Then on your terminal run: ```yarn dev```

Once this runs, click on the link in the terminal ``http://localhost:5173/`` to launch the frontnd of the app


# BACKEND
For the backend, after cloning the repository, open it in an IDE and then on the terminal type ``cd server`` to access the server folder
The run ``yarn build`` to compile to javascript since the browser cannot run typescript
create a file in the server folder (outside the src folder) and name it ``.env``
The paste the details of the environment variables attached during submission.

Then once that is done, run ``yarn start``

You can now navigate through the web app as you please.