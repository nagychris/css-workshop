import { Study } from '../types/study';

import styles from './StudyCard.module.scss';

export const StudyCard = ({ study }: { study: Study }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContentWrapper}>
                <h1 className={styles.cardContentLabel}>Patient ID</h1>
                <p className={styles.cardContentValue}>{study.patientId}</p>
            </div>
            <div className={styles.cardContentWrapper}>
                <h1 className={styles.cardContentLabel}>Name</h1>
                <p className={styles.cardContentValue}>{study.name}</p>
            </div>
            <div className={styles.cardContentWrapper}>
                <h1 className={styles.cardContentLabel}>Analysis</h1>
                <p className={styles.cardContentValue}>{study.analysis}</p>
            </div>
            <img className={styles.cardIcon} src="./chevron.svg" />
        </div>
    );
};
