import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Layout title="Contact">
      <Container sx={{ paddingY: 4, textAlign: "center" }}>
        <h1>
          <Translate
            description="Contact -> How can we help?"
            id="contact.how_can_we_help"
          >
            How can we help?
          </Translate>
        </h1>
        <h2>
          <Translate
            description="Contact -> Send us a message!"
            id="contact.send_us_a_message"
          >
            Send us a message!
          </Translate>
        </h2>
        <p>
          <Translate
            description="Contact -> Partner support"
            id="contact.partner_support"
          >
            If you are a CompuTec partner who needs support, please use
          </Translate>{" "}
          <a target="_blank" href="https://support.computec.pl">
            <Translate
              description="Contact -> Support portal"
              id="contact.support_portal"
            >
              our support portal
            </Translate>
          </a>
          .
        </p>
        <p>
          <Translate
            description="Contact -> Email us directly"
            id="contact.email_us_directly"
          >
            You can also email us directly at
          </Translate>{" "}
          <a href="mailto:info@computec.pl">info@computec.pl</a>.
        </p>

        <Grid container spacing={3} component="div">
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="topic-label">
                What can we help you with?
              </InputLabel>
              <Select
                labelId="topic-label"
                label="What can we help you with?"
                required
              >
                <MenuItem>CompuTec ProcessForce</MenuItem>
                <MenuItem>CompuTec PDC</MenuItem>
                <MenuItem>CompuTec WMS</MenuItem>
                <MenuItem>CompuTec Labels</MenuItem>
                <MenuItem>CompuTec AppEngine</MenuItem>
                <MenuItem>CompuTec Cloud</MenuItem>
                <MenuItem>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Your Name" fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Company Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Phone" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="How can we help?" fullWidth multiline rows={5} />
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <FormLabel id="contact-method-label" sx={{ mb: 1 }}>
                Preferred contact method
              </FormLabel>
              <ToggleButtonGroup aria-labelledby="contact-method-label">
                <ToggleButton value="">Email</ToggleButton>
                <ToggleButton value="">Phone</ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            alignSelf="center"
          >
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
