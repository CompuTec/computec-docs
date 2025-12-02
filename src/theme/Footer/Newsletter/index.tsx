import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FooterNewsletter() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h5" component="h2">
          Sign up for our monthly updates
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" spacing={2}>
            <TextField
              label="Your email address"
              placeholder="contact@example.com"
              fullWidth
            />
            <Button variant="outlined" sx={{ px: 3 }}>
              Subscribe
            </Button>
          </Stack>

          <Typography variant="caption">
            Note: By signing up, you agree to be emailed related product-level
            information.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
