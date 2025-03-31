"use client";

import Link from "next/link";
import { actions } from "./actionsData";

export default function ActionsMobile() {
  return (
    <div className="text-center py-8 px-4">
      <div className="space-y-6">
        {actions.map((action) => (
          <div key={action.id} className="flex flex-col items-center text-center">
            <Link href="/choose" className={`px-4 py-2 text-sm rounded-md ${action.buttonColor}`}>
              {action.buttonText}
            </Link>
            <p className="text-gray-700 mt-2 text-base">{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
