import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const footerData = [
  {
    title: "Company",
    links: ["About", "Blog", "Press", "Jobs", "AI"],
  },
  {
    title: "Solutions",
    links: ["Marketing", "Analytics", "Commerce", "Insights", "Support"],
  },
  {
    title: "Documentation",
    links: [ "Guides", "Help", "API Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "CLAIM"],
  },
];

const Footer = () => {
  return (
    <div>
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        mt: 10,
        py: 6,
        px: 4,
      }}
    >
      <Grid container spacing={4}>
        {footerData.map((section, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
              }}
            >
              {section.title}
            </Typography>

            {section.links.map((link, i) => (
              <Typography
                key={i}
                sx={{
                  mb: 1,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    color: "gray",
                  },
                }}
              >
                {link}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
      
      <div className="footer-bottom" style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: "10px 0" }}>
        2026 © All rights reserved | This template is made with @kushagra-1920 (github) 
      </div>
    </div>
  );
};

export default Footer;