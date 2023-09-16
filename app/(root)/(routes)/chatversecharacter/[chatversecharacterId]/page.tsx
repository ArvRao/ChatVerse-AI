import prismadb from "@/lib/prismadb";
import { ChatverseForm } from "./components/chatverse-form";
import { auth } from "@clerk/nextjs";

interface ChatversecharacterPageProps {
    params: {
        chatversecharacterId: string;
    };
};

const ChatVerseCharacterIdPage = async ({
    params
}: ChatversecharacterPageProps) => {
    const { userId } = auth();
    console.log("chatverse:: ", params.chatversecharacterId);
    // Check subscription

    const chatverse = await prismadb.chatVerseCharacter.findUnique({
        where: {
            id: params.chatversecharacterId,
            // userId,
        }
    });

    const categories = await prismadb.category.findMany();

    return ( 
        <ChatverseForm initialData={chatverse} categories={categories} />
     );
}
 
export default ChatVerseCharacterIdPage;