import React from 'react';
import Image from 'next/image';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const JobBoardPage: React.FC = () => {
  const [value, setValue] = React.useState('Remote');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="p-4 2xl:p-12 xl:p-10 lg:p-6 shadow-main rounded-3xl">
      <div className="flex items-center">
        <div className="flex gap-3 xl:gap-9 lg:gap-4 grow">
          <Image
            alt="profile-icon"
            src="/profile/articles/img-1.png"
            width="4"
            height="18"
            priority
            className="lg:h-[74px] lg:block hidden lg:w-[74px] h-[32px] w-[32px] lg:rounded-xl rounded-md lg:mt-4"
          />
          <div className="grow">
            <div className="flex items-center gap-4 grow">
              <Image
                alt="profile-icon"
                src="/profile/articles/img-1.png"
                width="4"
                height="18"
                priority
                className="lg:h-[74px] lg:hidden lg:w-[74px] h-[32px] w-[32px] lg:rounded-xl rounded-md lg:mt-4"
              />
              <p className="text-primary lg:text-[24px] text-base lg:leading-[42px] lg:font-semibold font-medium">
                Post A Job
              </p>
            </div>
            <input
              className="lg:mt-2 mt-4 w-full 2xl:max-w-[555px] lg:min-h-[61px] min-h-[36px] lg:text-base text-sm leading-[28px] lg:placeholder:font-normal placeholder:font-light font-normal border border-[#E9ECEF] rounded-2xl px-4 outline-primary"
              placeholder="Enter Job Title"
            />
            <input
              className="lg:mt-2 mt-2 w-full 2xl:max-w-[555px] lg:min-h-[61px] min-h-[36px] lg:text-base text-sm leading-[28px] lg:placeholder:font-normal placeholder:font-light font-normal border border-[#E9ECEF] rounded-2xl px-4 outline-primary"
              placeholder="Enter Salary"
            />
            <div className="flex flex-col 2xl:justify-between 2xl:flex-row 2xl:items-center">
              <div>
                <div className="flex flex-col gap-1 mt-4 lg:items-center lg:flex-row lg:mt-8 xl:gap-8">
                  <p className="text-bodyDark lg:text-base text-sm lg:leading-[28px] font-medium lg:min-w-[150px]">
                    Preferred Location
                  </p>
                  <RadioGroup value={value} onChange={handleChange} className="flex-row">
                    <FormControlLabel
                      value="Remote"
                      control={<Radio color="primary" />}
                      label="Remote"
                      className="text-sm font-normal text-body font-inter w-[130px]"
                    />
                    <FormControlLabel
                      value="Office"
                      control={<Radio color="primary" />}
                      label="Office"
                      className="text-sm font-normal text-body font-inter"
                    />
                  </RadioGroup>
                </div>

                <div className="flex flex-col gap-1 mt-4 lg:items-center lg:flex-row xl:gap-8">
                  <p className="text-bodyDark lg:text-base text-sm lg:leading-[28px] font-medium lg:min-w-[150px]">
                    Experience Level
                  </p>
                  <RadioGroup
                    className="flex-row "
                    value={value}
                    onChange={handleChange}
                    color="#000"
                  >
                    <FormControlLabel
                      color="#000"
                      value="Expert"
                      control={<Radio color="primary" />}
                      label="Expert"
                      className="text-sm font-normal text-body font-inter w-[130px]"
                    />
                    <FormControlLabel
                      value="Intermediate"
                      control={<Radio color="primary" />}
                      label="Intermediate"
                      className="text-sm font-normal text-body font-inter w-[160px]"
                    />
                    <FormControlLabel
                      value="Beginner"
                      control={<Radio color="primary" />}
                      label="Beginner"
                      className="text-sm font-normal text-body font-inter"
                    />
                  </RadioGroup>
                </div>
              </div>
              <button
                onClick={() => alert('job posted')}
                className="2xl:mt-0 mt-5 ring-1 ring-primary text-base hover:opacity-70 leading-[28px] font-normal text-white bg-primary h-9 xl:w-[122px] w-full 2xl:rounded-xl rounded-full"
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoardPage;
