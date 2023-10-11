import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <div>
        <div style={{color: "var(--ifm-color-primary)"}} > 主题</div>
        <div style={{color: "var(--ifm-color-primary-dark)"}} > #89bdf0;</div>
        <div style={{color: "var(--ifm-color-primary-darker)"}} > #78aee4;</div>
        <div style={{color: "var(--ifm-color-primary-darkest)"}} > #5fa1e3;</div>
        <div style={{color: "var(--ifm-color-primary-light)"}} > #add4fa;</div>
        <div style={{color: "var(--ifm-color-primary-lighter)"}} > #c4e2ff;</div>
        <div style={{color: "var(--ifm-color-primary-lightest)"}} > #d8ecff;</div>
        <div>颜色：</div>
    </div>
    </Layout>
  );
}
