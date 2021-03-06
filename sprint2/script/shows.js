const showContainer = document.getElementById("show__container");

let show1 = {
  Date: "Mon, Dec 17, 2018",
  Venue: "Ronald Lane",
  Location: "San Francisco, CA"
};
let show2 = {
  Date: "Tue, Jul 18, 2019",
  Venue: "Pier 3 East",
  Location: "San Francisco, CA"
};
let show3 = {
  Date: "Fri, Jul 22, 201p",
  Venue: "View Loungue",
  Location: "San Francisco, CA"
};
let show4 = {
  Date: "Fri, Sep 05, 2019",
  Venue: "Moscow Center",
  Location: "San Francisco, CA"
};
let show5 = {
  Date: "Sat, Aug 12, 2019",
  Venue: "Hyatt Agency",
  Location: "San Francisco, CA"
};
let show6 = {
  Date: "Wed, Aug 11, 2019",
  Venue: "Pres Club",
  Location: "San Francisco, CA"
};

let shows = [show1, show2, show3, show4, show5, show6];

function createShows(showinfo) {
  let showsDiv = document.createElement("div");
  showsDiv.classList.add("shows__div");

  let showsDate = document.createElement("h2");

  showsDate.innerHTML = "Date";
  showsDiv.appendChild(showsDate);
  let showsDateContext = document.createElement("p");
  showsDateContext.innerHTML = showinfo.date;
  showsDiv.appendChild(showsDateContext);
  showsDate.classList.add("shows__header");
  showsDateContext.classList.add("shows__date");

  let showsVenue = document.createElement("h2");
  showsVenue.innerHTML = "Venue";
  showsDiv.appendChild(showsVenue);
  let showsVenueContext = document.createElement("p");
  showsVenueContext.innerHTML = showinfo.place;
  showsDiv.appendChild(showsVenueContext);
  showsVenue.classList.add("shows__header");

  let showsLocation = document.createElement("h2");
  showsLocation.innerHTML = "Location";
  showsDiv.appendChild(showsLocation);
  let showsLocationContext = document.createElement("p");
  showsLocationContext.innerHTML = showinfo.location;
  showsDiv.appendChild(showsLocationContext);
  showsLocation.classList.add("shows__header");

  let showsButton = document.createElement("button");
  showsButton.innerHTML = "BUY TICKETS";
  showsDiv.appendChild(showsButton);
  showsButton.classList.add("shows__button");
  let showsButtonHr = document.createElement("hr");
  showsDiv.appendChild(showsButtonHr);
  showsButtonHr.classList.add("shows__buttonhr");

  showContainer.appendChild(showsDiv);
}

var showsDateArray = [];
const showsDate = [];
axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=f0aeed98-0800-4b90-95f0-abfd8e5e7234"
  )
  .then(response => {
    console.log(response.data);
    let loadShows = response.data;
    for (i = 0; i < loadShows.length; i++) createShows(loadShows[i]);
  });
