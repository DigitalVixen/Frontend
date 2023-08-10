import React, { useEffect } from 'react';

import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';

const App = () => {
  const { user } = useTypedSelector((state) => state.user);
  const { axiosGetUser } = useActions();

  useEffect(() => {
    axiosGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default App;
