import React, {useRef} from 'react';
import {db} from '../../config/firebase';
import {addDoc, collection} from '@firebase/firestore';

const Signin = () => {
    const messageRef = useRef();
    const collectionRef = collection(db, 'message');

    const handleSave = (e) => {
      e.preventDefault();
      console.log(messageRef.current.value);

      let data = {
        message: messageRef.current.value
      }

      try {
        addDoc(collectionRef, data);
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <form onSubmit={handleSave}>
      <label>Test Message</label>
      <input type='text' ref={messageRef} />
      <button>Submit</button>
    </form>
  )
}

export default Signin