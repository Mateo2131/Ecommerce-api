import faker from 'faker'

const createProducts = (limit) => {
  const products = []
  for (let i = 0; i <= limit; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      image: faker.image.imageUrl()
    })
  }
  return products
}

export default createProducts