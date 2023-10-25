import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from "components";
import { Box, Stack, Typography } from "@mui/material";
import { useList } from "@refinedev/core";
import Loader from "components/common/Loader";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={20}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />

        <PieChart
          title="Properties for Rent"
          value={50}
          series={[60, 40]}
          colors={["#275be8", "#c4e8ef"]}
        />

        <PieChart
          title="Total Customers"
          value={84}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />

        <PieChart
          title="Properties for Cities"
          value={55}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={1}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        {isLoading ? (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Loader />
          </Box>
        ) : isError ? (
          <Typography>Something went wrong</Typography>
        ) : (
          <Box>
            <Typography fontSize="18px" fontWeight={600} color="#11142d">
              Latest Properties
            </Typography>

            <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {latestProperties?.map((property) => (
                <PropertyCard
                  key={property._id}
                  id={property._id}
                  title={property?.title}
                  location={property?.location}
                  price={property?.price}
                  photo={property?.photo}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
