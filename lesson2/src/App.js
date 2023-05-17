import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import myCard from './data';


import ReactDOM from 'react-dom';

const cardList = myCard.map((card, index) => (
  <Card
    key={index}
    title={card.title}
    image={card.image}
    description={card.description}
  />
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="card-container">{cardList}</div>
);


function App() {
  const cardList = myCard.map(card => (
  <Card
  key={card.title}
  title={card.title}
  imgage={card.image}
  description={card.description}
  //Just to be safe
/>
));

ReactDOM.render(<div className="card-container">{cardList}</div>, document.getElementById('root'));
}

export default App;
