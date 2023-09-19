import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

interface ContentCardProps {
  image: string;
  title: string;
  content: string;
}

export const ContentCard = ({ image, title, content }: ContentCardProps) => {
  return (
    <Card
      sx={(theme) => ({
        maxWidth: 345,
        borderRadius: theme.shape.borderRadius,
      })}
    >
      <CardMedia sx={{ height: 280 }} image={image} title="Person Image" />
      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};
