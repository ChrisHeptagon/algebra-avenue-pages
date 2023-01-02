import Image from "next/image"

export const Header = () => {
    return (
        <div>
<nav className=" bg-[#ff0808] dark:bg-[#5c0101] border-black border py-2.5">
    <div className="container flex flex-wrap items-center justify-start mx-auto">
        <a href="/" className="flex items-start" >
            <Image alt="Algebra Avenue Logo" height={64} width={64} src="/images/algebra-avenue.svg" className="" ></Image>
        </a>
        <a href="/" className="flex max-w-fit pl-5">
            <span className=" max-w-fit font-Clearview self-center whitespace-nowrap animate-[bounce_1.2s_infinite] dark:text-white">Algebra</span>
            <span className="pl-1 max-w-fit font-Clearview dark:text-white animate-[bounce_1.4s_infinite] ">Avenue</span>
        </a>
    </div>
</nav>
</div>
)
}