import { createContext, useState, useEffect } from "react"

export const LikesContext = createContext()

export const LikesProvider = ({ children }) => {

  const [likes, setLikes] = useState([])

  useEffect(() => {

    const savedLikes = JSON.parse(localStorage.getItem("likes")) || []
    setLikes(savedLikes)

  }, [])

  const toggleLike = (product) => {

    const exists = likes.find(p => p.id === product.id)

    let updatedLikes

    if (exists) {

      updatedLikes = likes.filter(p => p.id !== product.id)

    } else {

      updatedLikes = [...likes, product]

    }

    setLikes(updatedLikes)
    localStorage.setItem("likes", JSON.stringify(updatedLikes))

  }

  return (

    <LikesContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikesContext.Provider>

  )
}