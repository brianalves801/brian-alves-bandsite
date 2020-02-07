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
      "https://project-1-api.herokuapp.com/comments?api_key=f0aeed98-0800-4b90-95f0-abfd8e5e7234",
      data
    )
    .then(response => {});
  createComment(
    document.getElementById("--name").value,
    document.getElementById("--comment").value
  );
});

function createComment(name, comment) {
  let commentContainerTwo = document.createElement("div");
  let cc = document.getElementById("comment__container");
  let commentPic = document.createElement("div");
  commentPic.classList.add("comment__pic");
  commentContainerTwo.appendChild(commentPic);
  let commentName = document.createElement("h3");
  commentContainerTwo.appendChild(commentName);
  let commentsNameComment = document.createElement("p");
  commentsNameComment.innerHTML = name;
  commentContainerTwo.appendChild(commentsNameComment);

  let commentsComment = document.createElement("h3");
  commentContainerTwo.appendChild(commentsComment);
  let commentThree = document.createElement("p");
  commentThree.innerHTML = comment;
  commentContainerTwo.appendChild(commentThree);

  cc.insertBefore(commentContainerTwo, cc.childNodes[0]);
}

axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=f0aeed98-0800-4b90-95f0-abfd8e5e7234"
  )
  .then(response => {
    console.log(response.data);
    let loadComments = response.data;
    for (i = 0; i < loadComments.length; i++)
      createComment(loadComments[i].name, loadComments[i].comment);
  });
