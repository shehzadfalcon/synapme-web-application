const PostGuideList = ({ data }: any) => {
  return (
    <ol className="pl-[18px] list-decimal">
      {data?.map((item: any, index: any) => {
        return (
          <li key={index} className="text-primary">
            <p className="text-bodyDark text-[16px] leading-[28px] font-normal">
              <span className="text-primary font-medium">{item?.title} </span>
              {item?.description}
            </p>
          </li>
        );
      })}
    </ol>
  );
};

export default PostGuideList;
