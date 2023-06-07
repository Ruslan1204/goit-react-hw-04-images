import { useEffect } from 'react';
import css from './Modal.module.css';
// import PropTypes from 'prop-types';

export const Modal = ({ largeImage, closeModal }) => {



  useEffect(() => {
    const handelKeyClose = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handelKeyClose);

    return () => {
      window.removeEventListener('keydown', handelKeyClose);
    };
  }, [closeModal]);
  // componentDidMount() {

  //   window.addEventListener('keydown', this.handelKeyClose);
  // }

  // componentWillUnmount(){

  //   window.removeEventListener('keydown',this.handelKeyClose);
  // }



  const handleClose = evt => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

// Modal.propTypes = {
//   closeModal:PropTypes.func.isRequired,
//   largeImage:PropTypes.string.isRequired,
// }

// export class Modal extends Component {

//   componentDidMount() {
//     // const { closeModal } = this.props;
//     window.addEventListener('keydown', this.handelKeyClose);
//   }

//   componentWillUnmount(){
//     // const { closeModal } = this.props;
//     window.removeEventListener('keydown',this.handelKeyClose);
//   }

//   handelKeyClose=(evt)=>{
//     const { closeModal } = this.props;

//     if(evt.code === 'Escape'){
//       closeModal();
//     }

//   }

//   handleClose = evt => {
//     const { closeModal } = this.props;
//     if (evt.target === evt.currentTarget) {
//       closeModal();
//     }
//   };

//   render() {
//     const { largeImage } = this.props;
//     return (
//       <div className={css.overlay} onClick={this.handleClose}>
//         <div className={css.modal}>
//           <img src={largeImage} alt="" />
//         </div>
//       </div>
//     );
//   }

// }
