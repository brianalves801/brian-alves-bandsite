const commentContainer = document.getElementById("comment__container");

let comment1 = {
  Name: "Michael Lyons",
  Comment:
    "They BLEW the ROOF off at their last show, once everyone strted figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
};
let comment2 = {
  Name: "Gary Wong",
  Comment:
    "Every time I see hiim shred I feel so motivated to get off my couch and hop onn my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
};
let comment3 = {
  Name: "Theodore Duncan",
  Comment:
    "How can someone be so good!!! You can tell her lives for this and loves to do it every day. Everytime I see him i feel instantly happy! He's definitely my favorite ever!"
};

let comments = [comment1, comment2, comment3];
document.getElementById("--button").addEventListener("click", function() {
  console.log("form Submitted!");
  let data = {
    name: document.getElementById("--name").value,
    comment: document.getElementById("--comment").value
  };
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=0e37ceaf-6f04-4d01-8b38-6b740706c5d7",
      data
    )
    .then(response => {});
  createComment(
    document.getElementById("--name").value,
    document.getElementById("--comment").value,
    new Date()
  );
});

function createComment(name, comment, timestamp) {
  let commentContainerTwo = document.createElement("div");
  let cc = document.getElementById("comment__container");
  let commentPic = document.createElement("div");
  commentPic.classList.add("comment__pic");
  commentContainerTwo.appendChild(commentPic);
  let commentNameContainer = document.createElement("div");
  commentNameContainer.classList.add("comment__namecontainer");
  let commentName = document.createElement("h3");
  commentName.innerHTML = name;
  let breakLine = document.createElement("hr");
  breakLine.classList.add("comment__breakline");

  //create timestamp
  let commentTimestampdiv = document.createElement("div");
  commentTimestampdiv.classList.add("comment__timestampwrapper");
  let commentTimestamptext = document.createElement("p");
  commentTimestamptext.classList.add("comment__timestamptext");
  let timestampDate = new Date(timestamp);
  var date = timestampDate.getDate();
  var month = timestampDate.getMonth(); //Be careful! January is 0 not 1
  var year = timestampDate.getFullYear();

  var dateString = month + 1 + "/" + date + "/" + year;
  commentTimestamptext.innerHTML = dateString;
  commentTimestampdiv.appendChild(commentTimestamptext);
  //commentContainerTwo.appendChild(commentTimestampdiv);

  //create name
  let commentsNameComment = document.createElement("p");
  commentsNameComment.innerHTML = name;
  commentNameContainer.appendChild(commentName);
  commentNameContainer.appendChild(commentTimestampdiv);
  commentContainerTwo.appendChild(commentNameContainer);

  let commentsComment = document.createElement("h3");
  commentContainerTwo.appendChild(commentsComment);
  let commentThree = document.createElement("p");
  commentThree.innerHTML = comment;
  commentContainerTwo.appendChild(commentThree);

  let clearr = document.createElement("div");
  clearr.classList.add("comment__clear");
  commentContainerTwo.appendChild(clearr);
  commentContainerTwo.appendChild(breakLine);

  cc.insertBefore(commentContainerTwo, cc.childNodes[0]);
}

axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=0e37ceaf-6f04-4d01-8b38-6b740706c5d7"
  )
  .then(response => {
    console.log(response.data);
    let loadComments = response.data;
    for (i = 0; i < loadComments.length; i++)
      createComment(
        loadComments[i].name,
        loadComments[i].comment,
        loadComments[i].timestamp
      );
  });
