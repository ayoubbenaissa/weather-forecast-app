export const Error = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <>
      <div className="error-notification">Sorry! an error occurred</div>
      <div data-testid="error-content" className="error-content">{errorMessage}</div>
    </>
  );
};
