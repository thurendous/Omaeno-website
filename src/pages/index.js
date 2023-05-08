import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/blog"
                    >
                        Knowledge
                    </Link>
                </div>
                <p className="hero__subtitle"></p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        Solidity
                    </Link>
                </div>
                <p className="hero__subtitle"></p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/category/ethersjs"
                    >
                        Ethers.js
                    </Link>
                </div>
                <p className="hero__subtitle"></p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/unitConverter"
                    >
                        Tool - Unit Converter
                    </Link>
                </div>
                {/* <p className="hero__subtitle"></p> */}
                {/* <div className={styles.buttons}>
                    <Link
                        className="button button--warning button--lg"
                        to="https://omaeno-new-year-card.vercel.app/"
                    >
                        新年のメッセージ＋スペシャル年賀状NFT
                    </Link>
                </div> */}
            </div>
        </header>
    )
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Layout
            title={`Hello Web3 by ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
