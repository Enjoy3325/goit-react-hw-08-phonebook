import { Home } from 'redux/pages/Home/Home';

export const Navigation = () => {
  return (
    <>
      {!Home && (
        <div>
          <h1>Sorry, error. Not find!</h1>
        </div>
      )}
    </>
  );
};
