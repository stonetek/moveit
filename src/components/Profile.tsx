import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="icons/iza.jpg" alt="Não tinha foto minha" />
            <div>
                <strong> Izabelly Monteiro </strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}