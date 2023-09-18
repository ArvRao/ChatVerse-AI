"use client";

import { ChatVerseCharacter, Message } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

import { ChevronLeft,
         MessagesSquare,
         MoreVertical,
         Edit,
         Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BotAvatar } from "@/components/bot-avatar";
import { useUser } from "@clerk/nextjs";
import { DropdownMenu,
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuItem
    } from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "./ui/toast";

interface ChatHeaderProps {
    character: ChatVerseCharacter & {
        messages: Message[];
        _count: {
            messages: number;
        };
    };
};

export const ChatHeader = ({
    character
}: ChatHeaderProps) => {
    const router = useRouter();
    const { user } = useUser();
    const { toast } = useToast();

    const onDelete = async () => {
        try {
            await axios.delete(`/api/character/${character.id}`)
            toast({
                description: "Success!"
            });
            router.refresh();
            router.push('/home');

        } catch (error) { 
            toast({
                description: "Something went wrong!",
                variant: "destructive"
            })
        }
    }
    return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
        <div className="flex gap-x-2 items-center">
            <Button className="fixed left-6 bg-gray-500 hover:bg-blue-600 text-white rounded-full" onClick={() => router.back()} size="icon" variant="ghost">
                <ChevronLeft className="h-8 w-8" />
            </Button>
            <BotAvatar src={character.src} />
            <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-2">
                    <p className="font-bold">{character.name}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                    <MessagesSquare className="w-3 h-3 mr-1"/>
                    {character._count.messages}
                </div>
                </div>
            <p className="text-xs text-muted-foreground">
                Created By {character.userName}
            </p>
            </div>
        </div>

        {user?.id === character.userId && (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <MoreVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push(`/chatversecharacter/${character.id}`)}>
                        <Edit className="w-4 h-4 mr-2"/>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onDelete}>
                        <Trash className="w-4 h-4 mr-2"/>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        )}
        </div>
    )
}