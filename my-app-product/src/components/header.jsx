function HeaderComponent() {
    return ( 
        <div className="flex h-96 bg-sky-900 py-8 px-32">
        <div className="flex w-full h-full flex-col space-y-7">
            <p className="text-5xl text-white">Persembahan Istimewa! Bersama kami</p>
            <p className="text-sm text-white text-ellipsis">Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami. Tingkatkan gaya hidupmu dengan
            koleksi terbaru dan hemat lebih banyak! Segera kunjungi toko kami sebelum minggu ini berakhir. Jangan lewatkan
            kesempatan emas ini untuk berbelanja cerdas!</p>
        </div>
        <div className="w-full h-full justify-center hidden lg:flex">
            <img className="h-96" src="src\assets\image-1.png" alt="img"/>
        </div>
    </div>
     );
}

export default HeaderComponent;