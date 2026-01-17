export async function fetchProductsById(id){
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if(!res.ok) {
    throw new Error("Fetch Failed!")
  }
  return res.json();

  }catch(error) {
    console.error(error);
    throw error;
  }
  
}