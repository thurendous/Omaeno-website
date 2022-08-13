import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'Beginner Friendly',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: <>初心者に優しくシンプルな内容</>,
    },
    {
        title: 'Open Source',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                community baseを目指し、ソースコード <br />
                公開・PR歓迎かつ完全無料
            </>
        ),
    },
    {
        title: 'And More',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                終了証書としてSoulBound Token
                <br />
                を発行する予定
                <br />
                and more to come...
            </>
        ),
    },
]

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
