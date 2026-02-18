
export const checkHealth = async () => {
  const res = await fetch("http://localhost:5000/api/health");
  return res.json();
};