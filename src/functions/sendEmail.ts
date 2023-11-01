import sgMail from '@sendgrid/mail'

interface EmailBody {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
}

export default (emailConfg: EmailBody) => {
    sgMail.setApiKey('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')

    sgMail.send(emailConfg).then(res => {
        console.log("Email sent successfully");
        return res
    }).catch(err => {
        console.log("Error sending email");
        return err;
    })
}