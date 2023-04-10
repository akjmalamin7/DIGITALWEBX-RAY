import Footer from "../footer/Footer";
import MainHeader from "../header/MainHeader";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
