"use client";

import { Calendar } from "@/components/ui/calendar";
import TeamMembers from "./TeamMembers";

const RightBar = () => {
    return (
        <div className="w-1/4">
            <Calendar />
            <TeamMembers />
        </div>
    );
}

export default RightBar;