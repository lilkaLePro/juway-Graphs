
export default function Layout({children} : {children : React.ReactNode}) {

    return (
        <div   className="max-w-6xl m-auto border flex flex-col">
            <div className="text-center">
                {/* top bar */}
                ceci est la top bar
            </div>
            <div>
                {children}
            </div>
            <div>
                {/*  */}
            </div>
        </div>
    )
}