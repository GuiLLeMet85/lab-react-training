import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';

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

          <section className='greet-sect'>
            <h2>Greetings</h2>
                <Greeting lang="de">Ludwig</Greeting>
                <Greeting lang="fr">François</Greeting>
  
          </section>

          <section className='random-sect'>
            <h2>Random</h2>
                <Random />
          </section>

      </>    
    );
}

export default App;
