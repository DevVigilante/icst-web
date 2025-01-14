import React from 'react';
import styles from './styles.module.css';

const AppList = [
    {
        title: 'Android AppStudio',
        Image: "https://raw.githubusercontent.com/Innovative-cst/AndroidAppStudio/main/app/src/main/res/drawable-xxxhdpi/logo.jpg",
        description: "Android AppStudio is an Android app that can generate code for Android apps using a simple drag-and-drop interface.",
        url: "https://github.com/Innovative-CST/AndroidAppStudio",
    },
    {
        title: 'Android Code Editor',
        Image: "/img/android_code_editor.png",
        description: "Android Code Editor is an Android text editor for app development.",
        url: "https://github.com/Innovative-CST/Android-Code-Editor",
    },
    {
        title: 'BlockWebBuilder',
        Image: "/img/dragon_ide.png",
        description: "BlockWebBuilder is designed to code in a simple way using drag-and-drop blocks.",
        url: "https://github.com/Innovative-CST/BlockWebBuilder",
    },
];

function AppCard({ Image, title, description, url }) {
    return (
        <div className={styles.card}>
            <div className={styles.logoContainer}>
                <img className={styles.logoImage} src={Image} alt={`${title} logo`} />
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.buttonLink}>
                    <button className={styles.buttonPrimary}>View on GitHub</button>
                </a>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <div className={styles.cardContainer}>
            {AppList.map((app, idx) => (
                <AppCard key={idx} {...app} />
            ))}
        </div>
    );
}
