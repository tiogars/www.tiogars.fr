import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Language, GitHub } from '@mui/icons-material';
import type { Website } from './types';

interface WebsiteCardProps {
  website: Website;
}

export default function WebsiteCard({ website }: WebsiteCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {website.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {website.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2, paddingTop: 0 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            size="small"
            variant="contained"
            startIcon={<Language />}
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<GitHub />}
            href={website.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
