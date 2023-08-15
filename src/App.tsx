import React, { useEffect } from 'react';

import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

const App = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { axiosGetUser } = useActions();

  useEffect(() => {
    axiosGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Registration />
      <Login/>
    </div>
  );
};

export default App;
