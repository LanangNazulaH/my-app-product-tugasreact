import ItemComponent from "./item";

function UtamaComponent() {
    return ( 
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>  
            </div>
        </>
     );
}

export default UtamaComponent;