import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Error, Book } from "pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books/:id" element={<Book />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
