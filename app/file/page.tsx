
import { Paper } from "@mui/material";

const MyDashboard = () => {

  const handleClickOpenPage = () => {
    window.open('https://shine.cyberlogitec.com.vn', '_blank');
  };

  return (
    <Paper elevation={0}>
      This is file management page
    </Paper>
  );
};

export default MyDashboard;
