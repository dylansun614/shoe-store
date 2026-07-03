import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import products from "../../data/products"
import ProductCard from "../../components/ProductCard/ProductCard"
import "./ProductDetail.css"

function ProductDetail() {
  const { id } = useParams()

  const product = products.find((item) => item.id === Number(id))
  const relatedProducts = products.filter(
    (item) => item.id !== product.id
  )
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  
function handleAddToCart() {
  if (!selectedColor) {
    alert("Please select a color")
    return
  }

  if (!selectedSize) {
    alert("Please select a size")
    return
  }

  alert(
    `Added ${quantity} × ${product.name}
Color: ${selectedColor}
Size: ${selectedSize}`
  )
}
  
  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <>
      <Link to="/" className="back-link">
        ← Back to Shop
      </Link>

      <section className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <p className="product-label">{product.brand}</p>
          <h1>{product.name}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-price">${product.price}</p>

          <p className="product-rating">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>

          <p className="product-description">{product.description}</p>

          <p className="product-stock">Stock: {product.stock}</p>

          <div className="product-colors">
            <p>Colors:</p>

            <div className="color-list">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className={selectedColor === color ? "selected" : ""}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="product-sizes">
            <p>Sizes:</p>

            <div className="size-list">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className={selectedSize === size ? "selected" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="product-quantity">
            <p>Quantity</p>

            <div className="quantity-selector">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="product-add-button"
            onClick={handleAddToCart}
          >
            Add {quantity} to Cart
          </button>
        </div>
      </section>

      <section className="related-products">
        <h2>You May Also Like</h2>

        <div className="products-grid">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default ProductDetail