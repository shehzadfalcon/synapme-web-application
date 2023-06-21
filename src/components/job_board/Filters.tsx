import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

const Filters: React.FC = () => {
  const [value, setValue] = React.useState('Remote');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="flex flex-row p-4 overflow-x-auto border lg:-mx-4 lg:overflow--hidden lg:flex-col lg:border-0 border-body/10 sm:p-8 scrollbar lg:px-4 lg:space-y-4 shadow-main lg:shadow-none rounded-3xl lg:rounded-none">
      <div className="p-3 xl:p-6 lg:p-3 lg:shadow-main rounded-xl grow min-w-[200px] lg:min-w-fit">
        <h2 className="mb-3 text-sm font-normal lg:font-medium lg:text-base text-bodyDark">
          Sort By
        </h2>
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              color="#000"
            >
              <FormControlLabel
                color="#000"
                value="Salary"
                control={<Radio color="primary" />}
                label="Salary"
                className="text-sm font-normal text-body font-inter"
              />
              <FormControlLabel
                value="DatePost"
                control={<Radio color="primary" />}
                label="Date Post"
                className="text-sm font-normal text-body font-inter"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-row p-3 border-primary xl:p-6 lg:p-3 rounded-xl grow lg:flex-col">
        <div className="flex flex-col lg:items-center lg:flex-row min-w-[150px] lg:min-w-full">
          <p className="text-sm font-normal lg:font-medium lg:text-base text-bodyDark">Filters</p>
          <p className="mt-16 text-sm font-normal cursor-pointer lg:font-medium lg:text-base lg:mt-0 whitespace-nowrap text-bodyDark hover:text-primary">
            Clear All
          </p>
        </div>
        <div className="lg:mt-7 min-w-[200px] lg:min-w-full">
          <p className="text-sm font-normal lg:font-medium lg:text-base text-bodyDark">Job Type</p>
          <div className="p-3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    className="text-sm font-normal text-body font-inter"
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter whitespace-nowrap"
                label="Full-Time"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter whitespace-nowrap"
                label="Part-Time"
              />
            </FormGroup>
          </div>
        </div>
        <div className="lg:mt-7 min-w-[200px] lg:min-w-full">
          <p className="text-sm font-normal lg:font-medium lg:text-base text-bodyDark whitespace-nowrap">
            Experience Level
          </p>
          <div className="p-3">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    className="text-sm font-normal text-body font-inter"
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter whitespace-nowrap"
                label="Expert"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter"
                label="Intermediate"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter"
                label="Beginner"
              />
            </FormGroup>
          </div>
        </div>
        <div className="lg:mt-7 min-w-[200px] lg:min-w-full">
          <p className="text-sm font-normal lg:font-medium lg:text-base text-bodyDark whitespace-nowrap">
            Preferred Location
          </p>
          <div className="p-3 pb-0">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    className="text-sm font-normal text-body font-inter"
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter"
                label="Remote"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter"
                label="Office"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: '#777777',
                      '&.Mui-checked': {
                        color: '#DE0B0B',
                      },
                    }}
                  />
                }
                className="text-sm font-normal text-body font-inter"
                label="Both"
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="p-3 xl:p-6 lg:p-3 lg:shadow-main rounded-xl min-w-[300px] lg:min-w-full">
        <h2 className="mb-3 text-sm font-normal lg:font-medium lg:text-base text-bodyDark">
          Salary Per Years
        </h2>
        <div className="mt-4">
          <label className="text-sm font-normal text-body">Min</label>
          <input className="w-full h-11 bg-[#F2F8FD] px-2 rounded outline-none mt-2" />
        </div>
        <div className="mt-2">
          <label className="text-sm font-normal text-body">Max</label>
          <input className="w-full h-11 bg-[#F2F8FD] px-2 rounded outline-none mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
