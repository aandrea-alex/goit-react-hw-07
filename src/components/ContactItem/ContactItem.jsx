import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/operations';
import CustomButton from '../CustomButton/CustomButton';
import { selectDeletingItem, selectError } from '../../redux/selectors.js';
import { CAPTION_DELETE, CAPTION_DELETEING } from '../../js/constants';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isOperation = useSelector(selectDeletingItem) === id;
  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <React.Fragment>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {number}
        </p>
      </div>
      <CustomButton onClick={handleDeleteItem} typeBtn={'button'}>
      {isOperation && !isError ? CAPTION_DELETEING : CAPTION_DELETE}
      </CustomButton>
    </React.Fragment>
  );
};

export default ContactItem;
