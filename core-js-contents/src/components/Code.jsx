import { CopyBlock, dracula } from "react-code-blocks";

const Code = (props) => {
  return (
    <div className="px-1 py-4 bg-black ">
      <CopyBlock
        text={props.code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        wrapLines
        theme={dracula}
      />
    </div>
  );
};

export default Code;
