import React from 'react'

import Container from './container'
import * as styles from './application-form.module.css'

const ApplicationForm = () => (
    <Container as="div">
        <form name="applicationForm" method="POST" netlify className={styles.container}>
            <h2>Join our Team</h2>
            <label>Your Name: <input type="text" name="name" /></label>
            <label>Your Email: <input type="email" name="email" /></label>
            <button type="submit">Send</button>
        </form>
    </Container>
)

export default ApplicationForm
