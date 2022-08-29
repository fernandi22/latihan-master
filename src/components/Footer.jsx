const Footer = () => {
    return (
        <footer className="mt-auto text-center text-muted bg-dark">
            <div className="container">
                <div className="text-center p-4 text-light">
                        Copyright &copy; {new Date().getFullYear()}
                </div>
            </div>
        </footer>  
    );
}

export default Footer;