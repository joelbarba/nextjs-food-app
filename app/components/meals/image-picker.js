"use client";
import css from './image-picker.module.css';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState();
  const inputRef = useRef();
  function handlePick() {
    inputRef.current.click();
  }
  function handleImageChange(event) {
    console.log('handleImageChange');
    const file = event.target.files[0];
    if (!file) { setImage(null); return; }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log('setting image');
      setImage(fileReader.result);
    }
    fileReader.readAsDataURL(file);
  }
  return <div className={css.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={css.controls}>
      <div className={css.preview}>
        { !image && <p>No Image</p>}
        {/* { !!image ?? <p>YEAAAAAAAH</p>} */}
        { !!image && <Image src={image} alt="Picked image" fill/>}
      </div>
      <input 
        className={css.input}
        type="file" 
        id={name} 
        accept="image/png, image/jpeg" 
        onChange={handleImageChange}
        name={name}
        ref={inputRef}
        required/>
      <button className={css.button} type="button" onClick={handlePick}>Pick an Image</button>
    </div>
  </div>
}