import './App.css';
import UserData from './components/UserData';
import { useState, useEffect } from 'react';

const API = "https://rakibulapon46.github.io/api/doi.json"
function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
              setUsers(data);
            }
            console.log(data);
    } catch (e) {
      console.error(e);
    }
  }


  useEffect(() => {
    fetchUsers(API);
  }, [])


  return (
    <div className='appDiv'>
       <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Titles</th>
                <th>Links</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
        <footer>Copyright © 2024 All rights reserved | This website is made by 
           <a className='fLinks'
            href="https://www.facebook.com/rakibul.apon79"
             target='_blank'>Rakibul Apon</a> </footer>
    </div>
  )
}

export default App
