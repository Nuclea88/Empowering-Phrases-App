import { useState } from 'react';
import AppLayout from './AppLayout';
import PhraseList from './PhraseList';

function App() {
  const [phrases, setPhrases] = useState([
    { text: "Life is beautiful", author: "Anonymus" },
    { text: "Knowledge is power", author: "Francis Bacon" }
  ]);

  return (
    <AppLayout>
      <PhraseList phrases={phrases} />
    </AppLayout>
  );
}

export default App;


