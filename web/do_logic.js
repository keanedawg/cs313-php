var picID = 0;

function increment() {
  picID++;
  picID = picID % 8;
  choose_picture()
};

function decrement() {
  picID--;
  if(picID == -1) {
    picID = 7;
  }
  choose_picture();
};

function choose_picture() {
  if(picID == 0) {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\me.jpg\">";
    document.getElementById("explanation").innerHTML = "This was me in Hawaii at the volcano. A tour guide \
                                                        told us that this was an extremely photogenic spot.";
  }
  else if(picID == 1) {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\Boston_University.jpg\">";
    document.getElementById("explanation").innerHTML = "This was me the night I left for Boston University. My hair \
                                                        got super long because I didn't have to keep an honor code.";
  }
  else if(picID == 2) {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\Cameron.jpg\">";
    document.getElementById("explanation").innerHTML = "Just me and a friend.";
  }
  else if(picID == 3) {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\hi.jpg\">";
    document.getElementById("explanation").innerHTML = "Me writing this website. BTW Hi Brother Lyon!";
  }
  else if(picID == 4)  {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\San_Francisco.jpg\">";
    document.getElementById("explanation").innerHTML = "Me and my mom in San Francisco. I was a junior in High School.";
  }
  else if(picID == 5)  {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\me2.jpg\">";
    document.getElementById("explanation").innerHTML = "Just 2 more pictures of me...";
  }
  else if(picID == 6)  {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\skiing.jpg\">";
    document.getElementById("explanation").innerHTML = "1 more...";
  }
  else if(picID == 7)  {
    document.getElementById("photo_back").innerHTML = "<img id=\"portrait\" src=\"images\\me3.jpg\">";
    document.getElementById("explanation").innerHTML = "Thanks for reading about me! It should wrap back to the first image now!";
  }
};