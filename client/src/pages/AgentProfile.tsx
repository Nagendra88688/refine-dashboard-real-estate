import { Box } from "@mui/material";
import { useOne } from "@refinedev/core";
import { Profile } from "components";
import Loader from "components/common/Loader";
import { useParams } from "react-router-dom";

const AgentProfile = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  const myProfile: any = data?.data ?? [];

  if (isLoading)
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "50vh",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Loader />
      </Box>
    );
  if (isError) return <div>Error</div>;

  return (
    <Profile
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default AgentProfile;
