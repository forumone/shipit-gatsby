import React from 'react'

import Container from './container'
import * as styles from './application-form.module.css'

const ApplicationForm = () => (
    <Container as="div">
        <form name="application-form" method="POST" data-netlify="true" className={styles.container}>
            <h2>Join our Team</h2>
            Your Name: <input type="text" name="name" />  &nbsp;
            Your Email: <input type="email" name="email" />
            <button type="submit">Send</button>
        </form>
    </Container>
)

export default ApplicationForm
