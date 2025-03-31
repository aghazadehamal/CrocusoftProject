"use client";

import Link from "next/link";
import { actions } from "./actionsData";

export default function ActionsDesktop() {
  return (
    <div className="text-center py-10 px-10">
      <div className="grid grid-cols-4 gap-6 justify-center items-center">
        {actions.map((action) => (
          <div key={action.id} className="flex flex-col items-center text-center">
            <Link href="/choose" className={`px-4 py-2 text-sm rounded-md ${action.buttonColor}`}>
              {action.buttonText}
            </Link>
            <p className="text-gray-700 mt-3 text-lg">{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
