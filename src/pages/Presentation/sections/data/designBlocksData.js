/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Tailored Adventure Packages for Every Traveler",
    description:
      "Choose from our specially curated adventure packages, designed to offer the best of nature, comfort, and thrilling experiences. Perfect for families, couples, or solo explorers looking for a hassle-free getaway.",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "Weekend Getaway Package",
        count: 10,
        route: "/packages/weekend-getaway",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Family Adventure Package",
        count: 14,
        route: "/packages/family-adventure",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Luxury Glamping Package",
        count: 8,
        route: "/packages/luxury-glamping",
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "Solo Explorer Package",
        count: 1,
        route: "/packages/solo-explorer",
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Couple’s Retreat Package",
        count: 11,
        route: "/packages/couples-retreat",
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Nature & Adventure Package",
        count: 11,
        route: "/packages/nature-adventure",
      },
    ],
  },
  {
    title: "Unique Stays to Suit Every Adventurer",
    description:
      "From luxury glamping to rustic cabins, we offer a range of accommodations that provide comfort, privacy, and a close connection with nature. Find your perfect stay and enjoy an unforgettable experience.",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Luxury Glamping Tents",
        count: 4,
        route: "/stays/glamping-tents",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Treehouse Stays",
        count: 2,
        route: "/stays/treehouses",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Eco-Friendly Cabins",
        count: 3,
        route: "/stays/eco-cabins",
      },
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Riverside Camping",
        count: 6,
        route: "/stays/riverside-camping",
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Lakeside Cottages",
        count: 8,
        route: "/stays/lakeside-cottages",
      },
    ],
  },
  {
    title: "Exciting Activities for All Ages and Interests",
    description:
      "Explore a wide variety of outdoor activities that range from peaceful nature walks to exhilarating water sports. Whatever your adventure style, we have something for everyone to enjoy.",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Kayaking & Canoeing",
        count: 6,
        route: "/activities/kayaking-canoeing",
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Wildlife Safari",
        count: 8,
        route: "/activities/wildlife-safari",
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Nature Walks & Bird Watching",
        count: 3,
        route: "/activities/nature-walks",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        name: "Campfire Evenings & Bonfire",
        count: 6,
        route: "/activities/campfire-bonfire",
      },
    ],
  },
  {
    title: "Explore the Wilderness with Guided Treks",
    description:
      "Embark on scenic treks through lush forests, rolling hills, and picturesque landscapes. Our expert guides will lead you on unforgettable journeys, whether you're a seasoned trekker or a beginner.",
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: "Western Ghats Trek",
        count: 4,
        route: "/trekkings/western-ghats-trek",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        name: "Edakkal Caves Trek",
        count: 3,
        route: "/trekkings/edakkal-caves",
      },
      {
        image: `${imagesPrefix}/popovers.jpg`,
        name: "Chembra Peak Trek",
        count: 2,
        route: "/trekkings/chembra-peak",
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: "Sultan Bathery Trek",
        count: 5,
        route: "/trekkings/sultan-bathery-trek",
      },
    ],
  },
  {
    title: "Elements",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "Adventure Booking Buttons",
        count: 6,
        route: "/elements/booking-buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "Guided Trek Avatars",
        count: 2,
        route: "/elements/guided-trek-avatars",
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Accommodation Dropdowns",
        count: 2,
        route: "/elements/accommodation-dropdowns",
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        name: "Package Selection Toggles",
        count: 2,
        route: "/elements/package-selection-toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        name: "Social Sharing Buttons",
        count: 2,
        pro: true,
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        name: "Breadcrumbs for Activity Pages",
        count: 1,
        route: "/elements/activity-breadcrumbs",
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        name: "Activity Badges",
        count: 3,
        route: "/elements/activity-badges",
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        name: "Booking Progress Bars",
        count: 4,
        route: "/elements/booking-progress-bars",
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        name: "Price Tables for Packages",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        name: "Typography for Adventures",
        count: 2,
        route: "/elements/adventure-typography",
      },
    ],
  },
];
