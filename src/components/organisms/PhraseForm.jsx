
import "./PhraseForm.css";

const PhraseForm = ({text}) => {
    return (
        <>
            <form> {text} </form>
        </>
    )
}

export default PhraseForm;





const PhraseForm = ({ onAdd }) => {

  const [phrase, setPhrase] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

 