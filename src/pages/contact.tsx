import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";

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
          <Grid size={12}>
            <FormControl fullWidth>
              <InputLabel id="topic-label">
                <Translate
                  description="Contact -> What can we help you with?"
                  id="contact.what_can_we_help_you_with"
                >
                  What can we help you with?
                </Translate>
              </InputLabel>
              <Select
                labelId="topic-label"
                label={translate({
                  id: "contact.what_can_we_help_you_with",
                  message: "What can we help you with?",
                  description: "Contact -> What can we help you with?",
                })}
                required
              >
                <MenuItem>CompuTec ProcessForce</MenuItem>
                <MenuItem>CompuTec PDC</MenuItem>
                <MenuItem>CompuTec WMS</MenuItem>
                <MenuItem>CompuTec Labels</MenuItem>
                <MenuItem>CompuTec AppEngine</MenuItem>
                <MenuItem>CompuTec Cloud</MenuItem>
                <MenuItem>
                  <Translate
                    description="Contact -> Topic -> Other"
                    id="contact.topic.other"
                  >
                    Other
                  </Translate>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={6}>
            <TextField
              label={translate({
                id: "contact.your_name",
                message: "Your Name",
                description: "Contact -> Your Name",
              })}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label={translate({
                id: "contact.company_name",
                message: "Company Name",
                description: "Contact -> Company Name",
              })}
              fullWidth
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label={translate({
                id: "contact.email",
                message: "Email",
                description: "Contact -> Email",
              })}
              fullWidth
              required
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label={translate({
                id: "contact.phone",
                message: "Phone",
                description: "Contact -> Phone",
              })}
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <TextField
              label={translate({
                id: "contact.how_can_we_help",
                message: "How can we help?",
                description: "Contact -> How can we help?",
              })}
              fullWidth
              multiline
              rows={5}
            />
          </Grid>
          <Grid>
            <FormControl fullWidth>
              <FormLabel id="contact-method-label" sx={{ mb: 1 }}>
                <Translate
                  description="Contact -> Preferred contact method"
                  id="contact.preferred_contact_method"
                >
                  Preferred contact method
                </Translate>
              </FormLabel>
              <ToggleButtonGroup aria-labelledby="contact-method-label">
                <ToggleButton value="">
                  <Translate description="Contact -> Email" id="contact.email">
                    Email
                  </Translate>
                </ToggleButton>
                <ToggleButton value="">
                  <Translate description="Contact -> Phone" id="contact.phone">
                    Phone
                  </Translate>
                </ToggleButton>
              </ToggleButtonGroup>
            </FormControl>
          </Grid>
          <Grid
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            alignSelf="center"
          >
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              <Translate description="Contact -> Send" id="contact.send">
                Send
              </Translate>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
