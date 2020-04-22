import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import Footer from '../../Footer';

const InformationsUser = ({username, email, date, contributions}) => {        

    const newDate = new Date(date);
    const day = newDate.getDay();
    const day1 = day+1;
    const month = newDate.getMonth();
    const month1 = month+1;
    const year = newDate.getFullYear();


        var imgCode = localStorage.getItem('img');
        var img = `data:image/png;base64,${imgCode}`;

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
           </div>

           <div className="user--statistic">
               <div>Membres depuis le : <time>{`${day1}/${month1}/${year}`}</time></div>
               <div className="user--additions">Contribution: <span>{contributions != undefined ? contributions.length : "0"}</span> ajouts</div>
           </div>

           <div className="user--all--data">
              <div className="user--username user--data ">
                  <div className="user--label--data">Pseudo</div>
                  <div className="user--content--data">{username}</div>
              </div>
              <div className="user--email user--data ">
                  <div className="user--label--data">Email</div>
                  <div className="user--content--data">{email}</div>
              </div>
           </div>
        </main>

        <footer className="modification--data">
            <button type="button">Modifier les informations</button>
            <p><a href="#">Supprimer le compte</a></p>
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