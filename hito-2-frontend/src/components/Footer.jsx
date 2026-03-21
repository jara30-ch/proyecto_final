import { Link } from "react-router-dom"

const Footer = () => {
  return (

    <footer className="bg-dark text-light mt-5 py-5">

      <div className="container">

        <div className="row justify-content-between">

          {/* COLUMNA IZQUIERDA */}

          <div className="col-md-4 text-start">

            <h5 className="mb-3">Ubicación</h5>

            <a
  href="https://www.google.com/maps/place/Santiago,+Chile"
  target="_blank"
  rel="noopener noreferrer"
>
<div className="map-container mb-3">
  <iframe
    src="https://maps.google.com/maps?q=Santiago%20Chile&t=&z=13&ie=UTF8&iwloc=&output=embed"
    loading="lazy"
    style={{ border: 0 }}
  ></iframe>
</div>

</a>

            <p className="mb-1">
              Av. Siempre Viva 123
            </p>

            <p className="fw-bold">
              Juguetería
            </p>

          </div>

          {/* COLUMNA DERECHA */}

          <div className="col-md-4 text-md-end">

            <h5 className="mb-3">Main Menu</h5>

            <ul className="list-unstyled">

              <li>
                <Link className="text-light text-decoration-none" to="/">
                  Inicio
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/galeria">
                  Galería
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/register">
                  Register
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer   