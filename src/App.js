import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Error, BookDetails } from "pages";
import { Header, Cart } from "components";

function App() {
  // const homeRef = useRef();

  // const showCartHandler = () => {

  //   hideScrollonCartOpen();
  // };

  // const hideScrollonCartOpen = () => {
  //   !isCartOpen
  //     ? homeRef.current.classList.add("scrollbar-hidden")
  //     : homeRef.current.classList.remove("scrollbar-hidden");
  // };

  return (
    <BrowserRouter>
      <Cart />
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/books/:id" element={<BookDetails />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
