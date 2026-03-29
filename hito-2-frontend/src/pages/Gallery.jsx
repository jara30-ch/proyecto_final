import { Container, Row, Col } from "react-bootstrap"

const galleryImages = [

  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Lectura infantil"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    title: "Juegos educativos"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    title: "Aprendizaje creativo"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6",
    title: "Momentos en familia"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    title: "Estimulación temprana"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2",
    title: "Explorando el mundo"
  }

]

const Gallery = () => {

  return (

    <Container className="mt-5">

      <h2 className="text-center mb-4">
        Galería
      </h2>

      <p className="text-center mb-5">
        Momentos que inspiran el aprendizaje, la creatividad y el tiempo en familia.
      </p>

      <Row>

        {galleryImages.map((image) => (

          <Col md={4} className="mb-4" key={image.id}>

            <div className="gallery-card">

              <img
                src={image.url}
                alt={image.title}
                className="img-fluid gallery-img"
              />

              <div className="gallery-title">
                {image.title}
              </div>

            </div>

          </Col>

        ))}

      </Row>

    </Container>

  )
}

export default Gallery