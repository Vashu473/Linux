import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  Collapse,
  CardActions,
  Button,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import data from "./data";

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#1c1c1c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
});

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ padding: 20 }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearch}
          InputLabelProps={{
            style: { color: "#ffffff" },
          }}
          InputProps={{
            style: { color: "#ffffff", borderColor: "#ffffff" },
          }}
        />
        {searchQuery === "" ? (
          <Typography
            variant="h6"
            color="textSecondary"
            style={{ marginTop: 20, textAlign: "center" }}
          >
            Make a search
          </Typography>
        ) : filteredData.length > 0 ? (
          <Grid container spacing={3} style={{ marginTop: 20 }}>
            {filteredData.map((item, index) => (
              <Grid item xs={12} key={index}>
                <DropdownCard
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            variant="h6"
            color="textSecondary"
            style={{ marginTop: 20, textAlign: "center" }}
          >
            No results found
          </Typography>
        )}
      </div>
    </ThemeProvider>
  );
};

const DropdownCard = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%", boxShadow: 3, backgroundColor: "#1c1c1c" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: "white" }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="white">
            {/* Using pre and code tags for code formatting */}
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "14px",
              }}
            >
              <code>{description}</code>
            </pre>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default App;
