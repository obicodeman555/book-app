import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Error, BookDetails } from "pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books/:id" element={<BookDetails />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
