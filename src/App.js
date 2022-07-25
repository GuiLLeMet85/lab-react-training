import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';

function App() {

  return (
      <>
        <section className='main-section'>
            <h1>IdCard</h1>
              
              <div className='card'>
              <IdCard
                  lastName='Doe'
                  firstName='John'
                  gender='male'
                  height={178}
                  birth="1992-07-14"
                  picture="https://randomuser.me/api/portraits/men/44.jpg"
              />
              </div>
              <div className='card'>
              <IdCard
                  lastName='Delores'
                  firstName='Obrien'
                  gender='female'
                  height={172}
                  birth="1988-05-11"
                  picture="https://randomuser.me/api/portraits/women/44.jpg"
              />
              </div>
          </section>
      </>    
    );
}

export default App;
