import React from "react";
import { Link, useParams } from "react-router-dom";
import Cars from "./api/cars.json";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";

const SelectProduct = () => {
  const { productId } = useParams();
  const car = Cars.find((product) => product.id === productId);
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: "#f5f5f0", height: "100vh" }}>
            <div>Selected Product</div>
            <div style={{ padding: "10px", fontWeight: "bold" }}>
              Model Name: {car.modelName}
            </div>
            <div>
              <img src={`${car.imageUrl}`} />
            </div>
            <div>
              <Link style={{ textDecoration: "none" }} to="/products">
                <Button size="medium" variant="text">
                  Back to Products Page{" "}
                </Button>
              </Link>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default SelectProduct;
