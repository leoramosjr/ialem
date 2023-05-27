import axios from "axios"
import AppRoutes from "./routes/AppRoutes"
import "./styles/global.css"

axios.defaults.baseURL = "https://api.openai.com/v1/models/text-davinci-003"
axios.defaults.headers.common["Authorization"] = `Bearer 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`

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  )
}
