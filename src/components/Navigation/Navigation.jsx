import { home } from 'redux/pages/home/home';

export const Navigation = () => {
  return (
    <>
      {!home && (
        <div>
          <h1>Sorry, error. Not find!</h1>
        </div>
      )}
    </>
  );
};
