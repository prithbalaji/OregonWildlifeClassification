# CS 196 Group 10 Project -- Oregon Wildlife Image Classification

Hi, welcome to our project repository! This repository contains the code for the image classification model and the frontend, as well as the server that links the model predictions to the frontend. You can find the model in the [backend](https://github.com/CS196Illinois/group10/tree/master/backend) folder, the frontend in the [frontend](https://github.com/CS196Illinois/group10/tree/master/frontend) folder, and the server in the [server](https://github.com/CS196Illinois/group10/tree/master/server) folder.

## Technical Overview
For modeling, we used PyTorch to build the model, and the [Oregon Wildlife dataset on Kaggle](https://www.kaggle.com/virtualdvid/oregon-wildlife/notebooks) to train our model. The model has two convolutional layers with maxpooling after each of them, followed by three fully-connected layers. You can find the model definition in backend/wildlifeTrainer/model.py, and the saved model parameter file in backend/wildlifeTrainer/wild_net.pth.

For the server and backend, we used Django, along with PIL for a bit of image format manipulation. The server exposes an HTTP endpoint that the frontend can send a POST request to with the image information, and receives back the predictions in the HTTP response.

For the frontend, we used React for our framework. For the visuals, we used React Bootstrap for the CSS, and D3 for the probability visualization chart. For sending HTTP requests, we used Axios.

## Running the Project
Warning: when running the Django server, there are warnings in server/server/settings.py to not have DEBUG set to True, and to have the SECRET_KEY available to the public. You probably want to change these (and make the SECRET_KEY something you set yourself) so it's not the same as what's on the github.

### Package Installation
When you run the project (either locally or on a server, as described below), you may need to install some packages. See the below
terminal commands for any installs you still need to make.

Python:
- Pytorch: pip install torch torchvision
- Matplotlib: pip install matplotlib
- PIL: pip install pillow

Node.js:
- npm install (you might have to be in the frontend folder where the package.json file is)

### Running the Project Locally
1. Open a terminal window, and clone the repository
2. cd into the server folder, and run python3 manage.py runserver
3. Open another terminal window, cd into the frontend folder, and run npm start
4. The servers may take a while to start, but once they are up, go to localhost:3000 in the browser to access the site

### Hosting the Project Online
As of 12/9/20, we're currently hosting the project at http://3.140.152.230:3000/, on an AWS Lightsail instance. It'll probably be taken down soon after this date though, so if you want to host it yourself so anyone on the internet can access it, instructions for running it on Lightsail are below (if you are familiar with the process, though, you can host any way you like; no need to use Lightsail).

1. Go to https://lightsail.aws.amazon.com/ls/webapp/home/instances. If you don't have an account, you'll have to make one and register some kind of payment method with AWS.
2. Click "Create Instance" and under "Select a blueprint", click Django. For the instance plan, you probably have to choose the $20 plan or higher so you can get 4 GB of RAM; we tried 2 GB and the pytorch install failed due to not having enough memory.
3. Click the new instance, and then go to the Networking tab. Click "Create Static IP", and attach it to your instance.
4. Still in the Networking tab, go to the Firewall section and add a rule. Leave Application as Custom and Protocol as TCP, and enter 3000 as the port. This will expose the frontend to the internet (React puts 3000 as the port by default, but if you want to change the port in React, you should also change it here).
5. Add another rule in the Firewall, with 8000 as the port (this should expose the backend to the frontend, so it can query the model's prediction).
6. Follow the instructions for running the project locally (but in the instance's terminal, which you can access by clicking the "Connect using SSH" button). However, when in steps 2 and 3, before you run the command, use the "screen" command to make a new screen for each of the commands, so you can detach from the screen and allow the servers (frontend and backend/Django) to keep running, even after you exit the terminal. See [this tutorial](https://linuxize.com/post/how-to-use-linux-screen/) or various others you can find online to learn how to use screen.
7. Go to [static IP of instance]:3000 in your browser to access the site (anyone should be able to do this).
