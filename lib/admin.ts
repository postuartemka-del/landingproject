export const getAdminData = () => {
  if (typeof window === "undefined") return null

  const data = localStorage.getItem("admin")
  return data ? JSON.parse(data) : null
}

export const saveAdminData = (data: any) => {
  localStorage.setItem("admin", JSON.stringify(data))
}