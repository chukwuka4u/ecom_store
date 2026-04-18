export default function MainContentArea({ children }: { children: React.ReactNode }) {
    return(
        <main className="flex-grow flex items-center justify-center pt-22 pb-12 px-6 lg:px-8 w-full">
        <div className="w-full max-w-lg lg:max-w-4xl lg:max-w-5xl lg:grid lg:grid-cols-2 lg:bg-[#ffffff] lg:shadow-sm overflow-hidden relative">
            {children}
        </div>
        </main>
    )
}