import prismadb from "@/lib/prismadb";
import { ChatverseForm } from "./components/chatverse-form";

interface ChatversecharacterPageProps {
    params: {
        chatverseId: string
    };
};

const ChatVerseCharacterIdPage = async ({
    params
}: ChatversecharacterPageProps) => {
    // Check subscription
    const chatverse = await prismadb.chatVerseCharacter.findUnique({
        where: {
            id: "343ffc22-2588-4a59-b5b5-ce596d687647",
        }
    });
    console.log(chatverse)

    const categories = await prismadb.category.findMany();

    return ( 
        <ChatverseForm initialData={chatverse} categories={categories} />
     );
}
 
export default ChatVerseCharacterIdPage;