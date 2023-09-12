import React, { useState } from 'react';
import '../../index.css';
import { defaultSkinColor, defaultClothesColor } from '../../constants';
import Character from '../Character';
import MaxWidthWrapper from '../MaxWidthWrapper';
import ControlPane from '../ControlPane';

import {
  bodyOptions,
  headOptions,
  faceOptions,
  accessoryOptions,
  skinColorOptions,
  clothesColorOptions,
} from './CharacterEditor.helpers';
import styles from './CharacterEditor.module.css';

function App() {
  const [body, setBody] = useState(0);
  const [head, setHead] = useState(0);
  const [face, setFace] = useState(0);
  const [accessory, setAccessory] = useState(0);
  const [skinColor, setSkinColor] = useState(defaultSkinColor);
  const [clothesColor, setClothesColor] = useState(defaultClothesColor);

  return (
    <main className={styles.characterEditor}>
      {/* Grayed background for perspective context */}
      <div className={styles.perspectiveDecoration} />
      <MaxWidthWrapper className={styles.maxWidthWrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Create your Character</h1>
          <p className={styles.description}>
            Customize your character's look and style using the controls below.
            What sort of adventure will you embark on?{' '}
          </p>
        </header>
        <div className={styles.controlColumn}>
          <ControlPane
            title='Bodies'
            options={bodyOptions}
            currentOption={body}
            handleSelectOption={setBody}
          />
          <ControlPane
            title='Heads'
            options={headOptions}
            currentOption={head}
            handleSelectOption={setHead}
          />
          <ControlPane
            title='Faces'
            options={faceOptions}
            currentOption={face}
            handleSelectOption={setFace}
          />
          <ControlPane
            title='Accessories'
            options={accessoryOptions}
            currentOption={accessory}
            handleSelectOption={setAccessory}
          />
          <ControlPane
            title='Skin Color'
            options={skinColorOptions}
            currentOption={skinColor}
            handleSelectOption={setSkinColor}
          />
          <ControlPane
            title='Clothing Color'
            options={clothesColorOptions}
            currentOption={clothesColor}
            handleSelectOption={setClothesColor}
          />
        </div>
        <div className={styles.characterWrapper}>
          <Character
            body={body}
            head={head}
            face={face}
            accessory={accessory}
            skinColor={skinColor}
            clothesColor={clothesColor}
          />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

export default App;
