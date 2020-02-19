import reactLake from "/assets/images/react-lake.jpg";
import chromeRiver from "/assets/images/chrome-river.jpg";
import breadcrumbTrail from "/assets/images/breadcrumb-trail.jpg";
import reduxWoods from "/assets/images/redux-woods.jpg";

export const CAMPSITES = [
    {
        id: 0,
        name: "React Lake Campground",
        image: reactLake,
        elevation: 1233,
        featured: false,
        description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
    },
    {
        id: 1,
        name:"Chrome River Campground ",
        image: chromeRiver,
        elevation: 877,
        featured: false,
        description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
    },
    {
        id: 2,
        name:"Breadcrumb Trail Campground",
        image: breadcrumbTrail,
        elevation: 2901,
        featured: false,
        description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
    },
    {
        id: 3,
        name:"Redux Woods Campground",
        image: reduxWoods,
        elevation: 42,
        featured: true,
        description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];