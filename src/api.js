// consumindo api
export const fetchSuppliers = async (consumo) => {
  const response = await fetch(`https://api-greenvolt-1.onrender.com/fornecedores?consumo=${consumo}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar fornecedores');
  }
  const data = await response.json();
  return data.fornecedores;
};
