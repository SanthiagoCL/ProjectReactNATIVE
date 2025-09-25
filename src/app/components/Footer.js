export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white text-center p-4 mt-auto">
            <p>&copy; {currentYear} Meu App. Todos os direitos reservados.</p>
        </footer>
    );
}