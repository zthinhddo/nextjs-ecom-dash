import { CustomButtonProps } from '@/types';
import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ isDisabled, title, handleClick } : CustomButtonProps) => {
  return (
    <Button
      disabled={isDisabled}
      variant="outlined"
      size="small"
      color="primary"
      sx={{ width: 200, padding: 1 }}
      className="rounded-[16px]"
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;