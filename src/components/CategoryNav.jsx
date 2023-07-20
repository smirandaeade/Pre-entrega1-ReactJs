

const CategoryNav = () => {
    return (
        <div>
            <nav className="h-40 md:h-20">
                <ul className="h-full flex flex-col md:flex-row items-center justify-evenly bg-slate-300 text-center">
                    <div className="bg-slate-400 hover:bg-slate-500 p-2 rounded-lg w-32">
                        <li>
                            <a href="#">Consolas</a>
                        </li>
                    </div>
                    <div className="bg-slate-400 hover:bg-slate-500 p-2 rounded-lg w-32">
                        <li>
                            <a href="#">Juegos</a>
                        </li>
                    </div>
                    <div className="bg-slate-400 hover:bg-slate-500 p-2 rounded-lg w-32">
                        <li>
                            <a href="#">Accesorios</a>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryNav