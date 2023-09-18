import { Navbar } from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { currentUser, useUser } from "@clerk/nextjs";
import { format } from "date-fns"; // Import the format function

const Analytics = async () => {
    const user = await currentUser();

    if (!user) {
        throw new Error("User is not authenticated.");
    }

    // const characters = await prismadb.chatVerseCharacter.findMany({
    //     where: {
    //         userId: user.id,
    //     },
    // });

    const characters = await prismadb.chatVerseCharacter.findMany({
        where: {
          userId: user.id,
        },
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
      });

    return (
        <div>
            <div className="pl-10 pt-2 text-2xl">
                Get instant analytics of your activity<br /> <br />
                Name: {user?.firstName} {user?.lastName} <br />
                Total ChatVerse characters that you built: {characters.length}
                <h3 className="text-2xl p-10">Your AI characters
                    <ul>
                        {characters.map((character) => (
                            <li key={character.id}>
                                <h2 className="text-lg">{character.name} - {character.description} in {character.category.name} category</h2>
                                <p className="text-sm">Created At: {format(new Date(character.createdAt), "MMMM dd, yyyy HH:mm")}</p>
                                {/* Render other character details as needed */}
                                {/* <h2>{}</h2> */}
                            </li>
                        ))}
                    </ul>
                </h3>
            </div>
        </div>
    );
}

export default Analytics;