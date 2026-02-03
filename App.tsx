
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Landing } from './views/Landing';
import { RegisterLocal, RegisterForeign, RegisterCorporate } from './views/RegistrationViews';
import { Success } from './views/AuthViews';
import { Dashboard } from './views/Dashboard';
import { EditProfile } from './views/ProfileViews';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LANDING);
  const [isForeignSuccess, setIsForeignSuccess] = useState(false);

  // Helper to handle successful registration
  const handleRegistrationSuccess = (data: any, isForeign: boolean = false) => {
    // In a real app, we would send 'data' to backend here
    console.log("Registration Data:", data);
    setIsForeignSuccess(isForeign);
    setCurrentView(ViewState.SUCCESS);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.LANDING:
        return <Landing setView={setCurrentView} />;
      case ViewState.REGISTER_LOCAL:
        return <RegisterLocal setView={setCurrentView} onSuccess={(d) => handleRegistrationSuccess(d, false)} />;
      case ViewState.REGISTER_LOCAL_STUDENT:
        return <RegisterLocal setView={setCurrentView} onSuccess={(d) => handleRegistrationSuccess(d, false)} defaultStudent={true} />;
      case ViewState.REGISTER_FOREIGN:
        return <RegisterForeign setView={setCurrentView} onSuccess={(d) => handleRegistrationSuccess(d, true)} />;
      case ViewState.REGISTER_CORPORATE:
        return <RegisterCorporate setView={setCurrentView} onSuccess={(d) => handleRegistrationSuccess(d, false)} />;
      case ViewState.SUCCESS:
        return <Success setView={setCurrentView} isForeign={isForeignSuccess} />;
      case ViewState.DASHBOARD:
        return <Dashboard setView={setCurrentView} />;
      case ViewState.EDIT_PROFILE:
        return <EditProfile setView={setCurrentView} />;
      default:
        return <Landing setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;
