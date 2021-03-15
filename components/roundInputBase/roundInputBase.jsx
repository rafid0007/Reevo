import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import AccountCircle from '@material-ui/icons/AccountCircle';
import theme from "../../styles/theme";
// import { useRoundInputBaseStyles } from '@mui-treasury/styles/inputBase/round';
import useRoundInputBaseStyles from './roundInputBase.styles';

const RoundInputBaseStyle = () => {

  const styles = useRoundInputBaseStyles(theme);
  return (
    <div>
      <InputBase
        classes={styles}
        color={'secondary'}
        placeholder={'Secondary color'}
        startAdornment={<AccountCircle />}
      />
    </div>
  );
};

export default RoundInputBaseStyle;