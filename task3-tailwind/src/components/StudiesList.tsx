import { Study } from '../types/study';
import { StudyCard } from './StudyCard';

import styles from './StudiesList.module.scss';

export const StudiesList = ({ studies }: { studies: Study[] }) => {
    return (
        <div className={styles.wrapper}>
            <h1>Studies</h1>
            <div className={styles.studiesList}>
                {studies.map((study) => (
                    <StudyCard study={study} />
                ))}
            </div>
        </div>
    );
};
