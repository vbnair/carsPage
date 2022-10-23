import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import Cars from "./api/cars.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: "#f5f5f0" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 style={{ color: "#85adad" }}>
                Xplore our latest and greatest recharge cars with a re-invented
                design !
              </h3>
            </div>
            <Carousel>
              {Cars.map((val) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      height: "70vh",
                    }}
                  >
                    <img src={`${val.imageUrl}`} />
                  </div>
                );
              })}
            </Carousel>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link style={{ textDecoration: "none" }} to={`/products/`}>
                <Button size="large" variant="outlined">
                  EXPLORE HYBRID OUR RANGE!{" "}
                </Button>
              </Link>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Home;
