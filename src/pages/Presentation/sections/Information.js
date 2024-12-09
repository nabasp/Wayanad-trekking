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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Conquer the
                    <br />
                    Trails of Wayanad
                  </>
                }
                description="Embark on an unforgettable trek through Wayanad's breathtaking landscapes."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="From the scenic Chembra Peak to the historic Edakkal Caves, our guided trekking tours take you through lush forests, waterfalls, and panoramic mountain views."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Book Us",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Customized Adventure Packages"
                  description={
                    <>
                      Tailored Adventures for Every Type of Traveler
                      <br />
                      From family-friendly walks to intense treks for thrill-seekers, our adventure
                      packages are customized to suit your preferences. Let us design your dream
                      adventure in Wayanad!
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Sustainable Stays"
                  description={
                    <>
                      Stay in Harmony with Nature
                      <br />
                      Enjoy eco-friendly accommodations that respect nature while offering comfort.
                      Our green initiatives make your stay sustainable and memorable.
                    </>
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Expert Local Guides"
                  description={
                    <>
                      Discover Wayanad with Our Expert Guides
                      <br />
                      Our knowledgeable, local guides will show you the best of Wayanad, ensuring a
                      safe and insightful experience on every trail.
                    </>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Exclusive Trekking Trails"
                  description={
                    <>
                      Explore Hidden Trails & Scenic Views
                      <br />
                      Step off the beaten path and explore Wayanad’s secret trails, waterfalls, and
                      viewpoints with our exclusive trekking routes.
                    </>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
