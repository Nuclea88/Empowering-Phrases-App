const [phrases, setPhrases] = useState([]);

<AppLayout>
  <PhraseList 
    phrases={phrases} 
    onUpdate={handleUpdate} 
    onDelete={handleDelete} 
  />
</AppLayout>
