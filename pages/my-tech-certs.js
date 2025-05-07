import styles from '../styles/Certs.module.css';   // removed Head import to stay tidy

export default function MyTechCerts() {
  return (
    <div className={styles.timeline}>
      {/* 2025 */}
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>AI Agents Fundamentals</h3>
          <p><strong>Issuer:</strong> Hugging Face<br/>
             <strong>Issued:</strong> Feb 2025</p>
        </div>
      </div>

      {/* 2024 */}
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>GCP Associate Cloud Engineer</h3>
          <p><strong>Issuer:</strong> Google<br/>
             <strong>Issued:</strong> Jun 2024</p>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>OCI Generative AI Certified Professional</h3>
          <p><strong>Issuer:</strong> Oracle<br/>
             <strong>Issued:</strong> Jan 2024</p>
        </div>
      </div>

      {/* 2023 */}
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>GCP Cloud Digital Leader</h3>
          <p><strong>Issuer:</strong> Google<br/>
             <strong>Issued:</strong> Jun 2023</p>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>AWS Certified Cloud Practitioner</h3>
          <p><strong>Issuer:</strong> Amazon Web Services<br/>
             <strong>Issued:</strong> Jan 2023</p>
        </div>
      </div>

      {/* 2022 */}
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>Intermediate SQL for Data Scientists</h3>
          <p><strong>Issuer:</strong> LinkedIn<br/>
             <strong>Issued:</strong> Feb 2022</p>
        </div>
      </div>

      {/* 2021 */}
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>Google Data Analytics</h3>
          <p><strong>Issuer:</strong> Google<br/>
             <strong>Issued:</strong> Jul 2021</p>
        </div>
      </div>

      {/* 2020 */}
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>Microsoft Excel 2016 Introductory</h3>
          <p><strong>Issuer:</strong> Microsoft<br/>
             <strong>Issued:</strong> Dec 2020</p>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h3>Microsoft Office Specialist: Excel 2016</h3>
          <p><strong>Issuer:</strong> Microsoft<br/>
             <strong>Issued:</strong> Dec 2020</p>
        </div>
      </div>
    </div>
  );   // closes return (
}        // closes function
