import AppRoutes from "./routes/Routes";
import { AuthProvider } from './context/AuthContext';
 

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
