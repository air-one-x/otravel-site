import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import Footer from '../../Footer';
import InputComponent from '../../Generique/inputComponent';

const InformationsUser = ({username, email, date, contributions, inputChangeEmailInformation, inputChangePseudoInformation, inputChangePasswordInformation, newUserPassword, newUserEmail, newUserPseudo, insertNewInformation, updateMessage, userAvatar}) => {      
    
    console.warn(inputChangeEmailInformation);

    const newDate = new Date(date);
    const day = newDate.getDay();
    const day1 = day+1;
    const month = newDate.getMonth();
    const month1 = month+1;
    const year = newDate.getFullYear();


        useEffect(()=> {    
            
    let avatar = document.getElementById('user__picture');
   let test = document.createElement("img");
        test.src = img;
        test.style.height= '50px';
        test.style.width='50px';
        test.style.borderRadius='50%';
        test.style.margin='auto';
        test.style.textAlign='center';
        console.log(test);
        avatar.append(test);

        },[])
     

  
    
  
    return(
    <div className="informations--user">
        <header>
            <Link to="/"><h1>O'travel</h1></Link>
            <h2>Mes informations</h2>
        </header>

        <main className="informations--user__content">
           <div id="user__picture" style={{margin:'auto', textAlign:'center'}} >
                <img src={`http://localhost:8001/${userAvatar}`} ></img>
           </div>
           <div className="user--statistic">
               <div>Membres depuis le : <time>{`${day1}/${month1}/${year}`}</time></div>
               <div className="user--additions">Contribution: <span>{contributions != undefined ? contributions.length : "0"}</span> ajouts</div>
           </div>
           <div className="user--all--data">
              <div className="user--username user--data ">
                  <div className="user--label--data">Changer ici pour un nouveaux pseudo</div>
                  <InputComponent label={username} value={newUserPseudo} onChange={(event) => inputChangePseudoInformation(event.target.value)} />
              </div>
              <div className="user--email user--data ">
                  <div className="user--label--data">Changer ici votre Email</div>
                  <InputComponent label={email} value={newUserEmail} onChange={(event) => inputChangeEmailInformation(event.target.value)} />
              </div>
              <div className="user--username user--data ">
                <div className="user--label--data">Changement de mot de passe</div>
                <InputComponent value={newUserPassword} onChange={(event) => inputChangePasswordInformation(event.target.value)} />
            </div>
           </div>
        </main>

        <footer className="modification--data">
            <button type="button" onClick={() => {insertNewInformation()}}>Modifier les informations</button>
            <p><a href="#">Supprimer le compte</a></p>
            <div>
                <h2>{updateMessage}</h2>
            </div>
        </footer>

        <Footer />

    </div>
    );
};

InformationsUser.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    date: PropTypes.string,
    contributions: PropTypes.array,
};

export default InformationsUser;