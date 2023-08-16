import { MailMinus, Linkedin, X } from "lucide-react";

const Contact = () => {
    return (
        <div className="text-lg p-10 pt-15">
            Greetings! Im Arvind, a software engineer with a profound enthusiasm for delving deeper into the realms of Machine Learning and Artificial Intelligence. Ive  crafted this application that brings users the exhilarating opportunity to engage in lifelike conversations with renowned real-world personalities. <br />

            Ive poured my heart and soul into creating an experience that seamlessly bridges the virtual world with reality, offering users a unique chance to interact with their favorite stars. Your thoughts and feedback are immensely valuable to me as I continuously strive to enhance both the utility and enjoyment factor of this application.

            I wholeheartedly invite you to explore this creation and would greatly appreciate any insights and feedback you might have to offer. Im excited to connect and discuss how we can elevate this experience together. <br />
            React out to me at:
            <br />
            <div className="flex items-center pl-20">
                <a href="mailto:arvindrao.759@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MailMinus className="h-7 w-7 mr-2" />
                </a> <br />
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-7 w-7 mr-2" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <X className="h-7 w-7 mr-2" />
                </a>
            </div>
        </div>
    );
}

export default Contact;