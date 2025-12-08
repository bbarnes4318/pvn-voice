import React from 'react';
import styles from './KYCForm.module.css';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      />
      <div className={styles.stepIndicators}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`${styles.step} ${index <= currentStep ? styles.completed : ''}`}
          >
            <span className={styles.stepNumber}>{index + 1}</span>
            <span className={styles.stepTitle}>
              {index === 0 && 'Basic Info'}
              {index === 1 && 'Identity'}
              {index === 2 && 'Address'}
              {index === 3 && 'Service'}
              {index === 4 && 'Review'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}; 