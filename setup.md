Setup

##	Follow these steps to make sure SKY is Running:
	1) Clone this repository.
	2) Download NodeJS and install it.
	3) Open the terminal inside the cloned folder("../sky"), we need libraries, so type: 
				npm install express
				npm install ejs
	4) Now in terminal, type 
				node sky.js
	5) If everything works fine, You should get a message that looks like 
				SERVER IS UP at http://localhost:8080/
	6) Now we need 'MOON' to get this working.
	7) Don't close ter terminal.


##	Follow these steps to make sure MOON is Running:
	1) Clone the repository.
				https://github.com/AYESDIE/moon-emotion-recognition
	2) Install the latest version of Python. 
				Python 3.x, not Python 2.x
	3) Install pip for python 3.
	4) Now using pip, install the libraries. (Use terminal inside "../sky/moon"). So open the terminal and type:
				pip install bottle
				pip install opencv-python
				pip install scikit-image
				pip install scipy
	5) Once All libraries are installed, run the server.
				python server.py
	6) If done correctly, you will get the message on the terminal as
				Listening on http://localhost:3000/
	7) Don't close the terminal.



##  What to do next:
	1) Go to SERVER IS UP at http://localhost:8080/
	2) Then go to http://localhost:8888/face
	3) Enter anything there.
	4) Try this 
				http://www.gstatic.com/tv/thumb/persons/835149/835149_v9_bb.jpg (Don't judge me.)
	5) If everything went fine, you should get this
				{"status": "success","data": {"url": "http://www.gstatic.com/tv/thumb/persons/835149/835149_v9_bb.jpg","faces": "1" },"message": null}
