import React from 'react';
import './Home.css';
import heroimage2 from '../images/projectwall.jpeg';
import heroimage1 from '../images/plant4.jpeg';


const Home = () => {
  return (
    <div style={{marginTop:'50px'}}>
      <h2 style={{float:'left',paddingRight:'2%',fontSize:'40px'}}>Heading </h2>
      <img src={heroimage2}  style={{ width: 'auto', height: '250px' }}></img>
      <img src={heroimage1}  style={{ width: 'auto', height: '250px' }}></img>
      <div>
        <h3 style={{textAlign:'left',padding:'2%'}}>Featured Product</h3>
        {/* <h3>Tree 1</h3> */}
        <table>
           <tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
           <tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
           <tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
           <tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
           <tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
           <tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
           
        </table>
      
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Home;