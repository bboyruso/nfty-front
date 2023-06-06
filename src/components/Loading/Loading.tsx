import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled role="progressbar" aria-label="loading...">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
