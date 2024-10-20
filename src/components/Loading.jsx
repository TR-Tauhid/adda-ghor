const Loading = () => {

  return (
    <div className="w-full h-full top-0 backdrop-blur-sm absolute z-50 mx-auto rounded-3xl flex justify-center items-center">
      <span className="loading loading-ring loading-lg scale-[500%]"></span>
    </div>
  );
};

export default Loading;
