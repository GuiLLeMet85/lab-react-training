import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import maxence from './assets/images/maxence.png'
import maxenceGlasses from './assets/images/maxence-glasses.png'
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';


function App() {

  return (
      <>
        <section className='main-section'>
            <h2>IdCard</h2>

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
          <div className='card-column'>
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
                </div>

          </section> 

          <section className='rating-sect'>
            <h2>Rating</h2>
                <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>1.5</Rating>
                <Rating>3</Rating>
                <Rating>4</Rating>
                <Rating>5</Rating>
          </section>


          <section className='driver-sect'>
            <h2>Driver Card</h2>
                <DriverCard
                  name="Travis Kalanick"
                  rating={4.2}
                  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
                  car={{
                    model: "Toyota Corolla Altis",
                    licensePlate: "CO42DE"
                  }}
                />
                <DriverCard
                  name="Dara Khosrowshahi"
                  rating={4.9}
                  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                  car={{
                    model: "Audi A3",
                    licensePlate: "BE33ER"
                  }}
                />
           </section>
          

           <section className='likebt-sect'>
            <h2>Like button</h2>
           <LikeButton />
           </section>

          <section className='pictureclick-sect'>
          <h2>Click Picture</h2>
          <ClickablePicture
            img={maxence}
            imgClicked={maxenceGlasses}
          />
          </section>

          <section className='dices-sect'>
          <h2>Dice Section</h2>
               <Dice />   
          </section>
          
          <section className='carousel-sect'>
          <h2>Carousel</h2>
               <Carousel 
                images={[
                  'https://randomuser.me/api/portraits/women/1.jpg',
                  'https://randomuser.me/api/portraits/men/1.jpg',
                  'https://randomuser.me/api/portraits/women/2.jpg',
                  'https://randomuser.me/api/portraits/men/2.jpg'
                ]}
               />   
          </section>

          <section className='numbers-sect'>
          <h2>Numbers table</h2>
          <NumbersTable limit={12} />
          </section>

          <section className='facebook-sect'>
          <h2>Facebook</h2>
          <Facebook />
          </section>

      </>

    );
}

export default App;
