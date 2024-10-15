import { siteConfig } from "@/config/site";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" component="h1" fontWeight={900} sx={{ mb: 2 }}>
        &ldquo;What if&rdquo; is the new programming language
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        If you can type it, you can build it. with Dream by Aliases, Inc.
      </Typography>
      <Button
        href={siteConfig.links.dream}
        target="_blank"
        rel="noreferrer"
        color="secondary"
        variant="contained"
        component={NextLink}
        sx={{ textTransform: "none" }}
      >
        Visit askdream.ai
      </Button>
    </Box>
  );
}
