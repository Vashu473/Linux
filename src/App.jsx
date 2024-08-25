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
import networkingConceptsAndCommands from "./data";

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

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredData = searchQuery
    ? networkingConceptsAndCommands.filter((item) =>
        item.topic.toLowerCase().includes(searchQuery)
      )
    : networkingConceptsAndCommands;

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
        <Grid container spacing={3} style={{ marginTop: 20 }}>
          {filteredData.map((item, index) => (
            <Grid item xs={12} key={index}>
              <DropdownCard
                topic={item.topic}
                description={item.description}
                examples={item.examples}
                commands={item.commands}
              />
            </Grid>
          ))}
        </Grid>
        {filteredData.length === 0 && (
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

const DropdownCard = ({ topic, description, examples, commands }) => {
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
          {topic}
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
          <Typography
            variant="body2"
            color="white"
            style={{ fontSize: "24px" }}
          >
            <strong>Description (English):</strong>
            <p>{description.english}</p>
            <strong>Description (Hindi):</strong>
            <p>{description.hindi}</p>
            {examples && (
              <>
                <strong>Examples:</strong>
                <ul>
                  {examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </>
            )}
            {commands && (
              <>
                <strong>Commands:</strong>
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontSize: "14px",
                  }}
                >
                  <code>{commands.join("\n")}</code>
                </pre>
              </>
            )}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default App;
