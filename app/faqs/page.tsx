import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-xl">What is this application about?</AccordionTrigger>
          <AccordionContent>
            ChatVerse AI lets you chat, learn and play with any popular characters. We have a diverse range of AI Characters from  real-world icons, fictional characters, companions, coaches & counselors, assistants, game characters, knowledge gurus and more...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-xl">What are AI characters?</AccordionTrigger>
          <AccordionContent>
          AI characters are digital AI avatars or chatbots that can chat with you on various topics. Each of them specializes in one of them. Assistant is the default character that is generally helpful on various topics.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-xl">Does ChatVerse look at or store messages from users or responses from chatbots?</AccordionTrigger>
          <AccordionContent>
          No. We do not look at or store any messages whatsoever. Please see our Privacy Policy for more details.
            It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold text-xl">Can I add my own AI characters?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos; can create your own characters by clicking at &apos;Create&apos; icon in the side bar after you login to your account!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold text-xl">How much is the premium subscription for adding custom AI characters?</AccordionTrigger>
          <AccordionContent>
            It start&apos;s with Rs. 100
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  