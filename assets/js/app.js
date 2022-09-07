document.addEventListener("DOMContentLoaded", function () {
  let checkBox = document.getElementById("consent");
  let nextBtn = document.getElementById("submit-button");
  let inst1 = document.getElementById("instructions-one");
  let inst2 = document.getElementById("instructions-two");
  let instructionsBtn = document.getElementById("instructions-button");
  let subjectPool = false;
  let surveyURL = "https://csunsbs.qualtrics.com/jfe/form/SV_3x6RlSMHJp3rtQy?";
  let test = "s1_3_mm";
  let randFace1;
  let randFace2;
  let temp;
  let temp2;
  let temp3;
  let temp4;
  let count = 0;
  let ratingsArr = [];

    if (checkBox) {
      checkBox.onchange = function () {
        if (this.checked) {
          nextBtn.disabled = false;
        } else {
          nextBtn.disabled = true;
        }
      };
    }

  if (nextBtn) {
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault;
      localStorage.setItem("consent", "true");
      window.location.href = "instructions.html";
    });
  }

  if (instructionsBtn) {
    instructionsBtn.addEventListener("click", function (e) {
      e.preventDefault;

      inst1.style.display = "none";

      if (inst2.style.display === "block") {
        window.location.href = "study.html";
      }

      inst2.style.display = "block";
    });
  }

  let faces = [
    "./assets/images/CFD-WM-257-161-N.jpg",
    "./assets/images/CFD-AM-201-076-N.jpg",
    "./assets/images/CFD-AM-203-086-N.jpg",
    "./assets/images/CFD-AM-205-153-N.jpg",
    "./assets/images/CFD-AM-209-048-N.jpg",
    "./assets/images/CFD-AM-210-035-N.jpg",
    "./assets/images/CFD-AM-213-056-N.jpg",
    "./assets/images/CFD-AM-221-184-N.jpg",
    "./assets/images/CFD-AM-223-138-N.jpg",
    "./assets/images/CFD-AM-224-126-N.jpg",
    "./assets/images/CFD-AM-229-224-N.jpg",
    "./assets/images/CFD-AM-231-136-N.jpg",
    "./assets/images/CFD-AM-234-355-N.jpg",
    "./assets/images/CFD-AM-236-090-N.jpg",
    "./assets/images/CFD-AM-238-269-N.jpg",
    "./assets/images/CFD-AM-246-184-N.jpg",
    "./assets/images/CFD-AM-249-163-N.jpg",
    "./assets/images/CFD-LM-207-004-N.jpg",
    "./assets/images/CFD-LM-213-061-N.jpg",
    "./assets/images/CFD-LM-216-082-N.jpg",
    "./assets/images/CFD-LM-217-162-N.jpg",
    "./assets/images/CFD-LM-218-183-N.jpg",
    "./assets/images/CFD-LM-223-175-N.jpg",
    "./assets/images/CFD-LM-225-130-N.jpg",
    "./assets/images/CFD-LM-232-204-N.jpg",
    "./assets/images/CFD-LM-235-231-N.jpg",
    "./assets/images/CFD-LM-238-129-N.jpg",
    "./assets/images/CFD-LM-239-075-N.jpg",
    "./assets/images/CFD-LM-242-002-N.jpg",
    "./assets/images/CFD-LM-243-075-N.jpg",
    "./assets/images/CFD-LM-246-087-N.jpg",
    "./assets/images/CFD-LM-249-001-N.jpg",
    "./assets/images/CFD-LM-252-076-N.jpg",
    "./assets/images/CFD-MM-302-002-N.jpg",
    "./assets/images/CFD-MM-306-010-N.jpg",
    "./assets/images/CFD-MM-307-002-N.jpg",
    "./assets/images/CFD-MM-309-027-N.jpg",
    "./assets/images/CFD-MM-310-001-N.jpg",
    "./assets/images/CFD-MM-311-001-N.jpg",
    "./assets/images/CFD-MM-312-002-N.jpg",
    "./assets/images/CFD-MM-313-002-N.jpg",
    "./assets/images/CFD-MM-314-062-N.jpg",
    "./assets/images/CFD-MM-315-013-N.jpg",
    "./assets/images/CFD-MM-317-061-N.jpg",
    "./assets/images/CFD-MM-318-003-N.jpg",
    "./assets/images/CFD-MM-319-052-N.jpg",
    "./assets/images/CFD-MM-320-124-N.jpg",
    "./assets/images/CFD-MM-323-053-N.jpg",
    "./assets/images/CFD-MM-325-002-N.jpg",
    "./assets/images/CFD-WM-004-010-N.jpg",
    "./assets/images/CFD-WM-020-001-N.jpg",
    "./assets/images/CFD-WM-024-015-N.jpg",
    "./assets/images/CFD-WM-035-032-N.jpg",
    "./assets/images/CFD-WM-036-031-N.jpg",
    "./assets/images/CFD-WM-039-018-N.jpg",
    "./assets/images/CFD-WM-200-034-N.jpg",
    "./assets/images/CFD-WM-202-107-N.jpg",
    "./assets/images/CFD-WM-203-023-N.jpg",
    "./assets/images/CFD-WM-205-007-N.jpg",
    "./assets/images/CFD-WM-230-131-N.jpg",
    "./assets/images/CFD-WM-234-118-N.jpg",
    "./assets/images/CFD-WM-236-072-N.jpg",
    "./assets/images/CFD-WM-242-011-N.jpg",
    "./assets/images/CFD-WM-247-084-N.jpg"
  ];

  facePairs = [];

  function pairs(arr){
    let l = arr.length;

    for(let i = 0; i < l; i++){
      for(let j = i + 1; j < l; j++){
        facePairs.push([arr[i], arr[j]]);
        facePairs.push([arr[j], arr[i]]);
      }
    }
    console.log("Original facePairs length: " + facePairs.length)
  }

  pairs(faces);

  //firebase config
  var firebaseConfig = {
    apiKey: "AIzaSyARjmqlMf7UhFA8buKB5OIQ2VreaqMz4l0",
    authDomain: "facestudy-7aa90.firebaseapp.com",
    databaseURL: "https://facestudy-7aa90.firebaseio.com",
    projectId: "facestudy-7aa90",
    storageBucket: "facestudy-7aa90.appspot.com",
    messagingSenderId: "517061399659",
    appId: "1:517061399659:web:021d269da8ffd264b58d2e",
    measurementId: "G-TTFMER2NY5",
  };
  //Initialize firebase
  const primaryDB = firebase.initializeApp(firebaseConfig);

  
  firebase.analytics();

  let today = new Date();
  let todayString = today.toDateString();

  let refPrimary = primaryDB.database().ref(test + "/" + todayString);
  let newUserRef = refPrimary.push();

  let id = newUserRef.key;

  class FaceRating {
    constructor(face1, face2, rating, id, test) {
      this.firstFace = face1;
      this.secondFace = face2;
      this.rating = rating;
      this.id = id;
      this.test = test;
    }
  }

  let buttons = document.getElementsByClassName("rating-btn");

  function loadFaces() {
    faceOneDiv = document.getElementById("face-one");
    faceTwoDiv = document.getElementById("face-two");

    do {
      randFace1 = Math.floor(Math.random() * 32);
    } while (
      randFace1 === temp ||
      randFace1 === temp2 ||
      randFace1 === temp3 ||
      randFace1 === temp4
    );

    do {
      randFace2 = Math.floor(Math.random() * 32);
    } while (
      randFace1 === randFace2 ||
      randFace2 === temp ||
      randFace2 === temp2 ||
      randFace2 === temp3 ||
      randFace2 === temp4
    );

    temp3 = temp;
    temp4 = temp2;
    temp = randFace1;
    temp2 = randFace2;

    if (!faceOneDiv.firstElementChild || !faceTwoDiv.firstElementChild) {
      faceOneEl = document.createElement("img");
      faceTwoEl = document.createElement("img");

      faceOneEl.setAttribute("id", "face-1");
      faceTwoEl.setAttribute("id", "face-2");
      faceOneEl.setAttribute("src", faces[randFace1]);
      faceTwoEl.setAttribute("src", faces[randFace2]);
      faceOneEl.setAttribute("class", "img-fluid mx-auto d-block");
      faceTwoEl.setAttribute("class", "img-fluid mx-auto d-block");

      faceOneDiv.appendChild(faceOneEl);
      faceTwoDiv.appendChild(faceTwoEl);
    } else {
      faceOne = document.getElementById("face-1");
      faceTwo = document.getElementById("face-2");

      faceOneEl.setAttribute("src", faces[randFace1]);
      faceTwoEl.setAttribute("src", faces[randFace2]);
    }
  }

  function disableButtons() {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.setAttribute("disabled", true);
    }
  }

  const buttonSetup = function () {
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i];
      button.onclick = function () {
        let rating = new FaceRating(
          faces[randFace1].substring(16),
          faces[randFace2].substring(16),
          parseInt(button.innerHTML),
          id,
          test,
          subjectPool
        );
        ratingsArr.push(rating);

        if (count < 119) {
          //119
          count++;
          loadFaces();
        } else {
          disableButtons();
          writeToDBs();
        }
      };
    };
  };
  
  function writeToDBs() {
    newUserRef
      .set(ratingsArr)
      .then(function () {
        window.location.href = surveyURL + "ID=" + id + "&study=" + test;
      })
      .catch(function (error) {
        console.log(error);
        alert("There was an error with your submission. Trying again.");
        writeToDBs();
      });
  }

  buttonSetup();
  loadFaces();
});
