import { Grid, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

const MyDashboard = () => {

  const handleClickOpenPage = () => {
    window.open('https://shine.cyberlogitec.com.vn', '_blank');
  };

  return (
    <div className="flex flex-1">
      {/* Parent grid */}
      <Grid container spacing={2}>
        {/* Child grid */}
        <Grid item xs={4}>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-left mt-2">
              <Typography variant="h2">SHINE PLATFORM</Typography>
              <Typography variant="h5">A platform that support auto document extraction</Typography>
              <CustomButton
                isDisabled={false}
                title="Go to SHINE PF"
                handleClick={handleClickOpenPage}
              />
            </div>
          </div>
        </Grid>
        {/* Child grid */}
        <Grid item xs={8}>
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col items-left mt-2">
              <Typography variant="h4">Image area</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyDashboard;
