import thirdwebIcon from "../images/thirdweb.svg";

function Header() {
    return (
      <header className="flex flex-col items-center mb-20 md:mb-20">
        <img
          src={thirdwebIcon}
          alt=""
          className="size-[150px] md:size-[150px]"
          style={{
            filter: "drop-shadow(0px 0px 24px #a726a9a8)",
          }}
        />
  
        <h1 className="text-2xl md:text-6xl font-bold tracking-tighter mb-6 text-zinc-100">
          Nidz - thirdweb SDK
          <span className="text-zinc-300 inline-block mx-1"> + </span>
          <span className="inline-block -skew-x-6 text-violet-500"> vite </span>
        </h1>
  
        <p className="text-zinc-300 text-base">
          Read the{" "}
          <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
            README.md
          </code>{" "}
          file to get started.
        </p>
      </header>
    );
  }

  export default Header