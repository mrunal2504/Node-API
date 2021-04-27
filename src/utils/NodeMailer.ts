import * as nodeMailer from 'nodemailer';
import * as SendGrid from 'nodemailer-sendgrid-transport';

export class NodeMailer {
    private static initializeTransport() {
        return nodeMailer.createTransport(SendGrid({
            auth: {
                api_key: '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'
            }
        }))
    }

    static sendEmail(data: { to: [string], subject: string, html: string }): Promise<any> {
        return NodeMailer.initializeTransport().sendMail({
            from: 'testshh26@gmail.com',
            to: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}





