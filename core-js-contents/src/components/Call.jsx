import Code from "./Code";
const Call = () => {
  return (
    <div className="h-full w-full bg-gray-50 items-center absolute top-12 text-black">
      <h2 className="font-bold text-center py-2 text-blue-900">
        {" "}
        Custom Call implementation
      </h2>
      <Code
        code={"console.log('print')"}
        language={"javascript"}
        showLineNumbers={"true"}
      />
    </div>
  );
};

export default Call;
