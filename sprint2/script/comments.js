const commentContainer = document.getElementById("comment__container")

let comment1 = { Name: "Michael Lyons", Comment: "They BLEW the ROOF off at their last show, once everyone strted figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed." }
let comment2 = { Name: "Gary Wong", Comment: "Every time I see hiim shred I feel so motivated to get off my couch and hop onn my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!" }
let comment3 = { Name: "Theodore Duncan", Comment: "How can someone be so good!!! You can tell her lives for this and loves to do it every day. Everytime I see him i feel instantly happy! He's definitely my favorite ever!" }

let comments = [comment1, comment2, comment3]

getElemenedById("button").addEventListener("click", addfunction);

function createComment(name, comment) {
    for (i = 0; i < comments.length; i++) { }
    createComment(comment[i].name, comment[i].comment)
}

let showsVenue = document.createElement('h2')
showsVenue.innerHTML = 'Venue'
showsDiv.appendChild(showsVenue);
let showsVenueContext = document.createElement('p')
showsVenueContext.innerHTML = shows[i].Venue;
showsDiv.appendChild(showsVenueContext);
showsVenue.classList.add('shows__header')

let showsLocation = document.createElement('h2')
showsLocation.innerHTML = 'Location'
showsDiv.appendChild(showsLocation)
let showsLocationContext = document.createElement('p')
showsLocationContext.innerHTML = shows[i].Location;
showsDiv.appendChild(showsLocationContext);
showsLocation.classList.add('shows__header')