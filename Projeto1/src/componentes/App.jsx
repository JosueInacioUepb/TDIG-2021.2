import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoProjetos from "./InfoProjetos";
import AuthProvider from "./AuthProvider";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import PrivateOutlet from "./PrivateOutlet";
import Professor from "./Professor";
import Aluno from "./Aluno";

const App = () => (
    <BrowserRouter>
        <AuthProvider>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />} />

                <Route element={<PrivateOutlet />}>
                    <Route path="/infoProjetos" element={<InfoProjetos />}></Route>
                </Route>

                <Route element={<PrivateOutlet />}>
                    <Route path="/professor" element={<Professor />} />
                </Route>
                <Route element={<PrivateOutlet />}>
                    <Route path="/aluno" element={<Aluno />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);

export default App;