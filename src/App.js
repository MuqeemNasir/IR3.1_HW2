import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4 bg-light">
        <h1 className="display-3 fw-medium">Latest Listing</h1>
        <div className="mb-3 pt-3">
          <img
            src="https://images.pexels.com/photos/8755443/pexels-photo-8755443.jpeg?_gl=1*17lt0cg*_ga*NDk2MjI2MTUxLjE3NTMxOTkxNTI.*_ga_8JE65Q40S6*czE3NTMxOTkxNTEkbzEkZzEkdDE3NTMxOTkyMjQkajYwJGwwJGgw"
            className="img-fluid object-fit-cover rounded h-100"
            alt="Property 1 Image"
            style={{ maxHeight: "100%", width: "100%" }}
          />
        </div>
        <h2>Cozy Loft in the City Center</h2>
        <p className="text-muted ">
          Entire loft &middot; 2 guests &middot; 1 bedroom &middot; 1 bed
          &middot; 1 bath
        </p>
        <p>
          Enjoy your stay in this stylish loft apartment located in the heart of
          the city. Close to the restaurants, shops and attractions, it's the
          perfect base for exploring the city.
        </p>
        <p>$120 per night</p>

        <div className="mb-3 pt-3">
          <img
            src="https://img.freepik.com/premium-photo/modern-house-designs_1197721-50018.jpg"
            className="img-fluid body-fit-cover rounded h-100"
            alt="Property 2 Image"
            style={{ maxHeight: "100%", width: "100%" }}
          />
        </div>
        <h2>Beachfront Villa with Stunning Views</h2>
        <p className="text-muted">
          Entire villa &muted; 6 guestrooms &muted; 3 bedrooms &muted; 3 beds
          &muted; 2 baths
        </p>
        <p>
          Relax and unwind in this beautiful beachfront villa. Wake up to
          panoramic ocean views, take a dip in the private pool, and enjoy
          seamless indoor-outdoor living
        </p>
        <p>$300 per night</p>
      </main>
      <Footer />
    </>
  );
}
