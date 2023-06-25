function NavbarComponent() {
    const ulText = ['Home', 'Contact', 'Profile'];
    return ( 
        <div className="flex h-34 bg-sky-900 py-8 px-32 justify-between">
        <h1 className="text-xl font-bold text-white  cursor-pointer">
            Logo
        </h1>
        <ul className="flex space-x-6">
        {ulText.map((item => {
            return <li className="text-2x1-sm font-bold text-white cursor-pointer">
                {item}
            </li>
        }))}
        </ul>
    </div>
     );
}

export default NavbarComponent;