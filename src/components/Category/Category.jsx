import "./Category.css"
import CategoryCard from "../CategoryCard/CategoryCard"

const categories = [
  {
    title: "Men",
  },
  {
    title: "Women",
  },
  {
    title: "Running",
  },
  {
    title: "New Arrivals",
  },
]

function Category() {
  return (
    <section className="category">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
          />
        ))}
      </div>
    </section>
  )
}

export default Category