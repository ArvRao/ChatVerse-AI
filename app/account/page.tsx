import { currentUser, useUser } from "@clerk/nextjs";

export default async function Account() {
    const user = await currentUser();
  return (
    <div className="container mx-auto mt-8 p-4">Hello {user?.firstName} {user?.lastName}</div>
  )
}
 