import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';
import { CountdownContext } from '../Contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);
    function handleChallengeSuceeded() {
        completChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();

    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} xp </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                            </button>
                        <button
                            type='button'
                            className={styles.challengeSuceededButton}
                            onClick={handleChallengeSuceeded}
                        >
                            Completei
                            </button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeNotActive} >
                        <strong>Finalize a fase para subir de level!</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up!" />
                    Passe para nova fase completando os desafios!!
                </p>

                    </div>
                )
            }
        </div >
    )
} 