import Footer from '../components/Footer';
import FormHomePage from '../components/FormHomePage';

import Modal from '../components/Modal';
import { useItems } from '../context/ItemsContext';

function HomePage() {
  const { modalOpen } = useItems();
  return (
    <div>
      {modalOpen && <Modal />}
      <FormHomePage />
      <Footer />
    </div>
  );
}

export default HomePage;
