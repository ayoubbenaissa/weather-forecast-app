export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <>
      <div className="error-notification">Sorry! an error occurred</div>
      <div className="error-content">{errorMessage}</div>
    </>
  );
};
