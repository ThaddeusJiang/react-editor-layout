import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { EditorLayout } from '@thaddeusjiang/react-editor-layout';

const App = () => {
  const leftComponent = <div className=" w-full h-full bg-blue-100"></div>;
  const mainComponent = <div className="w-full h-full bg-blue-200"></div>;
  const rightComponent = <div className="w-full h-full bg-blue-400"></div>;
  const bottomComponent = <div className=" w-full h-full bg-blue-300 "></div>;

  return (
    <div>
      <EditorLayout
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        mainComponent={mainComponent}
        bottomComponent={bottomComponent}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
