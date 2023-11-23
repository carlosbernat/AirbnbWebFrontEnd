import Filters from "../shared/Filters";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Rentals from "../components/Rentals";

function Home() {
    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Filters */}
            <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
                <Filters />
                {/* Rentals */}
                <Rentals />
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;