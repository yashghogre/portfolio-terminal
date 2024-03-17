import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#181818]">
      <div className="border-2 border-t-8 border-white p-10 w-[80vw] rounded-lg">
        <p className="text-center">
          ██╗░░░██╗░█████╗░░██████╗██╗░░██╗  ░██████╗░██╗░░██╗░█████╗░░██████╗░██████╗░███████╗
          ╚██╗░██╔╝██╔══██╗██╔════╝██║░░██║  ██╔════╝░██║░░██║██╔══██╗██╔════╝░██╔══██╗██╔════╝
          ░╚████╔╝░███████║╚█████╗░███████║  ██║░░██╗░███████║██║░░██║██║░░██╗░██████╔╝█████╗░░
          ░░╚██╔╝░░██╔══██║░╚═══██╗██╔══██║  ██║░░╚██╗██╔══██║██║░░██║██║░░╚██╗██╔══██╗██╔══╝░░
          ░░░██║░░░██║░░██║██████╔╝██║░░██║  ╚██████╔╝██║░░██║╚█████╔╝╚██████╔╝██║░░██║███████╗
          ░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝  ░╚═════╝░╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═╝░░╚═╝╚══════╝</p>
          <p className="text-center">Welcome to my Portfolio. This is a terminal-style portfolio Site.</p>
          <input className="bg-[#101010]" />
      </div>
    </main>
  );
}
