import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className={clsx('hero__title', styles.hero__title)}>
                    {siteConfig.title}
                </h1>
                <p className={clsx('hero__subtitle', styles.hero__subtitle)}>
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link className={clsx('button button--secondary button--lg', styles.ctaButton)} to="/download">
                        Download
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} | Innovative Software Creations`}
            description="Discover cutting-edge software and download now.">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
