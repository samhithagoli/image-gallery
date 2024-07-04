import WSPGallery from './components/WSPGallery';
import './App.css';

function App() {

  const galleryImages = [
    {
      img: 'https://tse3.mm.bing.net/th?id=OIP.gm-dizMpi_7mdEYVbpccDQHaE8&pid=Api&P=0&h=180'
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://cdn.wallpapersafari.com/34/11/IFqWGm.jpg"
    },
    {
      img: "http://psychologyguideonline.com/wp-content/uploads/2016/11/Smiling-woman.jpg"
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.Op8CEP99HoMDn_I3yBusrgHaEI&pid=Api&P=0&h=180"
    },
    {
      img: "https://photo-portfolio-inky-two.vercel.app/static/media/wp12.e84be3ccb581a6e48b92.jpg"
    },
    {
      img: "https://thumbs.dreamstime.com/z/stylish-mature-older-woman-working-home-laptop-taking-notes-happy-old-remote-distance-office-smiling-s-middle-aged-198173056.jpg"
    }
  ]

  return (
    <div className="App">
      <br />
      <div>
        <strong>Image Gallery</strong>
      </div>
      <br /><br />

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      <div>- WebStylePress -</div>
    </div>
  );
}

export default App;
