import { command } from "@repo/core/commands/about";
import Image from "next/image";

export default function Home() {
  console.log(command.options);

  return (
    <div className="bg-gray-50 p-6">
      <h1 className="text-blue-500 font-bold text-2xl">Discord bot</h1>
    </div>
  );
}
