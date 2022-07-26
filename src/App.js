import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';


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
            <div className= "greeting">
                <Greeting lang="de">Ludwig</Greeting>
              </div>
              <div className= "greeting">
                <Greeting lang="fr" className= "minmaxrandom">François</Greeting>
              </div>
          </section>

          <section className='random-sect'>
            <h2>Random</h2>
                <Random />
          </section>

          <section className='color-sect'>
            <h2>Colors</h2>
                <BoxColor r={255} g={0} b={0} />
                <BoxColor r={128} g={255} b={0} />
          </section>

          <section className='credit-sect'>
            <h2>Credit Card</h2>
            <CreditCard
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white"
              />

              <CreditCard
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222"
              />

              <CreditCard
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Firstname Lastname"
                bgColor="#ddbb55"
                color="white"
              />

          </section> 

      </>
    );
}

export default App;
