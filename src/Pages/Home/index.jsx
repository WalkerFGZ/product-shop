import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { useEffect } from "react"
import { useState } from "react"

function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          { items?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
      </div>
      
      <ProductDetail />
    </Layout>
  )
}

export default Home
