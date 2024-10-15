import AppRoutes from './routes';
import MainTemplate from './organisms/MainTemplate';
import LoginTemplate from './organisms/LoginTemplate';

const App = () => {
  const isLoginRoute = window.location.pathname === '/login' || window.location.pathname === '/register';

  return (
    <>
      {isLoginRoute ? (
        <LoginTemplate>
          <AppRoutes />
        </LoginTemplate>
      ) : (
        <MainTemplate>
          <AppRoutes />
        </MainTemplate>
      )}
    </>
  )
};

export default App;
