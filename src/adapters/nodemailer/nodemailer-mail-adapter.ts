import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f3ba4a236efe06",
      pass: "555aab87452284",
    },
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject , body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Victor Rocha <vtrcvictorrocha332@gmail.com>",
      subject,
      html: body,
    });
  }
}
