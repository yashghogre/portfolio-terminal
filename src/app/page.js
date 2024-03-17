import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#181818]">
      <div className="border-2 border-t-8 border-white px-10 pt-10 pb-5 w-[80vw] rounded-lg">
        <p className="text-center font-sans text-red-100">
          ██╗░░░██╗░█████╗░░██████╗██╗░░██╗  ░██████╗░██╗░░██╗░█████╗░░██████╗░██████╗░███████╗
          ╚██╗░██╔╝██╔══██╗██╔════╝██║░░██║  ██╔════╝░██║░░██║██╔══██╗██╔════╝░██╔══██╗██╔════╝
          ░╚████╔╝░███████║╚█████╗░███████║  ██║░░██╗░███████║██║░░██║██║░░██╗░██████╔╝█████╗░░
          ░░╚██╔╝░░██╔══██║░╚═══██╗██╔══██║  ██║░░╚██╗██╔══██║██║░░██║██║░░╚██╗██╔══██╗██╔══╝░░
          ░░░██║░░░██║░░██║██████╔╝██║░░██║  ╚██████╔╝██║░░██║╚█████╔╝╚██████╔╝██║░░██║███████╗
          ░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝  ░╚═════╝░╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═╝░░╚═╝╚══════╝</p>
        <p className="text-center py-5">Welcome to my Portfolio. This is a terminal-style portfolio site.</p>
        <p className="text-center">Enter commands followed by yg to get results.</p>
        <p className="text-center">Try writing <span className='bg-slate-700 rounded-md px-1'>yg start</span> to get started</p>
        <div className="flex">
          <p>user@localhost~ $</p>
          <input className="bg-[#181818] focus:outline-none ml-2 w-[80%]" autoFocus spellCheck='false' />
        </div>
      </div>
    </main>
  );
}
