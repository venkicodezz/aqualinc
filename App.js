import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Header from "./components/Header/Header";
import Product from "./components/Products/Products";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Layout from "./components/layout/layout";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";



function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Layout/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="products" element={<Product />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer/>
            {/* <About1/> */}

        </BrowserRouter>
        //     <BrowserRouter>
        //      <Header/>
        //     <Routes>
        //       <Route path="/" element={<Layout />}>

        //         <Route index element={<Home />} />
        //         <Route path="products" element={<Product />} />
        //         <Route path="contact" element={<Contact />} />

        //       </Route>
        //     </Routes>
        //   </BrowserRouter>
    );
}

export default App;
