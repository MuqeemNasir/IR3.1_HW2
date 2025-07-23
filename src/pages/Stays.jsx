export default function stays() {
  return (
    <main className="container py-4">
      <h1 className="display-4 fw-medium mb-3">Featured Stays</h1>
      <div className="card mb-3">
        <div className="row g-0 align-items-stretch">
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPZersmjvz3IBvJ1Uq3NpOGe5a1g0Mg5VFQYGmua0nSnoCTLxtolY2geqh-VEigL6TZs&usqp=CAU"
              className="img-fluid h-100 w-100 object-fit-cover rounded-start"
              alt="Property 1 Image"
              style={{ maxHeight: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Luxurious Taj Mahal View Apartment</h5>
              <p className="card-text">
                Wake up to a breathtaking view of the Taj Mahal from this
                luxurious apartment. Explore the rich history and beauty of this
                iconic monument right from you window.
              </p>
              <p className="text-muted">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0 align-items-stretch">
          <div className="col-md-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1685133856065-a32643cc56d0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
              className="img-fluid h-100 w-100 object-fit-cover rounded-start"
              alt="Property 2 Image"
              style={{ maxHeight: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Cozy Retreat in the Mountains</h5>
              <p className="card-text">
                Escape to nature with this cozy mountain retreat. Enjoy
                tranquility and stunning views while being surrounded by lush
                forests and fresh mountain air.
              </p>
              <p className="text-muted">Last updated 10 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0 align-items-stretch">
          <div className="col-md-4">
            <img
              src="https://www.theluxurysignature.com/wp-content/uploads/2015/02/oceanview-villa-paradiso-phuket.jpg"
              className="img-fluid h-100 w-100 object-fit-cover rounded-start"
              alt="Property 3 Image"
              style={{ maxHeight: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Seaside Villa with Private Beach Access
              </h5>
              <p className="card-text">
                Indulge in luxury with this stunning seaside villa. Relax on
                pristine beaches, take a dip in the private pool, and soak up
                the sun in this exclusive coastel retreat.
              </p>
              <p className="text-muted">Last updated in 15 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0 align-items-stretch">
          <div className="col-md-4">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/032/943/469/small/modern-elegance-in-a-sleek-clean-loft-apartment-free-photo.jpg"
              className="img-fluid h-100 w-100 object-fit-cover rounded-start"
              alt="Property 4 Image"
              style={{ maxHeight: "100%", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Modern Loft in the City Center</h5>
              <p>
                Experience urban living at its finest with this modern loft.
                Conveniently located in the city center, it offers style,
                comfort, and easy access to dining and entertainment options
              </p>
              <p className="text-muted">Last updated 20 mins</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
