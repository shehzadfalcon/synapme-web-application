const codeoOfConduct = ({ data }: any) => {
  return (
    <ol className="pl-[18px] list-decimal">
      {data?.map((item: any, index: any) => {
        return (
          <li key={index}>
            <p className="text-bodyDark text-[16px] leading-[28px] font-normal">{item?.point}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default codeoOfConduct;
