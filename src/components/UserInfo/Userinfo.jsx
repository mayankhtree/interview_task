import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { Item } from "./Userinfo.styled";



export default function Userinfo() {
  return (
    <Box style={{ padding: "20px" }} >
      <Grid container spacing={2} style={{justifyContent: "space-evenly"}}>
        <Grid item xs={12} md={4}>
          <Item >
            <Box m={2} component="form" xs={12} md={12} autoComplete="off">
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="top"
                justifyContent="center"
              >
                <Grid item xs={3} md={3}>
                  <Button
                    fullWidth
                    size="large"
                    sx={{ height: "56px" }}
                    variant="outlined"
                    startIcon={
                      <SearchOutlinedIcon style={{ fontSize: "2rem" }} />
                    }
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "gray",
                      textAlign: "center",
                    }}
                  ></Button>
                </Grid>
                <Grid item xs={9} md={9}>
                  <TextField
                    fullWidth
                    id="password"
                    label="Span Mail Project"
                    type="text"
                    defaultValue=""
                    style={{ backgroundColor: "white" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ display: "flex" }} style={{ backgroundColor: "#fff4ea" }}>
            <Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6" pb={1}>
                  Spam Mail Project
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton aria-label="previous">
                  <ContentPasteOutlinedIcon style={{ fontSize: "1rem" }} />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <SaveAsOutlinedIcon style={{ fontSize: "1rem" }} />
                </IconButton>
                <IconButton aria-label="next">
                  <DeleteIcon style={{ fontSize: "1rem" }} />
                </IconButton>
              </Box>
            </Box>
            <Box p={2}>
              <Typography
                component="div"
                variant="span"
                pb={0.5}
                pt={0.5}
                sx={{ fontSize: ".8rem", fontWeight: 500 }}
              >
                Author Name: Nagarajan More
              </Typography>
              <Typography
                component="div"
                variant="span"
                pb={0.5}
                pt={0.5}
                sx={{ fontSize: ".8rem", fontWeight: 500 }}
              >
                Created On: 12/08/2022
              </Typography>
              <Typography
                component="div"
                variant="span"
                pb={0.5}
                pt={0.5}
                sx={{ fontSize: ".8rem", fontWeight: 500 }}
              >
                Last Updated On: 12/08/2022
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
