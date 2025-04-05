import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface LeadCaptureEmailProps {
  name: string;
  company: string;
  phone: string;
  email: string;
}

export const LeadCaptureEmail = ({
  name,
  company,
  phone,
  email,
}: LeadCaptureEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>New email lead captured from the Affinity AI website.</Preview>
      <Container style={container}>
        <Text style={heading}>New Email Lead Capture &mdash; Affinity</Text>
        <Hr style={hr} />
        <Text style={paragraph}>
          <b>Name: </b>
          {name}
        </Text>
        <Text style={paragraph}>
          <b>Company: </b>
          {company}
        </Text>
        <Text style={paragraph}>
          <b>Phone: </b>
          {phone}
        </Text>
        <Text style={paragraph}>
          <b>Email: </b>
          {email}
        </Text>
      </Container>
    </Body>
  </Html>
);

LeadCaptureEmail.PreviewProps = {
  name: "John Doe",
  company: "Company Name",
  phone: "1234567890",
  email: "email@example.com",
} as LeadCaptureEmailProps;

export default LeadCaptureEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
