// React-Router dependencies
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ReviewProvider } from "./ReviewContext";
// import in page components
import ShowReviews from "./pages/ShowReviews";
import EditReview from "./pages/EditReview";
import AddReview from "./pages/AddReview";
import ConfirmDelete from "./pages/ConfirmDelete";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <div className="container">

        <h1>RecipeBook App</h1>
        {/* All the routes must be defined as children of the BrowserRouter */}
        <ReviewProvider>
          <BrowserRouter>
            <ul className="nav">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/add"
                >
                  Add new review
                </Link>
              </li>
            </ul>

            {/* All the routes must be in the <Routes> as children */}
            <Routes>
              <Route path="/" element={<ShowReviews />} />
              <Route path="/add" element={<AddReview />} />
              <Route path="/edit/:index" element={<EditReview />} />
              <Route path="/delete/:id" element={<ConfirmDelete/>} />
            </Routes>
          </BrowserRouter>
        </ReviewProvider>
      </div>
    </>
  );
}

export default App;
