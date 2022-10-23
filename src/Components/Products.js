import React from "react";
import Cars from "./api/cars.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div
      className="stack"
      style={{
        display: "flex",
        maxHeight: "500px",
        borderRadius: "4px",
        overflowX: "auto",
        marginTop: "100px",
      }}
    >
      {Cars.map((value) => {
        return (
          <div style={{ display: "flex", marginTop: "auto", padding: "10px" }}>
            <Card sx={{ maxWidth: 360, alignItems: "left", width: "400px" }}>
              <div style={{ display: "flex" }}>
                <Typography
                  color="text.secondary"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  &nbsp;{value.bodyType}
                </Typography>
              </div>

              <div style={{ display: "flex" }}>
                <Typography gutterBottom variant="h5" component="div">
                  &nbsp;{value.modelName}&nbsp;
                </Typography>
                <Typography
                  color="text.secondary"
                  gutterBottom
                  variant="p"
                  component="div"
                >
                  &nbsp;{value.modelType}
                </Typography>
              </div>

              <CardMedia
                component="img"
                alt="Volvo Cars"
                height="250"
                image={`${value.imageUrl}`}
              />
              <CardContent></CardContent>
              <CardActions>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${value.id}`}
                >
                  <Button size="large">
                    LEARN <ArrowForwardIosIcon fontSize="small" />{" "}
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${value.id}`}
                >
                  <Button size="large">
                    SHOP <ArrowForwardIosIcon fontSize="small" />{" "}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
