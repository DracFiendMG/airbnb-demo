import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
// import img from './images/felix.jpg'
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import data from './components/data';

function App() {
  // const firstName = "Joe"
  // const lastName = "Schmoe"

  // const date = new Date()
  // const hours = date.getHours()

  // let timeOfDay

  // if (hours < 12) {
  //   timeOfDay = "morning"
  // }else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon"
  // }else{
  //   timeOfDay = "night"
  // }

  // const upvotes = 1;

  // const colors = ["Red", "Blue", "Green"]

  // const newJokes = jokesData.map(joke => {
  //   return <Joke setup={joke.setup} punchline={joke.punchline} />
  // })

  const newCardData = data.map(ele => {
    return <Card 
      key={ele.id}
      ele={ele}
      // {...ele}
    />
  })

  return (
    // <div>
    //   <Joke 
    //     upvotes={upvotes}
    //     setup="I got my daughter a fridge for her birthday"
    //     punchline="I can't wait to see her face light up when she opens it."
    //   />
    //   <Joke 
    //     setup="How did the hacker escape the police?"
    //     punchline="He just ransomware!"
    //   />
    //   <Joke 
    //     setup="Why don't pirates travel on mountain roads?"
    //     punchline="Scurvy."
    //   />
    //   <Joke 
    //     setup="Why do bees stay in the hive in the winter?"
    //     punchline="Swarm"
    //   />
    //   <Joke 
    //     setup="What's the best thing about Switzerland?"
    //     punchline="I don't know, but the flag is a big plus!"
    //   />
    // </div>

    // <div>
    //   <div className="contacts">
    //         <Contact 
    //             img="./images/mr-whiskerson.png" 
    //             name="Mr. Whiskerson"
    //             phone="(212) 555-1234"
    //             email="mr.whiskaz@catnap.meow"
    //         />
    //         <Contact 
    //             img="./images/fluffykins.png"
    //             name="Fluffykins"
    //             phone="(212) 555-2345"
    //             email="fluff@me.com"
    //         />
    //         <Contact 
    //             img={img}
    //             name="Felix"
    //             phone="(212) 555-4567"
    //             email="thecat@hotmail.com"
    //         />
    //         <Contact 
    //             img="./images/pumpkin.png"
    //             name="Pumpkin"
    //             phone="(0800) CAT KING"
    //             email="pumpkin@scrimba.com"
    //         />
    //     </div>
    // </div>

    // <h1>Good {timeOfDay}</h1>

    // <h1>Hello {firstName + " " + lastName}!</h1>

    <div className="App">
      <Navbar/>
      <Hero />
      {/* <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}
      <div className='container'>
        {newCardData}
      </div>

    </div>

    // found a new method
    // <div>
    //   {colors.map((color) => <h3>{color}</h3>)} 
    // </div>

    // <div>
    //   {newJokes}
    // </div>
  );
}

export default App;
