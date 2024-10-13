import React from 'react';
import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import { deleteContact } from '../../redux/contactsSlice';
import CustomButton from '../CustomButton/CustomButton';
import { CAPTION_DELETE } from '../../js/constants';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

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
        {CAPTION_DELETE}
      </CustomButton>
    </React.Fragment>
  );
};

export default ContactItem;
