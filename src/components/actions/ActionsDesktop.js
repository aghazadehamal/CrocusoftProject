"use client";

import Link from "next/link";
import { actions } from "./actionsData";
import { actionsWithtarget } from "./actionsData";

export default function ActionsDesktop() {
  return (
    <div className="text-center py-10 px-10">
      <div className="grid grid-cols-4 gap-6 justify-center items-center">
        {actions.map((action) => (
          <div key={action.id} className="flex flex-col items-center text-center">
            <Link href={`/${action.slug}`} className={`px-4 py-2 text-sm rounded-md ${action.buttonColor}`}>
              {action.buttonText}
            </Link>
            <p className="text-gray-700 mt-3 text-lg">{action.description}</p>
          </div>
        ))}

{actionsWithtarget.map((actionTarget) => (
          <div key={actionTarget.id} className="flex flex-col items-center text-center">
            <Link target="_blank" href={`/${actionTarget.slug}`} className={`px-4 py-2 text-sm rounded-md ${actionTarget.buttonColor}`}>
              {actionTarget.buttonText}
            </Link>
            <p className="text-gray-700 mt-3 text-lg">{actionTarget.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
