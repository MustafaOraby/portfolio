

const Footer = () => {
    return (
        <footer className=" bg-primary dark:bg-gray-800 text-white py-2 border-2 rounded-t-[10px] flex justify-center items-center flex-col ">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;