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
  }
]

const Gallery = () => {
  return (
    <div className="gallery-container">

      <h2>Galería</h2>

      <div className="gallery-grid">

        {galleryImages.map((img) => (
          <div key={img.id} className="gallery-card">

            <img src={img.url} alt={img.title} />

            <p>{img.title}</p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Gallery