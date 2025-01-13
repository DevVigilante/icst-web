import React from 'react';
import styles from './styles.module.css';

const AppList = [
  {
    title: 'Android AppStudio',
    Image: "https://raw.githubusercontent.com/Innovative-cst/AndroidAppStudio/main/app/src/main/res/drawable-xxxhdpi/logo.jpg",
    description: (
      <>
        Android AppStudio is an android app that can generate code of android app using simple drag drop interface.
      </>
    ),
    url: "https://github.com/Innovative-CST/AndroidAppStudio",
  },
  {
    title: 'Android Code Editor',
    Image: "/img/android_code_editor.png",
    description: (
      <>
        Android Code Editor is an Android text editor for app development.
      </>
    ),
    url: "https://github.com/Innovative-CST/Android-Code-Editor",
  },
  {
    title: 'BlockWebBuilder',
    Image: "/img/dragon_ide.png",
    description: (
      <>
        BlockWebBuilder is designed to code in a simple way by drag and drop blocks.
      </>
    ),
    url: "https://github.com/Innovative-CST/BlockWebBuilder",
  },
];

function App({ Image, title, description, url }) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img className={styles.logoimg} srcSet="" src={Image} alt="" />
      </div>
      <div style={{ padding: '0.8em' }}>
        <div style={{ fontWeight: 'bold', fontSize: 'larger' }}>{title}</div>
        <div style={{ fontWeight: 'lighter' }}>{description}</div>
      </div>
      <div className={styles.divider}></div>
      <div style={{ display: 'grid', justifyContent: 'right' }}>
        <a href={url}>
            <button className={styles.buttonPrimary} style={{ margin: '8px' }}>
                <span>GitHub</span>
            </button>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.cardParent}>
      {AppList.map((props, idx) => (
        <App key={idx} {...props} />
      ))}
    </div>
  );
}