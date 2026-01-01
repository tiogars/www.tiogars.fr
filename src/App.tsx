import { Container, Typography, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WebsiteCard from './WebsiteCard';
import { websites } from './data';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
          >
            My Projects
          </Typography>
          <Typography
            variant="h5"
            align="center"
            paragraph
            sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 6 }}
          >
            Explore my portfolio of web applications and projects
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            {websites.map((website) => (
              <WebsiteCard key={website.name} website={website} />
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
