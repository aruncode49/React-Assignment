import { Box, Typography } from "@mui/material";
import UserDetailsForm from "../components/UserDetailsForm";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" my={3} color={"darkcyan"}>
        User Details
      </Typography>

      <UserDetailsForm />
    </Box>
  );
};

export default Home;
