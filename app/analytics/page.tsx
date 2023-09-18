import prismadb from "@/lib/prismadb";
import { Separator } from "@/components/ui/separator"
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns"; // Import the format function

const Analytics = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User is not authenticated.");
  }

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

  // Query for the total number of characters
  const totalCharacters = await prismadb.chatVerseCharacter.count();

  const characterWithHighestMessageSize = await prismadb.chatVerseCharacter.findFirst({
    orderBy: {
      messages: {
        _count: "desc", // Order by the count of messages in descending order
      },
    },
  });

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="text-center text-2xl font-bold mb-4">
        Get live analytics of your activity and our application
      </div>

      <div className="text-center text-xl">
        Name: <strong>{user?.firstName} {user?.lastName} </strong> <br />
        Total ChatVerse characters that you built: <strong>{characters.length}</strong>
      </div>

      <center className="list-disc pl-20">
        <h3 className="text-2xl mt-10 mb-4 pl-7 font-semibold">Your ChatVerse AI characters</h3>
        {characters.map((character) => (
          <div key={character.id} className="mb-4">
            <h2 className="text-lg font-semibold">{character.name}</h2>
            <p className="text-sm text-gray-600">
              {character.description} in {character.category.name} category
            </p>
            <p className="text-sm text-gray-600">
              Created At: {format(new Date(character.createdAt), "MMMM dd, yyyy HH:mm")} IST
            </p>
            <p className="text-sm text-gray-600">
              Last Updated: {format(new Date(character.updatedAt), "MMMM dd, yyyy HH:mm")} IST
            </p>
            {/* Render other character details as needed */}
          </div>
        ))}

        {characters.length == 0 ? "None" : ""} <br /> <br /> <br />
      
      <Separator className="bg-primary/10" />


        <div className="text-center text-md pt-5">Total ChatVerse characters present: <strong>{totalCharacters}</strong></div> <br />

        <div>The most interacted chatVerseCharacter: <strong>{characterWithHighestMessageSize?.name} </strong> </div>
      </center>
    </div>
  );
}

export default Analytics;