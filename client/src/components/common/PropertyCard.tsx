import { Place } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigation } from "@refinedev/core";
import { PropertyCardProps } from "interfaces/property";
import { Link } from "react-router-dom";

const PropertyCard = ({
  id,
  title,
  location,
  price,
  photo,
}: PropertyCardProps) => {
  const navigate = useNavigation();

  return (
    <Card
      component={Link}
      // onClick={() => navigate.push("/nagi")}
      to={`/properties/show/${id}`}
      sx={{
        width: "330px",
        padding: "10px",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
        cursor: "pointer",
        background: "#f1f1f1",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          padding: "5px",
        }}
      >
        <Stack direction="column" gap={1} alignItems="flex-start">
          <Typography fontSize={16} fontWeight={500} color="#11142d">
            {title}
          </Typography>
          <Stack direction="row" gap={1}>
            <Place sx={{ fontSize: 18, color: "#11142d", marginTop: 0.5 }} />
            <Typography fontSize={14} color="#808191">
              {location}
            </Typography>
          </Stack>
        </Stack>

        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="#c5e2ff"
          height="fit-content"
        >
          <Typography fontSize={12} fontWeight={600} color="#0068ce">
            {Number(price || 100000)?.toLocaleString("en-IN", {
              style: "decimal",
            })}{" "}
            INR
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
