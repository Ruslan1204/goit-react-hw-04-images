import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformat, largeImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={css.imageGalleryItem} onClick={openModal}>
        <img
          className={`${css.imageGalleryItemImage} ${css.imageGalleryItemImage}`}
          src={webformat}
          alt=""
          width={200}
        />
      </li>
      {isModalOpen && <Modal largeImage={largeImage} closeModal={closeModal} />}
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   webformat:PropTypes.string.isRequired,
//   largeImage:PropTypes.string.isRequired,
// }

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => {
//     this.setState({ isModalOpen: true });
//   };
//   closeModal = () => {
//     this.setState({ isModalOpen: false });
//   };

//   render() {
//     const { isModalOpen } = this.state;
//     const { webformat, largeImage } = this.props;
//     return (
//       <>
//         <li className={css.imageGalleryItem} onClick={this.openModal}>
//           <img
//             className={`${css.imageGalleryItemImage} ${css.imageGalleryItemImage}`}
//             src={webformat}
//             alt=""
//             width={200}
//           />
//         </li>
//         {isModalOpen && (
//           <Modal largeImage={largeImage} closeModal={this.closeModal} />
//         )}
//       </>
//     );
//   }
// }
