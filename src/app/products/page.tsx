import Container from "@/components/Container";
import Products from "@/components/Products";
import Title from "@/components/Title";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res?.ok) {
    throw new Error("Failed to fetch Products Data");
  }
  return res.json();
};

const ProductsPage = async () => {
  const productsData = await getProducts();

  return (
    <Container>
      <Title title="Available Products" />
      <Products productsData={productsData} />
    </Container>
  );
};

export default ProductsPage;
