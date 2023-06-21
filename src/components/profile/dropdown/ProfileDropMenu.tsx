import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import { SelectChangeEvent } from '@mui/material';

const ProfileDropMenu: React.FC = () => {
  const [target, seTarget] = React.useState('1');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    seTarget(event.target.value as string);
  };

  return (
    <div className="profile-dropdown-menu">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select className="dropdown-select" value={target} onChange={handleChange} displayEmpty>
          <MenuItem value={1}>
            <Radio
              className="dropdown-radio-buttons"
              checked={target == '1'}
              value={1}
              name="radio-buttons"
            />
            <span>Most Recent</span>
          </MenuItem>
          <Divider />
          <MenuItem value={2}>
            <Radio
              checked={target == '2'}
              className="dropdown-radio-buttons"
              value={2}
              name="radio-buttons"
            />
            <span>All Time View</span>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProfileDropMenu;
