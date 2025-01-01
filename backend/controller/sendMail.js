const nodemailer = require("nodemailer");
const cron = require('node-cron');
const newPerson = require("../models/newPerson-model")


const sendMail = async (req, res) =>{

    const transporter = await nodemailer.createTransport({
        service : "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "ashishsati27082002@gmail.com",
            pass: 'oxen ylok owwj iqbb'
        }
    });

    
    const sendEmail = async (username, email) => {
        try {
            await transporter.sendMail({
                from: 'ashishsati27082002@gmail.com',
                to: email,
                subject: 'Birthday Greetings!',
                text: `Dear ${username},\n\n On this special day, \n we wish you a very happy birthday! 🎉🎂\n\nBest wishes,\ from \n\n Graphic Era Bhimtal`
            });
            console.log(`Birthday email sent to ${username} at ${email}`);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    // Scheduleing mm hh
    cron.schedule('40 10 * * *', async () => {
        try {
            const today = new Date();
            const users = await newPerson.find({ dob: { $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()), $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) } });
            users.forEach(async (user) => {
                await sendEmail(user.username, user.email);
            });
        } catch (error) {
            console.error('Error fetching users from database:', error);
        }
    });

    // res.status(200).json("success");
}

module.exports = { sendMail };