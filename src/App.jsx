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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import data from "./data";

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
    <div style={{ padding: 20 }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
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
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DropdownCard title={item.title} description={item.description} />
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
  );
};

const DropdownCard = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default App;
