import{Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const ParamVariables = (props) => {
    const {word, textColor, backgroundColor} = useParams();
    // variable that will hold the JSX file
    let renderElement;
    
    //check if 'word' is not a number 
    if (isNaN(word)) {
        if (textColor) {
            //  if 'word' is not a umber  and textColor exists then
            // set 'renderElement' to a paragraph with colored text and a different background color
            renderElement = (
                <p style={{color: textColor, backgroundColor: backgroundColor}}>
                    This is a word: {word}
                </p>
            );
        } else {
            // if 'word' is not a number and textColor doesn't exist then display a regular text
            renderElement = (
                <p>
                    this is a word: {word}
                </p>
            );
        }
        } else {
            // if 'word' is a number then pass the number into the {word} variable
            renderElement = (
                <p>
                    this is a Number: {word}
                </p>
            )
        }
    return (
        <div>
            <div className="container col-3">
                {renderElement}
                <Link to={"/home"}>Go back Home</Link>
            </div>
        </div>
    );
};
export default ParamVariables;